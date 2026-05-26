# Planung

Der Tab **„Planung"** ist der größte Bereich des Leader-Views. Er
gliedert sich in zwei Unterreiter:

- **Container** — Angriffspläne sammeln, koordinieren und an die
  Spieler verteilen.
- **Abfragen** — vorbereitende Daten sammeln (AG-Meldungen,
  Abschickzeiten, ausgeplante Dörfer).

## Abfragen

Unter dem Reiter **„Abfragen"** findest du drei Pill-Tabs:
**AG-Meldungen**, **Abschickzeiten** und **Ausgeplante Dörfer**. Sie
liefern die drei wichtigsten Inputs für die Off-Planung, welche von
den Stammesmembern bereitgestellt werden müssen.

!!! info "Daten kommen i. d. R. aus dem Discordbot"
    AG-Meldungen, Abschickzeiten und ausgeplante Herkunftsdörfer geben
    die Spieler in der Regel direkt über das
    [Planning-System des Discordbots](../discord-bot/planning-system.md)
    ab. Die Einträge erscheinen dann automatisch in diesen Listen.
    Leader können aber jederzeit auch manuell Einträge anlegen,
    bearbeiten oder löschen.

### AG-Meldungen

In diesem Bereich werden die AG-Meldungen verwaltet. Die Liste ist die
Basis für die spätere AG-Planung.

![AG-Meldungen — Übersicht](../assets/leaderview/15_leaderview_planning_snobqueries_overview.png){ .screenshot }

Oben siehst du eine **Kennzahlen-Leiste**, die alle Meldungen
zusammenfasst:

- **Gesamt AGs** — Summe aller gemeldeten AGs über alle Spieler.
- **Trains** — Anzahl Herkunftsdörfer, aus denen mindestens 4 AGs
  gemeldet sind (Vollnobel-Train).
- **1er-AGs / 2er-AGs / 3er-AGs** — Anzahl Herkunftsdörfer, aus denen
  genau 1, 2 bzw. 3 AGs gemeldet sind.

Die Tabelle darunter listet jede einzelne Meldung:

| Spalte | Bedeutung |
|---|---|
| **#** | Laufende Nummer |
| **DS-Account** | Spieler, der die AGs stellt |
| **Stamm** | Stamm des Spielers |
| **Koordinate** | Herkunftsdorf der Meldung |
| **Anzahl** | Wie viele AGs der Spieler aus diesem Herkunftsdorf fertig hat |
| **Aktionen** | Eintrag bearbeiten (Stift) oder löschen (Mülltonne) |

Oberhalb der Tabelle hat man die folgenden Optionen:
**„Hinzufügen"**, **„Export"**, **„Alles löschen"**.

### Abschickzeiten

Hier verwaltest du die individuellen Abschickfenster der Spieler —
also die Zeitfenster, in denen die einzelnen Spieler tatsächlich Zeit
haben, um Befehle abzuschicken.

![Abschickzeiten — Übersicht](../assets/leaderview/17_leaderview_planning_launchtimes_overview.png){ .screenshot }

Tabellenspalten:

| Spalte | Bedeutung |
|---|---|
| **#** | Laufende Nummer |
| **DS-Account** | Account, für welchen das eingetragene Zeitfenster gilt |
| **Stamm** | Stamm des Spielers |
| **Datum** | Tag, an dem der Spieler abschicken kann |
| **Zeitraum** | Von- und Bis-Uhrzeit (Tribalwars-Serverzeit) |
| **Aktionen** | Eintrag bearbeiten oder löschen |

Oberhalb der Tabelle hat man die folgenden Optionen:
**„Hinzufügen"**, **„Export"**, **„Alles löschen"**.

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

### Manuelles Hinzufügen

Alle drei Listen in den **Abfragen** können nicht nur über den
Discordbot, sondern auch direkt im Leader-View manuell befüllt werden.
Über einen Klick auf den Button **„Hinzufügen"** oberhalb der
jeweiligen Tabelle öffnest du das passende Eingabe-Modal. Nach dem
Bestätigen erscheint der neue Eintrag unmittelbar in der
entsprechenden Tabelle.

Die drei Eingabe-Modals im Detail:

#### AG-Meldung hinzufügen

![AG-Meldung hinzufügen](../assets/leaderview/16_leaderview_planning_snobqueries_add.png){ .screenshot }

Felder:

