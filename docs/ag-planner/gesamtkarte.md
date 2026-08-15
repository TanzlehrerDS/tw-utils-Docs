# Die Gesamtkarte

Die Karte ist aus **jedem** Schritt erreichbar: über die Lasche **„Karte"** am
linken Rand des Inhaltsbereichs. Sie zeigt die Welt mit deinen AG-Dörfern, den
Zielen und den geplanten Befehlen — und im Handbetrieb planst du direkt auf ihr.

![Die Gesamtkarte mit Bedienfeld](../assets/snob-planning-tool/map_01_open.png){ .screenshot }

## 1. Bedienfeld und Ebenen

Über der Karte liegt das Bedienfeld:

- **„Spieler markieren"** und **„Stamm markieren"** — Name bzw. Stammes-Tag
  eintragen, Farbe wählen, mit dem Plus-Knopf hinzufügen. Die Markierungen
  sammeln sich darunter und lassen sich einzeln wieder entfernen.
- Die **Ebenen-Chips** schalten ein, was zu sehen ist:

| Zeile | Chips |
|---|---|
| **Dörfer** | `Barbaren`, `Spieler`, `AG-Dörfer` |
| **Ziele** | `Zieldörfer` |
| **Befehle** | `AG` — erscheint erst, wenn Befehle geplant sind |
| **Hilfen** | `Reichweite` — startet ausgeschaltet |

In der Kartenkarte selbst springst du über das Koordinatenfeld an eine Stelle
(`500|500`) und bedienst Zoom, **„Alles anzeigen"**, die Auswahl, das Ein- und
Ausblenden des Bedienfelds sowie den Vollbildmodus.

## 2. Was die Karte zeigt

Deine **AG-Dörfer** tragen eine Zahl mit der Angabe, wie viele
Adelsgeschlechter dort noch frei sind — etwa `4/4` für ein unangetastetes Dorf
oder `8/12`, wenn schon vier verplant sind. Dazu färbt die Karte sie in drei
Stufen ein: unangetastet, teilweise verplant und leer. So fallen ausgeschöpfte
Dörfer sofort auf.

Fährst du über ein Dorf, erscheint der Infokasten mit Koordinate, Spieler,
Stamm und Punkten. Bei einem eigenen AG-Dorf steht zusätzlich die Zeile
**„AG-Dorf: x / y frei"**, bei einem Zieldorf die Zeile **„Ziel"**.

## 3. Ziele auswählen

Über den Knopf **„Dörfer auf der Karte auswählen"** — oder direkt über
**„Karte öffnen"** in [Schritt 2](schritt2-zieldoerfer.md) — schaltet die Karte
in den Auswahlmodus. Ein kurzer Klick nimmt ein Dorf auf, ein zweiter nimmt es
wieder heraus; mit gedrückter Maustaste ziehst du ein Lasso um ein ganzes
Gebiet. Verschieben geht in diesem Modus über die **rechte** Maustaste.

Unten zählt die Leiste die Auswahl mit. **„Auswahl übernehmen"** trägt die
Dörfer als Ziele ein, **„Leeren"** verwirft sie.

## 4. Planen per Zwei-Klick

![Die Planer-Leiste mit scharfem Herkunftsdorf](../assets/snob-planning-tool/map_02_plan_bar.png){ .screenshot }

Das ist der Kern des Handbetriebs — und er braucht keinen eigenen Modus:

1. **Herkunftsdorf anklicken.** Es bekommt einen Ring, und unten erscheint die
   Planer-Leiste: *„Herkunft 486|347 · 12/12 frei · jetzt Zieldorf anklicken"*.
2. **Stufe wählen.** Unter **„AGs je Befehl:"** stehen `1`, `2`, `3` und
   **`Train`** (= 4). Die Stufe bestimmt, wie viele Adelsgeschlechter der
   nächste Befehl trägt.
3. **Zieldorf anklicken.** Der Befehl wird angelegt und sofort als Linie
   gezeichnet.

Abbrechen kannst du mit **Escape**, über das × in der Leiste oder mit einem
erneuten Klick auf dasselbe Herkunftsdorf.

!!! info "Unbekannte Ziele entstehen von selbst"
    Klickst du ein Dorf an, das noch nicht in der Zielliste steht, legt das Tool
    es automatisch als Ziel an — du musst es vorher nicht erfassen.

Nicht jeder Klick führt zu einem Befehl. Das Tool lehnt ab, wenn das Ziel
außerhalb der Reichweite liegt, im Herkunftsdorf keine AGs mehr frei sind, die
Abschickzeit in einen [gesperrten Zeitraum](schritt3-einstellungen.md) fiele,
noch keine Ankunftszeit gesetzt ist — oder wenn du ein Barbarendorf bzw. eines
deiner eigenen AG-Dörfer als Ziel anklickst. Den Grund nennt es jeweils direkt
im Infokasten.

## 5. Befehle auf der Karte

![Geplante AG-Befehle als Linien](../assets/snob-planning-tool/map_03_commands.png){ .screenshot }

Geplante Befehle erscheinen als Linien vom Herkunfts- zum Zieldorf; über den
Chip **„AG"** blendest du sie aus und wieder ein.

Ein Klick auf ein Zieldorf öffnet dessen Infokasten. Er zeigt, wie viele
Adelsgeschlechter das Ziel schon bekommen hat (*„AG 4 / 4"*), und listet unter
**„Befehle"** jeden einzelnen Befehl mit Herkunft, Anzahl und Abschickzeit. Über
das × an einer Zeile entfernst du einen einzelnen Befehl, über
**„Ziel entfernen"** das ganze Ziel samt seinen Befehlen.

!!! info "Das letzte Befehls-Löschen nimmt das Ziel mit"
    Entfernst du auf der Karte den letzten Befehl eines Ziels, das erst beim
    Planen entstanden ist, verschwindet auch das Ziel wieder.

---

Zurück zur Übersicht: [Die zwei Wege](die-zwei-wege.md).
