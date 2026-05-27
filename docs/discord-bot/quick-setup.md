# Quick-Setup-Guide

![Discord-Bot in der Server-Liste](../assets/discordbot/quick-setup-guide/01_discordbot.png){ .screenshot }

Dieser Guide führt dich in sechs Schritten durch die Erstinstallation des Discord-Bots auf eurem Stammes-Discord — vom Einladen des Bots bis zum ersten installierten Modul. Detail-Erklärungen zu den einzelnen Themen findest du auf den jeweils verlinkten Unterseiten.

!!! warning "Voraussetzung"
    Für das Setup werden **Administrator-Rechte** auf dem Discord-Server benötigt.

## 1. Bot zum Discord-Server einladen

Lade den Bot über den folgenden Link auf euren Stammes-Discord ein. Du wirst dabei automatisch zu Discord weitergeleitet und musst dort den gewünschten Server auswählen, auf dem der Bot installiert werden soll. Bestätige anschließend die abgefragten Berechtigungen.

[Bot zum Discord einladen](https://discord.com/oauth2/authorize?client_id=1457061148980547715&permissions=8&integration_type=0&scope=bot+applications.commands){ .cta-discord target=_blank rel=noopener }

!!! info "Berechtigungen"
    Die im Invite-Link enthaltenen Rechte sind notwendig, damit der Bot die Setup-Kategorie und den Konfigurations-Kanal selbständig anlegen kann. Werden Berechtigungen entzogen, funktioniert das Setup nicht mehr vollständig.

## 2. Automatisch erstellter Konfigurations-Kanal

Direkt nach dem Einladen legt der Bot eigenständig die Kategorie `⚙️ TWU-SETUP` mit dem Kanal `#⚫-bot-config` auf eurem Discord-Server an. Dieser Kanal ist die **zentrale Steuerung** für den Bot — alle weiteren Setup-Schritte sowie die spätere Verwaltung der Module laufen ausschließlich dort über Buttons ab.

![Automatisch erstellter Konfigurations-Kanal](../assets/discordbot/quick-setup-guide/02_channel_creation.png){ .screenshot }

## 3. Spielwelt festlegen

Wechsle in den Kanal `#⚫-bot-config` und klicke dort auf den Button `Bot-Configuration`. Es öffnet sich daraufhin ein neues Menü mit den verfügbaren Konfigurations-Optionen.

![Bot-Configuration Button](../assets/discordbot/quick-setup-guide/03_bot_configuration_button.png){ .screenshot }

Klicke in diesem Menü auf den Button `Set World`. Es erscheint ein Eingabe-Fenster (Modal), in dem du die Spielwelt eintragen kannst.

![Set World Button](../assets/discordbot/quick-setup-guide/04_set_world_button.png){ .screenshot }

Trage im Feld `World Name` die Spielwelt ein, in der euer Stamm spielt (z. B. `de236` oder `en154`). Klicke anschließend auf `Absenden`, um die Eingabe zu speichern. Der Bot ist ab jetzt mit eurer Spielwelt verknüpft.

![Set World Modal](../assets/discordbot/quick-setup-guide/05_set_world_modal.png){ .screenshot }

## 4. Eigenen Account verifizieren

Klicke im Kanal `#⚫-bot-config` auf den Button `Account-Verification`. Damit öffnest du das Menü zur Verifizierung deines Spieler-Accounts.

![Account-Verification Button](../assets/discordbot/quick-setup-guide/06_account_verification_button.png){ .screenshot }

Klicke dort auf den Button `Verify your tribalwars-account`. Es öffnet sich ein Eingabe-Fenster für deinen Ingame-Accountnamen.

![Verify your tribalwars-account Button](../assets/discordbot/quick-setup-guide/07_verify_your_account_button.png){ .screenshot }

Gib im Feld `Account name (exactly as in game)` deinen Ingame-Accountnamen ein — exakt so, wie er im Spiel geschrieben ist (Groß-/Kleinschreibung und Sonderzeichen beachten). Klicke anschließend auf `Absenden`.

![Account-Namen eingeben](../assets/discordbot/quick-setup-guide/08_enter_account_name_modal.png){ .screenshot }

Der Bot zeigt dir nun einen individuellen Verifizierungs-Code an. Logge dich im Spiel ein, öffne dein Spieler-Profil, trage den Code in die Profil-Beschreibung ein und speichere das Profil ab. Wechsle anschließend zurück in den Discord-Kanal und klicke im Bot auf den Button `Verify`. Der Bot prüft automatisch, ob der Code in deinem Profil hinterlegt ist, und schließt die Verifizierung daraufhin ab.

![Beschreibung des Verifizierungs-Prozesses](../assets/discordbot/quick-setup-guide/09_description_verification_process.png){ .screenshot }

## 5. Leader-Status zuweisen

Damit der [Leader-View](../leader-view/uebersicht.md) genutzt werden kann, muss mindestens ein Discord-User Leader-Rechte erhalten. Klicke dazu im Kanal `#⚫-bot-config` auf den Button `Manage Access to Leader-View`. Es öffnet sich ein Menü zur Verwaltung der Leader-View-Zugriffe.

![Manage Access to Leader-View Button](../assets/discordbot/quick-setup-guide/10_Manage_access_to_leaderview_button.png){ .screenshot }

Klicke dort auf den Button `Grant Access`, um einem Discord-User die Leader-Rechte zu erteilen.

![Grant Access Button](../assets/discordbot/quick-setup-guide/11_grant_access_button.png){ .screenshot }

Wähle im ersten Dropdown die Rolle aus, die der User erhalten soll — wähle hier `Leader`.

![Rollen-Auswahl](../assets/discordbot/quick-setup-guide/12_role_selection.png){ .screenshot }

Wähle anschließend im zweiten Dropdown den Discord-User aus, der den Leader-Status erhalten soll. Die Zuweisung wird sofort wirksam und der ausgewählte User kann ab sofort auf das Leader-View zugreifen.

![User-Auswahl](../assets/discordbot/quick-setup-guide/13_user_selection.png){ .screenshot }

## 6. Bot-Module installieren

Damit der Bot über das Basis-Setup hinaus weitere Funktionen für euren Stamm bereitstellt, müssen die gewünschten Module zusätzlich installiert werden. Klicke dazu im Kanal `#⚫-bot-config` auf den Button `Manage Bot-Modules`. Es öffnet sich das Modul-Verwaltungs-Menü.

![Manage Bot-Modules Button](../assets/discordbot/quick-setup-guide/14_Manage_bot_modules_button.png){ .screenshot }

Klicke in diesem Menü auf den Button `Install`, um die Installation eines neuen Moduls zu starten.

![Install Button](../assets/discordbot/quick-setup-guide/15_module_install_button.png){ .screenshot }

Wähle im erscheinenden Dropdown das gewünschte Modul aus. Der Bot installiert das Modul daraufhin automatisch und legt die zugehörigen Kanäle auf eurem Discord-Server an. Wiederhole den Vorgang für jedes weitere Modul, das ihr nutzen möchtet.

![Modul-Auswahl](../assets/discordbot/quick-setup-guide/16_module_selection.png){ .screenshot }

Folgende Module stehen zur Verfügung:

- 🏖️ **[Account-Sitting-System](sitting-system.md)** — Urlaubsvertretung für Accounts
- 🧱 **[Bunker-Information-System](bunker-info.md)** — Bunker beantragen und genehmigen
- 🔍 **[Off/Deff/Snob-Search-System](search-system.md)** — Passende Off-, Deff- oder AG-Befehle finden
- 🪓 **[Planning-System](planning-system.md)** — Offensiv-Planungen organisieren

!!! info "Setup abgeschlossen"
    Das Grund-Setup ist damit fertig. Die Detail-Konfiguration der einzelnen Module findest du auf den jeweils verlinkten Seiten. Mehr zur Verwaltung der installierten Module (Update, Deinstallation, Sichtbarkeits-Rollen) findest du auf der Seite [Bot-Module – Einrichtung](modul-verwaltung.md).
