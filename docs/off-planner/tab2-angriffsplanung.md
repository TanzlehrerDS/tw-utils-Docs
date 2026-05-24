# Tab 2: Angriffsplanung

In Tab 2 verplanst du alle **scharf angelaufenen Ziele** — also Ziele, die
mit echten Offs angegriffen werden sollen. Es gibt drei Kategorien:
**AG-Spam**, **Katta-Spam** und **Bunker brechen**. Begleitfakes zu diesen
scharfen Zielen werden ebenfalls hier definiert. Die Verplanung **reiner
Fakeziele** (Ziele, die ausschließlich Fakes erhalten) erfolgt separat in
[Tab 3: Fakeplanung](tab3-fakeplanung.md).

## 1. Ankunftszeitkorridor

![Ankunftszeitkorridor](../assets/nuke-planning-tool/tab2_01_arrival_times.png){ .screenshot }

Im Bereich **„Ankunftszeitkorridor"** legst du den Zeitrahmen fest, in
dem die Angriffe eintreffen sollen. Gib **Datum**, **Start** und **Ende**
ein und klicke anschließend auf **„Korridor übernehmen"**, um den
Korridor zu aktivieren.

!!! info "Korridor gilt nur für die 1. Off"
    Der Korridor bestimmt, in welchem Zeitrahmen die **1. geplante Off**
    eintreffen muss. Weitere Offs und Fakes können leicht außerhalb des
    festgelegten Korridors eintreffen — je nachdem, welche Einstellungen
    zum Fake-Zeitraum sowie zum Min-/Max-Abstand getroffen wurden.

## 2. Globale Einstellungen

![Globale Einstellungen](../assets/nuke-planning-tool/tab2_02_global_settings.png){ .screenshot }

Im Bereich **„Globale Einstellungen"** legst du Einstellungen fest, die
für alle drei Kategorien gemeinsam gelten.

### 2.1 Planungsreihenfolge

Im Bereich **„Planungsreihenfolge"** sortierst du die drei Kategorien
(**AG-Spam**, **Katta-Spam**, **Bunker brechen**) über die Pfeil-Buttons
in die gewünschte Reihenfolge. Die Reihenfolge bestimmt, in welcher
Abfolge die Kategorien verplant werden.

!!! info "Reihenfolge ist bei knappen Ressourcen entscheidend"
    Bei knappen Off-Ressourcen werden die in der Planungsreihenfolge
    **zuerst** stehenden Kategorien vollständig bedient. Die **zuletzt**
    stehende Kategorie bekommt dadurch sehr wahrscheinlich nicht mehr
    alle erforderlichen Offs zugewiesen. Stelle die wichtigste Kategorie
    daher an die erste Position.

### 2.2 Globale Limits

Im Bereich **„Globale Limits"** legst du übergreifende Grenzwerte fest:

- **Maximale Anzahl Fakes pro Herkunftsdorf** — wie viele Fakes
  insgesamt aus einem einzelnen Dorf gestartet werden dürfen.
- **Standard-C-Split** — die Standard-Einheitenanzahl eines einzelnen
  Katta-Splits.

### 2.3 Katta-Cleaner (C-Cleaner)

Im Bereich **„Katta-Cleaner (C-Cleaner)"** definierst du die
Standard-Truppenzusammensetzung der Zwischencleaner: **Äxte**, **leichte
Kavallerie** und **Rammen**.

!!! info "Dynamische Truppenzusammensetzung"
    Ist die Option **„Dynamische Truppenzusammensetzung erlauben"**
    aktiviert, werden auch Zwischencleaner verplant, die **nicht exakt**
    der eingegebenen Truppenzusammensetzung entsprechen (z. B. wenn dem
    Dorf Äxte fehlen). Das Tool füllt dann automatisch mit Äxten oder
    leichter Kavallerie auf, bis die resultierende Angriffsstärke
    erreicht ist. So lassen sich auch Dörfer als Cleaner einsetzen, die
    nicht perfekt der Soll-Zusammensetzung entsprechen.

