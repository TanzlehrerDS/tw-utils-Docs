# Tab 1: Daten & Vorbereitung

In Tab 1 legst du die gesamte Datenbasis für die Off-Planung an: Truppen,
manuell ausgeschlossene Herkunftsdörfer, Abschickzeiten und die
Frontlinie. Am Ende des Tabs siehst du in einer Übersichtstabelle, wie
viele Offs dem Tool für die Planung tatsächlich zur Verfügung stehen.

## 1. Truppen importieren

![Truppen-Import](../assets/nuke-planning-tool/tab1_01_troop_import.png){ .screenshot }

Im Bereich **„Troop data"** lädst du die Truppen hoch, aus denen das Tool
die Offs verplanen soll. Es stehen zwei Wege zur Verfügung.

### Option A: Copy & Paste

Kopiere die Truppen aus der Ingame-Truppenübersicht (Strg+A, Strg+C) und
füge sie in das linke Textfeld ein. Über die beiden Radio-Buttons legst du
fest, welche Informationen aus der Truppenübersicht das Tool verwenden soll:

- **Total troops** — die insgesamt vorhandenen Truppen (eigene + unterwegs).
- **Troops in village** — nur die aktuell im Dorf stehenden Truppen.

### Option B: TXT-Upload

Alternativ kannst du eine TXT-Datei in einem festen Format hochladen
(Koordinaten, Spieler, Speere, Schwerter usw. pro Zeile). Diese Datei
erzeugst du am bequemsten über das
[Schnellleisten-Script „Download Tribe Info"](https://forum.tribalwars.net/index.php?threads/download-tribe-info.285469/).

!!! info "Liste ansehen"
    Über den Button **„View entries"** kannst du dir die importierten
    Truppen jederzeit anzeigen lassen und prüfen.

## 2. Herkunftsdörfer ausplanen

![Herkunftsdörfer ausplanen](../assets/nuke-planning-tool/tab1_02_exclude_origin_villages.png){ .screenshot }

Im Bereich **„Exclude origin villages"** kannst du einzelne Dörfer von der
Planung ausschließen. Füge die Koordinaten in das Textfeld ein und klicke
auf **„Add"**. Umgebender Text stört dabei nicht — das Tool erkennt die
Koordinaten automatisch.

Über den Button **„View entries"** kannst du die ausgeplanten Dörfer
jederzeit einsehen und verwalten.

!!! info "Keine Befehle aus ausgeplanten Dörfern"
    Für manuell ausgeplante Herkunftsdörfer werden **keine** Befehle
    verplant — diese Dörfer werden vollständig von der Planung
    ausgeschlossen.

## 3. Abschickzeiten festlegen

![Abschickzeiten](../assets/nuke-planning-tool/tab1_03_launch_times.png){ .screenshot }

Im Bereich **„Launch times"** legst du fest, in welchen Zeitfenstern die
Offs abgeschickt werden sollen. Es gibt zwei Arten von Abschickzeiten.

### Typ 1: Standard-Abschickfenster

Im Bereich **„Standard launch time windows"** gibst du Datum, Startzeit
und Endzeit ein und fügst das Fenster über **„Add"** hinzu. Du kannst
mehrere Fenster nacheinander anlegen. Diese Standard-Fenster gelten für
alle Spieler, für die keine individuellen Zeiten hinterlegt sind.

### Typ 2: Individuelle Abschickfenster

Im Bereich **„Player-individual launch times (via Upload)"** kannst du
spielerindividuelle Abschickzeiten hochladen. Die Spieler geben dir dazu
ihre persönlichen Zeiten, die du anschließend als strukturierte Datei
(.csv oder .txt) in das Tool lädst.

Erwartetes Format der Datei:

```
Player, Date_from, Time_from, Date_to, Time_to
```

!!! info "Standard- vs. individuelle Abschickfenster"
    Standard-Abschickfenster und individuelle Abschickfenster schließen
    sich gegenseitig aus. Sind für einen Spieler individuelle Zeiten
    hinterlegt, werden ausschließlich diese verwendet — die
    Standard-Fenster gelten für diesen Spieler dann nicht.

!!! info "Liste ansehen"
    Über den Button **„View entries"** kannst du dir für jeden eingeplanten
    Spieler anzeigen lassen, welche Abschickzeiten gelten (Standard oder
    individuell). Der Button ist erst verfügbar, nachdem du Truppen
    importiert hast.

## 4. Frontlinie definieren

![Frontlinie definieren](../assets/nuke-planning-tool/tab1_04_frontline_definition.png){ .screenshot }

Im Bereich **„Frontline definition"** legst du fest, welche Dörfer als
Frontspieler gelten und damit von der Off-Planung ausgenommen werden
sollen. Füge dazu im Feld **„Coordinates"** die Koordinaten ein, die deine
Frontlinie definieren, und gib unter **„Distance (fields)"** den
gewünschten Mindestabstand zur Frontlinie an. Klicke anschließend auf
**„Add to the frontline"**.

Der eingestellte Abstand erzeugt einen sogenannten **Frontbereich** rund um
die Frontlinien-Koordinaten. Aus diesem Frontbereich werden keine Offs
verplant — so bleiben Frontspieler mobil und können kurzfristig auf
Angriffe reagieren.

Über den Button **„View entries"** kannst du die eingetragenen
Frontlinien-Koordinaten jederzeit einsehen und bearbeiten.

### Kartenvisualisierung

![Kartenvisualisierung des Frontbereichs](../assets/nuke-planning-tool/tab1_05_frontline_definition_map.png){ .screenshot }

Über den Button **„Map"** öffnest du eine Karte, auf der der erzeugte
Frontbereich gelb markiert ist. Alle Dörfer innerhalb des gelben Bereichs
werden nicht als Offs eingeplant. Die Karte hilft dir, deine Eingaben
visuell zu überprüfen.

## 5. Truppenverfügbarkeit

![Truppenverfügbarkeit](../assets/nuke-planning-tool/tab1_06_troop_availability.png){ .screenshot }

Im Bereich **„Troop Availability"** siehst du auf einen Blick, wie viele
Offs das Tool tatsächlich verplanen kann. Die Tabelle zeigt:

- **All** — die insgesamt importierten Offs.
- **Manual** — Offs, die durch manuelle Ausplanung von Herkunftsdörfern
  ausgeschlossen wurden.
- **Frontline** — Offs, die aufgrund der Frontliniendefinition
  ausgeschlossen wurden.
- **Available** — die Offs, die nach allen Ausschlüssen für die Planung
  zur Verfügung stehen.

So hast du jederzeit eine klare Übersicht, welche Ressourcen für die
Off-Planung verfügbar sind.
