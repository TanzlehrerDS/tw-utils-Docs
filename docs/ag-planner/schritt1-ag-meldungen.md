# Schritt 1: AG-Meldungen

In Schritt 1 legst du fest, **welche Adelsgeschlechter zur Verfügung stehen** —
also aus welchen Dörfern wie viele AGs starten können.

![Schritt 1 „AG-Meldungen" im Überblick](../assets/snob-planning-tool/overview_01_tool.png){ .screenshot }

Links steht die **Schrittleiste**. Du kannst jederzeit zwischen den Schritten
hin- und herspringen. Ganz unten sitzt der Knopf **„Berechnen"**, der von
überall aus erreichbar ist; Schritt **4. Ergebnis** bleibt gesperrt, bis eine
Berechnung durchgelaufen ist. Am linken Rand des Inhaltsbereichs liegt die
Lasche **„Karte"** — sie öffnet die [Gesamtkarte](gesamtkarte.md), die in jedem
Schritt zur Verfügung steht.

## 1. AG-Meldungen hinzufügen

Unter **„AG-Meldungen hinzufügen"** stehen zwei gleichwertige Wege
nebeneinander.

### Aus Stammes-Umfrage

![Import aus einer Stammes-Umfrage](../assets/snob-planning-tool/step1_01_survey_import.png){ .screenshot }

Hat deine Stammesführung eine [Stammes-Umfrage](../leader-view/stammes-umfragen.md)
laufen lassen, in der die Mitglieder ihre Adelsgeschlechter gemeldet haben,
holst du dir die Meldungen direkt daraus. Die Auswahlliste zeigt je Eintrag den
Discord-Server, den Titel der Umfrage und ihr Datum; die jüngste steht oben.
Mit dem Plus-Knopf übernimmst du die Meldungen.

!!! info "Ohne Umfrage fehlt dieser Weg ganz"
    Gibt es auf keinem deiner Discord-Server eine Umfrage für diese Welt — oder
    fehlt dir das Recht, sie zu lesen —, blendet das Tool die Spalte samt dem
    „oder" aus. Dann bleibt nur der Weg über die Koordinaten.

### Koordinaten einfügen

Im Feld **„Koordinaten einfügen:"** kannst du beliebigen Text einwerfen — das
Tool pflückt die Koordinaten selbst heraus. Beim Tippen meldet es darunter
zurück, was es erkannt hat (*„12 Koordinaten erfolgreich erkannt."* bzw.
*„10 gültig. 2 nicht gefunden: …"*). Solange keine gültige Koordinate darin
steht, bleibt der Plus-Knopf gesperrt.

Rechts daneben trägst du unter **„Anzahl AGs"** ein, wie viele
Adelsgeschlechter **je Dorf** gemeldet werden. Die Vorgabe ist `4`, also ein
voller Train.

!!! info "Bekannte Koordinaten werden übersprungen"
    Fügst du eine Koordinate ein, die schon in der Liste steht, bleibt ihre
    AG-Zahl unverändert — das Tool zählt nichts dazu und überschreibt nichts.
    Ändern kannst du die Zahl direkt in der Tabelle.

## 2. Kennzahlen und Tabelle

![Kennzahlen und Tabelle der Meldungen](../assets/snob-planning-tool/step1_02_table.png){ .screenshot }

Über der Tabelle stehen fünf Kennzahlen:

- **AGs** — die Summe aller gemeldeten Adelsgeschlechter.
- **Trains** — wie viele **volle** Trains (je 4 AGs) darin stecken.
- **3er / 2er / 1er** — der **Rest**, der nach den vollen Trains je Dorf übrig
  bleibt.

!!! info "Beispiel"
    Ein Dorf mit 12 gemeldeten AGs zählt als **3 Trains** und hinterlässt
    keinen Rest. Ein Dorf mit 6 AGs zählt als **1 Train** plus eine **2er**.

Die Tabelle darunter zeigt je Zeile Koordinate, Spieler und Stamm. Die Spalte
**AGs** ist ein Eingabefeld — du kannst die Zahl also nachträglich anpassen.
Setzt du sie auf `0`, verschwindet die Zeile. Über das rote × entfernst du eine
Zeile direkt, mit **„Alle löschen"** die ganze Liste. Das Suchfeld filtert nach
Spieler oder Koordinate.

!!! warning "Löschen zieht Befehle mit"
    Entfernst du ein Herkunftsdorf, für das bereits Befehle geplant sind,
    verschwinden diese Befehle mit. Senkst du die AG-Zahl unter das, was schon
    verplant ist, weist das Tool darauf hin.

!!! info "Nach jeder Änderung neu berechnen"
    Änderst du Meldungen, Ziele oder Einstellungen, erscheint der Hinweis
    *„Änderungen werden erst nach Neuberechnung wirksam."* Das bereits
    berechnete Ergebnis bleibt so lange stehen, wie es ist.

---

Weiter geht es mit [Schritt 2: Zieldörfer](schritt2-zieldoerfer.md).
