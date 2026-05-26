# Account-Verifizierung

Durch die Account-Verifizierung wird sichergestellt, dass sich ausschließlich berechtigte User mit einem Spieler-Account verknüpfen können — also nur jene, die tatsächlich Zugriff auf den jeweiligen Account haben. Erst auf Basis dieser Verifizierung stehen dir die personalisierten Funktionen der einzelnen Bot-Module zur Verfügung.

Mit jeder erfolgreichen Verifizierung entsteht eine eindeutige **Dreiecks-Verknüpfung** zwischen deinem DS-Account, deinem Discord-User und dem Stammes-Discordserver. Diese drei Bezugspunkte sorgen dafür, dass Bot-Funktionen, Berechtigungen und Benachrichtigungen immer eindeutig dem richtigen Spieler auf dem richtigen Server zugeordnet werden können.

## 1. Bot-Config-Kanal öffnen

Wechsle auf eurem Stammes-Discord in den Kanal `#⚫-bot-config`. Dieser Kanal wurde beim Einladen des Bots automatisch in der Kategorie `⚙️ TWU-SETUP` angelegt und ist die zentrale Steuerung für alle Bot-Funktionen — dort findest du sämtliche Aktionen als Buttons. **Klicke dort auf den Button `Account-Verification`**, um die Verifizierung zu starten.

![Bot-Config-Kanal im Discord](../assets/discordbot/account-verification/00_bot_config_channel.png){ .screenshot }

## 2. Verifizierungs-Flow starten

Klicke im geöffneten Menü auf den grünen Button `Verify your tribalwars-account`, um die Verknüpfung eines neuen Accounts zu starten.

![Verify your tribalwars-account Button](../assets/discordbot/account-verification/02_verify_your_account_button.png){ .screenshot }

## 3. Ingame-Accountname eingeben

Es öffnet sich ein Eingabe-Fenster mit dem Titel `Verify your Ingame-Account`. Trage im Feld `Account name (exactly as in game)` deinen Spieler-Namen ein — exakt so, wie er im Spiel geschrieben ist (Groß-/Kleinschreibung und Sonderzeichen beachten). Klicke anschließend auf `Absenden`.

![Account-Namen eingeben](../assets/discordbot/account-verification/03_enter_account_name_modal.png){ .screenshot }

## 4. Verifizierungs-Code erhalten

Der Bot prüft, ob der eingegebene Account auf der konfigurierten Spielwelt existiert, und zeigt dir im Anschluss ein Embed mit dem Titel `Verification Process`. Darin findest du einen individuellen Verifizierungs-Code sowie eine kurze Schritt-für-Schritt-Anleitung. Kopiere den Code – du brauchst ihn im nächsten Schritt im Spiel.

![Verifizierungs-Prozess Beschreibung](../assets/discordbot/account-verification/04_description_verification_process.png){ .screenshot }

!!! info "Code-Gültigkeit"
    Der Verifizierungs-Code ist **15 Minuten** gültig. Schließt du den Prozess in dieser Zeit nicht ab, musst du den Ablauf von vorne starten und erhältst einen neuen Code.

## 5. Profil im Spiel öffnen

Logge dich auf der entsprechenden Spielwelt ein, öffne dein eigenes Spieler-Profil und wechsle in den Bearbeitungs-Modus der Profil-Beschreibung.

![Profil im Spiel bearbeiten](../assets/discordbot/account-verification/05_edit_profile_tribalwars.png){ .screenshot }

## 6. Verifizierungs-Code in das Profil einfügen

Füge den zuvor kopierten Verifizierungs-Code in die Profil-Beschreibung ein. Der genaue Ort innerhalb der Beschreibung ist egal — der Bot durchsucht den gesamten Text. Speichere anschließend dein Profil ab.

![Code in Profil einfügen](../assets/discordbot/account-verification/06_copy_and_paste_verification-code.png){ .screenshot }

!!! warning "Profil speichern nicht vergessen"
    Ohne Speichern ist der Code nicht in deinem Profil hinterlegt und die Verifizierung schlägt fehl.

## 7. Verifizierung im Discord abschließen

Wechsle zurück in den Discord-Kanal `#⚫-bot-config` und klicke im Verifizierungs-Embed des Bots auf den Button `Verify`. Der Bot ruft daraufhin dein Profil ab und prüft automatisch, ob der individuelle Code dort hinterlegt ist.

![Verify-Button im Discord klicken](../assets/discordbot/account-verification/07_click_on_verify.png){ .screenshot }

## 8. Erfolgsmeldung

Wird der Code in deinem Profil gefunden, bestätigt der Bot die erfolgreiche Verknüpfung mit einer Erfolgsmeldung. Damit ist die Verifizierung abgeschlossen — dein Discord-User ist ab sofort mit dem Spieler-Account verbunden und du kannst die personalisierten Funktionen der Bot-Module nutzen.

![Erfolgsmeldung der Verifizierung](../assets/discordbot/account-verification/08_success_message.png){ .screenshot }

!!! tip "Code aus Profil entfernen"
    Nach erfolgreicher Verifizierung kannst du den Code wieder aus deiner Profil-Beschreibung entfernen — die Verknüpfung bleibt unabhängig davon bestehen.

!!! info "Mehrere Accounts verifizieren"
    Du kannst auf derselben Welt **mehrere Accounts** mit deinem Discord-User verknüpfen — wiederhole dazu einfach diesen Ablauf für jeden weiteren Account. Über den Button `My verified tribalwars-accounts` siehst du jederzeit die Liste deiner verknüpften Accounts. Über `Unverify your tribalwars-account` lässt sich eine Verknüpfung wieder lösen.

## 9. Ergebnis auf tw-utils

Sofern du bereits einen Account auf tw-utils hast, kannst du die erfolgreiche Verifizierung zusätzlich über die Website prüfen — dort wird dir nun die entsprechende Card zu deinem Stammes-Discord mit deinem Member-Status angezeigt.

![Verknüpfter Account auf tw-utils sichtbar](../assets/discordbot/account-verification/09_visible_card_on_tw-utils.png){ .screenshot }

---

!!! info "Hinweis für Admins"
    Admins können über die Buttons `Admin: Unverify an account` und `Admin: Unverify a discorduser` Verknüpfungen für andere User lösen (z. B. bei verlassenen Accounts oder einem Discord-User-Wechsel).