- **Koordinaten (Text mit Koords)** — eine oder mehrere
  Herkunftskoordinaten; umgebender Text wird ignoriert (z. B.
  `AGs fertig in 500|500 und 501|501…`).
- **Anzahl AGs (pro Dorf)** — wie viele AGs der Spieler pro
  Herkunftsdorf fertig hat. Der eingegebene Wert gilt für **alle** in
  Schritt 1 erkannten Koordinaten.

#### Abschickzeit hinzufügen

![Abschickzeit hinzufügen](../assets/leaderview/18_leaderview_planning_launchtimes_add.png){ .screenshot }

Felder:

- **Spielername (DS-Account)** — mit Autovervollständigung über die
  verifizierten Accounts.
- **Datum** — Tag des Abschickfensters.
- **Von** / **Bis** — Anfang und Ende des Zeitfensters (Tribalwars-
  Serverzeit).

#### Herkunftsdorf ausplanen

![Herkunftsdorf ausplanen](../assets/leaderview/20_leaderview_planning_excludedvillages_add.png){ .screenshot }

Im Feld **„Koordinaten (Text mit Koords)"** trägst du eine oder mehrere
Koordinaten ein (umgebender Text wird ignoriert).

## Container

Im Unterreiter **„Container"** verwaltest du die eigentlichen
Angriffspläne. Ein **Container** bündelt eine Operation — z. B. eine
Off-Welle, eine AG-Aktion oder einen Zwischencleaner — mit allen Plänen
und Befehlen und steuert die Verteilung an die einzelnen Spieler.

![Container — Übersicht](../assets/leaderview/21_leaderview_planning_container_overview.png){ .screenshot }

Hier kannst du deine bestehenden Container öffnen sowie neue Container
anlegen. Mit Klick auf **„Öffnen"** wechselst du in die jeweilige
Container-Übersicht.

### Neuen Container anlegen

Über einen Klick auf den Button **„Neuer Container"** legst du einen
neuen Container an. Es öffnet sich ein Modal, in welchem du einen
**Namen** für den Container festlegen musst (max. 50 Zeichen, z. B.
`Op. Phoenix`).

![Container anlegen](../assets/leaderview/22_leaderview_planning_container_containeradd.png){ .screenshot }

Nach dem Bestätigen wird der Container automatisch der aktuellen Welt
zugeordnet, startet im Status **„Inaktiv"** und erscheint unmittelbar
in der Container-Übersicht.

### Aufbau eines Containers

Direkt nach dem Anlegen ist ein Container noch komplett leer — es sind
weder Pläne noch Befehle hinterlegt. Das Grundgerüst mit Kopfbereich,
Action-Leiste und den beiden Reitern siehst du aber bereits:

![Leerer Container](../assets/leaderview/23_leaderview_planning_container_overview_empty_container.png){ .screenshot }

**Kopfbereich**

Im Kopfbereich findest du auf der linken Seite den Container-Namen
sowie das Welt-Badge der zugehörigen DS-Welt. Über den Link
**„Zurück zur Übersicht"** gelangst du zurück zur Container-Übersicht
des Stammes.

Auf der rechten Seite sitzen die container-weiten Aktionen:

