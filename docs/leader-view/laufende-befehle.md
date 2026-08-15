# Laufende Befehle

![Laufende Befehle — Übersicht](../assets/leaderview/50_leaderview_running_overview.png){ .screenshot }

Der Tab **„Laufende Befehle"** zeigt, was gerade **tatsächlich im
Spiel unterwegs ist** — nicht das, was geplant wurde. Angriffe,
Unterstützungen und Rückkehrer aller Spieler, die ihre
Befehlsübersicht hochgeladen haben, laufen hier zusammen.

Damit siehst du als Stammesführung auf einen Blick, welche Offs schon
fliegen, wo Unterstützung unterwegs ist und welche Truppen gerade
gebunden sind.

!!! warning "Die Daten kommen ausschließlich über die tw-utils-API"
    tw-utils liest im Spiel **nichts** aus. Laufende Befehle landen
    nur dann hier, wenn ein Spieler sie über die **tw-utils-API**
    hochlädt — üblicherweise mit einem **Userscript**, das die
    Befehlsübersicht im Spiel ausliest.

    tw-utils stellt dafür **nur die Infrastruktur** bereit: die
    Schnittstelle und den persönlichen API-Key. Ein fertiges
    Userscript gehört ausdrücklich **nicht** zum Funktionsumfang —
    das muss euer Stamm selbst mitbringen. Wie die Schnittstelle
    funktioniert, steht in der
    [API-Dokumentation](https://tw-utils.net/api/v1/docs){ target=_blank rel=noopener }.

!!! info "Nur für TWU-Planner und TWU-Leader"
    Der Tab **„Laufende Befehle"** ist ausschließlich für User mit der
    Rolle **TWU-Planner** oder **TWU-Leader** sichtbar. Details unter
    [Berechtigung](uebersicht.md#welche-rolle-sieht-welchen-tab).

Der Tab hat zwei Unterreiter: **Übersicht** (eine Zeile je Spieler)
und **Befehle** (jeder einzelne Befehl).

## Wofür die Daten genutzt werden

Die hochgeladenen Befehle sind nicht nur zum Anschauen da — sie fließen
an mehreren Stellen in die Planung ein:

- **Leader-View** — dieser Tab mit den Unterreitern **Übersicht** und
  **Befehle**.
- **Off-Planungstool** — im Schritt 1 zieht der Schalter
  **„Laufende Befehle (API) einbeziehen"** die Truppen ab, die
  aktuell schon unterwegs sind. Das ist genauer als das Rechnen aus
  gespeicherten Plänen, weil es auch Befehle erfasst, die gar nicht
  aus einer Planung stammen. Siehe
  [Schritt 1: Truppen](../off-planner/schritt1-truppen.md).
- **Zwischencleaner & Fake-UT** — derselbe Schalter im Schritt 1,
  siehe [Schritt 1: Truppen](../cleaner-fake-ut/schritt1-truppen.md).

In beiden Planungstools erscheint der Schalter nur, wenn du auf einem
Discord-Server dieser Welt das Recht hast, laufende Befehle zu lesen.

## Wie die Daten hierher kommen

Jeder Spieler lädt seine eigenen Befehle hoch — in zwei Schritten:

1. Auf **„Meine Accounts"** erzeugt der Spieler in der Account-Karte
   seinen persönlichen **API-Key**.
2. Ein Userscript liest im Spiel die Befehlsübersicht aus und schickt
   sie mit diesem Schlüssel an tw-utils.

![API-Key in der Account-Karte](../assets/leaderview/58_leaderview_running_api_key.png){ .screenshot }

Über die beiden Icons rechts lässt sich der Schlüssel jederzeit neu
erzeugen oder löschen. Er ist wie ein Passwort zu behandeln und gilt
immer nur für einen Discord-Server.

Wie sich ein Upload verhält, welche Grenzen gelten und wer für welche
Accounts hochladen darf, steht in der
[API-Dokumentation](https://tw-utils.net/api/v1/docs){ target=_blank rel=noopener }.

!!! info "Kein Aktualisieren-Knopf"
    Die Seite hat bewusst keinen Refresh-Button: Die Daten ändern sich
    ausschließlich, wenn ein Spieler neu hochlädt. Ein Neuladen der
    Seite genügt, um den aktuellen Stand zu sehen.

## Unterreiter „Übersicht"

Die Übersicht zeigt eine Zeile je Spieler, der jemals hochgeladen hat:
wer es war, wer den Upload ausgelöst hat, wann das zuletzt passiert
ist, und wie viele Befehle dabei zusammenkamen — als Gesamtzahl und
aufgeschlüsselt nach Angriffen, Unterstützungen sowie rückkehrenden
Angriffen und Unterstützungen.

Alle Spalten außer **#** lassen sich per Klick auf die Überschrift
sortieren. Ohne eigene Sortierung steht der **neueste Upload oben**.

!!! warning "Das rote „veraltet"-Abzeichen"
    Liegt der letzte Upload eines Spielers mehr als **eine Stunde**
    zurück, erscheint hinter dem Zeitstempel ein rotes **„veraltet"**.
    Die Zahlen dieser Zeile bilden dann womöglich nicht mehr die
    Realität ab — in der Zwischenzeit können Befehle angekommen oder
    neue gestartet sein. Für eine Planung solltest du den Spieler
    bitten, neu hochzuladen.

## Unterreiter „Befehle"

![Laufende Befehle — Befehlsliste](../assets/leaderview/51_leaderview_running_commands.png){ .screenshot }

Hier steht jeder einzelne hochgeladene Befehl des Stammes.

| Spalte | Bedeutung |
|---|---|
| **#** | Laufende Nummer, läuft über die Seiten hinweg weiter |
| **Typ** | Symbol des Befehls (Art und Größe), plus ggf. ein Zustands-Symbol |
| **Spieler** | Besitzer des Befehls — immer der Spieler, der hochgeladen hat |
| **Herkunft** | Herkunftsdorf, verlinkt ins Spiel |
| **Ziel** | Zieldorf mit Besitzer in Klammern |
| **Ankunft** | Ankunftszeit in Weltzeit |
| *Einheiten* | Je eine Spalte pro Einheit der Welt; leere Zellen bedeuten 0 |

Die Tabelle ist standardmäßig nach **Ankunft aufsteigend** sortiert —
der nächste Einschlag steht also oben. Die Spalten **Typ**,
**Spieler**, **Herkunft**, **Ziel** und **Ankunft** lassen sich per
Klick umsortieren.

### Filter, Suche und Seiten

Über der Tabelle sitzt eine Leiste mit Symbol-Filtern. Von links nach
rechts:

| Symbol | Filtert auf |
|---|---|
| Kleine Angriffsfahne | **Kleiner Angriff** — bis 1.000 Truppen |
| Mittlere Angriffsfahne | **Mittlerer Angriff** — bis 5.000 Truppen |
| Große Angriffsfahne | **Großer Angriff** — über 5.000 Truppen |
| Kleine Rückkehr-Fahne | **Kleiner Angriff (zurückkehrend)** |
| Mittlere Rückkehr-Fahne | **Mittlerer Angriff (zurückkehrend)** |
| Große Rückkehr-Fahne | **Großer Angriff (zurückkehrend)** |
| Schild | **Unterstützung** |
| Schild mit Pfeil | **Unterstützung (zurückkehrend)** |
| ↺ | **Unsicherer Kampfausgang** |
| ● | **Unterstützung bereits eingetroffen** |

Die Filter lassen sich **kombinieren** — es wird alles angezeigt, was
auf mindestens einen der aktiven Filter passt. Ist kein Filter aktiv,
siehst du alles.

Die beiden letzten Filter beschreiben keinen Befehlstyp, sondern einen
Zustand:

- **Unsicherer Kampfausgang** — ein Angriff, dessen Ankunftszeit
  bereits vorbei ist. Ob er durchkam, weiß tw-utils nicht; die Truppen
  sind vermutlich auf dem Rückweg. Beim Typ-Symbol steht in diesem
  Fall zusätzlich die geschätzte Heimkehr.
- **Unterstützung bereits eingetroffen** — eine Unterstützung, deren
  Ankunftszeit vorbei ist. Die Truppen stehen also vermutlich im
  Zieldorf.

Rechts daneben liegen die Blätter-Pfeile (**25 Befehle pro Seite**),
die Anzahl der aktuell gefilterten Befehle und ein Suchfeld. Die Suche
greift auf **Spielernamen und Koordinaten** von Herkunft und Ziel
zugleich.

## Alte Befehle und Aufräumen

Befehle verschwinden von selbst — allerdings nicht nach der Uhr,
sondern **beim nächsten Upload**: Lädt irgendein Spieler dieses
Discord-Servers neu hoch, räumt tw-utils bei der Gelegenheit alles weg,
dessen Truppenbewegung mehr als eine Stunde vorbei ist. Bei
**Angriffen** zählt dafür nicht die Ankunft, sondern erst der
**Rückflug** — die Truppen sind ja bis zur Heimkehr gebunden. Bei allen
anderen Befehlsarten zählt die Ankunft.

Lädt niemand mehr hoch, bleiben alte Zeilen also stehen. Im
Normalbetrieb ist manuelles Aufräumen trotzdem nicht nötig.

!!! warning "„Alle hochgeladenen Befehle löschen" trifft den ganzen Server"
    Der Button oben rechts löscht die laufenden Befehle **aller**
    Spieler des Discord-Servers, nicht nur die eines einzelnen. Die
    Aktion lässt sich nicht rückgängig machen — die Daten kommen erst
    zurück, wenn jeder Spieler erneut hochlädt. Jeder, der den Tab
    sehen darf, kann diesen Button auch drücken.
