# Übersicht

Der **Leader-View** ist der Stammesführer-Bereich auf tw-utils.net. Er
bündelt alle Werkzeuge, die du als Leader für die Steuerung deines
Stammes brauchst — von der Mitgliederverwaltung über die Truppendaten
bis hin zur Bunker-Verwaltung und der Angriffsplanung.

Der Leader-View ist in vier Tabs gegliedert:

- **Mitglieder**
- **Truppen**
- **Bunker-Info**
- **Planung**

![Leader-View Tab-Leiste](../assets/leaderview/02_leaderview_tabs.png){ .screenshot }

## Voraussetzungen für den Zugriff

Damit ein User den Leader-View sehen und nutzen kann, müssen **beide**
folgenden Bedingungen erfüllt sein:

1. **Der User muss auf dem Stammes-Discordserver mit mindestens einem
   Tribalwars-Account verknüpft sein.** Die Verknüpfung erfolgt über
   den tw-utils-Discordbot — siehe
   [Account-Verifizierung](../discord-bot/verifizierung.md).
2. **Der User muss die Rolle „Leader" besitzen.** Diese Rolle wird
   ausschließlich über den tw-utils-Discordbot vergeben (siehe
   nächster Abschnitt).

Sobald beide Voraussetzungen erfüllt sind, erscheint im Profil-Popup
der jeweiligen Welt der Eintrag **„Leader-View"** sowie das gelbe
**„Leader"**-Badge:

![Leader-View Button im Profil-Popup](../assets/leaderview/01_leaderview_button.png){ .screenshot }

## Leader-Rolle über den Discordbot vergeben

Die Vergabe der Leader-Rolle läuft komplett über den tw-utils-Discordbot
und kann nur von **Server-Admins** durchgeführt werden.

Ablauf:

1. Im Discord-Server in den Channel **`#⚫-bot-config`** wechseln.
2. Auf den Button `'Manage Access to Leader-View'` klicken.
3. Im daraufhin angezeigten (ephemeren) Embed auf `'Grant Access'`
   klicken.
4. Die Rolle auswählen — aktuell steht nur `Leader` zur Auswahl.
5. Den Discord-User auswählen, der Leader-Zugriff erhalten soll.

Über `'Terminate Access'` lässt sich der Zugriff einem User wieder
entziehen. Mit `'List authorized Users'` werden alle aktuell
berechtigten Leader des Servers aufgelistet.

!!! info "Bot-Setup als Voraussetzung"
    Damit der Channel `#⚫-bot-config` und seine Buttons überhaupt
    vorhanden sind, muss der tw-utils-Discordbot zunächst auf dem
    Server eingerichtet sein. Eine Schritt-für-Schritt-Anleitung dazu
    findest du unter [Quick-Setup-Guide](../discord-bot/quick-setup.md).

## Aufruf des Leader-Views

Nach Vergabe der Rolle taucht im Profil-Popup der entsprechenden Welt
der Button **„Leader-View"** auf. Ein Klick darauf öffnet den
Leader-View mit den vier Tabs.