Rechts daneben legst du im Bereich **„Priorisierte Herkunfts-Kategorien"**
fest, aus welchen Dorf-Kategorien (z. B. *Dörfer >500 Axt*, *>1000 Axt*,
*>2000 Axt*, …, *Verbleibende Dörfer*) die C-Cleaner bevorzugt
gestartet werden sollen. Verschiebe die gewünschten Kategorien über die
Pfeil-Buttons in die rechte Liste und sortiere sie nach Priorität.

## 3. Die drei Standard-Kategorien

Das Tool kennt drei Kategorien scharfer Ziele:

- **AG-Spam**
- **Katta-Spam**
- **Bunker brechen**

Für jede dieser Kategorien wird eine eigene Spalte angezeigt, in der du
Ziele und Befehlsstruktur unabhängig konfigurierst.

## 4. Zielauswahl & Befehlsplanung – Übersicht

![Übersicht Zielauswahl & Befehlsplanung](../assets/nuke-planning-tool/tab2_03_overview_target_selection.png){ .screenshot }

Im Bereich **„Zielauswahl & Befehlsplanung"** siehst du die drei
Kategorien nebeneinander als Spalten (AG-Spam, Katta-Spam, Bunker
brechen). Pro Spalte stehen die gleichen Bedienelemente zur Verfügung:

- **„+ Ziele hinzufügen"** — öffnet das Modal zum Hinzufügen neuer
  Ziele.
- **Stift-Icon** — öffnet das Modal zum Bearbeiten der vorhandenen
  Zielliste.
- **Mülltonnen-Icon** — löscht alle Ziele dieser Kategorie auf einmal.
- **Counter „X Ziele"** — zeigt die aktuelle Anzahl Ziele in der
  Kategorie.

Darunter folgen die kategoriespezifischen Befehls- und
Detail-Einstellungen, die in den nächsten Abschnitten beschrieben werden.

## 5. Ziele hinzufügen

