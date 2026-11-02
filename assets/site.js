(function () {
  const DE = {
    tagline: "The Crew (2014) läuft wieder auf PS4 und PS5. Ohne Ubisoft-Server und ohne PS Plus, nur mit deiner Konsole und einem kleinen Server bei dir zu Hause.",
    ctaVideo: "Video ansehen",
    ctaStatus: "Zum aktuellen Stand",
    fan: "Fanprojekt. Kein offizielles Produkt von Ubisoft.",
    videoTitle: "Das Spiel in Aktion",
    videoText: "Aufgenommen auf meiner PS4: Das Spiel startet, verbindet sich mit meinem Server im Heimnetz und schickt mich zurück nach Detroit.",
    videoNote: "Das Video wird erst nach dem Klick von YouTube geladen.",
    statusTitle: "Aktueller Stand",
    statusText: "Das Spiel startet, die Welt lädt und dein Fortschritt wird gespeichert. Die restlichen Serverfunktionen baue ich Schritt für Schritt nach.",
    m1: "Zurück auf der Straße",
    m1t: "Das Spiel startet und verbindet sich mit meinem Server statt mit den abgeschalteten Ubisoft-Servern.",
    m2: "Die offene Welt",
    m2t: "Anmelden, frei über die ganze Karte fahren, nach jedem Event wird gespeichert.",
    m3: "Missionen und Belohnungen",
    m3t: "Story-Missionen bringen Geld und Erfahrung, du steigst auf und schaltest Perks frei.",
    m4: "Autos und Tuning",
    m4t: "Autos beim Händler kaufen und Straßen-Specs beim Tuner funktionieren. Als Nächstes sind die Performance-Teile dran.",
    here: "Aktuell",
    m3b: "Die komplette Story",
    m3bt: "Sobald Autos und Tuning stehen, lässt sich die Kampagne bis zum Ende durchspielen.",
    m5: "Alle Aktivitäten",
    m5t: "Polizeiverfolgungen, Summit-Events, Fraktionen und die restlichen Missionstypen.",
    m6: "Open-Source-Release",
    m6t: "Server, Konsolen-Patch und eine Schritt-für-Schritt-Anleitung, kostenlos zum Download.",
    m7: "Server direkt auf der Konsole",
    m7t: "Später läuft alles auf der PS4 selbst, ganz ohne zweites Gerät.",
    worksTitle: "Funktioniert schon (auf meiner PS4 getestet)",
    w1: "Spielstart ohne die offiziellen Server",
    w2: "Story-Missionen und freies Fahren",
    w3: "Missionen, Belohnungen, Level-ups und Perks",
    w4: "Autos beim Händler kaufen",
    w5: "Garage mit all deinen Autos",
    w6: "Straßen-Specs beim Tuner",
    w7: "Spielstand auf dem Server, getrennt pro PS4-Profil",
    w8: "Einstellungen auf der Konsole, getrennt pro Profil",
    w9: "Die Konsole findet den Server im Heimnetz automatisch",
    w10: "Simulierte Mitspieler lassen sich ein- und ausschalten",
    testTitle: "Fertig, aber noch nicht getestet",
    t1: "Kein automatischer Rauswurf mehr bei Inaktivität",
    t2: "Mehrere Konsolen an einem Server",
    benchTitle: "In Arbeit",
    b1: "Performance-Teile",
    b2: "Polizeiverfolgungen",
    b3: "Summit-Events",
    b4: "Fraktionen",
    b5: "Die restlichen Missionstypen",
    shotsTitle: "Screenshots",
    shotsText: "Szenen aus der ganzen Spielwelt. Genau so sieht es auch auf deinem eigenen Server aus.",
    needTitle: "Das brauchst du",
    n1: "Dein eigenes The Crew für PS4",
    n1t: "Disc oder Download, europäische Version 1.21 (CUSA00161). Weitere Regionen sind geplant.",
    n2: "Eine PS4 oder PS5, die Homebrew-Patches laden kann",
    n2t: "Der Patch leitet das Spiel auf deinen Server um.",
    n3: "Einen Rechner im selben Netzwerk",
    n3t: "Windows, macOS oder Linux mit Python. Darauf läuft der Server, während du spielst.",
    needNote: "Spieldateien gibt es hier nicht. Du brauchst dein eigenes Exemplar; das Projekt enthält ausschließlich eigenen Code. Mit dem Open-Source-Release kommt auch eine Schritt-für-Schritt-Anleitung.",
    faqTitle: "Häufige Fragen",
    q1: "Brauche ich PS Plus?",
    a1: "Nein. Das Spiel verbindet sich nur mit deinem eigenen Server.",
    q5: "Läuft es auch auf der PS5?",
    a5: "Ja. Die PS5 startet die PS4-Version per Abwärtskompatibilität, mit demselben Patch und demselben Server.",
    q2: "Wo wird mein Spielstand gespeichert?",
    a2: "Auf deinem Server, getrennt pro PS4-Profil. Deine Spieleinstellungen bleiben auf der Konsole.",
    q3: "Kann ich mit Freunden spielen?",
    a3: "Mehrere Konsolen im selben Haushalt können sich einen Server teilen. Das ist gebaut, aber noch nicht getestet. Online über das Internet zu spielen ist vorerst nicht geplant.",
    q4: "Wann kann ich es herunterladen?",
    a4: "Sobald alle Aktivitäten laufen und die Anleitung fertig ist. Einen Termin gibt es noch nicht. Auf meinem YouTube-Kanal zeige ich jeden Fortschritt.",
    channel: "YouTube-Kanal",
    legal: "The Crew Reborn ist ein Fanprojekt von Knutwurst. The Crew ist eine Marke von Ubisoft Entertainment, PlayStation und PS4 sind Marken von Sony Interactive Entertainment. Spiel-Screenshots © Ubisoft Entertainment. Diese Seite steht in keiner Verbindung zu Ubisoft oder Sony.",
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

  function showVideo(v, play) {
    if (!play) {
      document.getElementById("facadeTitle").textContent = v.title;
      document.getElementById("facade").onclick = () => showVideo(v, true);
      return;
    }
    const f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(v.id) + "?autoplay=1&rel=0";
    f.title = v.title;
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    document.getElementById("player").replaceChildren(f);
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

  const lb = document.getElementById("lightbox");
  function openShot(s) {
    document.getElementById("lbImg").src = s.src;
    document.getElementById("lbImg").alt = s[lang] || s.en;
    document.getElementById("lbCap").textContent = s[lang] || s.en;
    lb.hidden = false;
    document.getElementById("lbClose").focus();
  }
  function closeShot() { lb.hidden = true; }
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.id === "lbClose") closeShot(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) closeShot(); });

  function renderGallery() {
    const g = document.getElementById("gallery");
    g.replaceChildren();
    document.getElementById("shots").hidden = C.screenshots.length === 0;
    C.screenshots.forEach((s) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "shot";
      const img = document.createElement("img");
      img.src = s.src;
      img.alt = s[lang] || s.en || "";
      img.loading = "lazy";
      const cap = document.createElement("span");
      cap.textContent = s[lang] || s.en || "";
      b.append(img, cap);
      b.onclick = () => openShot(s);
      g.append(b);
    });
  }

  document.getElementById("lang").addEventListener("click", () => setLang(lang === "de" ? "en" : "de"));
  renderPlaylist();
  const asked = new URLSearchParams(location.search).get("lang");
  const saved = asked === "de" || asked === "en" ? asked : stored();
  setLang(saved || ((navigator.language || "").toLowerCase().startsWith("de") ? "de" : "en"));
})();
