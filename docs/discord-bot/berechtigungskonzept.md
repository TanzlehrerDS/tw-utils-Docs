# Berechtigungskonzept

Der tw-utils Discord-Bot kennt zwei Berechtigungsstufen: **normale Mitglieder** und Discord-User mit der Rolle **TWU-Mod**. Diese Unterscheidung steuert, welche Buttons und Aktionen einem User auf eurem Stammes-Discord zur Verfügung stehen.

## 1. Normale Mitglieder

Jeder Discord-User auf eurem Stammes-Discord ist aus Sicht des tw-utils Discordbot standardmäßig ein normales Mitglied. Normale Mitglieder können die interaktiven Funktionen der installierten Module nutzen:

- Bunker-Anträge im Kanal `#⚫-request-bunker` stellen
- Account-Sitting-Anfragen im Kanal `#⚫-request-account-sitting` stellen
- Off-, Deff- oder AG-Befehle über das ODS-System suchen
- AG-Meldungen und Abschick-Zeiten im Planning-System eingeben
- usw.

## 2. TWU-Mod

Die Rolle **TWU-Mod** ist die Verwaltungs-Rolle des Bots auf eurem Discord-Server. User mit dieser Rolle (oder mit Discord-Administrator-Rechten) haben Zugriff auf **alle** Verwaltungs-Funktionen — zusätzlich zu allem, was normale Mitglieder dürfen:

- Bot-Konfiguration im Kanal `#⚫-bot-config` (Spielwelt setzen, Module installieren/aktualisieren/deinstallieren, Sichtbarkeits-Rollen vergeben)
- Zugriff auf den Leader-View vergeben
- Bunkeranfragen genehmigen oder ablehnen
- Truppendaten hochladen

TWU-Mod-User haben außerdem standardmäßig Zugriff auf die Leader-View-Kanäle (`#⚫-leaderview-bunker`, `#⚫-leaderview-planinfo`, usw.).

Die Rolle wird wie jede andere Discord-Rolle auf dem Server vergeben — entweder direkt über die Discord-Server-Einstellungen oder über euer eigenes Rechte-Management.

!!! info "Voraussetzung für die Erst-Einrichtung"
    Für die initiale Einrichtung des Bots (Bot einladen, Welt setzen, erste Module installieren) werden **Discord-Administrator-Rechte** benötigt. Nach dem Setup reicht für die laufende Verwaltung die Rolle **TWU-Mod**.

## 3. Abgrenzung zum Leader-Status auf tw-utils.net

Der Zugriff auf den [Leader-View](../leader-view/uebersicht.md) auf `tw-utils.net` wird **separat** über den Button `Manage Access to Leader-View` im Kanal `#⚫-bot-config` vergeben. Da TWU-Mod sich selber Leader-Status geben können, ist ein TWU-Mod in der Berechtigungshierarchie höher anzusehen.
