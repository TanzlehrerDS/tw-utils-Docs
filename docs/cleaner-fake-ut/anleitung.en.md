# Instructions

The tool calculates **cleaners** and **fake-support commands** whose launch
times are placed as close as possible to another command — typically a
nobleman or train. This lets you add cleaners and fake supports with
perfect timing alongside an existing snob plan.

## 1. Import troops

![Troop import](../assets/cleaner-fake-ut-tool/01_troop_import.png){ .screenshot }

In the **"Troop data"** section you upload the troops from which the
cleaners and fake supports should be calculated. There are two ways to do
this.

### Option A: Copy & Paste

Copy the troops from the in-game troop overview (Ctrl+A, Ctrl+C) and paste
them into the text field on the left. Use the two radio buttons to define
which information from the troop overview the tool should use:

- **Total troops** — all troops in total (your own + those en route).
- **Troops in village** — only the troops currently present in the village.

### Option B: TXT upload

Alternatively, you can upload a TXT file in a fixed format (coordinates,
player, spear, sword, … per line). The easiest way to create this file is
via the
[quick-bar script "Download Tribe Info"](https://forum.tribalwars.net/index.php?threads/download-tribe-info.285469/).

!!! info "View entries"
    Use the **"View entries"** button to inspect the imported troops at
    any time.

## 2. Import snob plan

![Snob-plan import](../assets/cleaner-fake-ut-tool/02_import_snob_plan.png){ .screenshot }

In the **"Import snob plan"** section you select a snob plan that was
already created in tw-utils. The commands from that plan are imported
automatically — based on them, the tool then calculates the matching
cleaners and fake supports.

Click **"Add another plan"** to import several plans one after the other.

!!! info "View entries"
    Use the **"View entries"** button to inspect the imported snob commands
    at any time.

### Alternative input methods

![Alternative input methods for the snob-plan import](../assets/cleaner-fake-ut-tool/03_import_snob_plan_alternatives.png){ .screenshot }

If you want to use an external plan, you can expand the collapsible
**"Alternative input methods"** section. It offers two alternative import
paths:

- **Alternative A: Copy & Paste** — paste the Workbench commands directly
  into the text field (e.g. copied from the Workbench export window).
- **Alternative B: Upload via TXT file** — upload a TXT file containing
  Workbench commands; the content is read into the tool automatically.

## 3. Settings

### Cleaners

![Cleaner settings](../assets/cleaner-fake-ut-tool/04_settings_cleaner.png){ .screenshot }

In the **"Cleaner minimum strength"** field you set the required strength
of the cleaner — as a count of **axemen** and **light cavalry**.

!!! info "How the minimum strength is evaluated"
    From your input, the tool calculates the cleaner's **attack strength**.
    Any combination of offensive units is then allowed as a cleaner, as
    long as it reaches that attack strength. Pure light-cavalry cleaners
    can therefore also be planned, provided the village has enough light
    cavalry to cover the required attack strength.

You can also configure:

- **Cleaners per target** — how many cleaners are planned per target.
- **Cleaners per source village** — how many cleaners can be sent from the
  same source village at most.
- **Icon** — which icon the cleaner commands should receive.

### Fake support

![Fake-support settings](../assets/cleaner-fake-ut-tool/05_settings_fake-sup.png){ .screenshot }

Use the **"Plan fake support?"** toggle to activate the fake-support
calculation. Afterwards, two checkboxes are available:

- **"Plan fake support only from defense villages"** — restricts the
  source-village selection to purely defensive villages.
- **"Don't plan light cavalry or scouts as fake support"** — excludes fast
  units from being used as fake support.

!!! info "World settings are taken into account"
    When planning fake support, the tool takes the world settings around
    tribe-internal support into account.

You can also set the **fake-support count** and select the **icon** that is
assigned to the fake-support commands.

## 4. Start the calculation

Clicking the **"Start calculation"** button runs the calculation of the
cleaners and fake supports.
