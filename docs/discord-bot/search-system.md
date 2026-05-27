# Off/Deff/Snob-Search-System

Mit dem ODS-System suchen Spieler im Stamm Off-, Deff- oder Snob-Befehle für eine bestimmte Zielkoordinate. Voraussetzung dafür: Die Truppendaten der Stammesmitglieder sind hochgeladen. Der Bot gleicht ankommende Such-Anfragen mit den hinterlegten Truppendaten ab und liefert eine Liste der Spieler, die einen passenden Off-, Deff- oder Snob-Befehl abschicken können.

## 1. Kanäle des Moduls

Nach der [Installation](modul-verwaltung.md) legt der Bot die Kategorie `🔍 OFF/DEFF/SNOB-SEARCHER` mit zwei Basis-Kanälen an:

- `#⚫-ods-search` — zentraler Such-Kanal mit den drei Such-Buttons und dem Admin-Panel (Truppen-Upload, -Anzeige, -Löschung)
- `#⚫-ods-overview` — Dashboard-Kanal mit der Liste aller laufenden und erledigten Such-Anfragen

![Kanal-Übersicht des ODS-Systems](../assets/discordbot/ods-system/01_ods_system_channels.png){ .screenshot }

Sobald jemand ein Suchergebnis in einen eigenen Kanal exportiert (siehe Abschnitt 5), legt der Bot zusätzlich **einen eigenen Kanal pro Anfrage** in derselben Kategorie an, nach dem Schema `❌-off-XXX-YYY-PLAYERNAME` bzw. `❌-deff-…` / `❌-ag-…`. Sobald die Anfrage abgearbeitet ist, wechselt das Präfix auf `✅` — siehe Abschnitt 6.

## 2. Truppendaten hochladen, anzeigen, löschen

Damit der Bot überhaupt Treffer melden kann, müssen die Truppendaten der Stammesmitglieder im Bot hinterlegt sein. Im Such-Kanal `#⚫-ods-search` steht dafür das `ODS Panel`-Embed mit drei Admin-Buttons: `Upload Troops`, `Delete Troops`, `Show Troop Status`.

![Admin-Buttons im ODS Panel](../assets/discordbot/ods-system/02_ods_system_upload_troops.png){ .screenshot }

`Upload Troops` führt zur Slash-Command `/admin troops_upload`, über die der TWU-Mod die TW-Truppen-CSV-Datei einliest.

![Slash-Command zum Truppen-Upload](../assets/discordbot/ods-system/03_ods_system_upload_troops_slash_command.png){ .screenshot }

Nach erfolgreichem Upload bestätigt der Bot mit einer kurzen Erfolgs-Nachricht inklusive Statistik (Spieler, Dörfer, Truppen-Datensätze).

![Erfolgs-Meldung nach Truppen-Upload](../assets/discordbot/ods-system/04_ods_system_upload_troops_success_message.png){ .screenshot }

`Delete Troops` entfernt hochgeladene Truppendaten wieder; vor dem Löschen kommt eine Sicherheitsabfrage mit `Confirm` und `Cancel`.

![Delete-Troops-Button](../assets/discordbot/ods-system/05_ods_system_upload_troops_delete_button.png){ .screenshot }

`Show Troop Status` öffnet das `Troop Uploads Overview`-Embed mit allen Stammesmitgliedern und ihrem jeweiligen Upload-Zeitstempel.

![Show-Troop-Status-Button](../assets/discordbot/ods-system/06_ods_system_upload_troops_showtroopstatus_button.png){ .screenshot }

So sieht man auf einen Blick, wer aktuelle Truppendaten hinterlegt hat und wessen Daten veraltet sind.

![Troop Uploads Overview](../assets/discordbot/ods-system/07_ods_system_upload_troops_status_overview.png){ .screenshot }

!!! info "Wer darf Truppen hochladen?"
    Nur User mit der Rolle `TWU-Mod` oder Discord-Administrator-Rechten sehen die drei Admin-Buttons (`Upload Troops`, `Delete Troops`, `Show Troop Status`) und können die Slash-Command `/admin troops_upload` ausführen. Normale Mitglieder sehen das `ODS Panel`-Embed ohne diese Buttons. Siehe auch [Berechtigungskonzept](berechtigungskonzept.md).

## 3. Off-, Deff- oder Snob-Befehl suchen

