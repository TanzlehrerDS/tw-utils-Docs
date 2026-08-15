# Die Gesamtkarte

Die Gesamtkarte ist kein eigener Schritt, sondern ein **Aufklappfach**, das in
jedem Schritt zur Verfügung steht. Auf ihr siehst du deine ganze Planung
gleichzeitig und kannst außerdem direkt Dörfer auswählen.

## 1. Öffnen und schließen

![Die Lasche „Karte" am linken Rand](../assets/nuke-planning-tool/map_01_open.png){ .screenshot }

Am linken Rand des Inhaltsbereichs sitzt die Lasche **„Karte"**. Ein Klick
(oder Enter bzw. Leertaste) klappt das Fach auf, ein zweiter schließt es
wieder. Rechts oben in der Kartenkarte gibt es zusätzlich ein
**Schließen**-Symbol.

Die Karte öffnet sich auch von selbst, sobald du irgendwo im Tool auf **„Auf
der Karte auswählen"** klickst — in
[Schritt 1](schritt1-truppen.md) beim Ausplanen und bei der Frontlinie, in
[Schritt 4](schritt4-angriffsplanung.md) und
[Schritt 5](schritt5-fakeplanung.md) bei den Zielen.

!!! info "Ein Schrittwechsel schließt die Karte"
    Wechselst du den Schritt, klappt das Fach zu. Das ist Absicht: So bleibt
    die Auswahl, die du gerade getroffen hast, eindeutig einem Schritt
    zugeordnet.

## 2. Was die Karte zeigt

![Die Gesamtkarte in der Übersicht](../assets/nuke-planning-tool/map_02_zoomed_out.png){ .screenshot }

In der herausgezoomten Ansicht siehst du die Welt als Punktraster mit den
Kontinentgrenzen. Jedes Dorf ist ein Pixel; die Farbe sagt, wem es gehört.
Darüber liegen die Zielringe deiner Planung und die Flächen von Frontlinie und
ausgeplanten Dörfern.

![Die Gesamtkarte herangezoomt](../assets/nuke-planning-tool/map_03_zoomed_in.png){ .screenshot }

Zoomst du weit genug hinein, wechselt die Karte auf die **Ingame-Optik** mit
Gelände, Wäldern, Seen und Bergen — genau wie die Karte im Spiel. Fährst du
mit der Maus über ein Dorf, erscheint ein kleines Feld mit Koordinate,
Spieler, Stamm, Punkten, dem Bonus des Dorfes und der Kategorie, in der es
verplant ist.

## 3. Bedienung

In der Kopfzeile der Kartenkarte steht links der Titel **„Weltkarte"**, in der
Mitte ein Feld zum **Koordinaten suchen** (`500|500`) und rechts eine Reihe
Symbole:

- **„Verkleinern"** / **„Vergrößern"** — Zoomstufe. Dasselbe erreichst du mit
  dem Mausrad, auf dem Handy mit zwei Fingern.
- **„Alles anzeigen"** — zoomt so weit heraus, dass alles Geplante ins Bild
  passt.
- **„Dörfer auf der Karte auswählen"** — startet das Auswahlwerkzeug, siehe
  [Abschnitt 5](#5-auswahl-per-klick-und-lasso). Es startet die zuletzt
  benutzte Auswahl-Aktion, unabhängig davon, in welchem Schritt du gerade
  stehst. Das Symbol fehlt nur, solange gar keine Auswahl möglich ist — also
  bevor die Weltdaten geladen sind.
- **„Vollbild"** — legt die Karte über den ganzen Bildschirm. Im Vollbild
  kommt ein weiteres Symbol dazu: **„Bedienfeld ein-/ausblenden"**, mit dem du
  die Chips und Markierungsfelder wegklappst, um mehr Kartenfläche zu haben.
- **„Schließen"** — schließt das Fach.

Ziehen mit gedrückter Maustaste verschiebt den Ausschnitt.

## 4. Ebenen und Markierungen

Über der Karte stehen die **Ebenen-Chips**, nach Zeilen gruppiert. Ein Klick
schaltet die jeweilige Ebene ein oder aus:

- **„Dörfer"** — `Barbaren`, `Spieler`, `Eigene`.
- **„Ziele"** — `AG-Spam`, `Kattern`, `Bunker brechen`, `Normal-Fakes`,
  `Bunker-Fakes`, jeweils in der Farbe ihrer Kategorie.
- **„Befehle"** — `Off`, `ZWC`, `K-Split`, `Fake`, `AG`. Diese Zeile erscheint
  erst, wenn ein Ergebnis vorliegt.
- **„Hilfen"** — `Frontlinie`, `Wachtürme`, `Ausgeplant`.

Unter den Chips erscheint zusätzlich eine **Wachturm-Legende**, sobald
Wachtürme gezeichnet werden — sie ordnet den Kreisen ihre Stufe zu.

!!! info "Drei Chips blenden sich selbst aus"
    Die meisten Chips stehen immer da, auch wenn ihre Ebene gerade leer ist.
    Drei verhalten sich anders:

    - **„Wachtürme"** erscheint erst, wenn Wachtürme eingetragen **und** der
      Algorithmus [Wachturm-optimiert](schritt7-berechnung.md#2-algorithmus)
      gewählt ist.
    - **„Ausgeplant"** hängt am Schalter *„Optional: Herkunftsdörfer manuell
      ausplanen?"* aus [Schritt 1](schritt1-truppen.md#2-herkunftsdorfer-ausplanen).
    - Die ganze Zeile **„Befehle"** erscheint erst nach einer Berechnung, und
      dort auch nur die Befehlstypen, die im Ergebnis wirklich vorkommen.

Darüber kannst du einzelne Leute hervorheben:

- **„Spieler markieren"** — Namen eintippen, Farbe wählen, Plus-Knopf. Das
  Feld schlägt Namen aus den Weltdaten vor.
- **„Stamm markieren"** — dasselbe mit einem Stammes-Tag.

Mehrere Markierungen gleichzeitig sind möglich; sie erscheinen als Liste
darunter und lassen sich einzeln wieder entfernen.

## 5. Auswahl per Klick und Lasso

![Die Auswahlleiste am unteren Rand der Karte](../assets/nuke-planning-tool/map_04_selection_bar.png){ .screenshot }

Sobald du auf **„Auf der Karte auswählen"** klickst — oder das
Werkzeug-Symbol in der Kopfzeile benutzt —, schaltet die Karte in den
Auswahlmodus und am unteren Rand erscheint die Auswahlleiste.

**So wählst du aus:**

- **Kurzer Klick** auf ein Dorf nimmt es in die Auswahl auf; ein zweiter Klick
  nimmt es wieder heraus.
- **Ziehen** mit gedrückter linker Maustaste zieht ein **Lasso**: Alles, was
  innerhalb der freihändig gezogenen Fläche liegt, kommt in die Auswahl. Auf
  diese Weise markierst du ganze Regionen in einem Zug.
- Verschieben geht im Auswahlmodus über die **rechte Maustaste**, damit sich
  Ziehen und Zeichnen nicht in die Quere kommen.

**Die Auswahlleiste** zeigt links unter **„Auswahl für:"** alle verfügbaren
Aktionen nebeneinander: `Ausplanen`, `Frontlinie`, `AG-Spam`, `Kattern`,
`Bunker brechen`, `Normal-Fakes`, `Bunker-Fakes`. Du kannst dort direkt
umschalten, ohne die Karte zu verlassen — markierst also zum Beispiel erst
Fakeziele und gleich danach Bunker, ohne zwischendurch die Karte zu schließen.
Die Sidebar springt dabei automatisch in den passenden Schritt; das Kartenfach
bleibt offen. Nur `Ausplanen` und `Frontlinie` lassen den Schritt unberührt.

Daneben steht die Zahl der ausgewählten Dörfer; ein Klick darauf klappt die
Liste der Koordinaten auf. Beim Zeichnen der Frontlinie zählt die Leiste beides
— etwa *„3 Gebiete · 128 Dörfer"* —, weil dort Flächen entstehen und nicht
einzelne Dörfer.

Rechts stehen **„Auswahl übernehmen"** (schreibt die Auswahl in die Liste des
jeweiligen Schrittes), **„Leeren"** und ein × zum **Auswahl beenden**.

Zwei Aktionen bringen eigene Bedienelemente in die Leiste mit:

- **Bunker brechen** blendet das Feld **„Offs je Ziel:"** ein. Es gilt für
  alle Ziele dieser Auswahl — und wird erst beim Übernehmen gelesen, du kannst
  die Zahl bis dahin also noch ändern.
- **Normal-Fakes** und **Bunker-Fakes** spiegeln den
  [Zielfilter](schritt5-fakeplanung.md#12-zielfilter) in die Leiste. Änderst du
  dort die Stämme oder die Mindestpunktzahl, wirkt sich das sofort darauf aus,
  was die Karte markiert.

!!! info "Dorf-Info"
    Am Rechner erscheint der Infokasten eines Dorfes, sobald du mit der Maus
    darüberfährst — auch im Auswahlmodus. Ein Klick blendet ihn wieder aus.
    Auf dem Handy tippst du das Dorf an. Der Kasten zeigt Koordinate, Spieler,
    Stamm, Punkte, den Bonus des Dorfes und — falls vorhanden — eine Tabelle
    **„Importierte Truppen"** aus deinem Truppen-Import. Eigene und
    ausgeplante Dörfer sind dort ausdrücklich gekennzeichnet.

## 6. Befehlslinien nach der Berechnung

![Die Befehle als Linien auf der Gesamtkarte](../assets/nuke-planning-tool/map_05_command_lines.png){ .screenshot }

Sobald ein Ergebnis vorliegt, zeichnet die Karte zusätzlich den fertigen Plan:
Für jeden Befehl läuft eine Linie mit Pfeilspitze vom Herkunfts- zum Zieldorf,
eingefärbt nach Befehlstyp (`Off`, `ZWC`, `K-Split`, `Fake`, `AG`). Über die
Chip-Zeile **„Befehle"** blendest du einzelne Typen aus, wenn es zu unruhig
wird.

An jedem Zielring steht außerdem das **Ist/Soll** — also wie viele Befehle
dort tatsächlich ankommen und wie viele geplant waren.

Ein **Klick auf ein Ziel** öffnet einen Infokasten mit Koordinate, Spieler,
Kategorie, den Ist/Soll-Zahlen je Befehlstyp und einer aufklappbaren Liste
aller Befehle auf dieses Ziel. Gleichzeitig hebt die Karte die Linien dieses
Ziels hervor und blendet alle anderen ab.

!!! info "Bei sehr großen Plänen"
    Ab etwa 4000 Linien im Bild wird es unlesbar. Das Tool zeichnet dann nur
    noch die Befehle des gewählten Ziels und weist mit dem Hinweis *„Zu viele
    Befehle im Bild — nur das gewählte Ziel wird gezeichnet."* darauf hin.
    Herauszoomen und ein Ziel anklicken hilft.
