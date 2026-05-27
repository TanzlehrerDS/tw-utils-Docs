# Einrichtung

Die zentrale Verwaltung aller Bot-Module läuft über den Button `Manage Bot-Modules` im Kanal `#⚫-bot-config`. Dort kannst du Module installieren, aktualisieren oder wieder entfernen — und für jedes Modul festlegen, welche Discord-Rollen die zugehörigen Kanäle sehen dürfen. Die Modul-spezifische Konfiguration findest du auf den jeweils verlinkten Unterseiten der einzelnen Module.

![Manage Bot-Modules Button](../assets/discordbot/bot-module-setup/01_Manage_bot_modules_button.png){ .screenshot }

## 1. Modul installieren

Wechsle auf eurem Stammes-Discord in den Kanal `#⚫-bot-config` und klicke auf den Button `Manage Bot-Modules`. Es öffnet sich das Modul-Verwaltungs-Menü. Klicke dort auf den Button `Install`, um die Installation eines neuen Moduls zu starten. Wähle im erscheinenden Dropdown das gewünschte Modul aus. Der Bot installiert das Modul daraufhin automatisch und legt die zugehörigen Kanäle auf eurem Discord-Server an. Wiederhole den Vorgang für jedes weitere Modul, das ihr nutzen möchtet.

![Install Button](../assets/discordbot/bot-module-setup/02_install_button.png){ .screenshot }

## 2. Modul aktualisieren

Klicke im Modul-Verwaltungs-Menü auf den Button `Update`, um ein installiertes Modul auf die aktuelle Version zu aktualisieren. Wähle im erscheinenden Dropdown das gewünschte Modul aus. Vorhandene Daten und Konfigurationen bleiben dabei erhalten.

![Update Button](../assets/discordbot/bot-module-setup/03_update_button.png){ .screenshot }

## 3. Modul deinstallieren

Klicke im Modul-Verwaltungs-Menü auf den Button `Delete`, um ein installiertes Modul wieder zu entfernen. Wähle im erscheinenden Dropdown das Modul aus, das deinstalliert werden soll.

![Delete Button](../assets/discordbot/bot-module-setup/04_delete_button.png){ .screenshot }

!!! warning "Achtung: Daten gehen verloren"
    Beim Deinstallieren eines Moduls werden die zugehörigen Kanäle inklusive aller Inhalte (Anfragen, Planungen, Listen etc.) unwiderruflich gelöscht.

## 4. Sichtbarkeits-Rollen festlegen

Für jedes installierte Modul kannst du festlegen, welche Discord-Rollen die zugehörigen Modul-Kanäle sehen dürfen. Klicke dazu im Modul-Verwaltungs-Menü auf den Button `Set Roles`. Wähle anschließend das Modul aus, für das die Rollen gesetzt werden sollen, und danach die gewünschten Discord-Rollen.

![Set Roles Button](../assets/discordbot/bot-module-setup/05_set_roles_button.png){ .screenshot }

!!! info "Standardmäßig öffentlich"
    Ohne explizite Rollen-Zuweisung sind die Modul-Kanäle für **alle Mitglieder** auf eurem Discord-Server sichtbar. Wenn du den Zugriff einschränken möchtest, musst du gezielt Rollen über `Set Roles` zuweisen.