- der **Veröffentlichungs-Toggle** zum Aktivieren / Deaktivieren des
  Containers (siehe [Veröffentlichung](#veroffentlichung)),
- der Button **„Changelog"** für die Änderungs-Historie (siehe
  [Sonstiges](#sonstiges)),
- der Button **„Container löschen"** zum vollständigen Entfernen des
  Containers (siehe [Sonstiges](#sonstiges)).

**Action-Leiste**

Direkt unter dem Kopfbereich liegt die Action-Leiste mit den
Werkzeugen zum Befüllen und Synchronisieren des Containers:

![Action-Leiste — Buttons](../assets/leaderview/40_leaderview_container_import_plan.png){ .screenshot }

Über das Dropdown **„Plan auswählen…"** wählst du einen Plan aus
deinen gespeicherten Plänen aus und fügst ihn per Klick auf
**„Hinzufügen"** dem Container hinzu. Nach dem Hinzufügen
aktualisieren sich die Reiter **„Pläne"** und **„Befehle"**
entsprechend — die importierten Spielerpläne und Befehle erscheinen
dort unmittelbar. Auf die gleiche Weise lassen sich nach und nach
weitere Pläne einfügen.

Soll der Container wieder komplett geleert werden, entfernt ein Klick
auf **„Pläne leeren"** in einem Schritt alle bisher importierten
Befehle. Der Schalter **„Abgelaufene ausblenden"** versteckt Befehle,
deren Abschickzeit bereits in der Vergangenheit liegt — sie bleiben
aber im Container erhalten und werden nur nicht mehr angezeigt.

!!! info "DSU-Pläne bleiben nach „Pläne leeren" bestehen"
    Wurde der Container zuvor bereits per **„DSU-Synchronisation"**
    nach DS-Ultimate übertragen, bleiben die dort angelegten DSU-Pläne
    (pro Spieler + Gesamtplan) auch nach **„Pläne leeren"** bestehen.
    Die Befehle innerhalb dieser DSU-Pläne werden bei **„Pläne leeren"**
    allerdings ebenfalls entfernt — übrig bleibt nur der leere
    DSU-Plan.

Ein Klick auf **„DSU-Synchronisation"** überträgt die aktuell im
Container enthaltenen Befehle nach DS-Ultimate. Dabei legt das Tool
pro Spieler einen eigenen DSU-Plan sowie einen „Gesamtplan" mit allen
Befehlen an. Details zu diesem Schritt findest du im Abschnitt
[DSU-Synchronisation](#dsu-synchronisation).

**Reiter „Pläne" und „Befehle"**

Im unteren Bereich des Containers stehen die beiden Reiter **„Pläne"**
und **„Befehle"** zur Verfügung. Die Details zu beiden Reitern findest
du in den jeweils gleichnamigen Abschnitten weiter unten.

### Reiter „Pläne"

Im Reiter **„Pläne"** verwaltest du die Angriffspläne der Spieler — pro
Spieler, für den im Container Befehle existieren, gibt es eine Zeile.

![Reiter „Pläne"](../assets/leaderview/24_leaderview_planning_container_planstab.png){ .screenshot }

Auf einen Blick erkennst du, ob der Spieler-Account mit einem
Discord-Account verknüpft ist; daran siehst du sofort, ob der Spieler
den Plan eigenständig über den tw-utils-Discordbot herunterladen kann
oder ob du ihn per Ingame-Nachricht zukommen lassen musst. Außerdem
siehst du den **DSU-Plan**-Link des jeweiligen Spielers — dieser
erscheint allerdings erst, nachdem eine
[DSU-Synchronisation](#dsu-synchronisation) durchgeführt wurde. Der
**Verteilungsstatus** schließlich wird grün, sobald der Plan per
Ingame-Nachricht versendet wurde **oder** sobald ein verknüpfter
Discord-User den Plan über den Discordbot heruntergeladen hat.

Darüber hinaus stehen dir als Stammesführung mehrere Funktionen zur
Verfügung, die in den folgenden Unterabschnitten beschrieben sind.

#### Funktionen

##### DSU-Synchronisation

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

##### Planverteilung

Die fertigen Pläne lassen sich auf **drei Wegen** an die Spieler
verteilen:

1. **Über den Discordbot** — Spieler mit abgeschlossener
   Discord-Account-Verifizierung können den Plan eigenständig
   herunterladen.
2. **Per Ingame-Nachricht** — der Leader versendet den Plan einzeln per
   Ingame-Inbox, optional mit eigenem Nachrichten-Template.
3. **Sonstige Verteilung über Export** — die DSU-Links lassen sich als
   TXT-Datei exportieren und außerhalb des Spiels weiterverwenden
   (z. B. Forum-Posting).

**Verteilung über den Discordbot**

Spieler, die ihre Discord-Account-Verifizierung mit ihrem DS-Account
abgeschlossen haben, können den Angriffsplan eigenständig über das
[Planning-System des tw-utils-Discordbots](../discord-bot/planning-system.md)
herunterladen. Ein aktives Versenden durch den Leader ist hier nicht
nötig. Welche Spieler über den Bot beziehbar sind, erkennst du an der
Spalte **Discord** in der Übersicht.

**Verteilung per Ingame-Nachricht**

Sollen Spieler den Plan per Ingame-Inbox erhalten, kommt das
**Nachrichten-Template** ins Spiel — die Text-Vorlage, die beim
Versenden für jeden Spieler individuell befüllt wird.

![Nachrichten-Template bearbeiten](../assets/leaderview/25_leaderview_planning_container_planstab_messagetemplate.png){ .screenshot }

Über den Button **„Nachrichten-Template"** öffnest du den Editor
**„Nachrichten-Template bearbeiten"**. Die Platzhalter werden
automatisch pro Spieler ersetzt:

| Platzhalter | Wird ersetzt durch |
|---|---|
| `{player_name}` | Name des Spielers, an den die Nachricht geht |
| `{dsu_link}` | Individueller Link zum DS-Ultimate-Plan dieses Spielers |
| `{wb_commands}` | Alle WB-Commands des Spielers im Spoiler-Block (für den Ingame-Bot „werewolf") |

![Ingame-Nachricht senden](../assets/leaderview/27_leaderview_planning_container_planstab_sendplan_ingame.png){ .screenshot }

Ein Klick auf das blaue **Brief-Icon** in der Spalte
**„Verteilungsstatus"** öffnet den Dialog **„Ingame-Nachricht senden"**.
Der Dialog zeigt die fertige Nachricht für den jeweiligen Empfänger
(Template mit aufgelösten Platzhaltern, inkl. WB-Commands-Spoiler).
Über **„Send & Copy"** wird die Nachricht in die Zwischenablage kopiert
und gleichzeitig die Ingame-Inbox in einem neuen Tab geöffnet — dort
einfach mit `Strg+V` einfügen und versenden. Der Spieler wird
automatisch als **„verteilt"** markiert.

**Sonstige Verteilung über Export der DSU-Links**

Soll die Verteilung außerhalb von Discord und Ingame stattfinden —
z. B. zentral im Stammesforum — kannst du die DSU-Links der
ausgewählten Spieler über die Bulk-Aktion **„Export Links"** als
TXT-Datei herunterladen. Markiere dazu in der Spieler-Tabelle die
gewünschten Spieler; in der oben erscheinenden Action-Bar wählst du
dann **„Export Links"**. Die TXT-Datei enthält pro markiertem Spieler
einen DSU-Link und kann beliebig weiterverwendet werden.

##### Status- & Link-Management (Bulk-Aktionen)

Damit ein Spieler den Plan erneut zugeschickt bekommen kann oder
mehrere Spieler gleichzeitig nachverwaltet werden können, gibt es zwei
Werkzeuge: das **Rückstell-Icon** in jeder einzelnen Zeile und die
**Action-Bar mit Bulk-Aktionen** über die Spalten-Auswahl.

**Verteilungsstatus einzeln zurücksetzen**

![Verteilungsstatus ändern](../assets/leaderview/28_leaderview_planning_container_planstab_distributionstatus_change.png){ .screenshot }

Der **Verteilungsstatus** in jeder Zeile springt nach dem Senden auf
**grün** und zeigt den Zeitstempel der Verteilung. Über das kleine
**Rückstell-Icon** (Pfeil im Kreis) lässt sich der Status manuell
zurücksetzen — z. B. wenn ein Spieler den Plan erneut zugeschickt
bekommen soll.

**Bulk-Aktionen für mehrere Spieler**

![Action-Bar im Reiter „Pläne"](../assets/leaderview/29_leaderview_planning_container_planstab_selectinplans_opens_action_bar.png){ .screenshot }

Sobald du in der Spieler-Tabelle mindestens einen Eintrag anhakst,
erscheint oben eine Action-Bar mit Bulk-Aktionen. Über
**„Abhol-Status zurücksetzen"** setzt du den Verteilungsstatus aller
ausgewählten Spieler auf 🔴 zurück — nützlich, wenn die Pläne erneut
verteilt werden sollen. Mit **„Link erneuern"** wird für die
ausgewählten Spieler ein neuer DSU-Link generiert; der alte Link wird
dabei sofort ungültig, sodass die betroffenen Spieler den neuen Link
aktiv abholen müssen. Die Bulk-Aktion **„Export Links"** ist im
Abschnitt [Planverteilung](#planverteilung) beschrieben. Über
**„Abbrechen"** verwirfst du die aktuelle Auswahl.

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

#### Funktionen

##### Einzelnen Befehl bearbeiten

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

##### Ankunftszeiten anpassen

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

##### UT-Boost anwenden

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

##### Bulk-Aktionen

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

### Sonstiges

#### Changelog

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

#### Container löschen

Über den Button **„Container löschen"** im Kopfbereich (rechts neben
**„Changelog"**) wird der gesamte Container inklusive aller importierten
Pläne, Befehle und DSU-Verteilungen entfernt. Die Aktion ist
**irreversibel** — gelöschte Container können nicht wiederhergestellt
werden. Vor dem Löschen erscheint ein Bestätigungsdialog, um
versehentliche Löschungen zu vermeiden.
