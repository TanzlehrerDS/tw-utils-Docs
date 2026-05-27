# Planning-System

Das Planning-System ist die Discord-seitige Brücke zum Off-Planner auf [tw-utils.net](https://tw-utils.net). Zusätzlich zur Website haben die Spieler auch über den tw-utils Discordbot die Möglichkeit Adelsgeschlechter zu melden, Abschickzeiten einzutragen und Herkunftsdörfer auszuplanen. Die Stammesführung kann im Gegenzug die fertig erstellten Angriffspläne verteilen. Zusätzlich können die Leader auch von unterwegs über Discord Einsicht in die Planung nehmen.

!!! info "Voraussetzung verifizierter TW-Account"
    Ohne verknüpften Account können die Eingabe-Buttons und der `Download`-Button im Plan-Verteilungs-Kanal nicht genutzt werden.

## 1. Kanäle des Moduls

Nach der [Installation](modul-verwaltung.md) legt der Bot die Kategorie `🪓 PLANNING-SYSTEM` mit vier Basis-Kanälen an:

- `#⚫-queries` — Meldungs-Kanal für Spieler (AG-Meldungen, Abschickzeiten, Off-Ausschlüsse)
- `#⚫-plan-distribution` — Spieler können sich hier Ihren persönlichen Angriffsplan herunterladen
- `#⚫-leaderview-planinfo` — Leader können hier Einsicht in die geplanten Befehle nehmen
- `#⚫-nuke-replacement` — ermöglicht das strukturierte Suchen nach Ersatz-Offs

![Kanal-Übersicht des Planning-Systems](../assets/discordbot/planning-system/01_planning_system_channels.png){ .screenshot }

## 2. AG-Meldungen

Im `#⚫-queries`-Kanal findest Du unterhalb des `Queries`-Embeds drei farblich markierte Buttons: `Snob Report`, `Launch Times` und `Off-Exclusion`.

![Queries-Kanal](../assets/discordbot/planning-system/02_planning_system_queries_channel.png){ .screenshot }

![Query-Buttons im Queries-Kanal](../assets/discordbot/planning-system/03_planning_system_queries_channel_query-buttons.png){ .screenshot }

Per Klick auf `Snob Report` öffnet sich ein ephemerales Sub-Menü mit den Buttons `Add`, `Show` und `Delete`.

![Sub-Menü Snob Report](../assets/discordbot/planning-system/04_planning_system_snobquery_add-show-delete-button.png){ .screenshot }

Über den `Add`-Button startest Du eine neue AG-Meldung. Zunächst wählst Du im Dropdown den verifizierten TW-Account aus, für den die Meldung gelten soll.

![Account-Auswahl für AG-Meldung](../assets/discordbot/planning-system/05_planning_system_snobquery_select_verified_account.png){ .screenshot }

Anschließend öffnet sich das AG-Meldungs-Modal, in dem Du die Details der Meldung einträgst.

![AG-Meldungs-Modal](../assets/discordbot/planning-system/06_planning_system_snobquery_modal.png){ .screenshot }

Nach erfolgreichem Absenden bestätigt der Bot Deine Meldung mit einer kurzen ephemeralen Erfolgsmeldung.

![Erfolgsmeldung nach AG-Meldung](../assets/discordbot/planning-system/07_planning_system_snobquery_success_message.png){ .screenshot }

Über den `Show`-Button kannst Du Dir alle bereits gemeldeten AGs für den ausgewählten Account anzeigen lassen.

![Show-Ansicht der AG-Meldungen](../assets/discordbot/planning-system/08_planning_system_snobquery_show_button.png){ .screenshot }

Über den `Delete`-Button kannst Du eine konkrete AG-Meldung wieder löschen.

![Delete-Button für AG-Meldungen](../assets/discordbot/planning-system/09_planning_system_snobquery_delete_button.png){ .screenshot }

## 3. Abschickzeiten

Per Klick auf `Launch Times` öffnet sich analog ein ephemerales Sub-Menü mit den Buttons `Add`, `Show` und `Delete`.

![Sub-Menü Launch Times](../assets/discordbot/planning-system/10_planning_system_launchtimequery_add-show-delete-button.png){ .screenshot }

Über den `Add`-Button startest Du eine neue Abschickzeit-Meldung. Zunächst wählst Du im Dropdown den verifizierten TW-Account aus, für den die Zeit gelten soll.

![Account-Auswahl für Abschickzeit](../assets/discordbot/planning-system/11_planning_system_launchtimequery_select_verified_account.png){ .screenshot }

Anschließend öffnet sich das Abschickzeiten-Modal, in dem Du Dein verfügbares Zeitfenster einträgst.

![Abschickzeiten-Modal](../assets/discordbot/planning-system/12_planning_system_launchtimequery_modal.png){ .screenshot }

Über den `Show`-Button kannst Du Dir alle bereits hinterlegten Zeitfenster für den ausgewählten Account anzeigen lassen. Über den `Delete`-Button kannst Du ein konkretes Zeitfenster wieder löschen.

## 4. Off-Ausschluss

Per Klick auf `Off-Exclusion` öffnet sich das Sub-Menü mit den Buttons `Add`, `Show` und `Delete`.

![Sub-Menü Off-Exclusion](../assets/discordbot/planning-system/13_planning_system_offexclusionquery_add-show-delete-button.png){ .screenshot }

Über den `Add`-Button startest Du eine neue Off-Ausschluss-Meldung. Zunächst wählst Du im Dropdown den verifizierten TW-Account aus, für den der Ausschluss gelten soll.

![Account-Auswahl für Off-Ausschluss](../assets/discordbot/planning-system/14_planning_system_offexclusionquery_select_verified_account.png){ .screenshot }

Anschließend öffnet sich das Off-Ausschluss-Modal, in dem Du die Herkunfts-Dörfer einträgst, die der Planer für Dich nicht als Off-Quelle nutzen soll.

![Off-Ausschluss-Modal](../assets/discordbot/planning-system/15_planning_system_offexclusionquery_modal.png){ .screenshot }

Über den `Show`-Button kannst Du Dir alle bereits hinterlegten Off-Ausschlüsse für den ausgewählten Account anzeigen lassen. Über den `Delete`-Button kannst Du einen konkreten Eintrag wieder löschen.

## 5. Admin-Funktionen

Unterhalb der Spieler-Buttons stehen im `#⚫-queries`-Kanal zwei zusätzliche Admin-Buttons zur Verfügung.

Mit `Admin: Delete All` lassen sich **alle** AG-Meldungen, Abschickzeiten und Off-Ausschluss-Einträge auf dem gesamten Server löschen. Das ist vor allem dann sinnvoll, wenn die Stammes-Führung mit einer komplett neuen Planung starten und alle Alt-Daten der Spieler aus den drei Abfrage-Bereichen zurücksetzen möchte. Vor der Ausführung erscheint eine Bestätigungs-Abfrage mit den Buttons `Confirm` und `Cancel`, sodass nichts versehentlich gelöscht wird.

![Admin Delete All Button](../assets/discordbot/planning-system/16_planning_system_queries_admin_delete_all_button.png){ .screenshot }

Über den `Admin: Export`-Button kannst Du alle aktuell vorliegenden Meldungen als Datei exportieren — praktisch, um die gesammelten Eingaben z. B. außerhalb von Discord in der Stammes-Führung weiterzuverarbeiten.

![Admin Export Button](../assets/discordbot/planning-system/17_planning_system_queries_admin_export_button.png){ .screenshot }

!!! info "Wer darf Admin-Funktionen nutzen?"
    Die Buttons `Admin: Delete All` und `Admin: Export` können nur User mit der Rolle `TWU-Mod` oder Discord-Administrator-Rechten ausführen. Für normale Mitglieder sind diese Buttons zwar sichtbar, aber ein Klick wird vom Bot mit einer Berechtigungs-Fehlermeldung abgelehnt.

## 6. Plan-Verteilung

Im `#⚫-plan-distribution`-Kanal findest Du unterhalb des `Plan Distribution`-Embeds den Button `Download`.

![Plan-Distribution-Kanal](../assets/discordbot/planning-system/18_planning_system_plandistribution_channel.png){ .screenshot }

![Download-Button im Plan-Distribution-Kanal](../assets/discordbot/planning-system/19_planning_system_plandistribution_channel_download_button.png){ .screenshot }

Klick auf `Download`: Der Bot prüft die verknüpften TW-Accounts des Spielers und schickt ihm seine Angriffspläne zum Download per Discord-DM zu.

![Plan-Download per DM](../assets/discordbot/planning-system/20_planning_system_plandistribution_channel_plandownload_via_dm.png){ .screenshot }

!!! info "Plan-Download per DM"
    Damit der Bot die Pläne zustellen kann, müssen Direktnachrichten vom Bot in den Discord-Einstellungen erlaubt sein. Andernfalls erscheint eine ephemerale Fehlermeldung im Kanal mit dem Hinweis, die DMs zu aktivieren.

## 7. Plan-Informationen

Im `#⚫-leaderview-planinfo`-Kanal findest Du unterhalb des `Plan Information`-Embeds den Button `Retrieve Plan Information`.

![Leaderview-PlanInfo-Kanal](../assets/discordbot/planning-system/21_planning_system_leaderview-planinfo_channel.png){ .screenshot }

![Retrieve-Plan-Information-Button](../assets/discordbot/planning-system/22_planning_system_leaderview-planinfo_retrieve-plan-information_button.png){ .screenshot }

Per Klick auf `Retrieve Plan Information` öffnet sich das Modal `Plan Information`. Trage dort im Feld `Coordinate` die gewünschte Zielkoordinate im Format `XXX|YYY` ein und schicke das Modal ab, um die geplanten Befehle für dieses Dorf anzeigen zu lassen.

![Plan-Information-Modal](../assets/discordbot/planning-system/23_planning_system_leaderview-planinfo_retrieve-plan-information_modal.png){ .screenshot }

Der Bot rendert daraufhin direkt im Kanal eine Übersicht aller aktuell geplanten Befehle aus allen aktiven Plan-Containern für die angegebene Koordinate.

![Bot-Antwort mit Plan-Information](../assets/discordbot/planning-system/24_planning_system_leaderview-planinfo_retrieve-plan-information_botanswer.png){ .screenshot }

Die detailliertere Ansicht zeigt zusätzlich die einzelnen Befehle mit Herkunfts-Dorf, Spieler, Befehlstyp sowie Abschick- und Ankunftszeit — damit kannst Du auf einen Blick erkennen, welche Spieler welchen Befehl auf das Ziel-Dorf vorbereiten.

![Detaillierte Bot-Antwort mit Plan-Information](../assets/discordbot/planning-system/25_planning_system_leaderview-planinfo_retrieve-plan-information_botanswer_detailed.png){ .screenshot }

!!! info "Sichtbarkeit Leaderview-PlanInfo"
    Der `#⚫-leaderview-planinfo`-Kanal ist standardmäßig **nur für User mit der Rolle `TWU-Mod` sichtbar**. Normale Mitglieder sehen den Kanal nicht — Plan-Informationen bleiben damit innerhalb der Stammes-Führung.

## 8. Off-Ersatz

Im `#⚫-nuke-replacement`-Kanal findest Du oben unter dem `Nuke-Replacement`-Embed fünf Verwaltungs-Buttons; darunter listen zwei Status-Embeds (`NOT DONE` und `DONE`) den aktuellen Stand aller Ersatz-Anfragen auf.

![Nuke-Replacement-Übersicht](../assets/discordbot/planning-system/26_planning_system_nuke_replacementsystem_overview.png){ .screenshot }

Über den Button `Request Nuke-replacement` stellst Du eine neue Ersatz-Anfrage, wenn Du einen geplanten Off nicht selbst losschicken kannst und einen Stammeskollegen suchst, der das übernimmt.

![Request-Nuke-replacement-Button](../assets/discordbot/planning-system/27_planning_system_nuke_replacementsystem_requestnukereplacement_button.png){ .screenshot }

Per Klick öffnet sich das Anfrage-Modal mit Eingabefeldern für die Zielkoordinate, den gewünschten Abschickzeitpunkt und die Off-Größe (Angabe als Axt- und LKav-Anzahl).

![Request-Nuke-replacement-Modal](../assets/discordbot/planning-system/32_planning_system_nuke_replacementsystem_requestnukereplacement_modal.png){ .screenshot }

Nach dem Abschicken wird die Anfrage im Embed unter `NOT DONE` einsortiert, sodass alle Stammesmitglieder sehen, wo noch Ersatz gesucht wird.

![Anfrage wird zu NOT DONE hinzugefügt](../assets/discordbot/planning-system/33_planning_system_nuke_replacementsystem_requestnukereplacement_addedtonotdoneembed.png){ .screenshot }

Mit dem Button `I want to replace a Nuke` übernimmst Du eine bestehende offene Anfrage.

![I-want-to-replace-a-Nuke-Button](../assets/discordbot/planning-system/28_planning_system_nuke_replacementsystem_iwanttoreplaceanuke_button.png){ .screenshot }

Per Klick öffnet sich zunächst ein Dropdown, in dem Du die konkrete Anfrage auswählst, die Du übernehmen möchtest.

![Auswahl der zu übernehmenden Anfrage](../assets/discordbot/planning-system/34_planning_system_nuke_replacementsystem_iwanttoreplaceanuke_selectarequesttotakeover.png){ .screenshot }

Danach folgt ein Eingabefeld, in dem Du den eigenen verifizierten Account einträgst, mit dem Du die Übernahme leistest.

![Auswahl des übernehmenden Accounts](../assets/discordbot/planning-system/35_planning_system_nuke_replacementsystem_iwanttoreplaceanuke_selecttheaccountwhotakesover.png){ .screenshot }

Nach erfolgreicher Übernahme wandert die Anfrage in den `DONE`-Bereich des Embeds, damit für alle ersichtlich ist, dass ein Ersatz gefunden wurde.

![Anfrage wechselt zu DONE](../assets/discordbot/planning-system/36_planning_system_nuke_replacementsystem_iwanttoreplaceanuke_requestchangestoDONE.png){ .screenshot }

Über den Button `Withdraw replacement` kannst Du eine bereits zugesagte Übernahme wieder zurückziehen; die Anfrage geht dann zurück in den `NOT DONE`-Bereich.

![Withdraw-replacement-Button](../assets/discordbot/planning-system/29_planning_system_nuke_replacementsystem_withdrawreplacement_button.png){ .screenshot }

Über den Button `Delete Request` kannst Du eine eigene Anfrage komplett löschen, sobald sie nicht mehr gebraucht wird.

![Delete-Request-Button](../assets/discordbot/planning-system/30_planning_system_nuke_replacementsystem_deleterequest_button.png){ .screenshot }

Mit `Admin: Delete all requests` lassen sich schließlich alle Off-Ersatz-Anfragen auf einen Schlag löschen; vor dem Löschen erscheint eine Bestätigungs-Abfrage.

![Admin-Delete-all-requests-Button](../assets/discordbot/planning-system/31_planning_system_nuke_replacementsystem_admindeleteallrequests_button.png){ .screenshot }

!!! info "Wer darf Off-Ersatz-Anfragen löschen?"
    Eine einzelne Anfrage kann nur der Ersteller selbst oder ein User mit der Rolle `TWU-Mod` über `Delete Request` löschen. Der Button `Admin: Delete all requests` zum gesammelten Löschen aller Anfragen steht ausschließlich Usern mit der Rolle `TWU-Mod` oder Discord-Administrator-Rechten zur Verfügung.
