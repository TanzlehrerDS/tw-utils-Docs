# Die zwei Wege

Das AG-Planungstool verteilt **Adelsgeschlechter** auf Zieldörfer und rechnet
dazu Abschick- und Ankunftszeiten aus. Dafür gibt es zwei Wege, und du
entscheidest dich ganz oben dafür: Die Leiste **„Planungsmodus"** steht über der
Schrittleiste und gilt für das ganze Werkzeug.

![Das AG-Planungstool im Überblick](../assets/snob-planning-tool/overview_01_tool.png){ .screenshot }

Ganz oben steht die aktuell gewählte **Welt** samt Statuszeile („Daten
aktuell.", „Update verfügbar." oder „Daten unvollständig. Bitte laden."). Sie
kommt aus der Weltauswahl im Hauptmenü — ohne geladene Weltdaten kann das Tool
weder Koordinaten prüfen noch die Karte zeichnen.

## 1. Automatisch planen

**„Automatisch planen"** ist vorbelegt. Du arbeitest die Schritte der Reihe nach
ab und lässt am Ende rechnen:

1. [Schritt 1: AG-Meldungen](schritt1-ag-meldungen.md) — woher die
   Adelsgeschlechter kommen.
2. [Schritt 2: Zieldörfer](schritt2-zieldoerfer.md) — worauf sie fliegen sollen.
3. [Schritt 3: Einstellungen](schritt3-einstellungen.md) — wann sie ankommen
   sollen.
4. **„Berechnen"** in der Schrittleiste.
5. [Schritt 4: Ergebnis](schritt4-ergebnis.md) — Trains prüfen, nachbessern,
   speichern.

Das Tool setzt dabei **volle Trains** zusammen und verteilt sie auf die Ziele.
Die Reihenfolge richtet sich nach der Laufzeit-Prio, die du je Ziel vergibst:
erst alle Ziele mit **Kurz** (jeweils aus dem nächstgelegenen Herkunftsdorf),
dann die mit **Lang** (aus dem am weitesten entfernten), zuletzt **Egal**.

Was danach übrig bleibt, ergänzt du im Ergebnis von Hand über
**„Weitere AG-Optionen"**.

## 2. Manuell planen

Im Handbetrieb rechnet das Tool nichts aus — du setzt jeden Befehl selbst, mit
zwei Klicks auf der Karte. Das ist der Weg für Situationen, in denen du genau
weißt, welches Dorf welches Ziel adeln soll.

Die Oberfläche verändert sich dabei sichtbar:

| | Automatisch | Manuell |
|---|---|---|
| Schritt 2 „Zieldörfer" | offen | **gesperrt** — Ziele entstehen beim Planen auf der Karte |
| „Ausgeschlossene Abschickzeiten" | vorhanden | ausgeblendet |
| Knopf „Berechnen" | vorhanden | ausgeblendet |
| Schritt 4 „Ergebnis" | nach der Berechnung | sobald Meldungen **und** Ankunftszeit stehen |
| Reiter „Verplant" / „Manuell planen" | vorhanden | ausgeblendet |

Der Ablauf ist entsprechend kurz: Meldungen in
[Schritt 1](schritt1-ag-meldungen.md) erfassen, in
[Schritt 3](schritt3-einstellungen.md) die Ankunftszeit setzen — und dann auf
der [Gesamtkarte](gesamtkarte.md) planen.

!!! info "Der Modus lässt sich jederzeit wechseln"
    Was du bereits erfasst hast, bleibt beim Umschalten erhalten. Wechselst du
    in den Handbetrieb, verschwinden lediglich die Bedienelemente, die dort
    keine Rolle spielen.

## 3. Was in beiden Wegen gleich ist

- Die **Schrittleiste** links: Du springst frei zwischen den Schritten, eine
  feste Reihenfolge erzwingt das Tool nicht.
- Die **Gesamtkarte**, erreichbar über die Lasche **„Karte"** am linken Rand
  des Inhaltsbereichs.
- Das **Ergebnis** mit den drei Knöpfen **„Plan speichern"**, **„Workbench"**
  und **„Excel"**.

---

Weiter geht es mit [Schritt 1: AG-Meldungen](schritt1-ag-meldungen.md).
