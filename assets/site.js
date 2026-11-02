(function () {
  const DE = {
    exit: "Ausfahrt 2014",
    tagline: "The Crew (2014) läuft wieder auf der PS4, offline auf deinem eigenen Server.",
    laneVideo: "Video ansehen",
    laneStatus: "Stand der Fahrt",
    fan: "Fanprojekt. Keine Verbindung zu Ubisoft, nicht von Ubisoft unterstützt.",
    videoTitle: "So läuft es",
    videoText: "Aufgenommen auf meiner eigenen PS4: Das Spiel startet, findet meinen Server im Heimnetz und setzt mich zurück in die Welt.",
    videoNote: "Wird erst nach dem Klick von YouTube geladen.",
    statusTitle: "Wo die Fahrt steht",
    statusText: "Das Spiel startet, die Welt lädt und dein Fortschritt bleibt erhalten. Die restlichen Serverfunktionen baue ich eine nach der anderen nach.",
    m1: "Wieder auf der Straße",
    m1t: "Das Spiel startet und spricht mit meinem Server statt mit dem abgeschalteten offiziellen.",
    m2: "Rein in die Welt",
    m2t: "Anmeldung, freies Fahren und der Story-Einstieg funktionieren. Nach jedem Event wird gespeichert.",
    m3: "Missionen und Belohnungen",
    m3t: "Missionen zahlen aus, du steigst auf und schaltest Perks frei.",
    m4: "Autos und Tuning",
    m4t: "Autokauf beim Händler und Straßen-Specs funktionieren. Als Nächstes kommen Performance-Teile.",
    here: "Du bist hier",
    m5: "Alle Aktivitäten",
    m5t: "Polizeiverfolgungen, Summit-Events, Fraktionen und die übrigen Missionsarten.",
    m6: "Open-Source-Release",
    m6t: "Server, Konsolen-Patch und eine Schritt-für-Schritt-Anleitung, kostenlos zum Download.",
    m7: "Server auf der Konsole",
    m7t: "Später: alles läuft auf der PS4 selbst, ohne zweites Gerät.",
    worksTitle: "Läuft heute, getestet auf meiner PS4",
    w1: "Startet ohne die offiziellen Server",
    w2: "Story-Einstieg und freies Fahren",
    w3: "Missionen, Belohnungen, Level-ups und Perks",
    w4: "Dein erstes Auto beim Händler kaufen",
    w5: "Eine Garage, die deine Autos behält",
    w6: "Straßen-Specs beim Tuner",
    w7: "Fortschritt auf dem Server, ein Spielstand pro PS4-Profil",
    w8: "Einstellungen auf der Konsole, pro Profil",
    w9: "Die Konsole findet den Server im Netzwerk von selbst",
    w10: "Unechte Online-Fahrer an oder aus, wie du willst",
    testTitle: "Gebaut, wartet auf den ersten Test",
    t1: "Kein Rauswurf mehr beim Stillstehen",
    t2: "Mehrere Konsolen an einem Heimserver",
    benchTitle: "In der Werkstatt",
    b1: "Performance-Teile",
    b2: "Polizeiverfolgungen",
    b3: "Summit-Events",
    b4: "Fraktionen",
    b5: "Die übrigen Missionsarten",
    shotsTitle: "Von unterwegs",
    shotsEmpty: "Screenshots von meiner PS4 kommen bald hierher. Bis dahin zeigt das Video das Spiel in Bewegung.",
    needTitle: "Was du brauchst",
    n1: "Dein eigenes The Crew für die PS4",
    n1t: "Getestet mit der europäischen Version 1.21 (CUSA00161). Andere Regionen sind geplant.",
    n2: "Eine PS4, die Homebrew-Spielpatches lädt",
    n2t: "Der Patch schickt das Spiel zu deinem Server.",
    n3: "Einen Computer im selben Netzwerk",
    n3t: "Windows, macOS oder Linux mit Python. Er betreibt den Server, während du spielst.",
    needNote: "Ich verteile keine Spieldateien. Du bringst dein eigenes Spiel mit; das Projekt enthält nur eigenen Code. Mit dem Open-Source-Release kommt eine Schritt-für-Schritt-Anleitung.",
    faqTitle: "Fragen",
    q1: "Brauche ich PS Plus?",
    a1: "Nein. Das Spiel spricht nur mit deinem eigenen Server.",
    q2: "Wo wird mein Fortschritt gespeichert?",
    a2: "Auf deinem Server, ein Spielstand pro PS4-Profil. Deine Spieleinstellungen bleiben auf der Konsole.",
    q3: "Kann ich mit Freunden spielen?",
    a3: "Mehrere Konsolen in einem Haushalt können sich einen Server teilen; dieser Teil wartet noch auf seinen ersten Test. Online-Spiel über das Internet ist noch nicht geplant.",
    q4: "Wann kann ich es herunterladen?",
    a4: "Sobald das Spiel komplett spielbar ist und die Anleitung steht. Ein Datum gibt es noch nicht. Neue Videos auf dem YouTube-Kanal zeigen jeden Schritt.",
    channel: "YouTube-Kanal",
    legal: "The Crew Reborn ist ein Fanprojekt von Knutwurst. The Crew ist eine Marke von Ubisoft Entertainment. PlayStation und PS4 sind Marken von Sony Interactive Entertainment. Diese Seite steht in keiner Verbindung zu Ubisoft oder Sony und wird von ihnen nicht unterstützt.",
  };

  const nodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const EN = {};
  nodes.forEach((n) => (EN[n.dataset.i18n] = n.textContent));
  const C = window.CONTENT || { videos: [], screenshots: [] };
  let lang = "en";

  function stored() {
    try { return localStorage.getItem("lang"); } catch (e) { return null; }
  }

  function setLang(next) {
    lang = next;
    const dict = lang === "de" ? DE : EN;
    nodes.forEach((n) => { if (dict[n.dataset.i18n]) n.textContent = dict[n.dataset.i18n]; });
    document.documentElement.lang = lang;
    document.getElementById("lang").dataset.active = lang;
    renderGallery();
    try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }
  }

  function showVideo(v, autoplay) {
    const player = document.getElementById("player");
    if (!autoplay) {
      document.getElementById("facadeTitle").textContent = v.title;
      document.getElementById("facade").onclick = () => showVideo(v, true);
      return;
    }
    const f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(v.id) + "?autoplay=1&rel=0";
    f.title = v.title;
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    player.replaceChildren(f);
  }

  function renderPlaylist() {
    if (!C.videos.length) {
      document.getElementById("video").hidden = true;
      return;
    }
    showVideo(C.videos[0], false);
    if (C.videos.length < 2) return;
    const list = document.getElementById("playlist");
    C.videos.forEach((v) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = v.title;
      b.onclick = () => showVideo(v, true);
      li.append(b);
      list.append(li);
    });
    list.hidden = false;
  }

  function renderGallery() {
    const g = document.getElementById("gallery");
    g.replaceChildren();
    document.getElementById("galleryEmpty").hidden = C.screenshots.length > 0;
    C.screenshots.forEach((s) => {
      const fig = document.createElement("figure");
      const img = document.createElement("img");
      img.src = s.src;
      img.alt = s[lang] || s.en || "";
      img.loading = "lazy";
      const cap = document.createElement("figcaption");
      cap.textContent = s[lang] || s.en || "";
      fig.append(img, cap);
      g.append(fig);
    });
  }

  document.getElementById("lang").addEventListener("click", () => setLang(lang === "de" ? "en" : "de"));
  renderPlaylist();
  const asked = new URLSearchParams(location.search).get("lang");
  const saved = asked === "de" || asked === "en" ? asked : stored();
  setLang(saved || ((navigator.language || "").toLowerCase().startsWith("de") ? "de" : "en"));
})();
