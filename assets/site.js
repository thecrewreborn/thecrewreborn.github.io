(function () {
  const DE = {
    navDownload: "Download",
    navVideo: "Videos",
    navServer: "Server-App",
    navStatus: "Stand",
    navWhy: "Warum dieses Projekt",
    heroAlt: "Das Spiel auf einem Fernseher, davor die Server-App mit ihren Einstellungen auf einem Handy",
    sp1: "Dein eigener Server",
    sp1t: "Das Spiel spricht mit einem Server, den du betreibst, nicht mit dem offiziellen. Kein PS Plus, kein Konto bei irgendwem.",
    sp2: "Ein PC oder ein Handy",
    sp2t: "Windows, macOS und Linux oder ein Android-Handy in deinem WLAN. Der Server braucht nur ein paar Megabyte.",
    sp3: "PS4, PS5 und PC zusammen",
    sp3t: "Konsolen- und PC-Spieler treffen sich in derselben Welt und fahren in einer Crew.",
    sp4: "Ein Spielstand überall",
    sp4t: "Dein Fortschritt liegt auf deinem Server: Fang auf der Konsole an und spiel am PC weiter.",
    dlServerText: "Den brauchen alle. Er läuft, während du spielst, auf einem PC oder einem Android-Handy in deinem Netzwerk.",
    dlYoursLabel: "Für dein System",
    dlPick: "Alle Systeme:",
    dlPs4Text: "Für GoldHEN, CUSA00161 mit Update 1.21 oder das Basisspiel 1.00.",
    dlPcText: "Für TheCrew.exe 1.2.0.0, die Ubisoft-Connect- und die Steam-Version.",
    dlHow: "So richtest du es ein",
    dlServer2: "Server auf einem PC",
    dlAndroidTitle2: "Server auf einem Android-Handy",
    dlA1: "Öffne die APK auf dem Handy und erlaube die Installation von Apps aus dieser Quelle.",
    dlA2: "Starte die App. Sie lässt den Server im Hintergrund laufen und zeigt seine Verwaltungsseite.",
    dlA3: "Das Handy muss im selben WLAN sein wie deine Konsole oder dein PC.",
    dlPs4b: "Auf PS4 oder PS5",
    dlPcb: "Am PC",
    ch1: "Der Server läuft auf Android-Handys: eine App mit eingebauter Verwaltungsseite.",
    ch2: "Verwaltungsseite: eine Spieleransicht mit Autos, Missionen, Skills und Medaillen; die Seite passt aufs Handy.",
    ch3: "Eine Skill-Medaille bringt ein Leistungsteil für dein Auto, angezeigt auf dem Ergebnisbildschirm.",
    ch4: "Anmeldungen überstehen einen Neustart des Servers, und das Spiel darf vor dem Server starten.",
    ch5: "PC: Crew-Einladungen an PS4-Spieler funktionieren wieder, auch mit VPN auf dem PC.",
    ch6: "Spieler bleiben nach einem Neustart des Servers füreinander sichtbar.",
    ch7: "Textchat am PC als Einstellung, standardmäßig aus.",
    ch8: "Bestenlisten speichern die beste Punktzahl jedes Spielers.",
    ch9: "Skill-Geister und die Einstellungen des PC-Spiels liegen auf dem Server.",
    ch10: "Bonus-Autos und -Gegenstände aus den Belohnungspaketen des Kontos, abschaltbar.",
    ch11: "Die Anleitung nennt die Regel für die Windows-Firewall, die ein PC als Gastgeber einer Crew-Sitzung braucht.",
    srvTitle: "Der Server in der Hosentasche",
    srvText: "Leg den Server auf ein Android-Handy und lass es im WLAN: Die App hält ihn im Hintergrund am Laufen. Dieselbe Verwaltungsseite öffnet sich am PC im Browser. Sie zeigt, wer online ist, den Fortschritt jedes Spielers und alle Einstellungen.",
    srvMobile: "Auf dem Handy",
    srvDesktop: "Am PC",
    srvAlt1: "Die Server-App vor dem Start",
    srvAlt2: "Die Server-App: verbundene Spiele",
    srvAlt3: "Die Skills eines Spielers mit Medaille und Punktzahl",
    srvAlt4: "Die Verwaltungsseite im Browser: der Server auf einen Blick",
    srvCap1: "Start mit einem Tipp",
    srvCap2: "Verbundene Spiele",
    srvCap3: "Medaillen eines Spielers",
    srvCap4: "Der Server auf einen Blick",
    srvP1: "Sieh, welche Spiele verbunden sind und wer spielt",
    srvP2: "Schau in jeden Spielstand: Autos, Missionen, Skills mit Medaillen",
    srvP3: "Ändere Einstellungen; sie landen in config.ini",
    srvP4: "Durchsuche das Protokoll, starte den Server neu oder beende ihn",
    tagline: "Das erste The Crew läuft wieder auf PS4, PS5 und PC. Das Spiel verbindet sich mit deinem eigenen Server: auf einem PC oder einem Android-Handy, zu Hause oder im Internet.",
    ctaDownload: "Herunterladen",
    dlTitle: "Download",
    dlLede: "Den Server brauchen alle. Dazu kommt der Patch für die Plattform, auf der du spielst.",
    dlForAll: "Für alle",
    dlServer: "Server",
    dlGet2: "Herunterladen",
    dlGet3: "Herunterladen",
    dlOtherTitle: "Spielst du auf einem Server außerhalb deines Heimnetzes?",
    dlOther: "Einen Server in deinem Heimnetz findet das Spiel von selbst. Für jeden anderen Server bekommst du die Adresse von seinem Betreiber. Trage sie genau so ein: auf der PS4 in die Datei /data/TheCrew/server.txt (kopiere sie per FTP auf die Konsole), am PC hinter Host= in reborn.ini. Die README im Server-Download erklärt jeden Schritt.",
    dlS1: "Entpacke das Zip auf einem PC in deinem Heimnetz oder auf einem Server im Internet.",
    dlMac: "macOS (Apple und Intel)",
    dlS2: "Starte TheCrewReborn-Server (unter Windows: TheCrewReborn-Server.exe).",
    dlS3: "Erlaube das Programm beim ersten Start. Windows: Bestätige SmartScreen und die Firewall-Abfrage. macOS: Erlaube das nicht signierte Programm einmal in den Systemeinstellungen.",
    dlS4: "Lass es laufen, solange du spielst.",
    dlPs4: "Konsolen-Patch",
    dlP1: "Kopiere CUSA00161.xml auf der Konsole nach /data/GoldHEN/patches/xml/.",
    dlP2: "Schalte „Offline server redirect“ im Patch-Menü von GoldHEN ein.",
    dlP3: "Starte zuerst den Server, dann das Spiel.",
    dlPc: "PC-Patch",
    dlC1: "Kopiere dinput8.dll und reborn.ini in den Spielordner, neben TheCrew.exe.",
    dlC2: "Starte zuerst den Server, dann das Spiel.",
    dlC3: "Um deinen PS4-Fortschritt weiterzuspielen, trage in reborn.ini bei Name deinen PS4-Benutzernamen ein.",
    dlReq: "Unterstützte Versionen",
    dlNotes: "Versionshinweise und alle Dateien",
    dlBug: "Fehler melden",
    dlFree: "Kostenlos. Der Server ist Open Source (GPL 3).",
    ctaVideo: "Video ansehen",
    ctaStatus: "Zum aktuellen Stand",
    ctaWhy: "Warum dieses Projekt",
    newsTag: "Neu",
    news: "Pre-Release 0.2.0: Der Server läuft jetzt auch auf einem Android-Handy",
    bugLink: "Fehler gefunden? Melde ihn auf GitHub",
    fan: "Fanprojekt. Kein offizielles Produkt von Ubisoft.",
    videoTitle: "Das Spiel in Aktion",
    videoText: "Aufgenommen im November 2026. Die Story auf einer PS4 mit neuem Spielstand bis zum ersten getunten Auto, eine Crew aus einem PS4- und einem PC-Spieler, eine Nachtfahrt von Detroit nach St. Louis, der ganze Prolog im Basisspiel 1.00 und eine Polizeiverfolgung mit einer Kiste.",
    videoAll: "Die ganze Serie auf YouTube",
    videoNote: "Das Video wird erst nach dem Klick von YouTube geladen.",
    dlNew: "Was ist neu",
    newTitle: "Neu in 0.2.0",
    newText: "Der Server läuft jetzt auch auf einem Android-Handy. Starte die App und spiel wie gewohnt auf deiner PS4 oder deinem PC, mit der Verwaltungsseite des Servers in der Hand. Dazu eine Spieleransicht auf dieser Seite und Korrekturen für Anmeldungen und Crossplay.",
    newPicAlt: "Das Spiel auf einem Fernseher, daneben die Server-App mit ihrer Verwaltungsseite auf einem Handy",
    newFoot: "Außerdem neu: Die Anleitung des Servers nennt die Regel für die Windows-Firewall, die ein PC braucht, damit PS4-Spieler seiner Crew-Sitzung beitreten können.",
    nw1: "Der Server auf einem Android-Handy",
    nw1tag: "Getestet mit einer PS4",
    nw1t: "Installiere die App, tippe auf Start, und deine PS4 oder dein PC findet den Server im WLAN wie jeden anderen. Die App lässt ihn im Hintergrund laufen und zeigt die Verwaltungsseite.",
    nw2: "Spieleransicht auf der Verwaltungsseite",
    nw2t: "Autos und Specs mit Namen, Missionen nach Art, jeder Skill mit bester Medaille und Punktzahl, Sammelobjekte und Wahrzeichen pro Region. Die Seite passt jetzt auch aufs Handy.",
    nw3: "Belohnungsteile auf dem Ergebnisbildschirm",
    nw3tag: "Getestet auf PS4",
    nw3t: "Eine Skill-Medaille bringt ein Leistungsteil für das Auto, mit dem du gefahren bist, und der Ergebnisbildschirm zeigt, welches. Eine bessere Medaille bringt später ein weiteres.",
    nw4: "Anmeldungen, die halten",
    nw4tag: "Getestet auf PS4",
    nw4t: "Starte den Server neu und spiel weiter: Das Spiel bleibt angemeldet. Hast du das Spiel vor dem Server gestartet? Es meldet sich an, sobald der Server läuft.",
    nw5: "Crossplay-Crews wieder da",
    nw5tag: "Getestet auf PS4 und PC",
    nw5t: "Ein PC-Spieler kann wieder einen PS4-Spieler einladen, auch mit VPN auf dem PC. Spieler bleiben auch nach einem Neustart des Servers füreinander sichtbar.",
    nw6: "Textchat am PC",
    nw6tag: "Getestet auf PS4 und PC",
    nw6t: "Eine Einstellung schaltet den Textchat des Spiels ein. Nur die PC-Version hat einen; er bleibt aus, bis du ihn einschaltest.",
    nw7: "Bestenlisten",
    nw7tag: "Wartet auf den ersten Test",
    nw7t: "Jede Mission und jede Aktivität speichert die beste Punktzahl jedes Spielers auf deinem Server, für die Bestenliste auf dem Ergebnisbildschirm.",
    nw8: "Skill-Geister und PC-Einstellungen",
    nw8tag: "Geister-Upload auf PS4 getestet",
    nw8t: "Der Server speichert deine Skill-Geister und die Einstellungen des PC-Spiels, damit sie dir beim nächsten Start folgen.",
    nw9: "Bonus-Autos und -Gegenstände",
    nw9tag: "Wartet auf den ersten Test",
    nw9t: "Die Belohnungspakete, die Spieler früher über ihr Konto freigeschaltet haben, stehen in jeder Garage, dazu einmalig 50.000 Crew Credits. Eine Einstellung schaltet sie ab.",
    crossTitle: "Crossplay, Cross-Save, Cross-Progression",
    crossText: "Ein Server für PS4 und PC. Spiele plattformübergreifend mit anderen zusammen und nimm deinen Fortschritt von der Konsole an den PC mit und wieder zurück.",
    cp1: "Crossplay",
    cp1tag: "Getestet auf PS4 und PC",
    cp1t: "PS4- und PC-Spieler treffen sich in derselben Welt, sehen sich und fahren in einer Crew.",
    cp2: "Cross-Save",
    cp2tag: "Getestet von PS4 zu PC",
    cp2t: "Dein Spielstand liegt auf deinem Server, nicht auf der Konsole: Stufe, Geld, Autos und Missionen. Auf der PS4 anfangen, am PC weiterspielen.",
    cp3: "Cross-Progression",
    cp3t: "Was du auf einer Plattform verdienst, zählt auch auf der anderen, denn beide spielen denselben Spielstand.",
    howTitle: "Ein Spielstand auf PS4 und PC: So funktioniert es",
    how1: "Spiele wie gewohnt auf der PS4. Der Server speichert deinen Spielstand unter deinem PS4-Benutzernamen.",
    how2: "Öffne am PC die Datei reborn.ini neben TheCrew.exe und trage bei Name= deinen PS4-Benutzernamen in exakt derselben Schreibweise ein.",
    how3: "Starte das Spiel am PC. Es lädt dieselbe Stufe, dasselbe Geld, dieselben Autos und Missionen. Der Weg vom PC zur PS4 funktioniert ebenso.",
    howNote: "Ein Name spielt immer nur auf einem Gerät: Der Server lehnt ein zweites Spiel mit demselben Namen ab (es zeigt Fehler #0_35), damit nie zwei Spiele in denselben Spielstand schreiben.",
    w18: "Cross-Save: ein Spielstand auf PS4 und PC unter demselben Spielernamen",
    w23: "Geschützte Spielernamen: Niemand außerhalb deines Heimnetzes kann deinen Namen oder Spielstand übernehmen",
    w24: "Zu Hause treten PS4 und PC einem Spielernamen von selbst bei",
    w19: "Leistungsteile in der Garage: eigene Teile laden und lassen sich einbauen",
    w20: "Das PC-Spiel auch unter Windows 11 für ARM",
    w22: "Die Steam-Version des PC-Spiels, genauso wie die Ubisoft-Connect-Version",
    w21: "Lack und Karosserieteile beim Tuner, bezahlt mit Bucks oder Crew Credits, und eingebaut",
    q8: "Kann ich meinen PS4-Fortschritt am PC weiterspielen?",
    a8: "Ja. Der Server speichert Spielstände nach Spielernamen. Trage am PC in der Datei reborn.ini bei Name deinen PS4-Benutzernamen ein: Zu Hause tritt der PC diesem Namen von selbst bei und verwendet denselben Spielstand, mit Stufe, Geld, Autos und Missionen. Ein Name spielt immer nur auf einem Gerät.",
    statusTitle: "Aktueller Stand",
    statusText: "Das Spiel startet auf PS4 und PC, die Welt lädt, der Fortschritt wird gespeichert und Spieler beider Plattformen fahren zusammen in einer Crew. Das Pre-Release ist da; was gebaut, aber noch ungetestet ist, wird Schritt für Schritt getestet. Darunter: was funktioniert, was auf seinen Test wartet, was gerade entsteht und was später kommt.",
    m1: "Zurück auf der Straße",
    m1t: "Das Spiel startet und verbindet sich mit dem Reborn-Server statt mit den abgeschalteten Ubisoft-Servern.",
    m2: "Die offene Welt",
    m2t: "Anmeldung, freies Fahren auf der gesamten Karte und Speichern nach jedem Event.",
    m3: "Missionen und Belohnungen",
    m3t: "Jeder Missionstyp bringt Erfahrung und Bucks, berechnet nach der Formel des Spiels. Du steigst auf und schaltest Perks frei.",
    m4: "Autos und Tuning",
    m4t: "Händler, Tuner-Specs und Garage funktionieren, und jedes Auto lädt auch nach einem Neustart wieder.",
    here: "Aktuell",
    mpre: "Pre-Release: herunterladen und ausprobieren",
    now: "Jetzt verfügbar",
    mpret: "Der Server ist Open Source und läuft unter Windows, macOS, Linux und Android; Konsolen-Patch und PC-Datei sind dabei. Alle Aktivitäten und die komplette Story sind gebaut, aber noch nicht alles ist getestet. Es kann daher noch zu Fehlern kommen. Bitte melde sie auf GitHub.",
    download: "0.2.0 herunterladen",
    reportBug: "Fehler melden",
    reportBug2: "Fehler melden",
    footDownload: "Download",
    m5: "Alle Aktivitäten getestet",
    m5t: "Summit-Events, Polizeiverfolgungen, Fraktionen und die Teile-Shops rechnen wie der Originalserver. Jede davon wird auf PS4 und PC getestet.",
    mpc: "PC-Version",
    mpct: "Die PC-Version läuft auf demselben Server wie die PS4: Eine kleine Datei im Spielordner leitet sie dorthin um. Anmeldung, Prolog und offene Welt funktionieren.",
    mmp: "Online-Multiplayer und Crossplay",
    mmpt: "PS4- und PC-Spieler treffen sich auf deinem eigenen Server, sehen sich und fahren zusammen. Seit dem 5. November funktionieren auch Crews über beide Plattformen hinweg: Ein PS4-Spieler lädt einen PC-Spieler ein, die Einladung kommt an und die Crew-Leitung wechselt.",
    tested: "Getestet auf PS4 und PC",
    mv100: "PS4-Basisspiel 1.00",
    mv100tag: "Getestet auf PS4",
    mnames: "Geschützte Spielernamen",
    mnamest: "Jede PS4 und jeder PC erzeugt einen eigenen Schlüssel, und ein Spielername gehört nur den Geräten seines Spielers. Niemand außerhalb des Heimnetzes kann den Namen oder den Spielstand eines anderen übernehmen. Damit kann der Server auch im Internet laufen. Zu Hause treten PS4 und PC deinem Namen weiterhin von selbst bei.",
    mv100t: "Das Spiel ohne jedes Update läuft auf demselben Server, mit eigenem Port und eigenen Spielständen. Getestet vom Beginn der Story bis zum ersten Tuning-Shop; experimentell.",
    mv100cmp: "1.00 und 1.21 vergleichen",
    mmpCrew: "Crossplay-Crew-Video ansehen",
    mmpProof: "Erster Crossplay-Test: PS4 (oben) und PC (unten) sehen sich gegenseitig.",
    mmpVideo: "Ersten Clip auf YouTube ansehen",
    mmpProofAlt: "Eine PS4 auf dem Fernseher und darunter ein PC, beide zeigen das Auto des anderen Spielers in derselben Straße",
    m6: "Release 1.0",
    m6t: "Die komplette Story einmal von Anfang bis Ende durchgespielt, alle Aktivitäten getestet und eine Schritt-für-Schritt-Anleitung.",
    mandroid: "Server auf einem Android-Handy",
    mandroidtag: "Getestet mit einer PS4",
    mandroidt: "Seit 0.2.0 läuft der Server auch als App auf einem Android-Handy, mit eingebauter Verwaltungsseite. Eine PS4 hat sich an einem Server auf dem Handy angemeldet, auch nach einem Neustart des Spiels bei ausgeschaltetem Handy-Bildschirm.",
    m7: "Server direkt auf der Konsole",
    m7t: "Später läuft alles auf der PS4 selbst, ganz ohne zweites Gerät.",
    worksTitle: "Funktioniert bereits",
    w1: "Spielstart ohne die offiziellen Server",
    w2: "Story-Missionen und freies Fahren",
    w3: "Missionen, Belohnungen, Level-ups und Perks",
    w4: "Autos beim Händler kaufen",
    w5: "Garage mit all deinen Autos",
    w6: "Straßen-Specs beim Tuner",
    w7: "Spielstand auf dem Server, getrennt pro PS4-Profil",
    w8: "Einstellungen auf der Konsole, getrennt pro Profil",
    w9: "Konsole und PC finden den Server im Heimnetz automatisch",
    w10: "Simulierte Mitspieler lassen sich ein- und ausschalten",
    w11: "Der Summit-Kalender zeigt das Summit der Woche",
    w12: "DLC-Autos, wenn du die DLCs besitzt",
    w13: "Dein PS4-Profilbild im Spiel, bei jedem Spielstart aktuell",
    w14: "Getunte Autos laden auch nach einem Neustart",
    w15: "Auf dem PC: Anmeldung, Prolog und offene Welt, am selben Server wie die PS4",
    w16: "Multiplayer: PS4- und PC-Spieler treffen sich auf einem Server und sehen sich",
    w17: "Crews über PS4 und PC: Spieler der anderen Plattform einladen",
    testTitle: "Fertig, aber noch nicht getestet",
    w25: "Belohnungen für Trainingsläufe und Skills, berechnet wie im Spiel",
    t1: "Kein automatischer Rauswurf mehr bei Inaktivität",
    t2: "Mehrere Konsolen an einem Server",
    t3: "Summit-Events, Teilnahme und Belohnungen",
    t4: "Fraktionen, der tägliche Bonus und ein Fraktionskrieg, der rund um die Uhr weiterläuft",
    t5: "Polizeiverfolgungen: Belohnung bei erfolgreicher Flucht, Bußgeld bei einer Festnahme",
    t6: "Autos bei jedem Händler auf der Karte kaufen",
    t8: "Perkpunkte kaufen",
    t9: "Sammelobjekte bleiben erhalten, komplette Sets schalten Teile frei, ein Auto für die Sehenswürdigkeiten jeder Region",
    t11: "Ein Server im Internet: auf einem Linux-Server oder zu Hause mit Portfreigabe",
    w26: "Der Server auf einem Android-Handy",
    w27: "Anmeldungen überstehen einen Neustart des Servers, und das Spiel darf vor dem Server starten",
    w28: "Belohnungsteile für Skill-Medaillen, angezeigt auf dem Ergebnisbildschirm",
    w29: "Textchat am PC, als Einstellung",
    t17: "Bestenlisten mit der besten Punktzahl jedes Spielers auf deinem Server",
    t18: "Bonus-Autos und -Gegenstände aus den Belohnungspaketen des Kontos",
    t19: "Einstellungen des PC-Spiels auf dem Server gespeichert",
    t10: "Belohnungsteile: Eine Medaille in einer Mission bringt ein Leistungsteil für das gefahrene Auto",
    t12: "Belohnungen für jeden Missionstyp, berechnet nach der Formel des Spiels: Story, Fraktionen, Summit, Trainingsläufe, Wild Run, Polizeimissionen und Instant Challenges",
    t13: "Perks und Summit-Boosts, die Missionsbelohnungen erhöhen",
    t14: "Fraktionsruf, Rang, tägliches Gehalt und das Monatsergebnis",
    t15: "Polizeimissionen: Kisten, Fragmente und die Autos, die sie freischalten",
    t16: "Das Summit-Glücksrad: Boosts, Crew Credits, das Summit-Auto, Teile und Tokens",
    benchTitle: "In Arbeit",
    b1: "Belohnungsteile aus Aktivitäten außer Skills",
    b6: "Rivalen in den Ranglisten, mit Zeiten im Rahmen der Medaillen",
    b11: "Crews: erneut beitreten nach einem Verbindungsabbruch",
    vcTitle: "Zwei Spiele in einem: 1.00 und 1.21",
    vcText: "Der Server spielt beide PS4-Versionen. Fahr das Basisspiel so, wie es im Dezember 2014 erschien, oder mit Update 1.21 und Wild Run, so wie es die meisten ab 2015 kennen. Dieselbe Stelle in derselben Mission, zwei Looks: Zieh den Regler.",
    vcNote: "Standbilder aus eigenen PS4-Aufnahmen, an derselben Stelle derselben Mission. Tageszeit und Wetter können zwischen zwei Fahrten abweichen; HUD, Licht und Straßenbelag zeigen die Version.",
    vcRange: "Vergleich: links 1.00, rechts 1.21",
    vc100: "Basisspiel 1.00 (Dezember 2014)",
    vc100a: "Der ursprüngliche Look: Licht und Farben vom Start, vor der Überarbeitung der Grafik",
    vc100b: "Das Fahrverhalten vom Start, vor der Überarbeitung von Lenkung, Grip und Gegenlenken",
    vc100c: "Kein Regen und kein Gewitter: Das dynamische Wetter kam erst mit dem Update",
    vc100d: "Die Story, Skills, Fraktionen und die Autos des Basisspiels, ohne Add-ons",
    vc100e: "Auf dem Reborn-Server experimentell: getestet vom Beginn der Story bis zum ersten Tuning-Shop",
    vc121: "Update 1.21 mit Wild Run (2015 bis 2016)",
    vc121a: "Neue, physikalisch basierte Grafik mit überarbeitetem Licht, neuen Auto-Shadern und kaum noch nachladenden Objekten",
    vc121b: "Überarbeitetes Fahrverhalten: Aerodynamik, Lenkung, Gegenlenken und Grip",
    vc121c: "Dynamisches Wetter: Regen, nasse Straßen und Gewitter",
    vc121d: "Wild Run und Calling All Units: Motorräder, Drift-, Drag- und Monstertruck-Specs, der Summit, Polizeimissionen; die kostenpflichtigen Add-ons nur, wenn du sie besitzt",
    vc121e: "Auf dem Reborn-Server getestet, auf PS4 und PC",
    vcTaste: "Welche Version besser aussieht, ist Geschmackssache. Die Presse lobte 2015 die neue Grafik, manche Spieler vermissen die wärmeren Farben vom Start. Jetzt fährst du beide und entscheidest selbst.",
    vcVideo: "Den Prolog in 1.00 ansehen",
    vcSources: "Quellen zu den Änderungen:",
    adminTitle: "Dein Server im Browser",
    adminText: "Der Server bringt eine eigene Verwaltungsseite mit. Öffne sie im Heimnetz am Computer oder am Handy: Sieh, wer gerade spielt, schau in die Spielstände und ändere Einstellungen, ohne eine Datei zu öffnen.",
    ad1: "Live-Übersicht",
    ad1t: "Adresse, Ports, Version und Laufzeit auf einen Blick, dazu jedes gerade verbundene Spiel, PS4 und PC.",
    ad2: "Spielerdetails",
    ad2tag: "Nächste Version",
    ad2t: "Autos mit Namen, Missionen nach Art, jeder Skill mit bester Medaille und Punktzahl, Sammelobjekte und Wahrzeichen pro Region.",
    ad3: "Spielstände",
    ad3t: "Jede Spielstanddatei mit Größe und Datum: ansehen, als Sicherung herunterladen oder ihren Ordner öffnen.",
    ad4: "Spielernamen",
    ad4t: "Vergebene Namen und ihre Geräte. Öffne ein Zeitfenster, um ein neues Gerät hinzuzufügen, oder gib einen Namen frei.",
    ad5: "Einstellungen",
    ad5t: "Jeder Wert aus config.ini mit seinem Standardwert und dem Hinweis, ob er sofort oder erst nach einem Neustart gilt. Beim Speichern ändert sich nur diese eine Zeile, deine Kommentare bleiben erhalten.",
    ad6: "Protokoll, Neustart, Passwort",
    ad6t: "Das Serverprotokoll mit Filter, Knöpfe zum Neustarten und Beenden des Servers und auf Wunsch ein Passwort für die Seite.",
    dlApk: "Android-Handy (APK)",
    dlAndroidTitle: "Auf einem Android-Handy:",
    dlAndroid: "Öffne die APK und erlaube die Installation von Apps aus dieser Quelle. Die App lässt den Server im Hintergrund laufen und zeigt seine Verwaltungsseite. Das Handy muss im selben WLAN sein wie deine Konsole oder dein PC.",
    dlYoursMaybe: "Vermutlich dein System",
    shotsTitle: "Screenshots",
    shotsText: "Szenen, aufgenommen auf einer PS4, die auf dem Reborn-Server spielt.",
    needTitle: "Das brauchst du",
    n1: "Dein eigenes The Crew für PS4 oder PC",
    n1t: "PS4: Disc oder Download, die europäische Version, mit Update 1.21 oder als Basisspiel 1.00. PC: die Ubisoft-Connect- oder die Steam-Version. Die genauen Versionen stehen weiter unten.",
    verTitle: "Unterstützte Versionen",
    verPs4: "The Crew, europäische Version CUSA00161, mit installiertem Update 1.21 (die Spielinfo zeigt 01.21) oder als Basisspiel ohne Update (01.00, experimentell). Getestet auf einer PS4 mit Firmware 11.50 und GoldHEN.",
    verPc: "Ubisoft-Connect- oder Steam-Version: TheCrew.exe 1.2.0.0, Build 502193, das letzte Update. Getestet unter Windows 11, auch unter Windows 11 für ARM (in einer virtuellen Maschine).",
    verSrvName: "Server",
    verSrv: "Windows (x64 und ARM64), macOS (Apple und Intel), Linux (x64 und ARM64) und Android ab Version 9 als App. Ein einzelnes Programm, du musst nichts weiter installieren.",
    verUntested: "Möglicherweise lauffähig, aber noch nicht getestet: die PS5 per Abwärtskompatibilität. Noch nicht unterstützt: andere PS4-Regionen und Spielversionen, denn der Patch passt nur auf CUSA00161 1.00 und 1.21.",
    n2: "Auf der Konsole: eine PS4 oder PS5, die Homebrew-Patches laden kann",
    n2t: "Der Patch leitet das Spiel auf deinen Server um. Auf dem PC übernimmt das eine kleine Datei im Spielordner.",
    n3: "Einen PC oder ein Android-Handy im selben Netzwerk",
    n3t: "Windows, macOS, Linux oder Android. Darauf läuft der Server, während du spielst.",
    needNote: "Spieldateien gibt es hier nicht. Du brauchst dein eigenes Exemplar; das Projekt enthält ausschließlich eigenen Code. Die DLCs sind im Server ausgeschaltet: Schalte sie in seiner config.ini nur ein, wenn du sie besitzt. Die README im Download erklärt die Einrichtung.",
    faqTitle: "Häufige Fragen",
    laterTitle: "Was noch kommt",
    r1: "Weitere Spielregionen",
    r1t: "Die US- und Asien-Fassungen des PS4-Spiels, neben der europäischen Version.",
    r2: "Cheats für den Einzelspieler",
    r2t: "Unbegrenztes Geld sowie alle Autos und Teile freigeschaltet, für entspanntes Fahren durch die Spielwelt. Nur im Einzelspielermodus; im Multiplayer gelten für alle dieselben Regeln.",
    r3: "Bis zu 4K auf PS4 Pro und PS5",
    r3t: "Ein Patch erhöht die Renderauflösung. Dieselbe Welt, ein deutlich schärferes Bild.",
    r4: "PvP-Rennen",
    r4t: "Rennen gegen andere Spieler auf deinem Server, mit Lobbys und Spielersuche.",
    r5: "Multiplayer über das Internet",
    r5t: "Der Server läuft bereits mit geschützten Namen im Internet. Als Nächstes sehen sich auch Spieler aus verschiedenen Netzen und fahren zusammen.",
    r6: "Freunde und Chat",
    r6t: "Eine Freundesliste und der Chat im Spiel, auf deinem eigenen Server.",
    r7: "Community-Herausforderungen und News",
    r7t: "Wöchentliche Herausforderungen für alle auf dem Server und Neuigkeiten im Spielmenü.",
    r9: "Eigene Fehlermeldungen auf dem PC",
    r9t: "Klare Meldungen, die den Server und diese Website nennen, wie auf der PS4.",
    q1: "Brauche ich PS Plus?",
    a1: "Nein. Das Spiel verbindet sich nur mit deinem eigenen Server.",
    q10: "Was ist mit den DLCs?",
    a10: "Die DLCs sind aus: Die Motorräder und Specs von Wild Run, Calling All Units und die Autopakete bleiben gesperrt. Wie das Spiel selbst darfst du die DLCs nur nutzen, wenn du sie besitzt. Dann trage dlc = on in die config.ini des Servers ein; PS4 und PC übernehmen die Einstellung vom Server. Der Server kann nicht prüfen, was du gekauft hast, weil es die offiziellen Server nicht mehr gibt; die Verantwortung liegt bei dir. Die README erklärt den Schritt.",
    q9: "Woher bekomme ich das Spiel?",
    a9: "Du brauchst dein eigenes Exemplar von The Crew. Die PS4-Disc ist gebraucht weiterhin gut erhältlich; installiere sie zusammen mit dem Update 1.21 oder spiel das Basisspiel 1.00 ohne Update. Am PC brauchst du die Ubisoft-Connect- oder die Steam-Version, die du besitzt und installiert hast. Dieses Projekt stellt keine Spieldateien, keine Download-Links und keine Hilfe zu Kopien bereit, die du nicht besitzt.",
    q5: "Läuft es auch auf der PS5?",
    a5: "Ja. Die PS5 startet die PS4-Version per Abwärtskompatibilität, mit demselben Patch und demselben Server.",
    q2: "Wo wird mein Spielstand gespeichert?",
    a2: "Auf deinem Server, getrennt pro PS4-Profil oder PC-Spielername. Deine Spieleinstellungen bleiben auf der Konsole oder dem PC.",
    q3: "Kann ich mit Freunden spielen?",
    a3: "Ja, mit Crossplay zwischen PC und PS4: Spieler beider Plattformen sehen sich in der Welt und fahren gemeinsam in einer Crew. Multiplayer funktioniert heute in deinem Heimnetz; Multiplayer über das Internet folgt in einem späteren Release.",
    q11: "Kann jemand anderes unter meinem Namen spielen?",
    a11: "Nicht von außerhalb deines Heimnetzes. Deine PS4 und dein PC erzeugen beim ersten Start jeweils einen eigenen Schlüssel und melden sich damit an, und der Server bindet deinen Spielernamen an deine Geräte. Niemand muss ein Passwort eintippen; am PC kannst du statt des Schlüssels auch ein eigenes Passwort festlegen. Zu Hause tritt jedes Gerät in deinem Netz einem Namen von selbst bei; auf einem Server im Internet lässt nur sein Betreiber ein neues Gerät zu.",
    q7: "Gibt es eine PC-Version?",
    a7: "Ja. Die PC-Version läuft auf demselben Server wie die PS4-Fassung: Eine kleine Datei im Spielordner leitet sie dorthin um. Anmeldung, Prolog und offene Welt funktionieren schon; die Datei ist im PC-Download des Pre-Releases enthalten. Du brauchst dein eigenes Exemplar des PC-Spiels: Die Ubisoft-Connect- und die Steam-Version funktionieren beide.",
    q4: "Wann kann ich es herunterladen?",
    a4: "Jetzt: Das Pre-Release 0.2.0 steht oben auf dieser Seite im Download-Bereich bereit, mit dem Server für Windows, macOS, Linux und Android-Handys, dem PS4-Patch und dem PC-Patch. Noch ist nicht alles getestet; Release 1.0 folgt, sobald die komplette Story durchgespielt ist.",
    q6: "Kann ich das Projekt unterstützen?",
    a6: "Ja, mit einem freiwilligen Beitrag auf Ko-fi. Das Projekt bleibt in jedem Fall kostenlos, und eine Unterstützung schaltet keine zusätzlichen Inhalte frei.",
    kofi: "Auf Ko-fi unterstützen",
    channel: "YouTube-Kanal",
    footContact: "Kontakt",
    footWhy: "Warum",
    whyTitle: "Warum The Crew Reborn?",
    whyText: "Ubisoft hat The Crew im März 2024 abgeschaltet, und seitdem startet das Spiel nicht mehr. Ein Fanprojekt hat die PC-Version zurückgebracht, aber ohne Konsolen, ohne Multiplayer und ohne offenen Code. Deshalb gibt es dieses Projekt.",
    whyBtn: "Die Geschichte lesen",
    disclaimer: "The Crew Reborn steht in keiner Verbindung zu Ubisoft oder Ivory Tower. Das Projekt stellt keine Spieldateien bereit, verbreitet keine und unterstützt keine Raubkopien; du benötigst dein eigenes Exemplar des Spiels und jedes DLCs, das du einschaltest.",
    privacy: "Datenschutz: Diese Seite wird über GitHub Pages bereitgestellt; GitHub kann dabei technische Zugriffsdaten wie IP-Adressen protokollieren. Ein eigener Zähler des Projekts bei Cloudflare zählt Seitenaufrufe ohne Cookies, ohne etwas auf deinem Gerät zu speichern und ohne deine IP-Adresse oder eine Kennung, die dich bei einem späteren Besuch wiedererkennt. Je Aufruf speichert er: die Seite, die verweisende Website und einen Kampagnen-Hinweis, die Sprache der Seite und des Browsers, Land, Region und Stadt, wie Cloudflare sie aus der Verbindung ableitet, Geräteart, Betriebssystem und Browser, eine grobe Fensterbreite, helles oder dunkles Design, wie lange die Seite sichtbar war und wie weit gescrollt wurde, welche Abschnitte ins Bild kamen, sowie Klicks auf Downloads, externe Links, Videos und die Sprachumschaltung. Die Schriften werden von dieser Seite geladen. Videos werden erst nach einem Klick von YouTube geladen.",
    legal: "The Crew Reborn ist ein Fanprojekt von Knutwurst. The Crew ist eine Marke von Ubisoft Entertainment, PlayStation und PS4 sind Marken von Sony Interactive Entertainment. Die Spielbilder sind Standbilder aus eigenen PS4-Aufnahmen des Projekts; das Spiel und seine Inhalte © Ubisoft Entertainment. Diese Seite steht in keiner Verbindung zu Ubisoft oder Sony.",
  };

  const nodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const EN = { dlYoursMaybe: "Probably your system" };
  nodes.forEach((n) => (EN[n.dataset.i18n] = n.textContent));
  const altNodes = Array.from(document.querySelectorAll("[data-i18n-alt]"));
  altNodes.forEach((n) => (EN[n.dataset.i18nAlt] = n.alt));
  const C = window.CONTENT || { videos: [], screenshots: [] };
  let lang = "en";
  let yours = null;  // the visitor's server download (detectPlatform), or null
  // texts that name the current release: their version number follows the latest release on GitHub
  const VERSIONED = new Set(["download", "a4"]);
  let shownVersion = null;
  function versioned(key, text) {
    return shownVersion && VERSIONED.has(key) ? text.replace(/\d+\.\d+\.\d+/, shownVersion) : text;
  }

  function stored() {
    try { return localStorage.getItem("lang"); } catch (e) { return null; }
  }

  function setLang(next) {
    lang = next;
    const dict = lang === "de" ? DE : EN;
    nodes.forEach((n) => { if (dict[n.dataset.i18n]) n.textContent = versioned(n.dataset.i18n, dict[n.dataset.i18n]); });
    altNodes.forEach((n) => { if (dict[n.dataset.i18nAlt]) n.alt = dict[n.dataset.i18nAlt]; });
    document.documentElement.lang = lang;
    document.getElementById("lang").dataset.active = lang;
    document.querySelectorAll("[data-i18n-aria]").forEach((n) => {
      if (!EN[n.dataset.i18nAria]) EN[n.dataset.i18nAria] = n.getAttribute("aria-label");
      if (dict[n.dataset.i18nAria]) n.setAttribute("aria-label", dict[n.dataset.i18nAria]);
    });
    renderGallery();
    markYours();
    document.querySelectorAll("img[data-src-de]").forEach((im) => {
      if (!im.dataset.srcEn) im.dataset.srcEn = im.getAttribute("src");
      im.src = lang === "de" ? im.dataset.srcDe : im.dataset.srcEn;
    });
    renderPlaylist();
    renderDownloads();
    renderCompare();
    try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }
  }

  let current = Math.max(0, C.videos.findIndex((v) => v.id === C.featured));

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
    // for assets/stats.js: a video was started
    try { document.dispatchEvent(new CustomEvent("tcr:video", { detail: v.id })); } catch (e) { /* old browser */ }
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
    // the list scrolls on desktop: show the current episode and drop the fade at the end
    const edge = () => list.classList.toggle("at-end", list.scrollTop + list.clientHeight >= list.scrollHeight - 2);
    const reveal = () => {
      const cur = list.querySelector("[aria-current]");
      if (cur && list.scrollHeight > list.clientHeight) list.scrollTop = cur.parentElement.offsetTop - list.offsetTop;
      edge();
    };
    list.onscroll = edge;
    requestAnimationFrame(reveal);
    if (document.readyState !== "complete") window.addEventListener("load", reveal, { once: true });
    const link = document.getElementById("seriesLink");
    if (C.playlist) link.href = "https://www.youtube.com/playlist?list=" + encodeURIComponent(C.playlist);
    link.hidden = false;
    if (document.querySelector("#player iframe")) markCurrent();
    else showVideo(current, false);
  }

  // Download section: the newest release (pre-releases too) from GitHub; the links in the page are the fallback.
  const RELEASES = "https://api.github.com/repos/thecrewreborn/server/releases?per_page=5";
  let release = null;

  function size(bytes) {
    const mb = bytes / 1048576;
    const n = mb >= 1 ? mb.toFixed(1) + " MB" : Math.max(1, Math.round(bytes / 1024)) + " KB";
    return lang === "de" ? n.replace(".", ",") : n;
  }

  function renderDownloads() {
    const meta = document.getElementById("dlMeta");
    if (!meta) return;
    const r = release || { tag_name: "v0.2.0", prerelease: true, published_at: null, assets: [] };
    const parts = ["Version " + r.tag_name.replace(/^v/, ""), r.prerelease ? (lang === "de" ? "Pre-Release" : "Pre-release") : "Release"];
    if (r.published_at) {
      parts.push(new Date(r.published_at).toLocaleDateString(lang === "de" ? "de-DE" : "en-GB",
        { day: "numeric", month: "long", year: "numeric" }));
    }
    meta.textContent = parts.join(" · ");
    if (release) {
      shownVersion = release.tag_name.replace(/^v/, "");
      const dict = lang === "de" ? DE : EN;
      nodes.forEach((n) => { if (VERSIONED.has(n.dataset.i18n) && dict[n.dataset.i18n]) n.textContent = versioned(n.dataset.i18n, dict[n.dataset.i18n]); });
    }
    document.querySelectorAll("[data-platform]").forEach((a) => {
      const re = new RegExp("^TheCrewReborn-Server-.+-" + a.dataset.platform + "\\.(zip|apk)$");
      const asset = r.assets.find((x) => re.test(x.name));
      if (!asset) return;
      a.href = asset.browser_download_url;
      a.querySelector(".dl-size").textContent = size(asset.size);
    });
    document.querySelectorAll("[data-asset]").forEach((a) => {
      const asset = r.assets.find((x) => x.name.startsWith("TheCrewReborn-" + a.dataset.asset + "-"));
      if (!asset) return;
      a.href = asset.browser_download_url;
      a.querySelector(".dl-size").textContent = size(asset.size);
    });
    if (release) document.getElementById("dlNotes").href = release.html_url;
  }

  // The visitor's system, to mark the matching server download: the OS from the browser, the CPU where the browser
  // tells it (Chromium's client hints; aarch64 or x86_64 in a Linux user agent). Android gets the app; iPhones, iPads
  // and Chromebooks get no mark.
  // Without a CPU hint Windows and Linux fall back to x64, marked as a guess; macOS needs none (one universal build).
  async function detectPlatform() {
    const nav = navigator, ua = nav.userAgent || "";
    const uad = nav.userAgentData;
    if (/Android/i.test(ua) || (uad && uad.platform === "Android")) return { platform: "android", sure: true };
    if ((uad && uad.mobile) || /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && nav.maxTouchPoints > 1)) return null;
    const os = (uad && uad.platform) || nav.platform || ua;
    let arch = null;
    if (uad && uad.getHighEntropyValues) {
      try { arch = (await uad.getHighEntropyValues(["architecture"])).architecture || null; } catch (e) { arch = null; }
    }
    if (!arch && /aarch64|arm64/i.test(ua)) arch = "arm";
    if (!arch && /Linux/.test(ua) && /x86_64|amd64/i.test(ua)) arch = "x86";  // Windows user agents say x64 on ARM too
    const sure = arch === "arm" || arch === "x86";
    if (/Mac/i.test(os)) return { platform: "macos-universal", sure: true };
    if (/Win/i.test(os)) return { platform: arch === "arm" ? "windows-arm64" : "windows-x64", sure: sure };
    if (/Linux|X11/i.test(os) && !/CrOS/.test(ua)) return { platform: arch === "arm" ? "linux-arm64" : "linux-x64", sure: sure };
    return null;
  }
  // The big download button: the server build for the visitor's system, taken from its link in the system list.
  function markYours() {
    let hit = null;
    document.querySelectorAll("[data-platform]").forEach((a) => {
      const on = !!yours && a.dataset.platform === yours.platform;
      a.classList.toggle("dl-match", on);
      if (on) hit = a;
    });
    const btn = document.getElementById("dlPrimary");
    if (!btn) return;
    btn.hidden = !hit;
    if (!hit) return;
    const dict = lang === "de" ? DE : EN;
    btn.href = hit.href;
    btn.querySelector(".dl-you").textContent = dict[yours.sure ? "dlYoursLabel" : "dlYoursMaybe"] || EN.dlYoursLabel;
    document.getElementById("dlPrimaryName").textContent = (lang === "de" ? "Herunterladen: " : "Download: ") + hit.querySelector("span").textContent;
    document.getElementById("dlPrimarySize").textContent = hit.querySelector(".dl-size").textContent;
    btn.dataset.click = hit.dataset.click;
  }
  detectPlatform().then((p) => { yours = p; markYours(); }).catch(() => {});

  fetch(RELEASES).then((r) => (r.ok ? r.json() : [])).then((list) => {
    release = list.find((r) => !r.draft && r.assets.length) || null;
    renderDownloads();
    markYours();
  }).catch(() => {});

  // Lightbox: arrows, arrow keys and a swipe step through the screenshots, wrapping around at both ends
  const lb = document.getElementById("lightbox");
  let shot = 0;
  let shots = C.screenshots;  // the list the lightbox steps through: the game screenshots or the admin page's
  function showShot(i) {
    const n = shots.length;
    shot = (i + n) % n;
    const s = shots[shot];
    document.getElementById("lbImg").src = s["src_" + lang] || s.src;
    document.getElementById("lbImg").alt = s[lang] || s.en;
    document.getElementById("lbCap").textContent = s[lang] || s.en;
    document.getElementById("lbCount").textContent = (shot + 1) + " / " + n;
    [shot - 1, shot + 1].forEach((k) => { const q = shots[(k + n) % n]; new Image().src = q["src_" + lang] || q.src; });
  }
  function openShot(i, list) {
    shots = list || C.screenshots;
    showShot(i);
    lb.hidden = false;
    document.getElementById("lbNext").focus();
  }
  function closeShot() { lb.hidden = true; }
  lb.addEventListener("click", (e) => {
    if (e.target.id === "lbPrev") showShot(shot - 1);
    else if (e.target.id === "lbNext") showShot(shot + 1);
    else if (e.target === lb || e.target.id === "lbClose") closeShot();
  });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeShot();
    else if (e.key === "ArrowLeft") showShot(shot - 1);
    else if (e.key === "ArrowRight") showShot(shot + 1);
  });
  let touchX = null;
  lb.addEventListener("touchstart", (e) => { touchX = e.touches.length === 1 ? e.touches[0].clientX : null; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 50) showShot(dx < 0 ? shot + 1 : shot - 1);
  });

  // The server screenshots (phones and the desktop page) open in the lightbox, captions in the page's language.
  document.querySelectorAll(".ui-shot").forEach((b, i, all) => {
    b.addEventListener("click", () => {
      const list = Array.from(all).map((x) => {
        const cap = x.querySelector("span").textContent;
        return { src: x.querySelector("img").currentSrc || x.querySelector("img").src, en: cap, de: cap };
      });
      openShot(i, list);
    });
  });

  function renderGallery() {
    fillGallery("gallery", C.screenshots);
    document.getElementById("shots").hidden = C.screenshots.length === 0;
    fillGallery("adminGallery", C.admin || []);
  }
  function fillGallery(id, list) {
    const g = document.getElementById(id);
    if (!g) return;
    g.replaceChildren();
    list.forEach((s, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "shot";
      const img = document.createElement("img");
      img.src = s["src_" + lang] || s.src;
      img.alt = s[lang] || s.en || "";
      img.loading = "lazy";
      const cap = document.createElement("span");
      cap.textContent = s[lang] || s.en || "";
      b.append(img, cap);
      b.onclick = () => openShot(i, list);
      g.append(b);
    });
  }

  // 1.00 vs 1.21: one pair at a time, a slider reveals the 1.00 image from the left
  let pair = 0;
  function renderCompare() {
    const box = document.getElementById("vcThumbs");
    const list = C.compare || [];
    if (!box || !list.length) return;
    const p = list[pair];
    const img100 = document.getElementById("vcImg100");
    const img121 = document.getElementById("vcImg121");
    img100.src = "assets/compare/" + p.name + "-100.webp";
    img121.src = "assets/compare/" + p.name + "-121.webp";
    img100.alt = (p[lang] || p.en) + " (1.00)";
    img121.alt = (p[lang] || p.en) + " (1.21)";
    document.getElementById("vcCap").textContent = p[lang] || p.en;
    box.textContent = "";
    list.forEach((q, k) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "vc-thumb";
      if (k === pair) b.setAttribute("aria-current", "true");
      const im = document.createElement("img");
      im.src = "assets/compare/" + q.name + "-100.webp";
      im.alt = "";
      im.loading = "lazy";
      const s = document.createElement("span");
      s.textContent = q[lang] || q.en;
      b.append(im, s);
      b.onclick = () => { pair = k; renderCompare(); };
      box.append(b);
    });
  }
  const vcRange = document.getElementById("vcRange");
  if (vcRange) vcRange.addEventListener("input", () =>
    document.getElementById("vcFrame").style.setProperty("--pos", vcRange.value + "%"));

  document.getElementById("lang").addEventListener("click", () => setLang(lang === "de" ? "en" : "de"));
  // links elsewhere on the page that play an episode in the player
  document.querySelectorAll("[data-play]").forEach((a) => a.addEventListener("click", () => {
    const i = C.videos.findIndex((v) => v.id === a.dataset.play);
    if (i >= 0) showVideo(i, true);
  }));
  const asked = new URLSearchParams(location.search).get("lang");
  const saved = asked === "de" || asked === "en" ? asked : stored();
  setLang(saved || ((navigator.language || "").toLowerCase().startsWith("de") ? "de" : "en"));
})();