![Modal „Ziele hinzufügen" – AG-Spam](../assets/nuke-planning-tool/tab2_04_add_targets_modal_1.png){ .screenshot }

Über den Button **„+ Ziele hinzufügen"** öffnet sich das Modal
**„Ziele hinzufügen: <Kategorie>"**. Füge die **Koordinaten** der
Zieldörfer im Format `XXX|YYY` in das Textfeld ein — umliegender Text
oder Skript-Output ist egal, das Tool filtert die Koordinaten automatisch
heraus. Bestätige anschließend mit **„Hinzufügen"**.

![Modal „Ziele hinzufügen" – Bunker brechen](../assets/nuke-planning-tool/tab2_05_add_targets_modal_2.png){ .screenshot }

Für die Kategorie **Bunker brechen** gibt es zusätzlich das Feld
**„Anzahl Offs pro Ziel"**. Der hier eingegebene Wert wird auf **alle**
im Textfeld eingegebenen Koordinaten gleichermaßen angewendet. So
kannst du bequem in einem Schritt eine ganze Liste Bunker mit einer
einheitlichen Anzahl Offs pro Ziel anlegen.

!!! info "Keine Duplikate"
    Das Tool stellt sicher, dass innerhalb einer Kategorie **keine
    scharfen Angriffsziele doppelt** enthalten sein können. Bereits
    vorhandene Koordinaten werden beim Hinzufügen automatisch
    herausgefiltert.

## 6. Ziele bearbeiten

![Modal „Liste bearbeiten" – AG-Spam](../assets/nuke-planning-tool/tab2_06_edit_targets_modal_1.png){ .screenshot }

Über das **Stift-Icon** öffnet sich das Modal **„Liste bearbeiten:
<Kategorie>"**. Es enthält eine Suchleiste sowie eine Tabelle mit den
Spalten **#**, **Koord.**, **Spieler** und **Aktion**. Über das
Mülltonnen-Icon in der Spalte **Aktion** kannst du einzelne Ziele
entfernen; **„Alle löschen"** leert die gesamte Kategorie.

![Modal „Liste bearbeiten" – Bunker brechen](../assets/nuke-planning-tool/tab2_07_edit_targets_modal_2.png){ .screenshot }

Bei der Kategorie **Bunker brechen** gibt es zusätzlich die Spalte
**Offs**, die für jedes Ziel die hinterlegte Anzahl Offs anzeigt.

## 7. Befehlsplanung pro Kategorie

![Befehlsplanung pro Kategorie](../assets/nuke-planning-tool/tab2_08_command_planning.png){ .screenshot }

Im Bereich **„Befehlsplanung"** legst du pro Kategorie fest, **wie viele
Befehle pro Ziel** verplant werden sollen.

!!! info "AG-Spam und Katta-Spam identisch — Bunker brechen reduziert"
    Die Befehlsplanung ist für die Kategorien **AG-Spam** und
    **Katta-Spam** identisch aufgebaut. Die Kategorie **Bunker brechen**
    bietet eine **leicht reduzierte** Auswahl an
    Einstellungsmöglichkeiten — die Anzahl der Offs pro Ziel wird dort
    bereits beim [Hinzufügen der Ziele](#5-ziele-hinzufugen) festgelegt
    und entfällt daher in der Befehlsplanung.

Die folgenden Felder stehen pro Ziel zur Verfügung:

- **Offs** — Anzahl scharfer Off-Angriffe pro Ziel.
- **Fakes (nur Off-Dörfer)** — Begleit-Fakes, die ausschließlich aus
  Off-Dörfern gestartet werden.
- **Fakes (nur Deff-Dörfer)** — Begleit-Fakes, die ausschließlich aus
  Deff-Dörfern gestartet werden.
- **Fakes (alle Dorftypen)** — Begleit-Fakes, die aus beliebigen Dörfern
  gestartet werden dürfen.
- **Katta-Cleaner** — Anzahl Zwischencleaner pro Ziel (siehe Globale
  Einstellungen für die Truppenzusammensetzung).

!!! info "Begleitfakes ≠ Tab 3"
    Die hier definierten Fakes sind **Begleitfakes für die scharfen
    Ziele** dieser Kategorie. Die Planung **reiner Fakeziele** (ohne
    scharfen Hintergrund) erfolgt separat in
    [Tab 3: Fakeplanung](tab3-fakeplanung.md).

## 8. Katta-Splits (C-Splits)

![Katta-Splits pro Gebäude](../assets/nuke-planning-tool/tab2_09_c-split_planning.png){ .screenshot }

Im Bereich **„Katta-Splits (C-Splits)"** legst du pro Gebäude fest, wie
viele Stufen durch Katta-Splits gezielt abgerissen werden sollen. Für
jedes Gebäude steht ein eigenes Zahlenfeld zur Verfügung: **Hauptgebäude**,
**Kaserne**, **Stall**, **Werkstatt**, **Adelshof**, **Schmiede**,
**Versammlungsplatz**, **Statue**, **Marktplatz**, **Holzfäller**,
**Lehmgrube**, **Eisenmine**, **Bauernhof**, **Speicher**, **Versteck**
und **Wall**.

Ein Wert von **`-1`** bedeutet, dass das Gebäude **vollständig** durch
Katta-Splits abgerissen werden soll.

## 9. Fake-Zeitraum festlegen

![Fake-Zeitraum festlegen](../assets/nuke-planning-tool/tab2_10_setting_fake_time_period.png){ .screenshot }

Im Bereich **„Fake-Zeitraum festlegen"** definierst du das Zeitfenster
und die Verteilung der Begleitfakes rund um die 1. Off:

- **Erw. vor 1. Off (Min.)** — wie viele Minuten **vor** der 1. Off der
  Fake-Zeitraum beginnen darf.
- **Erw. nach 1. Off (Min.)** — wie viele Minuten **nach** der 1. Off
  der Fake-Zeitraum enden darf.
- **Anteil 1./2./3. Drittel (%)** — prozentuale Verteilung der Fakes
  auf die drei Drittel des Zeitfensters. Die drei Werte sollten in
  Summe 100 % ergeben.
- **Auffüllen mit Fakes bis** — Mindestanzahl an Fakes, mit der pro
  Ziel aufgefüllt wird, sofern die Ressourcen es zulassen.

## 10. Abstände zwischen Offs und C-Splits

![Abstände zwischen Offs und C-Splits](../assets/nuke-planning-tool/tab2_11_distance_between_for_nukes_or_c-splits.png){ .screenshot }

Im Bereich **„Abstand zwischen Offs (Minuten)"** legst du paarweise den
minimalen und maximalen Abstand zwischen aufeinanderfolgenden Offs fest
— jeweils ein Min/Max-Wert für **Off 1 → 2**, **Off 2 → 3** usw.

Im Bereich **„Abstand der C-Splits zum letzten Off"** legst du fest, wie
weit die Katta-Splits zeitlich von der letzten Off entfernt eintreffen
sollen (**Min-Abstand** / **Max-Abstand** in Minuten).

## 11. Priorisierung der Off-Kategorien

![Priorisierung der Off-Kategorien](../assets/nuke-planning-tool/tab2_12_prioritizing_nuke_categories.png){ .screenshot }

Im Bereich **„Priorisierung der Off-Kategorien"** legst du fest, aus
welchen Herkunfts-Kategorien die Offs bevorzugt verplant werden sollen.
Verfügbare Kategorien sind z. B. *Verbleibende Dörfer*, *Dörfer >500
Axt*, *>1000 Axt*, *>2000 Axt*, …, *>6000 Axt*. Verschiebe die
gewünschten Kategorien über die Pfeil-Buttons in die rechte Liste
**„Priorisiert"** und sortiere sie nach Priorität.

Die Checkbox **„Strikte Priorisierung (Reihenfolge erzwingen)"** legt
fest, wie streng diese Priorisierung gilt:

- **Aus** — Die Priorisierung wirkt als Präferenz; das Tool darf andere
  Kategorien nutzen, wenn das die Planung verbessert.
- **Ein** — Die Priorisierung wird strikt eingehalten: Eine niedriger
  priorisierte Kategorie wird **erst dann** angefasst, wenn die
  höher priorisierte Kategorie vollständig ausgeschöpft ist.

## 12. Zusammenfassung & Karte

![Zusammenfassung & Karte](../assets/nuke-planning-tool/tab2_13_summary_map.png){ .screenshot }

Im Bereich **„Zusammenfassung & Karte"** siehst du nach der Planung eine
Übersicht aller geplanten Angriffe.

Die Tabelle **„Geplante Angriffe pro Spieler"** zeigt pro Spieler die
Anzahl an **Targets**, **Offs**, **Catapult**, **C-Cleaner**, **Fakes**
und **Alle** — sowie eine Summenzeile **TOTAL**. Über die Suche im
Tabellen-Header kannst du nach einzelnen Spielern filtern.

Im Bereich **Overview** kannst du außerdem einzelne **Spieler markieren**
(grün) oder einen ganzen **Stamm markieren** (rot), um sie auf der Karte
hervorzuheben.

Auf der Karte lassen sich verschiedene **Layer** ein- und ausblenden
(Klick auf die Button-Leiste): **Backline**, **Player**, **Off**,
**Frontline**, **AG-Spam**, **Katta-Spam** und **Bunker**. So kannst du
die Verteilung der geplanten Angriffe visuell prüfen, bevor du in
[Tab 3](tab3-fakeplanung.md) bzw. [Tab 4](tab4-berechnung.md) weitermachst.
