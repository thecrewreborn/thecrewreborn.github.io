(function () {
  const DE = {
    tagline: "The Crew (2014) läuft wieder auf PS4 und PS5. Ohne Ubisoft-Server und ohne PS Plus, nur mit deiner Konsole und einem kleinen Server bei dir zu Hause.",
    ctaVideo: "Video ansehen",
    ctaStatus: "Zum aktuellen Stand",
    fan: "Fanprojekt. Kein offizielles Produkt von Ubisoft.",
    videoTitle: "Das Spiel in Aktion",
    videoText: "Aufgenommen im November 2026 auf einer PS4, mit einem neuen Spielstand. Vier Folgen in der Reihenfolge der Story, vom Prolog bis zum ersten getunten Auto.",
    videoAll: "Die ganze Serie auf YouTube",
    videoNote: "Das Video wird erst nach dem Klick von YouTube geladen.",
    statusTitle: "Aktueller Stand",
    statusText: "Das Spiel startet, die Welt lädt und der Fortschritt wird gespeichert. Die restlichen Serverfunktionen folgen Schritt für Schritt.",
    m1: "Zurück auf der Straße",
    m1t: "Das Spiel startet und verbindet sich mit dem Reborn-Server statt mit den abgeschalteten Ubisoft-Servern.",
    m2: "Die offene Welt",
    m2t: "Anmelden, frei über die ganze Karte fahren, nach jedem Event wird gespeichert.",
    m3: "Missionen und Belohnungen",
    m3t: "Story-Missionen bringen Geld und Erfahrung, du steigst auf und schaltest Perks frei.",
    m4: "Autos und Tuning",
    m4t: "Händler, Tuner-Specs und Garage funktionieren, und jedes Auto lädt auch nach einem Neustart wieder.",
    here: "Aktuell",
    m3b: "Die komplette Story",
    m3bt: "Mit Autos und allen Aktivitäten lässt sich die Kampagne bis zum Ende durchspielen.",
    m5: "Alle Aktivitäten",
    m5t: "Summit-Events, Polizeiverfolgungen, Fraktionen und die Teile-Shops sind gebaut und rechnen wie der Originalserver. Jetzt werden sie auf der PS4 getestet.",
    mpc: "PC-Version",
    mpct: "Die PC-Version spricht dieselbe Sprache wie die PS4-Fassung. Eine kleine Datei im Spielordner leitet sie auf denselben Server um.",
    mmp: "Online-Multiplayer und Crossplay",
    mmpt: "Mit Freunden auf einem gemeinsamen Server: Crews mit bis zu vier Fahrern, Rennen gegeneinander, PC- und PS4-Spieler auf derselben Karte.",
    m6: "Open-Source-Release",
    m6t: "Server, Konsolen-Patch, die PC-Datei und eine Schritt-für-Schritt-Anleitung, kostenlos zum Download.",
    m7: "Server direkt auf der Konsole",
    m7t: "Später läuft alles auf der PS4 selbst, ganz ohne zweites Gerät.",
    worksTitle: "Funktioniert bereits (getestet auf PS4)",
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
    w11: "Der Summit-Kalender zeigt das Summit der Woche",
    w12: "DLC-Autos aus den DLCs, die du besitzt",
    w13: "Dein PSN-Profilbild im Spiel",
    w14: "Getunte Autos laden auch nach einem Neustart",
    testTitle: "Fertig, aber noch nicht getestet",
    t1: "Kein automatischer Rauswurf mehr bei Inaktivität",
    t2: "Mehrere Konsolen an einem Server",
    t3: "Summit-Events, Teilnahme und Belohnungen",
    t4: "Fraktionen, der tägliche Bonus und ein Fraktionskrieg, der rund um die Uhr weiterläuft",
    t5: "Polizeiverfolgungen: Belohnung fürs Entkommen, Strafe fürs Erwischtwerden",
    t6: "Autos bei jedem Händler auf der Karte kaufen",
    t7: "Teile-Shops und Teile in der Garage anbringen",
    t8: "Perkpunkte kaufen",
    t9: "Sammelobjekte bleiben erhalten, ein Auto für die Sehenswürdigkeiten jeder Region",
    benchTitle: "In Arbeit",
    b1: "Belohnungsteile aus Missionen",
    b2: "Das Verfolgungsauto nach zehn Fluchten",
    b3: "Reparaturen, die Geld kosten",
    b6: "Rivalen in den Ranglisten, mit Zeiten im Rahmen der Medaillen",
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
    laterTitle: "Was noch kommt",
    r1: "Weitere Spielregionen",
    r1t: "Die US- und Asien-Fassungen des PS4-Spiels, neben der europäischen Version 1.21.",
    r2: "Cheats für den Einzelspieler",
    r2t: "Unbegrenzt Geld, alle Autos und Teile freigeschaltet, wenn du einfach nur cruisen willst. Nur im Einzelspieler; im Multiplayer spielen alle fair.",
    r3: "Bis zu 4K auf PS4 Pro und PS5",
    r3t: "Ein Patch erhöht die Renderauflösung. Dieselbe Welt, ein deutlich schärferes Bild.",
    q1: "Brauche ich PS Plus?",
    a1: "Nein. Das Spiel verbindet sich nur mit deinem eigenen Server.",
    q5: "Läuft es auch auf der PS5?",
    a5: "Ja. Die PS5 startet die PS4-Version per Abwärtskompatibilität, mit demselben Patch und demselben Server.",
    q2: "Wo wird mein Spielstand gespeichert?",
    a2: "Auf deinem Server, getrennt pro PS4-Profil. Deine Spieleinstellungen bleiben auf der Konsole.",
    q3: "Kann ich mit Freunden spielen?",
    a3: "Mehrere Konsolen im selben Haushalt können sich einen Server teilen. Das ist gebaut, aber noch nicht getestet. Online-Multiplayer über das Internet steht auf der Roadmap, das Ziel sind PC- und PS4-Spieler gemeinsam.",
    q7: "Gibt es eine PC-Version?",
    a7: "Sie ist geplant. Die PC-Version nutzt dasselbe Protokoll wie die PS4-Fassung und kann deshalb denselben Server verwenden. Eine kleine Datei im Spielordner leitet sie dorthin um; du brauchst dein eigenes Exemplar des PC-Spiels.",
    q4: "Wann kann ich es herunterladen?",
    a4: "Sobald alle Aktivitäten laufen und die Anleitung fertig ist. Einen Termin gibt es noch nicht. Neue Videos auf dem YouTube-Kanal zeigen jeden Fortschritt.",
    q6: "Kann ich das Projekt unterstützen?",
    a6: "Ja, mit einem Trinkgeld auf Ko-fi. Das Projekt bleibt so oder so kostenlos, und für eine Unterstützung wird nichts zusätzlich freigeschaltet.",
    kofi: "Auf Ko-fi unterstützen",
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
    renderPlaylist();
    try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }
  }

  let current = 0;

  function markCurrent() {
    document.querySelectorAll("#playlist button").forEach((b, k) => {
      if (k === current) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
    });
  }

  function showVideo(i, play) {
    const v = C.videos[i];
    current = i;
    markCurrent();
    if (!play) {
      document.getElementById("facadeTitle").textContent = v.title;
      const facade = document.getElementById("facade");
      if (v.poster) facade.style.backgroundImage =
        "linear-gradient(180deg, rgba(7, 11, 18, .25), rgba(7, 11, 18, .8)), url(\"" + v.poster + "\")";
      facade.onclick = () => showVideo(i, true);
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
    const list = document.getElementById("playlist");
    list.replaceChildren();
    C.videos.forEach((v, i) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button";
      b.className = "episode";
      const img = document.createElement("img");
      img.src = v.poster || "";
      img.alt = "";
      img.loading = "lazy";
      const no = document.createElement("span");
      no.className = "ep-no";
      no.textContent = String(i + 1).padStart(2, "0");
      const title = document.createElement("span");
      title.className = "ep-title";
      title.textContent = v.title;
      const text = document.createElement("span");
      text.className = "ep-text";
      text.textContent = v[lang] || v.en || "";
      const time = document.createElement("span");
      time.className = "ep-time";
      time.textContent = v.time || "";
      b.append(img, no, title, text, time);
      b.onclick = () => showVideo(i, true);
      li.append(b);
      list.append(li);
    });
    list.hidden = C.videos.length < 2;
    const link = document.getElementById("seriesLink");
    if (C.playlist) link.href = "https://www.youtube.com/playlist?list=" + encodeURIComponent(C.playlist);
    link.hidden = false;
    if (document.querySelector("#player iframe")) markCurrent();
    else showVideo(current, false);
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
  const asked = new URLSearchParams(location.search).get("lang");
  const saved = asked === "de" || asked === "en" ? asked : stored();
  setLang(saved || ((navigator.language || "").toLowerCase().startsWith("de") ? "de" : "en"));
})();
