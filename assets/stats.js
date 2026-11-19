/* The project's own page counter (Worker crewreborn-stats on Cloudflare).
   Sends, without cookies, without storing anything on the device and without any id that lives longer than the
   page: one "view" (page, referring host, utm_* tags, page and browser language, window width bucket, light or
   dark mode), clicks on downloads (data-click), outside links, videos and the language switch, and one "end" when
   the page is left (seconds visible, deepest scroll position, sections that came into view). Country, region and
   city come from Cloudflare's view of the connection; the IP address is not stored.
   Opening a page with #toggle-stats switches counting off (or on again) for this browser: the only thing ever
   stored, and only on that explicit request. Written in ES5 for old console browsers. */
(function () {
  var ENDPOINT = "https://crewreborn-stats.knutwurst.workers.dev/hit";
  var skip = false;
  try {
    if (location.hash === "#toggle-stats") {
      var off = localStorage.getItem("skipstats") === "t" || localStorage.getItem("skipgc") === "t";
      if (off) { localStorage.removeItem("skipstats"); localStorage.removeItem("skipgc"); } else { localStorage.setItem("skipstats", "t"); }
      alert(off ? "Statistics: this browser is counted again." : "Statistics: this browser is no longer counted.");
    }
    skip = localStorage.getItem("skipstats") === "t" || localStorage.getItem("skipgc") === "t";
  } catch (e) { /* storage blocked: count */ }
  if (skip || location.hostname !== "thecrewreborn.github.io") return;

  var root = document.documentElement;
  var notFound = root.getAttribute("data-stats") === "404";

  function hit(type) {
    var w = window.innerWidth || root.clientWidth || 0;
    var h = {
      type: type,
      page: location.pathname,
      lang: root.lang || undefined,
      blang: (navigator.language || "").toLowerCase() || undefined,
      screen: w < 480 ? "xs" : w < 768 ? "sm" : w < 1280 ? "md" : "lg"
    };
    if (window.matchMedia) h.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    return h;
  }
  function send(h) {
    var body = JSON.stringify(h);
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(ENDPOINT, body)) return;
      var x = new XMLHttpRequest();
      x.open("POST", ENDPOINT, true);
      x.send(body);
    } catch (e) { /* counting never breaks the page */ }
  }
  function named(type, name) {
    var h = hit(type);
    h.event = String(name).replace(/[^A-Za-z0-9_.-]/g, "-").slice(0, 60);
    send(h);
  }
  function param(name) {
    var m = new RegExp("[?&]" + name + "=([^&#]*)").exec(location.search);
    try { return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : undefined; } catch (e) { return undefined; }
  }

  // The page view (on load, so the site's own script has set the language).
  function view() {
    var h = hit(notFound ? "notfound" : "view");
    if (!notFound) {
      if (document.referrer) {
        var a = document.createElement("a");
        a.href = document.referrer;
        if (a.hostname && a.hostname !== location.hostname) h.referrer = a.hostname;
      }
      h.utm_source = param("utm_source");
      h.utm_medium = param("utm_medium");
      h.utm_campaign = param("utm_campaign");
    }
    send(h);
  }
  if (document.readyState === "complete") view(); else window.addEventListener("load", view);

  // Where a link leads, as a short name; null for links inside the page.
  function target(a) {
    var href = a.getAttribute("href") || "";
    if (/^mailto:/i.test(href)) return "mail";
    if (!a.hostname || href.charAt(0) === "#") return null;
    var host = a.hostname.replace(/^www\./, "");
    var path = a.pathname || "";
    if (host === location.hostname) {
      if (/^\/?contact/.test(path)) return "contact";
      if (/^\/?why/.test(path)) return "why";
      return null;
    }
    if (host === "github.com") {
      if (/\/releases/.test(path)) return "github-releases";
      if (/\/issues/.test(path)) return "github-issues";
      return "github";
    }
    if (host === "ko-fi.com") return "kofi";
    if (/(^|\.)youtube\.com$|^youtu\.be$/.test(host)) return "youtube";
    return "other";
  }
  function onClick(e) {
    if (e.type === "auxclick" && e.button !== 1) return;
    for (var el = e.target; el && el.getAttribute; el = el.parentNode) {
      var name = el.getAttribute("data-click");
      if (name) { named("click", name); return; }
      if (el.id === "lang") {
        // the page's own handler switches the language in this same click
        setTimeout(function () { named("lang", root.lang || "unknown"); }, 0);
        return;
      }
      if (el.tagName === "A") {
        var t = target(el);
        if (t) named("out", t);
        return;
      }
    }
  }
  document.addEventListener("click", onClick, true);
  document.addEventListener("auxclick", onClick, true);

  // A started video (the site's player fires this when a click loads it from YouTube).
  document.addEventListener("tcr:video", function (e) { if (e.detail) named("video", e.detail); });

  // Time on the page while it is visible, deepest scroll position, sections that came into view.
  var visibleMs = 0;
  var shownAt = document.visibilityState === "hidden" ? 0 : Date.now();
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") { if (shownAt) visibleMs += Date.now() - shownAt; shownAt = 0; } else if (!shownAt) shownAt = Date.now();
  });
  var deepest = 0;
  function measure() {
    var doc = root.scrollHeight || 1;
    var seen = (window.pageYOffset || root.scrollTop || 0) + (window.innerHeight || 0);
    var pct = Math.min(100, Math.round((seen / doc) * 100));
    if (pct > deepest) deepest = pct;
  }
  window.addEventListener("scroll", measure, { passive: true });
  window.addEventListener("load", measure);
  var reached = {};
  if (window.IntersectionObserver) {
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) { reached[entries[i].target.id] = 1; io.unobserve(entries[i].target); }
      }
    }, { rootMargin: "0px 0px -40% 0px" });
    var secs = document.querySelectorAll("section[id]");
    for (var s = 0; s < secs.length; s++) io.observe(secs[s]);
  }
  var ended = false;
  window.addEventListener("pagehide", function () {
    if (ended) return;
    ended = true;
    if (shownAt) visibleMs += Date.now() - shownAt;
    measure();
    var h = hit("end");
    h.duration = Math.round(visibleMs / 1000);
    h.scroll = deepest;
    h.sections = [];
    for (var id in reached) if (reached.hasOwnProperty(id)) h.sections.push(id);
    send(h);
  });
})();