Unterhalb des Admin-Panels stehen im Such-Kanal `#⚫-ods-search` die drei Such-Buttons `Search Off`, `Search Snob`, `Search Deff`, mit denen jeder Spieler eine Suche starten kann.

![Such-Buttons im ODS-System](../assets/discordbot/ods-system/08_ods_system_search_buttons.png){ .screenshot }

Klick auf `Search Off` öffnet das Modal `Find Off Options` mit den Feldern `Target Coordinate`, `Arrival Time (hh:mm:ss / DD.MM.YYYY hh:mm:ss)`, `Minimum Off Strength (Axe,Lcav)` (optional), `Earliest Launch Time` (optional) und `Fixed Runtime (Unit name)` (optional).

![Modal: Find Off Options](../assets/discordbot/ods-system/09_ods_system_search_Off_modal.png){ .screenshot }

Klick auf `Search Snob` öffnet das Modal `Find Snob Options` mit den Feldern `Target Coordinate`, `Arrival Time (hh:mm:ss / DD.MM.YYYY hh:mm:ss)` und `Earliest Launch Time (optional)`.

![Modal: Find Snob Options](../assets/discordbot/ods-system/10_ods_system_search_snob_modal.png){ .screenshot }

Klick auf `Search Deff` öffnet das Modal `Find Deff Options`. Die Felder sind analog zum Off-Modal, zusätzlich gibt es `Minimum Population` und `UT-Boost (0-20%)`.

![Modal: Find Deff Options](../assets/discordbot/ods-system/11_ods_system_search_deff_modal.png){ .screenshot }

!!! info "Voraussetzung Truppen-Upload"
    Der Bot kann nur Treffer melden für Spieler, deren Truppendaten aktuell hochgeladen sind. Liegen keine Daten vor, bleibt die Trefferliste leer. Für aussagekräftige Ergebnisse sollten Stammesmitglieder ihre Truppendaten regelmäßig per `/admin troops_upload` aktualisieren.

## 4. Suchergebnis lesen und mit der Workbench arbeiten

Nach dem Abschicken eines Such-Modals antwortet der Bot mit einem **ephemeralen Embed**, das nur der Suchende selbst sieht. Es listet alle passenden Spieler mit Dorf-Koordinate, Truppenzusammensetzung, Abschick- und Ankunftszeit.

![Ephemerale Such-Antwort](../assets/discordbot/ods-system/12_ods_system_search_result_view_ephemeral.png){ .screenshot }

In der detaillierten Ansicht zeigt das Embed zusätzlich fertige Befehl-Strings, die direkt ins Spiel kopiert werden können.

![Detaillierte Such-Antwort mit Befehl-Strings](../assets/discordbot/ods-system/13_ods_system_search_result_view_detailed.png){ .screenshot }

Unter dem Suchergebnis stehen Workbench-Buttons — pro Treffer kann der Suchende den jeweiligen Spieler anpingen oder anschreiben, ohne den Discord-Kanal zu verlassen.

![Workbench-Buttons im Suchergebnis](../assets/discordbot/ods-system/14_ods_system_search_result_view_workbench_buttons.png){ .screenshot }

Nach einer Workbench-Aktion bestätigt der Bot mit einer kurzen ephemeralen Antwort.

![Bot-Antwort nach Workbench-Aktion](../assets/discordbot/ods-system/15_ods_system_search_result_view_workbench_button_answer.png){ .screenshot }

!!! info "Ephemerale Antwort nur für den Suchenden"
    Die Trefferliste ist eine ephemerale Discord-Nachricht: Nur der Suchende sieht sie und sie verschwindet beim nächsten Discord-Neuladen. Wer das Ergebnis dauerhaft sichtbar machen und mit dem Stamm diskutieren möchte, exportiert die Suche in einen eigenen Kanal — siehe Abschnitt 5.

## 5. Suche in einen eigenen Kanal exportieren

Im ephemeralen Suchergebnis (siehe Abschnitt 4) steht ein Export-Button, der die Anfrage in einen neuen, persistenten Per-Anfrage-Kanal verlagert.

![Export-Button im Suchergebnis](../assets/discordbot/ods-system/16_ods_system_search_result_view_ephemeral_exporttoseparatechannel_button.png){ .screenshot }

Der Bot legt daraufhin in der Kategorie `🔍 OFF/DEFF/SNOB-SEARCHER` einen neuen Kanal `❌-<typ>-XXX-YYY-PLAYERNAME` an.

