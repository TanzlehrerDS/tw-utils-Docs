# tw-utils Doku

Willkommen zur Dokumentation von **tw-utils**.

<div class="yt-consent yt-consent--home" data-video-id="mSUZ7KQLL0o" data-thumb="/assets/what-is-tw-utils-thumb.png" data-alt="Was ist tw-utils? — Vorschaubild"></div>

<div class="home-cards" markdown>

<div class="home-card" markdown>
<div class="home-card__icon"><img src="/assets/logo.png" alt="tw-utils Logo"></div>
<div class="home-card__body" markdown>
### tw-utils Discordbot
Nützliche Tools für euren Stammes-Discord.
<p class="home-card__actions" markdown>
[Bot einladen](https://discord.com/oauth2/authorize?client_id=1457061148980547715&permissions=8&integration_type=0&scope=bot+applications.commands){ target=_blank rel=noopener }
[Quick-Setup-Guide](discord-bot/quick-setup.md)
</p>
</div>
</div>

<div class="home-card" markdown>
<div class="home-card__icon home-card__icon--community"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"/></svg></div>
<div class="home-card__body" markdown>
### Community Discord
Fragen, Feedback und Austausch rund um tw-utils.
<p class="home-card__actions" markdown>
[Discord beitreten](https://discord.com/invite/rfnGvvGs78){ target=_blank rel=noopener }
</p>
</div>
</div>

<div class="home-card" markdown>
<div class="home-card__icon home-card__icon--api"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="8 6 3 12 8 18"/><polyline points="16 6 21 12 16 18"/><line x1="13.5" y1="4.5" x2="10.5" y2="19.5"/></svg></div>
<div class="home-card__body" markdown>
### API-Dokumentation
Für Script-Entwickler: Endpunkte, Authentifizierung und Beispiele.
<p class="home-card__actions" markdown>
[Zur API-Doku](https://tw-utils.net/api/v1/docs){ target=_blank rel=noopener }
</p>
</div>
</div>

</div>

## FAQ

### Erste Schritte & Account

??? question "Wie verknüpfe ich meinen DS-Account?"
    Wechsle in eurem Stammes-Discord in den Kanal `#⚫-bot-config` und klicke auf `Account-Verification`. Der Bot führt dich durch den Wizard: Spielername eingeben, Code in dein Ingame-Profil eintragen, mit dem `Verify`-Button bestätigen.

    → [Account-Verifizierung](discord-bot/verifizierung.md)

??? question "Brauche ich einen Account — geht es auch ohne Discord?"
    Nein, der Discord-Login ist der einzige Weg auf die Website; ein Registrierungs- oder Passwortformular gibt es nicht. tw-utils fragt bei Discord **keine E-Mail-Adresse** ab — übernommen werden nur deine Discord-ID, dein Name und dein Avatar.

    → [Quick-Setup-Guide](discord-bot/quick-setup.md)

??? question "Mein Verifizierungs-Code funktioniert nicht — was kann ich tun?"
    Der Code `TWU-VERIFY-XXXXXX` ist **15 Minuten** gültig und erlaubt **3 Versuche**; danach startest du den Wizard einfach neu. Der Bot liest deine **öffentliche** Profilseite — das Profil muss also gespeichert sein, bevor du auf `Verify` klickst. Nach erfolgreicher Prüfung darfst du den Code wieder aus dem Profil entfernen.

    → [Account-Verifizierung](discord-bot/verifizierung.md)

??? question "Kann ich mehrere Ingame-Accounts verknüpfen (Dual, Sitter)?"
    Ja. Pro Server und Welt kannst du beliebig viele Accounts verknüpfen — alle Melde-Dialoge zeigen dir dann ein Auswahlmenü, für welchen Account du meldest. Umgekehrt dürfen auch mehrere Discord-Nutzer an demselben Ingame-Account hängen.

    → [Account-Verifizierung](discord-bot/verifizierung.md)

??? question "Was passiert mit meinen Daten, wenn ich den Discord-Server verlasse?"
    **Gelöscht** wird alles Persönliche: deine Account-Verknüpfungen, deine tw-utils-Rollen, offene Verifizierungen, die Benachrichtigungs-Einstellungen für diesen Server und der API-Key dieses Servers.

    **Erhalten** bleibt, was dem Stamm gehört: AG-Meldungen, Abschickzeiten, Off-Ausschlüsse, Bunker-Berichte und Truppenzahlen. Dort verschwindet lediglich die Zuordnung zu deinem Discord-Konto — die Daten selbst bleiben für die Planung nutzbar.

### Welt, Zeiten & Datenaktualität

??? question "Warum zeigt tw-utils andere Uhrzeiten an als meine Systemuhr?"
    Alle Zeiten laufen grundsätzlich in der Zeitzone der **gewählten Spielwelt**, nie in deiner Browser- oder Systemzeit. Die Welt bestimmt über ihren Markt (de/ch/en) die Zeitzone; wechselst du oben die Welt, stellen sich alle Anzeigen sofort um. Das gilt auch für alles, was du eingibst — Abschick- und Ankunftszeiten sind immer Serverzeit.

??? question "Wie aktuell sind die Dorf- und Spielerdaten?"
    Die Weltdaten sind ein **stündlich aktualisierter Datenstand**. Frisch gegründete oder eroberte Dörfer, Umbenennungen und Stammeswechsel können deshalb bis zu einer Stunde fehlen — das ist auch der häufigste Grund, warum eine Verifizierung „Account nicht gefunden" meldet. Spieler- und Stammesnamen in bereits gespeicherten Plänen werden beim nächsten Datenlauf automatisch nachgezogen.

??? question "Wir stellen im Bot die Welt um — was passiert dann?"
    Ein Weltwechsel ist ein **vollständiger Reset des Servers**, kein einfacher Umschalter. Der Bot löscht zuerst die Kanäle und Kategorien aller installierten Module und leert danach sämtliche Serverdaten: Container und Pläne, Truppen, laufende Befehle, **alle Account-Verknüpfungen**, alle vergebenen tw-utils-Rollen, Umfragen, die Konfigurationen von Bunker-, Sitting- und Such-System sowie alle API-Keys.

    Danach müssen sich **alle Mitglieder neu verifizieren**, die Rollen neu vergeben und die Module neu installiert werden. Dasselbe passiert, wenn der Bot vom Server entfernt wird.

    → [Modul-Einrichtung](discord-bot/modul-verwaltung.md)

??? question "Meine Welt fehlt in der Auswahl — oder der Bot kennt sie nicht."
    Wählbar sind nur Welten, die tw-utils bereits in seinen Weltdaten führt. Eine brandneue Welt erscheint deshalb erst nach dem nächsten Datenlauf. Geschlossene Welten verschwinden umgekehrt aus dem Dropdown — die dort gespeicherten Pläne bleiben aber erhalten und gehen nicht verloren.

    → [Quick-Setup-Guide](discord-bot/quick-setup.md)

### Rollen & Berechtigungen

??? question "Wie erhalte ich als Stammesführung Zugriff auf den Leader-View?"
    In zwei Schritten: (1) Verknüpfe deinen Tribalwars-Account im `#⚫-bot-config`-Kanal über `Account-Verification`. (2) Du brauchst eine tw-utils-Rolle. Gibt es auf dem Server schon einen `TWU-Leader`, vergibt der sie dir direkt im Leader-View unter `Mitglieder` → `Verwalten`. Ist noch niemand Leader, ernennt ein Discord-Admin den ersten über `Manage Access to Leader-View` → `Grant Access`.

    → [Leader-View — Berechtigung](leader-view/uebersicht.md)

??? question "Reichen meine Discord-Administrator-Rechte, um tw-utils zu benutzen?"
    Im **Discordbot** ja: Wer die Discord-Berechtigung `Administrator` hat, kommt dauerhaft an alle Verwaltungs-Buttons heran. Auf der **Website** nicht — den Leader-View öffnet nur, wer eine tw-utils-Rolle besitzt: **TWU-Leader** für Bot-Konfiguration und Module, **TWU-Bunker** für Bunker-Anträge, **TWU-Troops** für Truppendaten, **TWU-Planner** für die Planung. Vergeben werden sie im Leader-View unter `Mitglieder` → `Verwalten`; den ersten TWU-Leader ernennt ein Discord-Admin über `Manage Access to Leader-View` → `Grant Access`. Die frühere Discord-Rolle **TWU-Mod** gibt es nicht mehr.

    → [Berechtigungskonzept](discord-bot/berechtigungskonzept.md)

??? question "Ich habe keine tw-utils-Rolle — was darf ich trotzdem?"
    Jedes verifizierte Mitglied darf auch ganz ohne Rolle: die **eigenen** geplanten Befehle einsehen, die **eigenen** laufenden Befehle hochladen und einsehen sowie die **eigenen** Truppen einsehen. „Gar kein Zugriff" gibt es also nicht — Rollen erweitern den Blick auf die Daten der anderen.

    → [Berechtigungskonzept](discord-bot/berechtigungskonzept.md)

??? question "Welche Rolle brauche ich wofür?"
    Die Rollen bauen aufeinander auf:

    - **TWU-Troops** — Truppendaten des Stammes
    - **TWU-Bunker** — Truppendaten **plus** Bunker-Information-System
    - **TWU-Planner** — Truppendaten **plus** Planung und alle Lesezugriffe
    - **TWU-Leader** — alles davon, dazu Rollenvergabe, Mitgliederverwaltung, Bot-Konfiguration und Module

    → [Berechtigungskonzept](discord-bot/berechtigungskonzept.md)

??? question "Warum kann ich mir die Leader-Rolle nicht selbst entziehen?"
    Zwei Schutzregeln verhindern, dass sich ein Server versehentlich aussperrt: Niemand kann sich selbst die Leader-Rolle nehmen, und der **letzte** verbliebene Leader kann nicht entfernt werden. Es muss also immer ein anderer Leader die Änderung vornehmen. Verlässt jemand den Discord-Server, greifen die Regeln bewusst nicht.

    → [Leader-View — Mitglieder](leader-view/mitglieder.md)

??? question "Warum reagiert der Bot in meinem Kanal nicht — und warum verschwinden meine Nachrichten?"
    Jede Bot-Funktion ist an ihren eingerichteten Kanal gebunden; schreibst du woanders, verweist der Bot auf den richtigen Kanal. In den Modul-Kanälen selbst wird zusätzlich jede getippte Nachricht sofort wieder gelöscht — dort gibt es einen kurzen Hinweis, dass die Buttons zu benutzen sind. Diese Kanäle sind reine Button-Oberflächen und keine Chats.

    → [Modul-Einrichtung](discord-bot/modul-verwaltung.md)

### Discordbot: Meldungen & Bunker

??? question "Wie melde ich Adelsgeschlechter, Abschickzeiten und wie plane ich Offs aus?"
    Über den tw-utils Discordbot im Kanal `#⚫-queries` deines Stammes-Discords. Dort gibt es drei Buttons:

    - `Snob Report` — Adelsgeschlechter melden
    - `Launch Times` — eigene Abschickzeitfenster eintragen
    - `Off-Exclusion` — Herkunftsdörfer ausschließen, die der Off-Planer nicht nutzen soll

    Jeder Button hat ein Sub-Menü mit `Add` / `Show` / `Delete`.

    Voraussetzung ist eine **laufende Stammes-Umfrage**: Gibt es keine, lehnt der Bot die Meldung ab. Laufen mehrere, fragt er zuerst, für welche du melden möchtest.

    → [Planning-System](discord-bot/planning-system.md)

??? question "Wie beantrage ich einen Bunker?"
    Wechsle in den Kanal `#⚫-request-bunker` und klicke auf den Button `Request Bunker`. Trage Koordinate(n), gewünschte Dual-Stärke und eine Begründung ein. Der Bot legt pro Koordinate einen Anfrage-Kanal an, in dem ein `TWU-Bunker` genehmigt oder ablehnt.

    → [Bunker-Information-System](discord-bot/bunker-info.md)

??? question "Wie beantrage ich eine Aufstockung für einen Bunker?"
    Im selben Kanal `#⚫-request-bunker` gibt es einen separaten Button `Request Top-Up`. Trage die Koordinate(n) des bereits bestehenden Bunkers und die **zusätzliche** Dual-Stärke ein. Der Bot erstellt einen Top-Up-Anfrage-Kanal pro Koordinate, in dem ein `TWU-Bunker` die Aufstockung freigibt.

    → [Bunker-Information-System](discord-bot/bunker-info.md)

??? question "„Es läuft gerade keine Umfrage" — was bedeutet das?"
    Meldungen hängen immer an einer laufenden Stammes-Umfrage. Eine Umfrage endet automatisch, sobald ihre Frist verstrichen ist — sie kann in der Übersicht noch als aktiv erscheinen, nimmt aber nichts mehr entgegen. In dem Fall muss die Stammesführung eine neue Umfrage starten.

    → [Leader-View — Stammes-Umfragen](leader-view/stammes-umfragen.md)

??? question "Warum finde ich meine alte Meldung nicht mehr — und warum kann ich fremde nicht löschen?"
    Jede Meldung gehört zu **einer** bestimmten Umfrage. `Show` und `Delete` zeigen deshalb immer nur die Einträge der gerade gewählten Umfrage — dieselbe Koordinate kann in mehreren Umfragen liegen. Löschen darf außerdem nur, wem der gemeldete Account gehört; bei Abschickzeiten kommt zusätzlich die Planungsleitung an fremde Einträge heran.

    → [Planning-System](discord-bot/planning-system.md)

### Truppen & Uploads

??? question "Welches Format muss die hochgeladene Truppendatei haben?"
    Eine **`.txt`-Datei** mit kommagetrennten Werten. Sie wird am einfachsten über das Ingame-Schnellleisten-Skript [„Download Tribe Info"](https://forum.tribalwars.net/index.php?threads/download-tribe-info.285469/) erzeugt. Erwartet wird eine Header-Zeile (`Coords,Player,spear,sword,axe,…,snob`), gefolgt von einer Zeile pro Dorf mit Koordinaten und Truppenanzahlen.

    Der **Inhalt** ist zwar CSV, die **Dateiendung** muss aber `.txt` sein — eine Datei namens `truppen.csv` wird abgelehnt und muss vorher umbenannt werden.

    → [Leader-View — Truppen](leader-view/truppen.md)

??? question "Wie lange bleiben hochgeladene Truppendaten gespeichert?"
    **5 Tage.** Ein täglicher Aufräumlauf entfernt ältere Uploads — getrennt je Stamm und je Erfassungsart. Für eine belastbare Planung solltest du die Truppen also regelmäßig neu hochladen.

    → [Leader-View — Truppen](leader-view/truppen.md)

??? question "Warum überschreibt mein neuer Upload die alten Truppen nicht?"
    „Truppen insgesamt" und „Truppen im Dorf" sind **zwei getrennte Datensätze**. Ein Upload ersetzt immer nur die Daten derselben Erfassungsart desselben Stammes — lädst du versehentlich in die andere Sicht hoch, steht der alte Datensatz unverändert daneben. Auch beim Löschen musst du die Erfassungsart angeben.

    → [Leader-View — Truppen](leader-view/truppen.md)

### Planung, Berechnung & Pläne

??? question "Warum bricht meine Berechnung nach etwa 14 Minuten ab?"
    Es gibt ein hartes Zeitlimit von 14 Minuten pro Berechnung. Bei sehr großen Planungen hilft es, die Zahl der Ziele oder der Herkunftsdörfer zu verringern und in mehreren Läufen zu planen.

    → [Off-Planungstool — Berechnung](off-planner/schritt7-berechnung.md)

??? question "Ich habe den Tab geschlossen — bekomme ich das Ergebnis zurück?"
    Nein. Beim Verlassen der Seite wird eine laufende Berechnung abgebrochen, und fertige Ergebnisse verfallen ohnehin nach 24 Stunden. Ein Ergebnis, das du behalten willst, musst du als Plan speichern — gespeicherte Pläne bleiben dauerhaft erhalten.

    → [Gespeicherte Pläne](meine-plaene/gespeicherte-plaene.md)

??? question "Meine Mitspieler sehen den veröffentlichten Plan nicht."
    Ausgeliefert werden nur **aktive** Container — sie steuern zugleich, ob Erinnerungen verschickt werden. Ist der Container inaktiv, sieht ihn niemand außer der Stammesführung. Den Schalter findest du in der Container-Übersicht.

    → [Veröffentlichte Container](meine-plaene/container.md)

??? question "Was ist der „Gesamtplan"?"
    Neben den Plänen der einzelnen Spieler legt tw-utils bei jeder Veröffentlichung zusätzlich einen Sammelplan mit **allen** Befehlen an. Er heißt immer `Gesamtplan`, steht in jeder Liste an erster Stelle und ist als Gesamtüberblick für die Stammesführung gedacht.

    → [Leader-View — Planung](leader-view/planung.md)

??? question "Was passiert mit den DS-Ultimate-Plänen, wenn ich einen Container lösche?"
    Die Pläne selbst **bleiben bei DS-Ultimate bestehen** — ein einmal angelegter DSU-Plan lässt sich über die Schnittstelle nicht mehr löschen. tw-utils **leert** ihn beim Löschen des Containers nur: alle Befehle werden aus den zugehörigen DSU-Plänen entfernt.

    Bereits verteilte Links funktionieren also weiter, zeigen danach aber einen leeren Plan. Wer den Plan endgültig loswerden will, muss ihn direkt bei DS-Ultimate löschen.

    → [Leader-View — Planung](leader-view/planung.md)

### Benachrichtigungen

??? question "Ich habe Erinnerungen aktiviert, bekomme aber keine DM."
    Drei Dinge müssen zusammenpassen — der Reihe nach prüfen:

    1. In den Discord-Datenschutzeinstellungen **dieses Servers** müssen Direktnachrichten erlaubt sein. Sind sie blockiert, gibt es keinen Ersatzweg — der Bot kann dich dann gar nicht erreichen.
    2. Der Schalter für die jeweilige Benachrichtigungsart muss an sein.
    3. Zusätzlich muss der Schalter **für diesen Server** an sein.

    → [Benachrichtigungen](benachrichtigungen.md)

??? question "Warum kam nur eine DM für mehrere Befehle — und wie stelle ich die Vorlaufzeit ein?"
    Alle fälligen Befehle einer Welt kommen gesammelt in **einer** Nachricht; danach greift eine Sperrfrist, damit dich der Bot nicht im Minutentakt anschreibt. Einstellbar sind eine Vorlaufzeit von **1 bis 15 Minuten** (Standard 5) und eine Sperrfrist von **1 bis 60 Minuten** (Standard 15). Änderst du Account-Verknüpfungen, wirkt sich das auf die Erinnerungen erst innerhalb der nächsten Stunde aus.

    → [Benachrichtigungen](benachrichtigungen.md)

??? question "Warum sind die Nachrichten des Bots immer auf Englisch?"
    Das ist bewusst so: Der Discordbot antwortet durchgängig auf Englisch, unabhängig von der Welt und von der Sprache, die du auf der Website eingestellt hast. Die Website selbst gibt es auf Deutsch und Englisch.

    → [Benachrichtigungen](benachrichtigungen.md)

### Meine Befehle, Share-Links & API

??? question "Ich habe einen Befehl geändert — warum steht im geteilten Link noch der alte Stand?"
    Ein Share-Link ist eine **eingefrorene Momentaufnahme** des Zeitpunkts, an dem du ihn erzeugt hast. Spätere Änderungen sowie neue oder gelöschte Befehle erscheinen darin nicht — für einen aktuellen Stand erzeugst du einfach einen neuen Link. Links gelten höchstens **7 Tage**; danach meldet die Seite, dass der Link abgelaufen ist.

??? question "Wie bekomme ich einen API-Key — und warum sehe ich das Feld nicht?"
    Den Key erzeugst du unter „Meine Accounts" auf der Karte des jeweiligen Servers. Zwei Voraussetzungen: Du musst auf **diesem** Server verifiziert sein, und die Karte muss zur aktuell eingestellten Welt des Servers gehören. Es gibt genau **einen Key pro Nutzer und Server**.

    → [API-Dokumentation](https://tw-utils.net/api/v1/docs){ target=_blank rel=noopener }

??? question "Ich habe meinen API-Key verloren — wo kann ich ihn nachsehen?"
    Gar nicht. Der Key wird **nur ein einziges Mal** im Klartext angezeigt, direkt nach dem Erzeugen — gespeichert wird nur eine Prüfsumme. Über „Neu generieren" bekommst du jederzeit einen Ersatz; der alte Key wird damit aber sofort ungültig und muss in allen Skripten ausgetauscht werden.

    → [API-Dokumentation](https://tw-utils.net/api/v1/docs){ target=_blank rel=noopener }

??? question "Mein Skript bekommt „429 / zu viele Anfragen" — hilft ein neuer Key?"
    Nein. Die Grenzen hängen an dir und dem Server, nicht am Key — ein neu generierter Key setzt sie nicht zurück. Es gilt: Truppen-Upload einmal alle **5 Minuten** je Stamm und Erfassungsart, laufende Befehle einmal pro **Minute** je Spieler, Abfragen **eine pro Sekunde**. Ein wegen Formatfehlern abgelehnter Upload verbraucht das Kontingent nicht.

    → [API-Dokumentation](https://tw-utils.net/api/v1/docs){ target=_blank rel=noopener }
