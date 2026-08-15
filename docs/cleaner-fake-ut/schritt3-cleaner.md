# Schritt 3: Cleaner

In Schritt 3 legst du fest, **wie die Zwischencleaner aussehen sollen** und
wie viele davon geplant werden.

![Einstellungen der Zwischencleaner](../assets/cleaner-fake-ut-tool/step3_01_settings.png){ .screenshot }

## 1. Zwischencleaner Mindeststärke

Unter **„Zwischencleaner Mindeststärke"** trägst du die geforderte Stärke des
Cleaners ein — als Anzahl **Axtkämpfer** (Standard `600`) und Anzahl
**Leichter Kavallerie** (Standard `300`).

!!! info "So wird die Mindeststärke ausgewertet"
    Aus deinen Eingaben berechnet das Tool die **Angriffsstärke** des
    Cleaners. Anschließend wird jede Kombination aus **Axtkämpfern und
    Leichter Kavallerie** zugelassen, die diese Angriffsstärke erreicht — nur
    diese beiden Einheiten zählen für die Stärke. Es können also auch reine
    Lkav-Cleaner verplant werden, sofern genügend leichte Kavallerie im Dorf
    steht.

Rechts daneben wählst du über **„Icon:"** das Workbench-Icon, das die
Cleaner-Befehle bekommen. Standard ist **„Punkt (Blau)"**.

## 2. Anzahl der Cleaner

- **„Cleaner pro Ziel"** — wie viele Zwischencleaner **je importiertem
  Befehl** geplant werden. Standard `1`, mindestens `1`.
- **„Cleaner pro Herkunftsdorf"** — wie viele Cleaner höchstens aus demselben
  Herkunftsdorf starten dürfen. Standard `1`, mindestens `1`.

!!! info "Der Wert gilt pro Befehl, nicht pro Zieldorf"
    Hast du in Schritt 2 einen Vierer-Train auf **ein** Dorf importiert und
    stellst hier `1` ein, entstehen dort **vier** Cleaner — einer je
    AG-Befehl, jeweils aus einem anderen Herkunftsdorf.

Der zweite Wert ist die Bremse gegen einzelne überlastete Dörfer: Ohne ihn
würde das Tool bevorzugt immer wieder aus den am besten gelegenen Dörfern
planen.

## 3. Max. Zeitdifferenz

Der Schalter **„Max. Zeitdifferenz"** ist standardmäßig aus. Schaltest du ihn
ein, wird das Feld daneben nutzbar (Standard `10` Minuten).

Er legt fest, wie viele Minuten ein Cleaner höchstens **vor** dem AG-Befehl
losgeschickt werden darf. Ohne diese Grenze nimmt das Tool auch weiter
entfernte Herkunftsdörfer, deren Cleaner entsprechend früher starten müssten.

!!! info "Wofür die Grenze gut ist"
    Je länger der Vorlauf, desto größer das Risiko: Der Cleaner ist schon
    unterwegs, während sich am Train noch etwas ändern kann. Eine enge Grenze
    hält die Abschickzeiten dicht beieinander — kostet aber Herkunftsdörfer,
    weil weiter entfernte Dörfer damit ausscheiden. Findet das Tool zu wenige
    Cleaner, ist dieser Wert eine der ersten Stellschrauben.

---

Weiter geht es mit [Schritt 4: Fake-UT](schritt4-fake-ut.md).
