# Berechtigungskonzept

Der tw-utils Discord-Bot kennt zwei Berechtigungsstufen: **normale Mitglieder** und Discord-User mit der Rolle **TWU-Mod**. Diese Unterscheidung steuert, welche Buttons und Aktionen einem User auf eurem Stammes-Discord zur Verfügung stehen. Eine Kurz-Erklärung dieses Konzepts findest du auch direkt im Bot — im automatisch erstellten Kanal `#⚫-explanations`.

## 1. Normale Mitglieder

Jeder Discord-User auf eurem Stammes-Discord ist standardmäßig ein normales Mitglied. Normale Mitglieder können die interaktiven Funktionen der installierten Module nutzen:

- Eigenen Spieler-Account über `Account-Verification` verifizieren
- Bunker anfragen im Kanal `#⚫-request-bunker`
- Account-Sitting anfragen im Kanal `#⚫-request-account-sitting`
- Off-, Deff- oder AG-Befehle über das Search-System suchen im Kanal `#⚫-ods-search`
- AG-Meldungen und Off-Abschick-Zeiten im Planning-System eingeben

## 2. TWU-Mod

Die Rolle **TWU-Mod** ist die Verwaltungs-Rolle des Bots auf eurem Discord-Server. User mit dieser Rolle (oder mit Discord-Administrator-Rechten) haben Zugriff auf **alle** Verwaltungs-Funktionen — zusätzlich zu allem, was normale Mitglieder dürfen:

- Bot-Konfiguration im Kanal `#⚫-bot-config` (Spielwelt setzen, Module installieren/aktualisieren/deinstallieren, Sichtbarkeits-Rollen vergeben)
- Leader-View-Zugriffe vergeben (siehe Abschnitt 3)
- Bunker-Daten in das Bunker-Information-System hochladen
- Truppen-Daten in das Off/Deff/Snob-Search-System hochladen
- Bunker- und Sitting-Anfragen genehmigen oder ablehnen
- Leader-View-Kanäle sehen (z. B. `#⚫-leaderview-bunker`, `#⚫-leaderview-planinfo`)
- Inhalte verwalten und löschen (z. B. abgeschlossene Planungen)

Die Rolle wird wie jede andere Discord-Rolle auf dem Server vergeben — entweder direkt über die Discord-Server-Einstellungen oder über euer eigenes Rechte-Management.

!!! info "Voraussetzung für die Erst-Einrichtung"
    Für die initiale Einrichtung des Bots (Bot einladen, Welt setzen, erste Module installieren) werden **Discord-Administrator-Rechte** benötigt. Nach dem Setup reicht für die laufende Verwaltung die Rolle **TWU-Mod**.

## 3. Leader-Status ist davon getrennt

Die Rolle `TWU-Mod` steuert die Verwaltung **auf Discord**. Der Zugriff auf den [Leader-View](../leader-view/uebersicht.md) auf `tw-utils.net` wird **separat** vergeben — über den Button `Manage Access to Leader-View` im Kanal `#⚫-bot-config`. Wer dort die Rolle `Leader` zugewiesen bekommt, kann den Leader-View auf der Website nutzen. Ein TWU-Mod auf Discord ist also **nicht automatisch** Leader auf tw-utils.net — und umgekehrt.

## 4. Übersicht im `#⚫-explanations` Kanal

Der Bot legt beim Setup automatisch den Kanal `#⚫-explanations` an. Dort findest du eine Kurz-Erklärung des Rollen-Konzepts (Embed `Discord Role Concept`) sowie weitere Erklär-Embeds zu den einzelnen Modulen.
