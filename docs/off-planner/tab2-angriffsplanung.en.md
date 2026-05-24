# Tab 2: Nuke-Planning

In Tab 2 you plan all **real attack targets** — targets that should be hit
with actual nukes. There are three categories: **Snob-Spam**,
**Catapult-Spam** and **Breaking Bunkers**. Accompanying fakes for these
real targets are also defined here. Planning of **pure fake targets**
(targets that only receive fakes) is done separately in
[Tab 3: Fake-Planning](tab3-fakeplanung.md).

## 1. Arrival time corridor

![Arrival time corridor](../assets/nuke-planning-tool/tab2_01_arrival_times.png){ .screenshot }

In the **"Arrival time corridor"** section you define the timeframe in
which the attacks should arrive. Enter **Date**, **Start** and **End**
and then click **"Set Corridor"** to activate the corridor.

!!! info "Corridor applies only to the 1st nuke"
    The corridor defines the timeframe in which the **1st planned nuke**
    must arrive. Subsequent nukes and fakes can easily arrive outside the
    defined corridor — depending on the settings for the fake time
    period and the minimum/maximum distance.

## 2. Global Settings

![Global Settings](../assets/nuke-planning-tool/tab2_02_global_settings.png){ .screenshot }

In the **"Global Settings"** section you configure settings that apply
across all three categories.

### 2.1 Planning sequence

In the **"Planning sequence"** area you sort the three categories
(**Snob-Spam**, **Catapult-Spam**, **Breaking Bunkers**) into the desired
order using the arrow buttons. The sequence determines the order in
which the categories are planned.

!!! info "Sequence matters when resources are tight"
    When nuke resources are tight, the categories at the **top** of the
    planning sequence are served in full. The category at the **bottom**
    will most likely not receive all the nukes it requires. Place your
    most important category at the top.

### 2.2 Global limits

In the **"Global limits"** area you define overarching limits:

- **Maximum number of fakes per origin village** — how many fakes in
  total may launch from a single village.
- **Standard C-split** — the standard unit count of a single
  catapult-split.

### 2.3 Catapult-Cleaner (C-Cleaners)

In the **"Catapult-Cleaner (C-Cleaners)"** area you define the default
troop composition for interim cleaners: **axes**, **light cavalry** and
**rams**.

!!! info "Dynamic troop composition"
    When the **"Allow dynamic troop composition"** option is enabled,
    interim cleaners are also planned that do **not exactly** match the
    entered troop composition (e.g. when the village lacks axes). The
    tool then automatically fills up with axes or light cavalry until
    the resulting attack strength is reached. This makes it possible to
    use villages as cleaners that do not perfectly match the target
    composition.

To the right, in the **"Prioritized source categories"** area, you
define from which village categories (e.g. *Villages >500 axe*, *>1000
axe*, *>2000 axe*, …, *Remaining villages*) the C-Cleaners should
preferably be launched. Move the desired categories into the right list
using the arrow buttons and sort them by priority.

## 3. The three standard categories

The tool knows three categories of real targets:

- **Snob-Spam**
- **Catapult-Spam**
- **Breaking Bunkers**

Each category gets its own column where you configure targets and
command structure independently.

## 4. Target selection & Command planning – Overview

![Target selection & Command planning overview](../assets/nuke-planning-tool/tab2_03_overview_target_selection.png){ .screenshot }

In the **"Target selection & Command planning"** section the three
categories are shown side by side as columns (Snob-Spam, Catapult-Spam,
Breaking Bunkers). The same controls are available in each column:

- **"+ Add targets"** — opens the modal for adding new targets.
- **Pencil icon** — opens the modal for editing the existing target
  list.
- **Trash icon** — deletes all targets of this category at once.
- **"X Targets"** counter — shows the current number of targets in the
  category.

Below that, the category-specific command and detail settings follow,
which are described in the next sections.

## 5. Adding targets

![Add targets modal – Snob-Spam](../assets/nuke-planning-tool/tab2_04_add_targets_modal_1.png){ .screenshot }

Clicking the **"+ Add targets"** button opens the **"Add targets:
<category>"** modal. Paste the **coordinates** of the target villages in
the format `XXX|YYY` into the text field — any surrounding text or
script output is fine, the tool extracts the coordinates automatically.
Confirm with **"Add"**.

![Add targets modal – Breaking Bunkers](../assets/nuke-planning-tool/tab2_05_add_targets_modal_2.png){ .screenshot }

For the **Breaking Bunkers** category there is an additional **"Number
of nukes per target"** field. The value entered here is applied to
**all** coordinates entered in the text field. This way you can
conveniently set up a whole list of bunkers with a uniform number of
nukes per target in one go.

!!! info "No duplicates"
    The tool ensures that **no real attack targets are duplicated**
    within a single category. Coordinates that already exist are
    automatically filtered out when adding new ones.

## 6. Editing targets

![Edit list modal – Snob-Spam](../assets/nuke-planning-tool/tab2_06_edit_targets_modal_1.png){ .screenshot }

The **pencil icon** opens the **"Edit List: <category>"** modal. It
contains a search bar and a table with the columns **#**, **Coord.**,
**Player** and **Action**. Use the trash icon in the **Action** column
to remove individual targets; **"Delete All"** empties the entire
category.

