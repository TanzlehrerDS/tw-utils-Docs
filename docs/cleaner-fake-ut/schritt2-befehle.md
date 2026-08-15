# Schritt 2: Befehle

In Schritt 2 lädst du die Befehle ein, an denen sich Cleaner und Fake-UT
**ausrichten** sollen — in aller Regel die Adelsgeschlechter eines Trains. Aus
deren Abschickzeiten leitet das Tool ab, wann die Cleaner und Fake-UT
loslaufen müssen.

![Befehle aus einem AG-Plan importieren oder einfügen](../assets/cleaner-fake-ut-tool/step2_01_import_commands.png){ .screenshot }

## 1. Aus AG-Plan importieren

Unter **„Aus AG-Plan importieren"** wählst du im Dropdown **„Plan wählen…"**
einen bereits in tw-utils erstellten AG-Plan aus und übernimmst ihn mit dem
Plus-Knopf. Zur Auswahl stehen die AG-Pläne der aktuell gewählten Welt.

Der importierte Plan erscheint darunter in einer Liste, jeweils mit der Anzahl
seiner Befehle. Über das rote × nimmst du ihn wieder heraus. Solange nichts
importiert ist, steht dort *„Keine Pläne importiert."*

Du kannst nacheinander **mehrere Pläne** importieren.

!!! info "Ein Weltwechsel leert die Liste"
    Die Pläne gehören zu einer Welt. Wechselst du in der Hauptnavigation die
    Welt, werden die importierten Pläne verworfen und das Dropdown mit den
    Plänen der neuen Welt gefüllt.

## 2. Befehle per Copy & Paste einfügen

Hast du einen Plan, der nicht in tw-utils liegt, klappst du den Bereich
**„Befehle per Copy & Paste einfügen"** auf und fügst die
**Workbench-Befehle** direkt in das Textfeld ein — zum Beispiel aus dem
Workbench-Fenster im Spiel.

Die Tabelle darunter füllt sich beim Tippen bzw. Einfügen mit.

!!! info "Beide Wege lassen sich kombinieren"
    Anders als beim Truppen-Import in
    [Schritt 1](schritt1-truppen.md#1-truppen-importieren) schließen sich die
    beiden Wege hier **nicht** aus: Eingefügte Befehle und importierte Pläne
    werden zusammengeführt. Du kannst also einen AG-Plan importieren und
    zusätzlich einzelne Befehle einfügen.

## 3. Importierte Befehle

Am unteren Ende steht dauerhaft die Tabelle **„Importierte Befehle"** mit
diesen Spalten:

- **„#"** — laufende Nummer.
- **„Quelle"** — woher der Befehl stammt: der Name des AG-Plans oder
  *„Manuell / Upload"* für eingefügte Befehle.
- **„Herkunft (Angreifer)"** — Koordinate und Spieler des Herkunftsdorfes.
- **„Ziel (Verteidiger)"** — Koordinate und Spieler des Zieles.
- **„Einheit"** — die langsamste Einheit des Befehls.
- **„Abschickzeit"** und **„Ankunftszeit"**.

Über das Suchfeld filterst du nach Spieler oder Koordinate. Angezeigt werden
die ersten 500 Befehle; gerechnet wird immer mit allen.

---

Weiter geht es mit [Schritt 3: Cleaner](schritt3-cleaner.md).
