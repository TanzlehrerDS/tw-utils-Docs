# Planung

Der Tab **„Planung"** ist der größte Bereich des Leader-Views. Er
gliedert sich in zwei Unterreiter:

- **Container** — Angriffspläne sammeln, koordinieren und an die
  Spieler verteilen.
- **Abfragen** — vorbereitende Daten sammeln (AG-Meldungen,
  Abschickzeiten, ausgeplante Herkunftsdörfer).

## Abfragen

Unter dem Reiter **„Abfragen"** findest du drei Pill-Tabs:
**AG-Meldungen**, **Abschickzeiten** und **Ausgeplante Dörfer**. Sie
liefern die drei wichtigsten Inputs für die Off-Planung.

!!! info "Daten kommen i. d. R. aus dem Discordbot"
    AG-Meldungen, Abschickzeiten und ausgeplante Herkunftsdörfer geben
    die Spieler in der Regel direkt über das
    [Planning-System des Discordbots](../discord-bot/planning-system.md)
    ab. Die Einträge erscheinen dann automatisch in diesen Listen.
    Leader können aber jederzeit auch manuell Einträge anlegen,
    bearbeiten oder löschen.

### AG-Meldungen

In diesem Bereich sammelst du Meldungen, wie viele AGs welcher Spieler
auf welche Zieldörfer fertig hat. Die Liste ist die Basis für die
spätere AG-Planung.

![AG-Meldungen — Übersicht](../assets/leaderview/15_leaderview_planning_snobqueries_overview.png){ .screenshot }

Oben siehst du eine **Kennzahlen-Leiste**, die alle Meldungen
zusammenfasst:

- **Gesamt AGs** — Summe aller gemeldeten AGs über alle Spieler.
- **Trains** — Anzahl Ziele, auf die mindestens 4 AGs gemeldet sind
  (Vollnobel-Train).
- **1er-AGs / 2er-AGs / 3er-AGs** — Anzahl Ziele, auf die genau 1, 2
  bzw. 3 AGs gemeldet sind.

Die Tabelle darunter listet jede einzelne Meldung:

| Spalte | Bedeutung |
|---|---|
| **#** | Laufende Nummer |
| **DS-Account** | Spieler, der die AGs stellt |
| **Stamm** | Stamm des Spielers |
| **Koordinate** | Zieldorf der Meldung |
| **Anzahl** | Wie viele AGs der Spieler auf dieses Zieldorf fertig hat |
| **Aktionen** | Eintrag bearbeiten (Stift) oder löschen (Mülltonne) |

Aktionen oberhalb der Tabelle: **„Hinzufügen"**, **„Export"**,
**„Alles löschen"**.

#### Manuelles Hinzufügen

![AG-Meldung hinzufügen](../assets/leaderview/16_leaderview_planning_snobqueries_add.png){ .screenshot }

Der Dialog **„AG-Meldung hinzufügen"** enthält zwei Felder:

- **Koordinaten (Text mit Koords)** — eine oder mehrere Zielkoordinaten;
  umgebender Text wird ignoriert (z. B. `Angriff auf 500|500 und
  501|501…`).
- **Anzahl AGs (pro Dorf)** — wie viele AGs der Spieler pro Zieldorf
  fertig hat. Der eingegebene Wert gilt für **alle** in Schritt 1
  erkannten Koordinaten.

### Abschickzeiten

Hier sammelst du die individuellen Abschickfenster der Spieler — also
die Zeitfenster, in denen die einzelnen Spieler tatsächlich am Rechner
sitzen und Angriffe sauber timen können.

![Abschickzeiten — Übersicht](../assets/leaderview/17_leaderview_planning_launchtimes_overview.png){ .screenshot }

Tabellenspalten:

| Spalte | Bedeutung |
|---|---|
| **#** | Laufende Nummer |
| **DS-Account** | Spieler, der zu diesem Zeitfenster verfügbar ist |
| **Stamm** | Stamm des Spielers |
| **Datum** | Tag, an dem der Spieler abschicken kann |
| **Zeitraum** | Von- und Bis-Uhrzeit (Tribalwars-Serverzeit) |
| **Aktionen** | Eintrag bearbeiten oder löschen |

Aktionen oberhalb der Tabelle: **„Hinzufügen"**, **„Export"**,
**„Alles löschen"**.

#### Manuelles Hinzufügen

