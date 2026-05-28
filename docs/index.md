# tw-utils Doku

Willkommen zur Dokumentation von **tw-utils**.

<div class="home-cards" markdown>

<div class="home-card" markdown>
<div class="home-card__icon"><img src="assets/logo.png" alt="tw-utils Logo"></div>
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

</div>

## FAQ

??? question "Wie verknüpfe ich meinen DS-Account?"
    Wechsle in eurem Stammes-Discord in den Kanal `#⚫-bot-config` und klicke auf `Account-Verification`. Der Bot führt dich durch den Wizard: Spielername eingeben, Code in dein Ingame-Profil eintragen, mit dem `Verify`-Button bestätigen.

    → [Account-Verifizierung](discord-bot/verifizierung.md)

??? question "Wie melde ich Adelsgeschlechter, Abschickzeiten und wie plane ich Offs aus?"
    Über den tw-utils Discordbot im Kanal `#⚫-queries` deines Stammes-Discords. Dort gibt es drei Buttons:

    - `Snob Report` — Adelsgeschlechter melden
    - `Launch Times` — eigene Abschickzeitfenster eintragen
    - `Off-Exclusion` — Herkunftsdörfer ausschließen, die der Off-Planer nicht nutzen soll

    Jeder Button hat ein Sub-Menü mit `Add` / `Show` / `Delete`.

    → [Planning-System](discord-bot/planning-system.md)

??? question "Wie beantrage ich einen Bunker?"
    Wechsle in den Kanal `#⚫-request-bunker` und klicke auf den Button `Request Bunker`. Trage Koordinate(n), gewünschte Dual-Stärke und eine Begründung ein. Der Bot legt pro Koordinate einen Anfrage-Kanal an, in dem ein TWU-Mod genehmigt oder ablehnt.

    → [Bunker-Information-System](discord-bot/bunker-info.md)

??? question "Wie beantrage ich eine Aufstockung für einen Bunker?"
    Im selben Kanal `#⚫-request-bunker` gibt es einen separaten Button `Request Top-Up`. Trage die Koordinate(n) des bereits bestehenden Bunkers und die **zusätzliche** Dual-Stärke ein. Der Bot erstellt einen Top-Up-Anfrage-Kanal pro Koordinate, in dem TWU-Mods die Aufstockung freigeben.

    → [Bunker-Information-System](discord-bot/bunker-info.md)

??? question "Wie erhalte ich als Stammesführung Zugriff auf den Leader-View?"
    In zwei Schritten: (1) Verknüpfe deinen Tribalwars-Account im `#⚫-bot-config`-Kanal über `Account-Verification`. (2) Ein Discord-Admin vergibt dir Leader-Rechte über den Button `Manage Access to Leader-View` → `Grant Access`. Danach hast du auf [tw-utils.net](https://tw-utils.net) Zugriff auf den Leader-View.

    → [Leader-View — Berechtigung](leader-view/uebersicht.md)

??? question "Wieso kann ich einige Buttons des tw-utils Discordbots nicht benutzen, obwohl ich Administrator-Rechte auf dem Discordserver habe?"
    Discord-Administrator-Rechte sind nur für die initiale Bot-Einrichtung relevant. Für die laufende Verwaltung (Module aktivieren, Bunker-Anträge bearbeiten, Truppendaten hochladen) braucht es die Rolle **TWU-Mod** — eine separate Discord-Rolle, die euer Server-Admin manuell vergibt.

    → [Berechtigungskonzept](discord-bot/berechtigungskonzept.md)

??? question "Welches Format muss die hochgeladene Truppendatei haben?"
    Eine **TXT- oder CSV-Datei** mit kommagetrennten Werten. Sie wird am einfachsten über das Ingame-Schnellleisten-Skript [„Download Tribe Info"](https://forum.tribalwars.net/index.php?threads/download-tribe-info.285469/) erzeugt. Erwartet wird eine Header-Zeile (`Coords,Player,spear,sword,axe,…,snob`), gefolgt von einer Zeile pro Dorf mit Koordinaten und Truppenanzahlen.

    → [Leader-View — Truppen](leader-view/truppen.md)
