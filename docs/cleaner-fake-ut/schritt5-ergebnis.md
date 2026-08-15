# Schritt 5: Ergebnis

Schritt 5 zeigt den fertigen Plan. Der Schritt bleibt in der Schrittleiste
**gesperrt**, bis eine Berechnung durchgelaufen ist; danach springt das Tool
von selbst hierher.

Gestartet wird die Berechnung über den Knopf **„Berechnen"** unten in der
Schrittleiste — er ist aus jedem Schritt erreichbar.

## 1. Ergebniskarten und Aktionen

![Ergebniskarten mit den Aktions-Knöpfen](../assets/cleaner-fake-ut-tool/step5_01_result_cards.png){ .screenshot }

Oben steht eine Reihe von Karten im **Ist/Soll-Vergleich**: links die Zahl,
die tatsächlich geplant werden konnte, rechts nach dem Schrägstrich die Zahl,
die laut deinen Einstellungen geplant werden sollte.

- **„ZWC"** — die Zwischencleaner aus [Schritt 3](schritt3-cleaner.md).
- **„Fake-UT"** — die Fake-Unterstützungen aus
  [Schritt 4](schritt4-fake-ut.md).
- **„AG / Andere"** — die importierten Befehle aus
  [Schritt 2](schritt2-befehle.md). Sie zeigen nur eine Zahl, weil sie nicht
  geplant, sondern übernommen wurden.
- **„Gesamt"** — alle Befehle zusammen, dunkel hervorgehoben.

Stimmen Ist und Soll überein, ist der Plan vollständig. Liegt das Ist
darunter, sagt dir der Reiter
[Unvollständige Ziele](#3-unvollstandige-ziele), was genau fehlt.

Rechts daneben stehen drei Aktionen:

- **„Plan speichern"** — öffnet ein Fenster, in dem du unter **„Name des
  Plans"** einen Namen vergibst. Gespeicherte Pläne stehen anschließend unter
  „Meine Pläne & Container" zur Verfügung — und lassen sich von dort aus
  veröffentlichen, teilen und weiterverwenden.
- **„Workbench"** — kopiert sämtliche Befehle als Workbench-Strings in die
  Zwischenablage.
- **„Excel"** — lädt das komplette Ergebnis als Excel-Datei herunter.

!!! info "Die importierten Befehle sind Teil des Plans"
    Gespeichert, kopiert und exportiert werden nicht nur die neu geplanten
    Cleaner und Fake-UT, sondern auch die AG-Befehle aus Schritt 2. So enthält
    ein einziger Export alles, was zu dieser Aktion gehört.

## 2. Übersicht

![Reiter „Übersicht"](../assets/cleaner-fake-ut-tool/step5_02_overview_table.png){ .screenshot }

Der Reiter **„Übersicht"** zeigt alle Befehle **je Ziel**. Über
**„Vorheriges"** / **„Nächstes"** blätterst du Ziel für Ziel durch; im Suchfeld
oben springst du per Koordinateneingabe (`123|456`) direkt zu einem bestimmten
Ziel.

Die Spalten:

- **„#"** — laufende Nummer innerhalb des Ziels.
- **„Typ"** — Befehlstyp als farbiges Kennzeichen: `ZWC`, `Fake-UT`, `AG` oder
  `AG-Fake`.
- **„Herkunft"** — Herkunftskoordinate und -spieler.
- **„Ziel"** — Zielkoordinate und -spieler.
- **„Einheit"** — die langsamste Einheit, nach der sich die Laufzeit richtet.
- **„Icon"** — das Befehls-Icon der Workbench.
- **„Abschickzeit"** / **„Ankunftszeit"** — beide Spalten lassen sich per Klick
  sortieren.
- **„Distanz"** — Entfernung in Feldern.
- **„Laufzeit"** — Reisezeit in Minuten.

So kontrollierst du auf einen Blick, ob die Cleaner wirklich dicht am
AG-Befehl abgeschickt werden.

## 3. Unvollständige Ziele

![Reiter „Unvollständige Ziele"](../assets/cleaner-fake-ut-tool/step5_03_incomplete_targets.png){ .screenshot }

Dieser Reiter listet alle Ziele, für die **nicht** alle geforderten Befehle
geplant werden konnten. Am Reiternamen zeigt ein rotes Kennzeichen ihre
Anzahl. Sortiert wird nach der Gesamtzahl der fehlenden Befehle, das
Dringendste zuerst.

Die Spalten nennen das **Ziel (Spieler)** und dann, wie viele fehlen — **ZWC
fehlen**, **Fake-UT fehlen** und **Gesamt fehlen**. Wo nichts fehlt, steht
ein „-".

Sind alle Ziele versorgt, erscheint stattdessen die grüne Meldung *„Alle Ziele
sind vollständig."*

!!! info "Was tun, wenn Befehle fehlen?"
    Fehlende Befehle bedeuten fast immer, dass zu wenige Herkunftsdörfer
    infrage kamen. Lohnende Stellschrauben: die
    [Max. Zeitdifferenz](schritt3-cleaner.md#3-max-zeitdifferenz) großzügiger
    setzen oder ganz abschalten, die
    [Mindeststärke](schritt3-cleaner.md#1-zwischencleaner-mindeststarke) senken,
    **„Cleaner pro Herkunftsdorf"** erhöhen oder bei den Fake-UT das Häkchen
    **„Fake-UT nur aus Deff-Dörfern planen"** entfernen.

## 4. Abschickende Spieler

![Reiter „Abschickende Spieler"](../assets/cleaner-fake-ut-tool/step5_04_sending_players.png){ .screenshot }

Zeigt, **welcher Spieler wie viele Befehle abschickt** — absteigend nach der
Gesamtzahl sortiert. Spalten: **Spieler**, **ZWC**, **Fake-UT**, **AG**,
**Andere** und **Gesamt**.

Hilfreich, um die Last gleichmäßig zu verteilen und zu erkennen, wenn ein
Einzelner überlastet wird.

## 5. Angegriffene Spieler

![Reiter „Angegriffene Spieler"](../assets/cleaner-fake-ut-tool/step5_05_attacked_players.png){ .screenshot }

Das Gegenstück: **welcher gegnerische Spieler wie viele Befehle bekommt**. Die
Spalten sind dieselben wie in Abschnitt 4, beziehen sich hier aber auf den
angegriffenen Spieler.

## 6. Berechnung wiederholen

Bist du mit dem Ergebnis nicht zufrieden, springst du einfach in den
betreffenden Schritt zurück, passt die Einstellungen an und drückst erneut auf
**„Berechnen"**. Deine Eingaben bleiben dabei erhalten.