![Abschickzeit hinzufügen](../assets/leaderview/18_leaderview_planning_launchtimes_add.png){ .screenshot }

Der Dialog **„Abschickzeit hinzufügen"** enthält folgende Felder:

- **Spielername (DS-Account)** — mit Autovervollständigung über die
  verifizierten Accounts.
- **Datum** — Tag des Abschickfensters.
- **Von** / **Bis** — Anfang und Ende des Zeitfensters (Tribalwars-
  Serverzeit).

### Ausgeplante Dörfer

Hier markierst du Dörfer, die in der Off-Planung **nicht als
Herkunftsdorf** verwendet werden sollen — zum Beispiel weil der Spieler
das Dorf aktuell defensiv halten will oder weil die Truppen für eine
andere Aktion reserviert sind.

![Ausgeplante Dörfer — Übersicht](../assets/leaderview/19_leaderview_planning_excludedvillages_overview.png){ .screenshot }

Tabellenspalten:

| Spalte | Bedeutung |
|---|---|
| **#** | Laufende Nummer |
| **DS-Account** | Besitzer des ausgeplanten Dorfs |
| **Stamm** | Stamm des Besitzers |
| **Koordinate** | Das ausgeplante Dorf |
| **Aktionen** | Eintrag löschen |

#### Manuelles Hinzufügen

![Herkunftsdorf ausplanen](../assets/leaderview/20_leaderview_planning_excludedvillages_add.png){ .screenshot }

Im Dialog **„Herkunftsdorf ausplanen"** trägst du im Feld
**„Koordinaten (Text mit Koords)"** eine oder mehrere Koordinaten ein
(umgebender Text wird ignoriert).

## Container

Im Unterreiter **„Container"** verwaltest du die eigentlichen
Angriffspläne. Ein **Container** bündelt eine Operation — z. B. eine
Off-Welle, eine AG-Aktion oder einen Zwischencleaner — mit allen Plänen
und Befehlen und steuert die Verteilung an die einzelnen Spieler.

![Container — Übersicht](../assets/leaderview/21_leaderview_planning_container_overview.png){ .screenshot }

Die Übersichtstabelle zeigt alle bestehenden Container des Stammes:

