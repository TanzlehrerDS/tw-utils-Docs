# Berechtigungskonzept

tw-utils kennt **vier Rollen**, die sowohl im Discordbot als auch im
[Leader-View](../leader-view/uebersicht.md) auf tw-utils.net gelten.
Wer keine dieser Rollen hat, ist ein normales Mitglied.

!!! info "Die Rollen sind keine Discord-Rollen"
    Die tw-utils-Rollen werden vom Bot in seiner eigenen Datenbank
    geführt — auf dem Discord-Server muss dafür nichts angelegt
    werden. Discord-Rollen kommen im Bot nur an einer Stelle vor: um
    zu steuern, **wer welche Kanäle sehen darf** (siehe
    [Bot-Module – Einrichtung](modul-verwaltung.md)). Rechte vergeben
    sie nicht.

## 1. Normale Mitglieder

Jeder Discord-User auf eurem Stammes-Discord ist aus Sicht des
tw-utils-Discordbots standardmäßig ein normales Mitglied. Normale
Mitglieder können die interaktiven Funktionen der installierten Module
nutzen:

- Bunker-Anträge im Kanal `#⚫-request-bunker` stellen
- Account-Sitting-Anfragen im Kanal `#⚫-request-account-sitting` stellen
- Off-, Deff- oder AG-Befehle über das ODS-System suchen
- AG-Meldungen und Abschickzeiten im Planning-System eingeben bzw. an
  einer [Stammes-Umfrage](../leader-view/stammes-umfragen.md)
  teilnehmen
- ihre laufenden Befehle über die tw-utils-API hochladen
- usw.

Sie sehen dabei immer nur **ihre eigenen** Daten. Den Leader-View auf
tw-utils.net können sie nicht öffnen.

## 2. Die vier tw-utils-Rollen

| Rolle | Was sie erlaubt |
|---|---|
| **TWU-Troops** | Truppendaten hochladen sowie das Off/Deff/Snob-Search-System und das Account-Sitting-System verwalten. |
| **TWU-Bunker** | wie TWU-Troops + Verwaltung des Bunker-Information-Systems (Anträge genehmigen/ablehnen, fremde Bunker auflösen). |
| **TWU-Planner** | wie TWU-Troops + Verwaltung des Planning-Systems (Stammes-Umfragen, Container, laufende Befehle). |
| **TWU-Leader** | Vollzugriff auf alle Funktionen von tw-utils — inklusive Bot-Konfiguration, Modulverwaltung und Rechtevergabe. |

TWU-Bunker und TWU-Planner enthalten also jeweils alles, was
TWU-Troops darf; TWU-Leader enthält alles zusammen.

Welche Rolle im Leader-View welchen Tab sieht, steht unter
[Berechtigung](../leader-view/uebersicht.md#welche-rolle-sieht-welchen-tab).

### Zusatzrollen für die API

Darüber hinaus gibt es Zusatzrollen, die ausschließlich die
tw-utils-API betreffen, über die Userscripts Daten austauschen —
**Befehls-Leser**, **Truppen-Leser** und **Freier Upload**. Sie sind
unter [Mitglieder](../leader-view/mitglieder.md#zusatzrollen-api)
beschrieben.

## 3. Wer vergibt die Rollen?

Die Rollen werden im **Leader-View** vergeben: Tab **„Mitglieder"** →
Button **„Verwalten"**. Das darf nur ein **TWU-Leader**.

Damit es überhaupt einen ersten TWU-Leader gibt, existiert genau ein
Ausnahmeweg: Ein **Discord-Administrator** eures Servers ernennt ihn
im Kanal `#⚫-bot-config` über den Button
`Manage Access to Leader-View` → `Grant Access`. Über den Bot lässt
sich ausschließlich die Rolle `Leader` (= TWU-Leader) vergeben; alle
feineren Rollen kommen danach aus dem Leader-View.

Der komplette Ablauf steht im
[Quick-Setup-Guide](quick-setup.md#5-leader-status-zuweisen).

## 4. Discord-Administratoren

Wer auf eurem Server die Discord-Berechtigung **Administrator** hat,
kommt im Bot an **alle** Verwaltungs-Buttons heran — dauerhaft und
unabhängig davon, welche tw-utils-Rollen vergeben sind. Dasselbe gilt
für den Bot-Besitzer. Diese Notfall-Berechtigung ist es, die die
Ersteinrichtung überhaupt möglich macht: Welt setzen, Module
installieren, den ersten Leader ernennen.

!!! warning "Auf der Website zählt nur die tw-utils-Rolle"
    Diese Hintertür gilt ausschließlich für den Discordbot. Den
    Leader-View auf tw-utils.net bekommt ein Discord-Administrator
    **nicht** zu sehen, solange er nicht selbst eine tw-utils-Rolle hat.

Es ist deshalb sinnvoll, sich als einrichtender Admin gleich zu Beginn
selbst die Rolle TWU-Leader zu geben — dann deckt sich das, was der Bot
erlaubt, mit dem, was die Website erlaubt.

!!! info "Die Rolle TWU-Mod gibt es nicht mehr"
    Frühere Versionen kannten eine Discord-Rolle **TWU-Mod** als
    Verwaltungsrolle des Bots. Sie wurde durch das oben beschriebene
    Rollenmodell ersetzt und verleiht **keine** Rechte mehr. Eine noch
    vorhandene TWU-Mod-Rolle auf eurem Server kann gefahrlos gelöscht
    werden — vergebt stattdessen TWU-Leader, TWU-Planner, TWU-Bunker
    oder TWU-Troops.
