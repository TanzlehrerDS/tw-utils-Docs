# Schritt 2: Abschickzeiten

In Schritt 2 legst du die **Abschickzeiten** fest. Das Tool verplant jeden
Befehl so, dass seine Abschickzeit in eines dieser gültigen Fenster fällt.

## 1. Standard-Abschickfenster

![Standard-Abschickfenster](../assets/nuke-planning-tool/step2_01_default_windows.png){ .screenshot }

Trage **„Datum:"**, **„Von:"** und **„Bis:"** ein und übernimm das Fenster mit
dem Plus-Knopf. Rechts daneben sammeln sich die angelegten Fenster; jedes
lässt sich einzeln wieder entfernen. Du kannst beliebig viele Fenster
nacheinander anlegen.

Sobald du **„Von:"** ausfüllst und das Feld verlässt, setzt das Tool
**„Bis:"** automatisch auf 15 Minuten später. Das überschreibt einen dort
bereits eingetragenen Wert — trage **„Bis:"** also immer **nach** **„Von:"**
ein.

!!! info "Für wen die Standard-Fenster gelten"
    Die Standard-Fenster gelten für alle Spieler, für die keine individuellen
    Zeiten eingetragen sind.

Überschneiden sich zwei Standard-Fenster, weist das Tool das zweite ab, statt
sie stillschweigend zusammenzuführen.

## 2. Individuelle Zeiten

![Individuelle Zeiten importieren oder hochladen](../assets/nuke-planning-tool/step2_02_individual_times.png){ .screenshot }

Individuelle Zeiten gelten **je Spieler** und ersetzen für diesen Spieler die
Standard-Fenster. Es gibt zwei Wege, sie ins Tool zu bekommen.

!!! info "Individuelle Zeiten haben Vorrang"
    Wo individuelle Zeiten eingetragen sind, ersetzen sie die
    Standard-Abschickfenster für diesen Spieler vollständig. Standard- und
    individuelle Fenster mischen sich also nicht.

### Aus Stammes-Umfrage importieren

Haben deine Mitspieler ihre Abschickzeiten über eine **Stammes-Umfrage**
gemeldet, wählst du die Umfrage im Dropdown aus und übernimmst sie mit dem
Plus-Knopf. Das Tool ordnet die gemeldeten Fenster den jeweiligen Spielern zu.

Der Bereich erscheint nur, wenn für die aktuell gewählte Welt mindestens eine
Umfrage vorliegt und du auf einem Discord-Server dieser Welt die
Planungsrechte hast.

### Individuelle Zeiten hochladen

Alternativ lädst du eine `.txt`- oder `.csv`-Datei hoch. Eine Zeile je
Zeitfenster, die Werte durch Kommas getrennt:

```
Spieler,Datum von,Zeit von,Datum bis,Zeit bis
```

Also zum Beispiel:

```
Testuser A,10.05.2026,10:00:00,10.05.2026,10:07:00
Testuser A,10.05.2026,12:00:00,10.05.2026,12:15:00
Testuser B,10.05.2026,11:30:00,10.05.2026,12:00:00
Testuser B,10.05.2026,17:15:00,10.05.2026,18:15:00
Testuser C,10.05.2026,21:00:00,10.05.2026,21:15:00
```

Das Datum steht als `TT.MM.JJJJ`, die Uhrzeit als `HH:MM:SS`. Mehrere Zeilen
je Spieler sind erlaubt. Die Kopfzeile im Beispiel oben dient nur der
Erläuterung — die Datei enthält ausschließlich Datenzeilen.

!!! info "Alle individuellen Zeiten löschen"
    Sobald mindestens ein Spieler individuelle Zeiten hat, erscheint der Knopf
    **„Alle individuellen Zeiten löschen"**. Er entfernt sie in einem Zug,
    unabhängig davon, ob sie aus einer Umfrage oder einem Upload stammen. Die
    Standard-Fenster bleiben unberührt.

## 3. Abschickzeiten pro Spieler

Unter dem Trennstrich steht dauerhaft die Übersicht **„Abschickzeiten pro
Spieler"** mit drei Spalten:

- **„Spieler"** — jeder Spieler, für den Truppen importiert wurden.
- **„Quelle"** — ob für ihn `Standard` oder `Individuell` gilt.
- **„Aktive Zeitfenster"** — die Fenster, mit denen für ihn geplant wird.

So siehst du vor der Berechnung, ob wirklich jeder Spieler ein Zeitfenster
hat. Über das Suchfeld filterst du nach einzelnen Spielern.

Die Tabelle bleibt leer, solange keine Truppen importiert sind — sie leitet
sich aus der Spielerliste des Truppen-Imports ab und weist dann auf
[Schritt 1](schritt1-truppen.md) hin.

---

Weiter geht es mit [Schritt 3: Ankunftszeiten](schritt3-ankunftszeiten.md).