| Spalte | Bedeutung |
|---|---|
| **Name** | Frei wählbarer Name der Operation (z. B. `Op. Phoenix`) |
| **Verteilungsstatus** | **„Aktiv"** = Container ist veröffentlicht, Spieler können den Plan abrufen. **„Inaktiv"** = Container ist offline / in Vorbereitung. |
| **Welt** | DS-Welt, für die der Container gilt (Badge) |
| **Zuletzt geändert** | Wer hat den Container zuletzt bearbeitet, und wann (oder **„Noch keine Änderung"**, wenn frisch angelegt) |
| **Öffnen** | Öffnet den Container in der Detailansicht |

### Container anlegen

![Container anlegen](../assets/leaderview/22_leaderview_planning_container_containeradd.png){ .screenshot }

Über **„Neuer Container"** öffnet sich der Dialog **„Neuer Container"**
mit dem Feld **„Name"** (max. 50 Zeichen, z. B. `Op. Phoenix`). Der
Container wird automatisch der aktuellen Welt zugeordnet und startet im
Status **„Inaktiv"**.

### Leerer Container nach dem Öffnen

![Leerer Container](../assets/leaderview/23_leaderview_planning_container_overview_empty_container.png){ .screenshot }

Direkt nach dem Öffnen siehst du drei Bereiche:

- **Kopfbereich** — links Container-Name + Welt-Badge sowie der Link
  **„Zurück zur Übersicht"**, rechts der **Veröffentlichungs-Toggle**
  (siehe [Veröffentlichung](#veroffentlichung)), der Button
  **„Changelog"** und **„Container löschen"**.
- **Action-Leiste** — hier importierst und synchronisierst du die
  Inhalte:
    - **„Plan auswählen…"** — Dropdown mit allen Plänen aus dem
      Off-/AG-Planungstool, die in den Container importiert werden
      können.
    - **„Hinzufügen"** — fügt den im Dropdown gewählten Plan hinzu.
    - **„Pläne leeren"** — entfernt alle Befehle aus dem Container.
    - **„Veraltete ausblenden"** — versteckt Befehle, deren
      Abschickzeit bereits in der Vergangenheit liegt.
    - **„DSU-Synchronisation"** — überträgt die aktuellen Befehle nach
      DS-Ultimate (pro Spieler ein DSU-Plan + ein „Gesamtplan").
- **Reiter** — darunter wechselst du zwischen **„Pläne"** (Sicht pro
  Spieler) und **„Befehle"** (Sicht pro Einzelangriff).

### Reiter „Pläne"

![Reiter „Pläne"](../assets/leaderview/24_leaderview_planning_container_planstab.png){ .screenshot }

Der Reiter **„Pläne"** ist die spieler-orientierte Sicht. Pro Spieler,
für den im Container Befehle existieren, gibt es eine Zeile mit
folgenden Spalten:

| Spalte | Bedeutung |
|---|---|
| **#** | Laufende Nummer |
| **Spieler** | Name des Spielers, dem die Befehle gehören |
| **Befehle** | Anzahl seiner Befehle im Container, plus Status (z. B. **„Aktiv"** = Befehle sind veröffentlicht / spielbar) |
| **Discord** | Verknüpfter Discord-Account; **„nicht verknüpft"**, wenn der Spieler sich noch nicht verifiziert hat |
| **DSU-Plan** | Links zum Spieler-DSU-Plan: **„Bearbeiten"** öffnet ihn in DS-Ultimate, **„Anzeigen"** zur reinen Ansicht. Erscheint erst nach DSU-Synchronisation. |
| **Verteilungsstatus** | Zeigt an, ob der Spieler den Plan bereits erhalten hat: 🔴 = noch nicht verteilt, 🟢 = verteilt (mit Zeitstempel). Das **blaue Brief-Icon** öffnet den Dialog zum Versenden der Ingame-Nachricht. |

#### Nachrichten-Template

![Nachrichten-Template bearbeiten](../assets/leaderview/25_leaderview_planning_container_planstab_messagetemplate.png){ .screenshot }

Über den Button **„Nachrichten-Template"** öffnest du den Editor
**„Nachrichten-Template bearbeiten"**. Das Template ist der **Text-
Vorlage**, die beim Senden einer Ingame-Nachricht für jeden Spieler
benutzt wird. Die Platzhalter werden automatisch pro Spieler ersetzt:

| Platzhalter | Wird ersetzt durch |
|---|---|
| `{player_name}` | Name des Spielers, an den die Nachricht geht |
| `{dsu_link}` | Individueller Link zum DS-Ultimate-Plan dieses Spielers |
| `{wb_commands}` | Alle WB-Commands des Spielers im Spoiler-Block (für den Ingame-Bot „werewolf"). |

#### Nach DSU-Synchronisation

![Nach DSU-Synchronisation](../assets/leaderview/26_leaderview_planning_container_planstab_after_dsusynchronization.png){ .screenshot }

Nach Klick auf **„DSU-Synchronisation"** legt das Tool für jeden
Spieler einen DSU-Plan auf DS-Ultimate an; in der Spalte **„DSU-Plan"**
erscheinen die Links **„Bearbeiten · Anzeigen"**.

Zusätzlich erscheint ganz oben die hervorgehobene Zeile **„Gesamtplan"**
mit dem gelben **„Total Plan"**-Badge — sie enthält alle Befehle aller
Spieler in einem einzigen DSU-Plan und eignet sich z. B. für eine
zentrale Co-Leader-Übersicht.

Oben rechts zeigt der Hinweis **„Pending changes: +X / -Y / ±Z"** an,
wie viele Commands seit der letzten Synchronisation **hinzugekommen
(+)**, **entfernt (−)** oder **geändert (±)** wurden. Solange der
Zähler nicht 0/0/0 steht, sind die DSU-Pläne nicht auf dem aktuellen
Stand.

#### Ingame-Nachricht senden

![Ingame-Nachricht senden](../assets/leaderview/27_leaderview_planning_container_planstab_sendplan_ingame.png){ .screenshot }

Ein Klick auf das blaue **Brief-Icon** in der Spalte
**„Verteilungsstatus"** öffnet den Dialog **„Ingame-Nachricht senden"**.
Der Dialog zeigt die fertige Nachricht für den jeweiligen Empfänger
(Template mit aufgelösten Platzhaltern, inkl. WB-Commands-Spoiler).

Über **„Send & Copy"** wird die Nachricht in die Zwischenablage kopiert
und gleichzeitig die Ingame-Inbox in einem neuen Tab geöffnet — dort
einfach mit `Strg+V` einfügen und versenden. Der Spieler wird
automatisch als **„verteilt"** markiert.

#### Verteilungsstatus ändern

![Verteilungsstatus ändern](../assets/leaderview/28_leaderview_planning_container_planstab_distributionstatus_change.png){ .screenshot }

Der **Verteilungsstatus** in der jeweiligen Zeile springt nach dem
Senden auf **grün** und zeigt den Zeitstempel der Verteilung. Über das
kleine **Rückstell-Icon** (Pfeil im Kreis) lässt sich der Status manuell
zurücksetzen — z. B. wenn ein Spieler den Plan erneut zugeschickt
bekommen soll.

#### Action-Bar bei Auswahl

![Action-Bar im Reiter „Pläne"](../assets/leaderview/29_leaderview_planning_container_planstab_selectinplans_opens_action_bar.png){ .screenshot }

Sobald du in der Spieler-Tabelle mindestens einen Eintrag anhakst,
erscheint oben eine Action-Bar mit Bulk-Aktionen:

- **„Abhol-Status zurücksetzen"** — setzt den Verteilungsstatus aller
  ausgewählten Spieler auf 🔴 zurück.
- **„Link erneuern"** — generiert für die ausgewählten Spieler einen
  neuen DSU-Link. **Achtung:** Der alte Link wird sofort ungültig — die
  Spieler müssen den neuen Link aktiv abholen.
- **„Export Links"** — exportiert die DSU-Links der ausgewählten
  Spieler (z. B. für ein zentrales Forum-Posting).
- **„Abbrechen"** — Auswahl verwerfen.

### Reiter „Befehle"

![Reiter „Befehle"](../assets/leaderview/30_leaderview_planning_container_commandstab_overview.png){ .screenshot }

Der Reiter **„Befehle"** ist die befehl-orientierte Sicht. Jede Zeile
ist ein einzelner Angriffsbefehl im Container. Spalten:

| Spalte | Bedeutung |
|---|---|
| **Spieler** | Angreifer (Besitzer des Quelldorfs) |
| **Quelle** | Quelldorf-Koordinate |
| **Ziel** | Zieldorf-Koordinate |
| **Einheit** | Schnellste Einheit im Befehl — bestimmt die Laufzeit |
| **Icon** | DS-Ultimate-Symbol des Befehls (z. B. Off-, AG-, Fake-Icon) |
| **Abschickzeit** | Wann der Angriff abgeschickt werden muss |
| **Ankunftszeit** | Wann der Angriff am Ziel ankommt |
| **Distanz** | Felderdistanz Quelle ↔ Ziel |
| **Laufzeit** | Berechnete Laufzeit auf Basis der Einheit |

Über das Häkchen **„Ausgeblendete zeigen"** lassen sich versteckte
Befehle einblenden.

Rechts oben stehen die Aktionen **„UT-Boost"** und
**„Ankunftszeiten anpassen"** zur Verfügung.

#### UT-Boost-Modal

![UT-Boost-Modal](../assets/leaderview/31_leaderview_planning_container_commandstab_utboost_modal.png){ .screenshot }

Im Dialog **„UT-Boosts"** vergibst du pro Zielspieler einen
Boost-Prozentsatz (0–20 %). Damit kannst du gezielt einzelnen Spielern
mehr Fake-UT-Befehle zuweisen, ohne die Container-Logik insgesamt zu
verändern.

Spalten der Tabelle im Modal:

- **Zielspieler** — Empfänger des Boosts.
- **Betroffene Befehle** — Anzahl Fake-UT-Befehle, auf die der Boost
  wirkt.
- **UT-Boost (%)** — Eingabefeld für den Prozentwert pro Spieler.

!!! info "Nur für Fake-UT-Befehle"
    UT-Boosts wirken ausschließlich auf **Fake-UT-Befehle** und
    schließen dabei auch ausgeblendete Befehle mit ein.

- **„Save only"** — Werte speichern, aber noch nicht anwenden.
- **„Save & Apply"** — Werte speichern und sofort auf alle betroffenen
  Befehle anwenden.

#### Ankunftszeiten-Modal

![Ankunftszeiten anpassen](../assets/leaderview/32_leaderview_planning_container_commandstab_adjusttimes_modal.png){ .screenshot }

Der Dialog **„Ankunftszeiten anpassen"** verschiebt die Ankunftszeiten
für bestimmte Befehlsgruppen — typischerweise weil sich der Off-Termin
einer Welle geändert hat. Ablauf in zwei Schritten:

1. **Kombinationen auswählen** — markiere die
   Plantyp/Einheit/Icon-Kombinationen, die angepasst werden sollen.
   Die Spalte **„Count"** zeigt, wie viele Befehle im Container je
   Kombination passen, **„Total"** summiert die Auswahl.
2. **Datei hochladen** — eine Textdatei im Format
   `XXX|YYY,DD.MM.JJJJ,HH:MM:SS` (eine Zeile pro Zieldorf). Drag &
   Drop oder Klicken zum Auswählen.

Die Anpassung gilt auch für ausgeblendete Befehle.

#### Einzelnen Befehl bearbeiten

![Einzelnen Befehl bearbeiten](../assets/leaderview/33_leaderview_planning_container_commandstab_editsinglecommand_modal.png){ .screenshot }

Über das Bearbeiten-Icon eines Befehls öffnest du den Dialog
**„Befehl bearbeiten"**. Hier kannst du einen einzelnen Befehl
nachträglich justieren:

- **Quelldorf** / **Zieldorf** — Koordinaten der beiden beteiligten
  Dörfer; der Spielername wird automatisch unter dem Feld angezeigt.
- **Typ** — Befehlstyp (z. B. **„Snob"**, **„Off"**, **„Fake"**).
- **Einheit** — schnellste verwendete Einheit; bestimmt die Laufzeit.
- **Symbol** — DS-Ultimate-Icon des Befehls.
- **Abschickzeit** / **Ankunftszeit** — eines der beiden ist
  einstellbar, das jeweils andere wird automatisch berechnet.
- **UT-Boost (0–20 %)** — optional, nur für Fake-UT.
- **Truppen** — Anzahl Truppen pro Einheitentyp im Befehl.
- **Vorschau** — Live-Berechnung mit Typ, Quelle, Ziel, Einheit,
  Abschickzeit, Ankunftszeit, Distanz und Laufzeit. Die Vorschau ist
  informativ; die finalen Werte berechnet der Server beim Speichern.

#### Befehls-Action-Bar

![Action-Bar im Reiter „Befehle"](../assets/leaderview/34_leaderview_planning_container_commandstab_selectingcommand_opens_action_bar.png){ .screenshot }

Sobald du Befehle in der Liste auswählst, erscheint eine Action-Bar mit
Bulk-Aktionen (z. B. UT-Boost, Ankunftszeiten anpassen, Befehle
ausblenden bzw. löschen).

### Veröffentlichung

Der **Veröffentlichungs-Toggle** oben rechts im Kopfbereich steuert, ob
der Container nach außen aktiv ist.

![Veröffentlichung aktiv](../assets/leaderview/35_leaderview_planning_container_publishing_active.png){ .screenshot }

![Veröffentlichung inaktiv](../assets/leaderview/36_leaderview_planning_container_publishing_inactive.png){ .screenshot }

- **Veröffentlichung: Aktiv** — DSU-Links sind erreichbar, der
  Discordbot liefert Inhalte an die verknüpften Spieler aus.
- **Veröffentlichung: Inaktiv** — der Container ist nur intern im
  Leader-View sichtbar. Bestehende DSU-Links sind nicht erreichbar, die
  Discord-Auslieferung pausiert. Ideal während der Vorbereitung einer
  Operation.

### Changelog

![Changelog](../assets/leaderview/37_leaderview_planning_container_changelog.png){ .screenshot }

Über den Button **„Changelog"** öffnest du die vollständige Historie
aller Änderungen am Container. Pro Eintrag siehst du **Zeitpunkt**,
**Geändert von** (Leader bzw. Spieler) und die ausgeführte
**Container-Aktion**.

Typische Einträge:

- `Container aktiviert` / `Container deaktiviert` — Verteilungsstatus
  umgeschaltet.
- `Plan "…" imported (X commands)` — ein Plan aus dem
  Off-/AG-Planungstool wurde importiert.
- `Container cleared (X commands removed)` — alle Befehle wurden
  entfernt (`Pläne leeren`).
- `DSU synchronized (X new, X removed, X changed)` — Synchronisation
  nach DS-Ultimate.
- `"…" manually marked as distributed` — Verteilungsstatus eines
  Spielers wurde manuell auf 🟢 gesetzt.
