# Schritt 4: Ergebnis

Schritt 4 zeigt, **was das Tool geplant hat** — Ziel für Ziel. Hier besserst du
nach und speicherst den Plan.

![Schritt 4 „Ergebnis"](../assets/snob-planning-tool/step4_01_overview.png){ .screenshot }

Der Schritt ist anfangs gesperrt. Er öffnet sich, sobald eine Berechnung
durchgelaufen ist oder du einen gespeicherten Plan geladen hast — im
Handbetrieb schon dann, wenn AG-Meldungen und Ankunftszeit stehen.

## 1. Erfolgsbanner und Reiter

Oben fasst ein grünes Banner das Ergebnis zusammen: wie viele Trains geplant
werden konnten, wie viele Ziele **ohne** Train geblieben sind und wann gerechnet
wurde.

Darunter teilen zwei Reiter die Ziele auf:

- **„Verplant"** — Ziele, die einen vollständigen Train bekommen haben.
- **„Manuell planen"** — Ziele, für die es nicht gereicht hat. Die musst du von
  Hand ergänzen (siehe Abschnitt 3) oder ganz aufgeben.

Die Zahl im Reiter sagt, wie viele Ziele jeweils dahinterstecken. Im
Handbetrieb entfallen die Reiter; die Blätterleiste führt dann durch **alle**
Ziele.

## 2. Die Befehle eines Ziels

Über die Blätterleiste (**„Vorheriges"** / **„Nächstes"**) gehst du die Ziele
durch; darüber steht das aktuelle Ziel mit Koordinate, Spieler und
Laufzeit-Prio, darunter die Position (*„Ziel 1 / 12"*). Über das Suchfeld
springst du direkt zu einer Koordinate.

Die Tabelle listet die Befehle dieses Ziels:

| Spalte | Bedeutung |
|---|---|
| **Typ** | **Train** = voller Vierer, **AG (n)** = Einzelbefehl mit n Adelsgeschlechtern |
| **Herkunft** | Herkunftsdorf mit Spieler |
| **Ziel** | Zieldorf mit Spieler |
| **Einheit** / **Icon** | langsamste Einheit und Workbench-Icon des Befehls |
| **Abschickzeit** / **Ankunftszeit** | in Weltzeit |
| **Distanz** / **Laufzeit** | Felder bzw. Minuten |

!!! info "Die Zahl in Klammern ist die Anzahl"
    **AG (2)** heißt: dieser Befehl trägt zwei Adelsgeschlechter — es ist keine
    laufende Nummer. Bei genau vier steht stattdessen **Train**.

Über das rote × am Zeilenende entfernst du einen Befehl. Die
Adelsgeschlechter wandern sofort zurück in den Vorrat und stehen dir gleich
wieder unter **„Weitere AG-Optionen"** zur Verfügung — ohne Neuberechnung.

## 3. Weitere AG-Optionen

![Weitere AG-Optionen](../assets/snob-planning-tool/step4_02_further_options.png){ .screenshot }

Unter der Befehlstabelle listet **„Weitere AG-Optionen"** alle Herkunftsdörfer
auf, die dieses Ziel **zusätzlich** noch rechtzeitig erreichen könnten. Je Zeile
siehst du Herkunft, Angreifer, wie viele AGs dort noch **verfügbar** sind, wie
viele du davon schicken willst (**Anzahl**), sowie Abschickzeit, Distanz und
Laufzeit.

Häkchen setzen, Anzahl eintragen — der Befehl erscheint sofort oben in der
Tabelle. So füllst du Ziele auf, für die die automatische Zuweisung nicht
gereicht hat.

Gibt es keine Möglichkeiten mehr, steht dort *„Keine weiteren AG-Möglichkeiten
für dieses Ziel."*

## 4. Speichern und exportieren

Rechts oben stehen drei Knöpfe:

- **„Plan speichern"** — öffnet ein kleines Fenster mit dem Feld
  **„Name des Plans:"**. Das Häkchen **„Als neuen Plan speichern"** legt eine
  Kopie an, statt den geladenen Plan zu überschreiben. Gespeicherte Pläne
  findest du unter
  [Meine Pläne & Container](../meine-plaene/gespeicherte-plaene.md) wieder —
  dort werden sie auch veröffentlicht.
- **„Workbench"** — kopiert alle Befehle als WB-Zeilen in die Zwischenablage.
- **„Excel"** — lädt den Plan als Tabelle herunter.

---

Weiter geht es mit [Die Gesamtkarte](gesamtkarte.md).
