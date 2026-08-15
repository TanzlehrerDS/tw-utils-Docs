# Veröffentlichte Container

Ein **Container** ist eine Sammlung veröffentlichter Pläne auf
**DS-Ultimate**. Beim Veröffentlichen zerlegt tw-utils einen gespeicherten Plan
nach Spielern und legt für jeden Spieler einen eigenen DSU-Plan an — jeder
bekommt also nur seine eigenen Befehle zu sehen.

![Reiter „Veröffentlichte Container"](../assets/my-plans/04_containers.png){ .screenshot }

Der Reiter listet alle Container der aktuellen Welt. Je Zeile stehen Name,
Anlagedatum und zwei Abzeichen: wie viele **Befehle** und wie viele **Pläne**
der Container enthält. Ein Klick auf den Pfeil klappt ihn auf.

!!! info "Für den ganzen Stamm gibt es mehr"
    Diese Seite verwaltet **deine** Container. Die Stammesführung hat im
    Leaderview unter [Planung (Container)](../leader-view/planung.md) eine
    deutlich umfangreichere Ansicht mit Befehlsbearbeitung, Planverteilung und
    Statusverfolgung.

## 1. Container anlegen

**„Neuer Container"** öffnet ein kleines Fenster, in dem du eine
**Bezeichnung / Name des Containers** einträgst. Der Container ist danach leer
— gefüllt wird er im nächsten Schritt.

## 2. Einen Plan veröffentlichen

Im aufgeklappten Container steht unter **„Pläne verwalten"** die Auswahlliste
**„Plan auswählen…"** mit deinen gespeicherten Plänen. Auswählen,
**„Hinzufügen"** klicken — das ist der Veröffentlichungsvorgang. tw-utils legt
daraufhin die DSU-Pläne an; bei großen Plänen dauert das einen Moment.

Du kannst nacheinander mehrere Pläne in denselben Container geben. Befehle
desselben Spielers landen dabei im selben DSU-Plan.

!!! warning "Änderungen wandern nicht automatisch mit"
    Bearbeitest du einen gespeicherten Plan nachträglich, ändert sich der
    bereits veröffentlichte DSU-Plan **nicht**. Diesen Hinweis zeigt die Seite
    auch selbst an. Der Weg zurück: **„Pläne leeren"** und den Plan erneut
    hinzufügen.

## 3. Die Planliste des Containers

Die Tabelle zeigt je Zeile den **Spieler**, die Anzahl seiner **Befehle**, das
Anlagedatum, die beiden **Schlüssel** (Bearbeiten und Anzeigen) und rechts die
**Links** zum DSU-Plan.

Ganz oben steht ohne laufende Nummer der **Gesamtplan**: ein zusätzlicher
DSU-Plan, der **alle** Befehle aller Spieler enthält. Er ist für die
Stammesführung gedacht, die den ganzen Angriff auf einen Blick sehen will.

Unter der Tabelle liegt **„Links exportieren (.txt)"** — damit lädst du alle
DSU-Links als Textdatei herunter und kannst sie zum Beispiel im Discord
verteilen.

## 4. Aufräumen

Neben **„Hinzufügen"** stehen zwei Knöpfe:

- **„Pläne leeren"** — löscht **alle Befehle** aus den DSU-Plänen des
  Containers. Die Pläne selbst und ihre Links bleiben bestehen; wer den Link
  schon hat, behält ihn.
- **„Abgelaufene löschen"** — entfernt nur die Befehle, deren Ankunft in der
  Vergangenheit liegt. Aktive Befehle bleiben erhalten.

Ganz unten rechts löscht **„Container löschen"** den Container in tw-utils. Die
Pläne auf DS-Ultimate bleiben dabei bestehen — nur die Verknüpfung hier
verschwindet.

Alle vier Aktionen fragen vorher nach.