![Neuer Per-Anfrage-Kanal in der Kategorie](../assets/discordbot/ods-system/17_ods_system_search_result_view_new_channel_created.png){ .screenshot }

Im neuen Kanal postet der Bot das Such-Embed mit allen Details und den Verwaltungs-Buttons. Das Ergebnis ist nun für den ganzen Stamm sichtbar, andere Spieler können mitdiskutieren, der Suchende kann den Status pflegen, Notizen anfügen und Folge-Suchen direkt aus dem Kanal heraus starten — siehe Abschnitt 6.

![Inhalt des neuen Per-Anfrage-Kanals](../assets/discordbot/ods-system/18_ods_system_search_result_new_channel_content.png){ .screenshot }

## 6. Per-Anfrage-Kanal: Status, Notizen, Löschen, Folgesuchen

Im Per-Anfrage-Kanal stehen oberhalb des Such-Embeds die Verwaltungs-Buttons `Status: Done` / `Status: Not Done`, mit denen die Anfrage als erledigt markiert bzw. wieder auf offen gesetzt wird.

![Status-Buttons im Per-Anfrage-Kanal](../assets/discordbot/ods-system/19_ods_system_search_result_new_channel_statusdone_notdone_button.png){ .screenshot }

`Add/Edit Note` öffnet das Modal `Add/Edit Note` mit dem optionalen Feld `Your Note (leave empty to delete)`. Die Notiz wird im Anfrage-Embed unter `Notes` angezeigt — z. B. „Spieler X hat zugesagt" oder „Wartet auf Truppen-Refresh".

![Add/Edit-Note-Button](../assets/discordbot/ods-system/20_ods_system_search_result_new_channel_addnote_button.png){ .screenshot }

`Delete Request` löscht die Anfrage inklusive Kanal nach Bestätigung mit `Yes, delete`. Voraussetzung: Ersteller der Anfrage oder TWU-Mod.

![Delete-Request-Button](../assets/discordbot/ods-system/21_ods_system_search_result_new_channel_deleterequest_button.png){ .screenshot }

Zusätzlich stehen im Per-Anfrage-Kanal die Such-Buttons `Search Off`, `Search Snob`, `Search Deff` erneut zur Verfügung.

![Such-Buttons im Per-Anfrage-Kanal](../assets/discordbot/ods-system/22_ods_system_search_result_new_channel_searchbuttons.png){ .screenshot }

Klickst du dort z. B. auf `Search Snob`, ist das Such-Modal bereits mit den Werten der ursprünglichen Anfrage (Zielkoordinate, Ankunftszeit) vorausgefüllt — so kann ohne erneutes Eintippen direkt eine Folge-Suche zur gleichen Koord gestartet werden.

![Vorausgefülltes Modal im Per-Anfrage-Kanal](../assets/discordbot/ods-system/23_ods_system_search_result_new_modals_are_prefilled_in_extracted_channel.png){ .screenshot }

Sobald sich der Status ändert, benennt der Bot den Kanal automatisch um — Präfix `❌` wechselt auf `✅` und umgekehrt. So ist im Kanal-Tree auf einen Blick sichtbar, welche Anfragen noch offen sind.

![Kanal-Umbenennung bei Status-Wechsel](../assets/discordbot/ods-system/24_ods_system_search_status_change_changes_Channel_name.png){ .screenshot }

!!! warning "Rate-Limit Status-Änderung"
    Der Status `Done` / `Not Done` kann pro Per-Anfrage-Kanal nur alle 10 Minuten gewechselt werden. Bei zu schnellem Hin- und Her-Klicken meldet der Bot eine Rate-Limit-Fehlermeldung mit Restwartezeit.

## 7. Übersicht im `#⚫-ods-overview`

Der Dashboard-Kanal `#⚫-ods-overview` zeigt jederzeit den aktuellen Stand aller Such-Anfragen — gruppiert nach Status `✅ DONE` und `❌ NOT DONE`, je Eintrag mit Typ (Off/Deff/Snob), Koordinate, Suchendem und Anfrage-Zeitpunkt. Das Embed wird vom Bot automatisch aktualisiert, sobald eine Anfrage hinzukommt, ihren Status ändert oder gelöscht wird.

![Overview-Dashboard des ODS-Systems](../assets/discordbot/ods-system/25_ods_system_overviewdashboard.png){ .screenshot }
