# Tab 1: Daten & Vorbereitung

In Tab 1 definierst du die grundlegenden Prämissen für die Planung.

## 1. Truppen importieren

![Truppen-Import](../assets/nuke-planning-tool/tab1_01_troop_import.png){ .screenshot }

Im Bereich **„Truppendaten importieren"** lädst du die Truppen hoch, aus
denen das Tool die Offs verplanen soll. Es stehen zwei Wege zur Verfügung.

### Option A: Copy & Paste

Kopiere die Truppen aus der Ingame-Truppenübersicht (Strg+A, Strg+C) und
füge sie in das linke Textfeld ein. Über die beiden Radio-Buttons legst du
fest, welche Informationen aus der Truppenübersicht das Tool verwenden soll:

- **Gesamte Truppen** — die insgesamt vorhandenen Truppen (eigene + unterwegs).
- **Truppen im Dorf** — nur die aktuell im Dorf stehenden Truppen.

### Option B: TXT-Upload

Alternativ kannst du eine TXT-Datei in einem festen Format hochladen.
Diese Datei erzeugst du am bequemsten über das
[Schnellleisten-Script „Download Tribe Info"](https://forum.tribalwars.net/index.php?threads/download-tribe-info.285469/).

Erwartetes Format der Datei:

```
Coords,Player,spear,sword,axe,archer,spy,light,marcher,heavy,ram,catapult,knight,snob
483|520,Testuser A,2421,6099,100,5963,50,50,3632,200,5,279,0,8
543|538,Testuser A,100,100,6027,100,6,3014,100,100,159,5,0,0
467|559,Testuser A,3779,4836,100,4803,40,50,6309,1584,5,80,0,0
465|523,Testuser B,4298,5495,100,6752,23,50,5761,1131,5,35,0,0
468|515,Testuser B,721,4160,100,2280,61,50,5935,832,5,308,0,4
```

!!! info "Liste ansehen"
    Über den Button **„Liste ansehen"** kannst du dir die importierten
    Truppen jederzeit anzeigen lassen und prüfen.

## 2. Herkunftsdörfer ausplanen

![Herkunftsdörfer ausplanen](../assets/nuke-planning-tool/tab1_02_exclude_origin_villages.png){ .screenshot }

Im Bereich **„Herkunftsdörfer ausplanen"** kannst du einzelne Dörfer von
der Planung ausschließen. Füge die Koordinaten in das Textfeld ein und
klicke auf **„Hinzufügen"**. Umgebender Text stört dabei nicht — das Tool
erkennt die Koordinaten automatisch.

Über den Button **„Liste ansehen"** kannst du die ausgeplanten Dörfer
jederzeit einsehen und verwalten.

!!! info "Keine Befehle aus ausgeplanten Dörfern"
    Für manuell ausgeplante Herkunftsdörfer werden **keine** Befehle
    verplant — diese Dörfer werden vollständig von der Planung
    ausgeschlossen.

## 3. Abschickzeiten festlegen

![Abschickzeiten](../assets/nuke-planning-tool/tab1_03_launch_times.png){ .screenshot }

Im Bereich **„Abschickzeiten"** legst du fest, in welchen Zeitfenstern die
Befehle abgeschickt werden sollen. Es gibt zwei Arten von Abschickzeiten.

### Typ 1: Standard-Abschickfenster

Im Bereich **„Standard-Abschickfenster"** gibst du Datum, Startzeit und
Endzeit ein und fügst das Fenster über **„Hinzufügen"** hinzu. Du kannst
mehrere Fenster nacheinander anlegen. Diese Standard-Fenster gelten für
alle Spieler, für die keine individuellen Zeiten hinterlegt sind.

### Typ 2: Spielerindividuelle Abschickfenster

Im Bereich **„Spielerindividuelle Abschickzeiten (per Upload)"** kannst du
individuelle Abschickzeiten pro Spieler hochladen. Die Spieler geben dir
dazu ihre persönlichen Zeiten, die du anschließend als strukturierte Datei
(.csv oder .txt) in das Tool lädst.

Erwartetes Format der Datei:

```
Testuser A,10.05.2026,10:00:00,10.05.2026,10:07:00
Testuser A,10.05.2026,12:00:00,10.05.2026,12:15:00
Testuser B,10.05.2026,11:30:00,10.05.2026,12:00:00
Testuser B,10.05.2026,17:15:00,10.05.2026,18:15:00
Testuser C,10.05.2026,10:00:00,10.05.2026,10:05:00
Testuser C,10.05.2026,12:00:00,10.05.2026,12:15:00
Testuser C,10.05.2026,17:00:00,10.05.2026,19:00:00
Testuser C,10.05.2026,21:00:00,10.05.2026,21:15:00
```

!!! info "Spielerindividuelle Zeiten über den tw-utils-Discordbot sammeln"
    Das Sammeln der spielerindividuellen Abschickzeiten kann auch
    komfortabel über den tw-utils-Discordbot erfolgen. Die abgegebenen
    Zeiten lassen sich anschließend exportieren und direkt in das Tool
    hochladen.

!!! info "Standard- vs. individuelle Abschickfenster"
    Standard-Abschickfenster und individuelle Abschickfenster schließen
    sich gegenseitig aus. Sind für einen Spieler individuelle Zeiten
    hinterlegt, werden ausschließlich diese verwendet — die
    Standard-Fenster gelten für diesen Spieler dann nicht.

!!! info "Liste ansehen"
    Über den Button **„Liste ansehen"** kannst du dir für jeden
    eingeplanten Spieler anzeigen lassen, welche Abschickzeiten gelten
    (Standard oder individuell). Der Button ist erst verfügbar, nachdem du
    Truppen importiert hast.

## 4. Frontlinie definieren

![Frontlinie definieren](../assets/nuke-planning-tool/tab1_04_frontline_definition.png){ .screenshot }

Im Bereich **„Frontlinie definieren"** legst du fest, welche Dörfer als
Frontdörfer gelten und damit bei der Verplanung von Offs ausgenommen
werden sollen. Füge dazu im Feld **„Koordinaten"** die Koordinaten ein,
die deine Frontlinie definieren, und gib unter **„Abstand (Felder)"** den
gewünschten Mindestabstand zur Frontlinie an. Klicke anschließend auf
**„Zur Frontlinie hinzufügen"**.

Der eingestellte Abstand erzeugt einen sogenannten **Frontbereich** rund um
die Frontlinien-Koordinaten. Aus diesem Frontbereich werden keine Offs
verplant — so bleiben Frontspieler mobil und können kurzfristig auf
Angriffe reagieren.

Über den Button **„Liste ansehen"** kannst du die eingetragenen
Frontlinien-Koordinaten jederzeit einsehen und bearbeiten.

### Kartenvisualisierung

![Kartenvisualisierung des Frontbereichs](../assets/nuke-planning-tool/tab1_05_frontline_definition_map.png){ .screenshot }

Über den Button **„Karte"** öffnest du eine Karte, auf der der erzeugte
Frontbereich gelb markiert ist. Alle Dörfer innerhalb des gelben Bereichs
werden nicht als Offs eingeplant. Die Karte hilft dir, deine Eingaben
visuell zu überprüfen.

## 5. Truppenverfügbarkeit

![Truppenverfügbarkeit](../assets/nuke-planning-tool/tab1_06_troop_availability.png){ .screenshot }

Im Bereich **„Truppenverfügbarkeit"** siehst du auf einen Blick, wie viele
Offs das Tool tatsächlich verplanen kann. Die Tabelle zeigt:

- **Alle** — die insgesamt importierten Offs.
- **Manuell** — Offs, die durch manuelle Ausplanung von Herkunftsdörfern
  ausgeschlossen wurden.
- **Frontlinie** — Offs, die aufgrund der Frontliniendefinition
  ausgeschlossen wurden.
- **Verfügbar** — die Offs, die nach allen Ausschlüssen für die Planung
  zur Verfügung stehen.

So hast du jederzeit eine klare Übersicht, welche Ressourcen für die
Off-Planung verfügbar sind.
