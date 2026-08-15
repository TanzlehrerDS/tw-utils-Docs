# Schritt 5: Fakeplanung

In Schritt 5 planst du **reine Fakeziele** — Dörfer, die ausschließlich Fakes
bekommen und nicht scharf angelaufen werden. Begleitfakes zu echten Zielen
gehören dagegen zu ihrem Ziel und werden in
[Schritt 4](schritt4-angriffsplanung.md) definiert.

Es gibt zwei Gruppen:

- **5.1 Normal-Fakes**
- **5.2 Bunker-Fakes**

!!! info "Beide Gruppen sind gleich aufgebaut"
    **Normal-Fakes** und **Bunker-Fakes** unterscheiden sich in nichts außer
    dem Namen und der Farbe auf der Karte. Die Aufteilung ist nur ein
    Vorschlag — du kannst die beiden Gruppen genauso gut für zwei beliebige
    parallele Fake-Aktionen verwenden, etwa um sie später im Ergebnis
    auseinanderhalten zu können.

## 1. Schritt 5.1: Normal-Fakes

![Unterschritt 5.1 „Normal-Fakes" im Überblick](../assets/nuke-planning-tool/step5-1_01_overview.png){ .screenshot }

Links steht die **Zielliste** der Gruppe mit Anzahl, Suchfeld und Papierkorb
(**„Alle löschen"**), rechts die Einstellungen.

### 1.1 Ziele auswählen

![Ziele auswählen](../assets/nuke-planning-tool/step5-1_02_select_targets.png){ .screenshot }

Zwei Wege stehen zur Verfügung:

- **„Direkt einzeichnen"** — **„Auf der Karte auswählen"** öffnet die
  Gesamtkarte im Auswahlmodus, siehe
  [Die Gesamtkarte](gesamtkarte.md#5-auswahl-per-klick-und-lasso). Für die
  Fakeplanung ist das der bequemste Weg, weil sich damit in einem Zug ganze
  Regionen markieren lassen.
- **„Koordinaten einfügen"** — für einzelne Ziele.

Einen Import aus einem gespeicherten Plan gibt es hier nicht.

!!! info "Scharfe Ziele haben Vorrang"
    Dörfer, die bereits in einer Kategorie der
    [Angriffsplanung](schritt4-angriffsplanung.md) stehen, werden beim
    Hinzufügen ausgefiltert — das Tool meldet sie als *„Ziele ignoriert
    (bereits anderswo verplant)"*. Umgekehrt wandert ein Fakeziel automatisch
    in die Angriffsplanung, wenn du es dort einträgst.

### 1.2 Zielfilter

![Zielfilter](../assets/nuke-planning-tool/step5-1_03_target_filter.png){ .screenshot }

Der Zielfilter grenzt ein, welche Dörfer überhaupt als Fake-Ziel in Betracht
kommen:

- **„Stamm-Tag (leer = alle)"** — Tag eintippen und mit dem Plus-Knopf
  hinzufügen. Mehrere Stämme sind möglich; sie erscheinen als Chips darunter.
  Bleibt das Feld leer, gilt *„Alle Stämme"*.
- **„Min. Punkte"** — Checkbox plus Zahl (Standard `3000`). Nur Dörfer ab
  dieser Punktzahl kommen infrage.

!!! info "Der Zielfilter gilt überall"
    Der Filter bestimmt, welche Dörfer überhaupt als Fake-Ziel in Frage
    kommen. Er gilt für **beide** Fake-Gruppen und für die Auswahl auf der
    Karte: Dort wird nur markiert, was ihm entspricht. Du kannst also mit
    gesetztem Filter großzügig über die Karte ziehen, ohne aus Versehen
    Kleinstdörfer oder den falschen Stamm zu erwischen.

    Änderst du den Filter, während die Karte offen ist, wirkt sich das sofort
    auf die Markierung aus.

### 1.3 Befehlsplanung

![Befehlsplanung und Fake-Zeitraum](../assets/nuke-planning-tool/step5-1_04_command_planning.png){ .screenshot }

Wie viele Fakes jedes Ziel dieser Gruppe bekommt, aufgeschlüsselt nach der Art
des Herkunftsdorfes:

- **„Fakes (aus Offdörfern)"** — nur aus Off-Dörfern.
- **„Fakes (aus Deffdörfern)"** — nur aus Deff-Dörfern.
- **„Fakes (Dorftyp egal)"** — aus beliebigen Dörfern.

Darunter läuft die Summe mit: *„Fakes je Ziel: 3"*, oder *„Noch keine Befehle
eingetragen."*, solange alle Felder auf `0` stehen.

### 1.4 Festlegung Fake-Zeitraum

Rechts daneben stehen **„Erw. vorher (Min.)"** und **„Erw. nachher (Min.)"**,
beide standardmäßig `15,0`. Sie legen fest, wie weit die Fakes eines Ziels
zeitlich auseinanderliegen dürfen.

!!! info "Der erste Fake spannt den Zeitraum auf"
    Für den **ersten** Fake eines Ziels gilt der
    [Ankunftszeitraum für Fakes](schritt3-ankunftszeiten.md#2-ankunftszeitraum-fur-fakes)
    aus Schritt 3, erweitert um die beiden Werte. Sobald dieser Fake steht,
    wird seine Ankunftszeit zum **Anker**: Jeder weitere Fake auf dasselbe Ziel
    muss zwischen „Erw. vorher" davor und „Erw. nachher" danach eintreffen.
    Große Werte streuen die Fakes eines Ziels also weiter auseinander, kleine
    ziehen sie zusammen.

    Anders als in der
    [Angriffsplanung](schritt4-angriffsplanung.md#26-weitere-detail-einstellungen),
    wo sich der Fake-Zeitraum aus den echten Befehlen des Ziels ergibt, gibt es
    hier keine echten Befehle — deshalb der Umweg über Schritt 3 und den ersten
    Fake.

## 2. Schritt 5.2: Bunker-Fakes

Die Gruppe **Bunker-Fakes** ist identisch aufgebaut. Sie hat ihre eigene
Zielliste, ihre eigene Befehlsplanung und ihren eigenen Fake-Zeitraum — nur
der Zielfilter aus [Abschnitt 1.2](#12-zielfilter) ist beiden Gruppen
gemeinsam.

Auf der Gesamtkarte erscheinen die Ziele beider Gruppen in unterschiedlichen
Violett-Tönen und lassen sich über die Chips **„Normal-Fakes"** und
**„Bunker-Fakes"** einzeln ein- und ausblenden.

Im Ergebnis werden die Befehle beider Gruppen gemeinsam als **„Fakes
(Fakeplanung)"** gezählt und damit von den Begleitfakes der Angriffsplanung
unterschieden.

---

Weiter geht es mit [Schritt 6: Übersicht](schritt6-uebersicht.md).
