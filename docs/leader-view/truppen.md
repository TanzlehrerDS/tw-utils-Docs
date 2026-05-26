# Truppen

![Truppen-Übersicht](../assets/leaderview/04_leaderview_troops.png){ .screenshot }

Der Tab **„Truppen"** verwaltet die Truppendaten-Uploads pro Stamm. Die
hier hochgeladenen Daten sind die Grundlage für viele andere Funktionen
— sowohl im Leader-View (z. B. Bunker-Info) als auch in den Modulen des
tw-utils-Discordbots.

!!! info "Weiterverwendung durch den Discordbot"
    Die hochgeladenen **„Truppen im Dorf"** werden automatisch mit dem
    tw-utils-Discordbot synchronisiert und dort in den Modulen
    **Bunker-Information-System** und **Off/Deff/Snob-Search-Systems**
    weiterverwendet.

## Spalten der Tabelle

| Spalte | Bedeutung |
|---|---|
| **#** | Laufende Nummer |
| **Stamm** | Stamm, zu dem die Daten gehören |
| **Scope** | „Truppen im Dorf" oder „Truppen Insgesamt" |
| **Dörfer** | Anzahl der Dörfer im Datensatz |
| **Hochgeladen am** | Zeitstempel des letzten Uploads |
| **Hochgeladen von** | Discord-User, der den Upload ausgelöst hat |
| **Aktion** | Eintrag löschen (Mülltonnen-Icon) |

## Die beiden Scopes

Beim Hochladen wählst du, welche Sicht der Truppen die Datei enthält.
Beide Sichten lassen sich parallel pflegen.

- **Truppen im Dorf** — nur die Truppen, die aktuell tatsächlich im
  Dorf stehen (also keine unterwegs befindlichen Truppen).
- **Truppen Insgesamt** — alle vorhandenen Truppen eines Dorfes (im
  Dorf + unterwegs). Reine Bestands-/Auswertungs-Sicht.

## Truppen hochladen

Über den Button **„Truppen hochladen"** (oben rechts) öffnet sich der
Upload-Dialog:

![Truppen hochladen — Dialog](../assets/leaderview/38_leaderview_troops_upload.png){ .screenshot }

Felder im Dialog:

- **Stammeskürzel** — Tag des Stammes, zu dem die Daten gehören
  (z. B. `ABC`).
- **Scope** — wähle entweder **„Truppen im Dorf"** oder
  **„Truppen Insgesamt"** (siehe [Die beiden Scopes](#die-beiden-scopes)).
- **Truppen-Datei (.txt)** — die mit dem
  [Schnellleistenscript](https://forum.tribalwars.net/index.php?threads/download-tribe-info.285469/)
  erzeugte TXT-Datei.

### Erwartetes Datei-Format

Die TXT-Datei muss als erste Zeile eine Header-Zeile mit den
Spaltennamen enthalten, gefolgt von einer Zeile pro Dorf:

```
Coords,Player,spear,sword,axe,archer,spy,light,marcher,heavy,ram,catapult,knight,snob
483|520,Testuser A,2421,6099,100,5963,50,50,3632,200,5,279,0,8
543|538,Testuser A,100,100,6027,100,6,3014,100,100,159,5,0,0
467|559,Testuser A,3779,4836,100,4803,40,50,6309,1584,5,80,0,0
465|523,Testuser B,4298,5495,100,6752,23,50,5761,1131,5,35,0,0
468|515,Testuser B,721,4160,100,2280,61,50,5935,832,5,308,0,4
```
