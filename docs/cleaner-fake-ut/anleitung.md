# Anleitung

Das Tool berechnet **Zwischencleaner** und **Fake-UT-Befehle**, deren
Abschickzeiten möglichst nah an einem anderen Befehl liegen — typischerweise
einem Adelsgeschlecht bzw. Train. So lassen sich Cleaner und Fake-UT
zeitlich passgenau zu einem bestehenden AG-Plan ergänzen.

## 1. Truppen importieren

![Truppen-Import](../assets/cleaner-fake-ut-tool/01_troop_import.png){ .screenshot }

Im Bereich **„Truppendaten importieren"** lädst du die Truppen hoch, aus
denen die Zwischencleaner und Fake-UT berechnet werden sollen. Es stehen
zwei Wege zur Verfügung.

### Option A: Copy & Paste

Kopiere die Truppen aus der Ingame-Truppenübersicht (Strg+A, Strg+C) und
füge sie in das linke Textfeld ein. Über die beiden Radio-Buttons legst du
fest, welche Informationen aus der Truppenübersicht das Tool verwenden soll:

- **Total troops** — die insgesamt vorhandenen Truppen (eigene + unterwegs).
- **Troops in village** — nur die aktuell im Dorf stehenden Truppen.

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

## 2. AG-Plan importieren

![AG-Plan-Import](../assets/cleaner-fake-ut-tool/02_import_snob_plan.png){ .screenshot }

Im Bereich **„Importiere AG-Plan"** wählst du einen
bereits in tw-utils erstellten AG-Plan aus. Die Befehle aus diesem Plan
werden automatisch übernommen — auf Basis dieser Befehle berechnet das Tool
anschließend die passenden Zwischencleaner und Fake-UT.

Über **„Weiteren Plan hinzufügen"** kannst du mehrere Pläne nacheinander
importieren.

!!! info "Liste ansehen"
    Über den Button **„Liste ansehen"** kannst du dir die importierten
    AG-Befehle jederzeit anzeigen lassen.

### Alternative Eingabemethoden

![Alternative Eingabemethoden für den AG-Plan-Import](../assets/cleaner-fake-ut-tool/03_import_snob_plan_alternatives.png){ .screenshot }

Wenn du einen externen Plan nutzen möchtest, kannst du den Klappbereich
**„Alternative Eingabemethoden"** ausklappen. Dort gibt es zwei alternative
Importwege:

- **Alternative A: Copy & Paste** — füge die Workbench-Befehle direkt in
  das Textfeld ein (z. B. kopiert aus dem Workbench-Export-Fenster).
- **Alternative B: Upload per TXT-Datei** — lade eine TXT-Datei mit
  Workbench-Befehlen hoch; der Inhalt wird automatisch ins Tool
  eingelesen.

## 3. Einstellungen

### Zwischencleaner

![Einstellungen Zwischencleaner](../assets/cleaner-fake-ut-tool/04_settings_cleaner.png){ .screenshot }

Über das Feld **„Zwischencleaner Mindeststärke"** legst du die geforderte
Stärke des Cleaners fest — als Anzahl **Äxte** und Anzahl **leichter
Kavallerie**.

!!! info "So wird die Mindeststärke ausgewertet"
    Aus deinen Eingaben berechnet das Tool die **Angriffsstärke** des
    Cleaners. Anschließend wird jede beliebige Kombination offensiver
    Einheiten als Zwischencleaner zugelassen, solange sie diese
    Angriffsstärke erreicht. Es können also auch reine Lkav-Cleaner
    verplant werden, sofern genügend leichte Kavallerie im Dorf vorhanden
    ist, um die geforderte Angriffsstärke abzudecken.

Zusätzlich kannst du festlegen:

- **Zwischencleaner pro Ziel** — wie viele Cleaner pro Ziel verplant werden.
- **Zwischencleaner pro Herkunftsdorf** — wie viele Cleaner aus demselben
  Herkunftsdorf maximal verschickt werden.
- **Icon** — welches Icon die Cleaner-Befehle erhalten sollen.

### Fake-UT

![Einstellungen Fake-UT](../assets/cleaner-fake-ut-tool/05_settings_fake-sup.png){ .screenshot }

Über den Schalter **„Fake-UT planen?"** aktivierst du die Berechnung der
Fake-UT. Anschließend stehen dir zwei Ankreuzkästchen zur Verfügung:

- **„Fake-UT nur aus Deff-Dörfern planen"** — beschränkt die Auswahl der
  Herkunftsdörfer auf rein defensive Dörfer.
- **„keine Lkav und Späher als Fake-UT planen"** — schließt schnelle
  Einheiten als Fake-UT aus.

!!! info "Welteneinstellungen werden berücksichtigt"
    Das Tool berücksichtigt bei der Planung der Fake-UT die
    Welteneinstellungen rund um Unterstützungen im eigenen Stamm.

Zusätzlich kannst du die **Anzahl Fake-UT** festlegen sowie das **Icon**
auswählen, das den Fake-UT-Befehlen zugewiesen wird.

## 4. Berechnung starten

Mit Klick auf den Button **„Berechnung starten"** führt das Tool die
Berechnung der Zwischencleaner und Fake-UT aus.
