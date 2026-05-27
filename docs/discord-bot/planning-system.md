# Planning-System

Das Planning-System ist die Discord-seitige Brücke zum Off-Planner auf [tw-utils.net](https://tw-utils.net). Die Spieler melden über den Bot **AG-Befehle, Abschickzeiten und Off-Ausschlüsse** für ihre Accounts an die Planer; die Stammes-Führung verteilt im Gegenzug die fertig geplanten Befehle als persönliche DM-Pakete, kann coord-spezifische Plan-Informationen schnell nachschlagen, und das angeschlossene Nuke-Ersatzsystem organisiert spontane Nuke-Replacements innerhalb des Stammes.

!!! info "Voraussetzung Welt-Setup"
    Vor der Modulnutzung muss die Welt einmalig mit dem Slash-Command `/admin set_world` gesetzt sein. Ohne gesetzte Welt liefert der Bot eine Fehlermeldung statt einer Antwort.

!!! info "Voraussetzung verifizierter TW-Account"
    Damit ein Spieler eigene AG-Meldungen, Abschickzeiten und Off-Ausschlüsse pflegen und persönliche Pläne empfangen kann, muss sein TW-Account im `#⚫-bot-config`-Kanal verifiziert sein. Ohne verknüpften Account stehen die Eingabe-Buttons und der `Download`-Button im Plan-Verteilungs-Kanal nicht zur Verfügung.

## 1. Kanäle des Moduls

Nach der [Installation](modul-verwaltung.md) legt der Bot die Kategorie `🪓 PLANNING-SYSTEM` mit vier Basis-Kanälen an:

- `#⚫-queries` — Meldungs-Kanal für Spieler (AG-Berichte, Abschickzeiten, Off-Ausschluss) und Admin-Aktionen
- `#⚫-plan-distribution` — Spieler holen sich hier ihre persönlich geplanten Befehle als DM-Paket ab
- `#⚫-leaderview-planinfo` — Leader können hier per Koordinate alle aktuell geplanten Befehle auf ein Ziel-Dorf abrufen (nur für TWU-Mod sichtbar)
- `#⚫-nuke-replacement` — Nuke-Ersatzsystem für spontane Nuke-Replacement-Anfragen

![Kanal-Übersicht des Planning-Systems](../assets/discordbot/planning-system/01_planning_system_channels.png){ .screenshot }

!!! info "Nur Buttons — keine Textnachrichten"
    In `#⚫-queries`, `#⚫-leaderview-planinfo` und `#⚫-plan-distribution` werden alle User-Textnachrichten automatisch wieder gelöscht. Diese Kanäle akzeptieren ausschließlich Button- und Modal-Eingaben — direkte Textbeiträge sind hier nicht vorgesehen.

## 2. AG-Meldungen im `#⚫-queries`-Kanal

Im `#⚫-queries`-Kanal steht das `Queries`-Embed und darunter stehen drei farblich markierte Buttons: `Snob Report`, `Launch Times`, `Off-Exclusion`.

![Queries-Kanal](../assets/discordbot/planning-system/02_planning_system_queries_channel.png){ .screenshot }

![Query-Buttons im Queries-Kanal](../assets/discordbot/planning-system/03_planning_system_queries_channel_query-buttons.png){ .screenshot }

Klick auf `Snob Report` öffnet ein ephemerales Sub-Menü mit den Buttons `Add`, `Show` und `Delete`.

![Sub-Menü Snob Report](../assets/discordbot/planning-system/04_planning_system_snobquery_add-show-delete-button.png){ .screenshot }

`Add` führt zunächst zur Account-Auswahl: Der Spieler wählt im Dropdown den verifizierten TW-Account, für den die Meldung gilt.

![Account-Auswahl für AG-Meldung](../assets/discordbot/planning-system/05_planning_system_snobquery_select_verified_account.png){ .screenshot }

Anschließend öffnet sich das AG-Meldungs-Modal mit den Eingabefeldern.

![AG-Meldungs-Modal](../assets/discordbot/planning-system/06_planning_system_snobquery_modal.png){ .screenshot }

Nach erfolgreichem Absenden bestätigt der Bot mit einer ephemeralen Erfolgsmeldung.

![Erfolgsmeldung nach AG-Meldung](../assets/discordbot/planning-system/07_planning_system_snobquery_success_message.png){ .screenshot }

`Show` listet alle bereits gemeldeten AGs für den ausgewählten Account auf.

![Show-Ansicht der AG-Meldungen](../assets/discordbot/planning-system/08_planning_system_snobquery_show_button.png){ .screenshot }

`Delete` löscht eine konkrete AG-Meldung per Auswahl.

![Delete-Button für AG-Meldungen](../assets/discordbot/planning-system/09_planning_system_snobquery_delete_button.png){ .screenshot }

## 3. Abschickzeiten im `#⚫-queries`-Kanal

`Launch Times` öffnet analog ein Sub-Menü mit den Buttons `Add`, `Show` und `Delete`.

![Sub-Menü Launch Times](../assets/discordbot/planning-system/10_planning_system_launchtimequery_add-show-delete-button.png){ .screenshot }

`Add` führt zunächst zur Account-Auswahl per Dropdown.

![Account-Auswahl für Abschickzeit](../assets/discordbot/planning-system/11_planning_system_launchtimequery_select_verified_account.png){ .screenshot }

Anschließend öffnet sich das Abschickzeiten-Modal mit den Zeitfenster-Feldern.

![Abschickzeiten-Modal](../assets/discordbot/planning-system/12_planning_system_launchtimequery_modal.png){ .screenshot }

`Show` und `Delete` verhalten sich analog zum AG-Workflow: `Show` listet alle hinterlegten Zeitfenster für den ausgewählten Account auf, `Delete` löscht ein konkretes Zeitfenster per Auswahl.

## 4. Off-Ausschluss im `#⚫-queries`-Kanal

`Off-Exclusion` öffnet das Sub-Menü mit den Buttons `Add`, `Show` und `Delete`.

![Sub-Menü Off-Exclusion](../assets/discordbot/planning-system/13_planning_system_offexclusionquery_add-show-delete-button.png){ .screenshot }

`Add` führt zunächst zur Account-Auswahl per Dropdown.

![Account-Auswahl für Off-Ausschluss](../assets/discordbot/planning-system/14_planning_system_offexclusionquery_select_verified_account.png){ .screenshot }

Anschließend öffnet sich das Off-Ausschluss-Modal zur Eingabe der auszuschließenden Herkunfts-Dörfer.

![Off-Ausschluss-Modal](../assets/discordbot/planning-system/15_planning_system_offexclusionquery_modal.png){ .screenshot }

`Show` und `Delete` verhalten sich analog zum AG-Workflow: `Show` listet alle aktuell hinterlegten Off-Ausschlüsse für den ausgewählten Account auf, `Delete` entfernt einen konkreten Eintrag per Auswahl.

## 5. Admin-Funktionen im `#⚫-queries`-Kanal

Unterhalb der Spieler-Buttons stehen im `#⚫-queries`-Kanal zwei Admin-Buttons.

`Admin: Delete All` löscht **alle** AG-Meldungen, Abschickzeiten und Off-Ausschluss-Einträge auf dem gesamten Server. Vor dem Löschen erscheint eine Bestätigungs-Abfrage mit den Buttons `Confirm` und `Cancel`.

![Admin Delete All Button](../assets/discordbot/planning-system/16_planning_system_queries_admin_delete_all_button.png){ .screenshot }

`Admin: Export` exportiert alle aktuell vorliegenden Meldungen als Datei, sodass sie z. B. in der Stammes-Führung weiterverarbeitet werden können.

![Admin Export Button](../assets/discordbot/planning-system/17_planning_system_queries_admin_export_button.png){ .screenshot }

!!! info "Wer darf Admin-Funktionen?"
    Die Buttons `Admin: Delete All` und `Admin: Export` können nur User mit der Rolle `TWU-Mod` oder Discord-Administrator-Rechten ausführen. Für normale Mitglieder sind diese Buttons zwar sichtbar, aber ein Klick wird vom Bot mit einer Berechtigungs-Fehlermeldung abgelehnt.

## 6. Plan-Verteilung im `#⚫-plan-distribution`-Kanal

Der `#⚫-plan-distribution`-Kanal enthält das `Plan Distribution`-Embed und darunter den Button `Download`.

![Plan-Distribution-Kanal](../assets/discordbot/planning-system/18_planning_system_plandistribution_channel.png){ .screenshot }

![Download-Button im Plan-Distribution-Kanal](../assets/discordbot/planning-system/19_planning_system_plandistribution_channel_download_button.png){ .screenshot }

Klick auf `Download`: Der Bot prüft die verknüpften TW-Accounts des Spielers, sammelt alle für ihn geplanten Befehle aus den aktiven Plan-Containern auf [tw-utils.net](https://tw-utils.net) und schickt sie als persönliche DM mit Spieler-Listen und DSU-Download-Links.

![Plan-Download per DM](../assets/discordbot/planning-system/20_planning_system_plandistribution_channel_plandownload_via_dm.png){ .screenshot }

!!! info "Plan-Download per DM"
    Damit der Bot die Pläne zustellen kann, müssen Direktnachrichten vom Bot in den Discord-Einstellungen erlaubt sein. Andernfalls erscheint eine ephemerale Fehlermeldung im Kanal mit dem Hinweis, die DMs zu aktivieren.

## 7. Plan-Informationen im `#⚫-leaderview-planinfo`-Kanal

Im `#⚫-leaderview-planinfo`-Kanal steht das `Plan Information`-Embed und darunter der Button `Retrieve Plan Information`.

![Leaderview-PlanInfo-Kanal](../assets/discordbot/planning-system/21_planning_system_leaderview-planinfo_channel.png){ .screenshot }

![Retrieve-Plan-Information-Button](../assets/discordbot/planning-system/22_planning_system_leaderview-planinfo_retrieve-plan-information_button.png){ .screenshot }

Klick öffnet das Modal `Plan Information` mit dem Feld `Coordinate` im Format `XXX|YYY`.

![Plan-Information-Modal](../assets/discordbot/planning-system/23_planning_system_leaderview-planinfo_retrieve-plan-information_modal.png){ .screenshot }

Der Bot rendert daraufhin für die angegebene Koordinate eine Übersicht aller aktuell geplanten Befehle aus allen aktiven Plan-Containern direkt im Kanal.

![Bot-Antwort mit Plan-Information](../assets/discordbot/planning-system/24_planning_system_leaderview-planinfo_retrieve-plan-information_botanswer.png){ .screenshot }

Die detailliertere Ansicht zeigt die einzelnen Befehle mit Herkunfts-Dorf, Spieler, Befehlstyp sowie Abschick- und Ankunftszeit.

![Detaillierte Bot-Antwort mit Plan-Information](../assets/discordbot/planning-system/25_planning_system_leaderview-planinfo_retrieve-plan-information_botanswer_detailed.png){ .screenshot }

!!! info "Sichtbarkeit Leaderview-PlanInfo"
    Der `#⚫-leaderview-planinfo`-Kanal ist standardmäßig **nur für User mit der Rolle `TWU-Mod` sichtbar**. Normale Mitglieder sehen den Kanal nicht — Plan-Informationen bleiben damit innerhalb der Stammes-Führung.

## 8. Nuke-Ersatz im `#⚫-nuke-replacement`-Kanal

Der `#⚫-nuke-replacement`-Kanal zeigt das `Nuke-Replacement`-Embed mit zwei Status-Listen (`NOT DONE` und `DONE`) und darunter fünf Buttons.

![Nuke-Replacement-Übersicht](../assets/discordbot/planning-system/26_planning_system_nuke_replacementsystem_overview.png){ .screenshot }

Über den Button `Request Nuke-replacement` stellt ein Spieler eine neue Ersatz-Anfrage.

![Request-Nuke-replacement-Button](../assets/discordbot/planning-system/27_planning_system_nuke_replacementsystem_requestnukereplacement_button.png){ .screenshot }

Klick öffnet das Anfrage-Modal mit Feldern für Zielkoordinate, gewünschtem Abschickzeitpunkt und Notiz.

![Request-Nuke-replacement-Modal](../assets/discordbot/planning-system/32_planning_system_nuke_replacementsystem_requestnukereplacement_modal.png){ .screenshot }

Nach dem Abschicken wird die Anfrage unter `NOT DONE` einsortiert.

![Anfrage wird zu NOT DONE hinzugefügt](../assets/discordbot/planning-system/33_planning_system_nuke_replacementsystem_requestnukereplacement_addedtonotdoneembed.png){ .screenshot }

Mit `I want to replace a Nuke` übernimmt ein anderer Spieler eine offene Anfrage.

![I-want-to-replace-a-Nuke-Button](../assets/discordbot/planning-system/28_planning_system_nuke_replacementsystem_iwanttoreplaceanuke_button.png){ .screenshot }

Klick öffnet zuerst ein Dropdown mit allen offenen Anfragen.

![Auswahl der zu übernehmenden Anfrage](../assets/discordbot/planning-system/34_planning_system_nuke_replacementsystem_iwanttoreplaceanuke_selectarequesttotakeover.png){ .screenshot }

Danach folgt ein zweites Dropdown zur Auswahl des eigenen verifizierten Accounts, mit dem die Übernahme erfolgt.

![Auswahl des übernehmenden Accounts](../assets/discordbot/planning-system/35_planning_system_nuke_replacementsystem_iwanttoreplaceanuke_selecttheaccountwhotakesover.png){ .screenshot }

Nach erfolgreicher Übernahme wandert die Anfrage in den `DONE`-Bereich.

![Anfrage wechselt zu DONE](../assets/discordbot/planning-system/36_planning_system_nuke_replacementsystem_iwanttoreplaceanuke_requestchangestoDONE.png){ .screenshot }

`Withdraw replacement` zieht eine bereits zugesagte Übernahme zurück; die Anfrage geht zurück in den `NOT DONE`-Bereich.

![Withdraw-replacement-Button](../assets/discordbot/planning-system/29_planning_system_nuke_replacementsystem_withdrawreplacement_button.png){ .screenshot }

`Delete Request` löscht eine eigene Anfrage komplett.

![Delete-Request-Button](../assets/discordbot/planning-system/30_planning_system_nuke_replacementsystem_deleterequest_button.png){ .screenshot }

`Admin: Delete all requests` löscht alle Nuke-Ersatz-Anfragen auf einen Schlag (Bestätigungs-Abfrage erscheint).

![Admin-Delete-all-requests-Button](../assets/discordbot/planning-system/31_planning_system_nuke_replacementsystem_admindeleteallrequests_button.png){ .screenshot }

!!! info "Wer darf Nuke-Ersatz-Anfragen löschen?"
    Eine einzelne Anfrage kann nur der Ersteller selbst oder ein User mit der Rolle `TWU-Mod` über `Delete Request` löschen. Der Button `Admin: Delete all requests` zum gesammelten Löschen aller Anfragen steht ausschließlich Usern mit der Rolle `TWU-Mod` oder Discord-Administrator-Rechten zur Verfügung.