![Edit list modal – Breaking Bunkers](../assets/nuke-planning-tool/tab2_07_edit_targets_modal_2.png){ .screenshot }

For the **Breaking Bunkers** category there is an additional **Nukes**
column showing the configured number of nukes for each target.

## 7. Command planning per category

![Command planning per category](../assets/nuke-planning-tool/tab2_08_command_planning.png){ .screenshot }

In the **"Command Planning"** area you define per category **how many
commands per target** should be planned.

!!! info "Snob-Spam and Catapult-Spam identical — Breaking Bunkers reduced"
    Command planning is structured identically for the **Snob-Spam** and
    **Catapult-Spam** categories. The **Breaking Bunkers** category
    offers a **slightly reduced** set of options — the number of nukes
    per target is already defined when [adding the
    targets](#5-adding-targets) and is therefore omitted here.

The following fields are available per target:

- **Nukes** — number of real nuke attacks per target.
- **Fakes (off-villages only)** — accompanying fakes launched
  exclusively from offensive villages.
- **Fakes (def-villages only)** — accompanying fakes launched
  exclusively from defensive villages.
- **Fakes (all village-types)** — accompanying fakes launched from any
  village type.
- **Catapult-Cleaners** — number of interim cleaners per target (see
  Global Settings for the troop composition).

!!! info "Accompanying fakes ≠ Tab 3"
    The fakes defined here are **accompanying fakes for the real
    targets** of this category. Planning of **pure fake targets**
    (without a real attack background) is done separately in
    [Tab 3: Fake-Planning](tab3-fakeplanung.md).

## 8. Catapult-Splits (C-Splits)

![Catapult-Splits per building](../assets/nuke-planning-tool/tab2_09_c-split_planning.png){ .screenshot }

In the **"Catapult-Splits (C-Splits)"** area you define, per building,
how many levels should be torn down by catapult-splits. There is a
dedicated input field for each building: **Headquarters**, **Barracks**,
**Stable**, **Workshop**, **Academy**, **Smithy**, **Rally point**,
**Statue**, **Market**, **Timber camp**, **Clay pit**, **Iron mine**,
**Farm**, **Warehouse**, **Hiding place** and **Wall**.

A value of **`-1`** means that the building should be torn down
**completely** by catapult-splits.

## 9. Setting the fake time period

![Setting the fake time period](../assets/nuke-planning-tool/tab2_10_setting_fake_time_period.png){ .screenshot }

In the **"Setting the fake time period"** area you define the time
window and the distribution of accompanying fakes around the 1st nuke:

- **Ext. before 1st Nuke (min.)** — how many minutes **before** the 1st
  nuke the fake period may start.
- **Ext. after 1st Nuke (min.)** — how many minutes **after** the 1st
  nuke the fake period may end.
- **Share of 1st/2nd/3rd third (%)** — percentage distribution of fakes
  across the three thirds of the time window. The three values should
  add up to 100 %.
- **Fill up with fakes until** — minimum number of fakes that should be
  filled up per target if resources allow.

## 10. Distances between nukes and C-Splits

![Distances between nukes and C-Splits](../assets/nuke-planning-tool/tab2_11_distance_between_for_nukes_or_c-splits.png){ .screenshot }

In the **"Distance between Nukes (minutes)"** area you define the
minimum and maximum distance between consecutive nukes pairwise — one
min/max pair for **Nuke 1 → 2**, **Nuke 2 → 3** and so on.

In the **"Distance of C-Splits to last Nuke"** area you define how far
the catapult-splits should arrive in time after the last nuke
(**Min-Distance** / **Max-Distance** in minutes).

## 11. Prioritizing Nuke-Categories

![Prioritizing Nuke-Categories](../assets/nuke-planning-tool/tab2_12_prioritizing_nuke_categories.png){ .screenshot }

In the **"Prioritizing Nuke-Categories"** area you define which source
categories should preferably be used for planning nukes. Available
categories include *Remaining villages*, *Villages >500 axe*, *>1000
axe*, *>2000 axe*, …, *>6000 axe*. Move the desired categories into the
right list **"Prioritized"** via the arrow buttons and sort them by
priority.

The checkbox **"Strict prioritization (enforcing order)"** controls how
strictly the priority is applied:

- **Off** — Priority is treated as a preference; the tool may use other
  categories if it improves the planning.
- **On** — Priority is strictly enforced: a lower-priority category is
  only used **once the higher-priority category has been fully
  exhausted**.

## 12. Summary & Map

![Summary & Map](../assets/nuke-planning-tool/tab2_13_summary_map.png){ .screenshot }

In the **"Summary & Map"** area you see an overview of all planned
attacks after the planning is done.

The **"Planned attacks per player"** table shows, per player, the number
of **Targets**, **Nukes**, **Catapult**, **C-Cleaner**, **Fakes** and
**All** — plus a **TOTAL** summary row. Use the search in the table
header to filter for individual players.

In the **Overview** area you can additionally **mark a player** (green)
or an entire **tribe** (red) to highlight them on the map.

On the map, various **layers** can be toggled (click on the button
bar): **Backline**, **Player**, **Off**, **Frontline**, **Snob-Spam**,
**Catapult-Spam** and **Bunker**. This lets you visually verify the
distribution of the planned attacks before moving on to
[Tab 3](tab3-fakeplanung.md) or [Tab 4](tab4-berechnung.md).
