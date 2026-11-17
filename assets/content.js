// Edit this file to add videos and screenshots. Videos are listed in story order; `featured` picks the one shown big.
window.CONTENT = {
  videos: [
    { id: "mGOb_1bIwuY", title: "The Prologue", time: "8:23", poster: "assets/videos/the-prologue.jpg",
      en: "A new save: the chase, the radio tower, the barn.",
      de: "Neues Spiel: Verfolgung, Funkturm, Scheune." },
    { id: "GlhArdepV0k", title: "First Night Race", time: "3:04", poster: "assets/videos/first-night-race.jpg",
      en: "Detroit's first night race, nine checkpoints.",
      de: "Das erste Nachtrennen durch Detroit." },
    { id: "EFWpRBiQ838", title: "Drive to the Bridge", time: "2:30", poster: "assets/videos/drive-to-the-bridge.jpg",
      en: "Dayton's cutscene, then a timed run to the bridge.",
      de: "Dayton, dann gegen die Uhr zur Brücke." },
    { id: "PxOrlLmJxqk", title: "Buying and Tuning", time: "3:02", poster: "assets/videos/buying-and-tuning.jpg",
      en: "A Camaro SS from the dealer, then the street kit.",
      de: "Ein Camaro SS vom Händler, dann das Straßen-Kit." },
    { id: "Ra0fcutVQ1Y", title: "Crossplay Crew", time: "2:53", poster: "assets/videos/crossplay-crew.jpg",
      en: "A PS4 player invites a PC player into the crew.",
      de: "Ein PS4-Spieler holt einen PC-Spieler in die Crew." },
    { id: "xES0otBDySc", title: "Night Run to St. Louis", time: "10:55", poster: "assets/videos/night-run-st-louis.jpg",
      en: "By night from Detroit to St. Louis: hidden car parts, a satellite radar, a mission (spoiler at the end).",
      de: "Nachts von Detroit nach St. Louis: Wrackteile, ein Satellitenradar, eine Mission (Spoiler am Ende)." },
    { id: "-Bk-wqqBn0I", title: "Base Game 1.00: the Prologue", time: "14:44", poster: "assets/videos/version-1-00-prologue.jpg",
      en: "The PS4 game without any update: the whole prologue, uncut, to the dealer and the tuner (spoilers).",
      de: "Das PS4-Spiel ohne Update: der ganze Prolog ungeschnitten, bis zum Händler und zum Tuner (Spoiler)." },
    { id: "QZdTNngIwbc", title: "Police Chase with a Crate", time: "3:27", poster: "assets/videos/police-chase-crate.jpg",
      en: "Calling All Units: a crate across Chicago with the police on my tail, then the crate opens.",
      de: "Calling All Units: eine Kiste quer durch Chicago, die Polizei im Nacken, dann wird sie geöffnet." },
  ],
  // the episode the player shows first (the newest milestone); empty = the first one
  featured: "QZdTNngIwbc",
  // the playlist with every episode, linked under the list
  playlist: "PLbKxOmFihheM",
  // The same spot in base game 1.00 and in 1.21 (assets/compare/<name>-100.webp and -121.webp), first one shown first
  compare: [
    { name: "pipes", en: "Slalom skill under the pipelines, Detroit", de: "Slalom-Skill unter den Rohrleitungen, Detroit" },
    { name: "crane", en: "The same skill at the harbour crane", de: "Derselbe Skill am Hafenkran" },
    { name: "highway", en: "On the highway to the first race", de: "Auf der Autobahn zum ersten Rennen" },
    { name: "overpass", en: "Under the overpass", de: "Unter der Hochstraße" },
    { name: "clay", en: "Cutscene: Clay Industrial Center", de: "Zwischensequenz: Clay Industrial Center" },
  ],
  // The server's admin page (assets/shots/admin-*.webp in English, *-de.webp in German; test data with example
  // addresses). src_<lang> is the picture for that page language, src the fallback. The first one is shown large.
  admin: [
    { src: "assets/shots/admin-overview-dark.webp", src_de: "assets/shots/admin-overview-dark-de.webp", en: "Overview: the server at a glance", de: "Übersicht: der Server auf einen Blick" },
    { src: "assets/shots/admin-player-skills-dark.webp?v=2", src_de: "assets/shots/admin-player-skills-dark-de.webp?v=2", en: "Skills with best medal and score (next release)", de: "Skills mit bester Medaille und Punktzahl (nächste Version)" },
    { src: "assets/shots/admin-player-cars-dark.webp?v=2", src_de: "assets/shots/admin-player-cars-dark-de.webp?v=2", en: "A player's cars by name (next release)", de: "Die Autos eines Spielers mit Namen (nächste Version)" },
    { src: "assets/shots/admin-settings-player-dark.webp", src_de: "assets/shots/admin-settings-player-dark-de.webp", en: "Settings, saved straight into config.ini", de: "Einstellungen, direkt in config.ini gespeichert" },
    { src: "assets/shots/admin-phone-overview-dark.webp", src_de: "assets/shots/admin-phone-overview-dark-de.webp", en: "On the phone", de: "Auf dem Handy" },
    { src: "assets/shots/admin-log-dark.webp", src_de: "assets/shots/admin-log-dark-de.webp", en: "The server log with a filter", de: "Das Serverprotokoll mit Filter" },
    { src: "assets/shots/admin-clients-dark.webp", src_de: "assets/shots/admin-clients-dark-de.webp", en: "Connected games, PS4 and PC", de: "Verbundene Spiele, PS4 und PC" },
    { src: "assets/shots/admin-phone-skills-dark.webp?v=2", src_de: "assets/shots/admin-phone-skills-dark-de.webp?v=2", en: "Skills on the phone (next release)", de: "Skills auf dem Handy (nächste Version)" },
  ],
  // Screenshots live in assets/shots/ (stills from the project's own PS4 recordings). The first one is shown large.
  screenshots: [
    { src: "assets/shots/golden-raptor.jpg?v=2", en: "Golden hour in the Midwest", de: "Goldene Stunde im Mittleren Westen" },
    { src: "assets/shots/detroit-searchlights.jpg?v=2", en: "Searchlights over Detroit at night", de: "Suchscheinwerfer über Detroit bei Nacht" },
    { src: "assets/shots/camaro-st-louis.jpg?v=2", en: "A Camaro in St. Louis", de: "Ein Camaro in St. Louis" },
    { src: "assets/shots/night-meet.jpg?v=2", en: "A night meet in Detroit", de: "Nächtliches Treffen in Detroit" },
    { src: "assets/shots/muscle-car-dusk.jpg?v=2", en: "Muscle car at dusk", de: "Muscle Car in der Abenddämmerung" },
    { src: "assets/shots/offroad-field.jpg?v=2", en: "Off-road across the fields", de: "Offroad über die Felder" },
  ],
};
