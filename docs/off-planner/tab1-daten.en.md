# Tab 1: Data & Preparations

In Tab 1 you define the fundamental premises for the planning.

## 1. Import troops

![Troop import](../assets/nuke-planning-tool/tab1_01_troop_import.png){ .screenshot }

In the **"Troop data"** section you upload the troops from which the tool
should plan the nukes. There are two ways to do this.

### Option A: Copy & Paste

Copy the troops from the in-game troop overview (Ctrl+A, Ctrl+C) and paste
them into the text field on the left. Use the two radio buttons to define
which information from the troop overview the tool should use:

- **Total troops** — all troops in total (your own + those en route).
- **Troops in village** — only the troops currently present in the village.

### Option B: TXT upload

Alternatively, you can upload a TXT file in a fixed format. The easiest
way to create this file is via the
[quick-bar script "Download Tribe Info"](https://forum.tribalwars.net/index.php?threads/download-tribe-info.285469/).

Expected file format:

```
Coords,Player,spear,sword,axe,archer,spy,light,marcher,heavy,ram,catapult,knight,snob
483|520,Testuser A,2421,6099,100,5963,50,50,3632,200,5,279,0,8
543|538,Testuser A,100,100,6027,100,6,3014,100,100,159,5,0,0
467|559,Testuser A,3779,4836,100,4803,40,50,6309,1584,5,80,0,0
465|523,Testuser B,4298,5495,100,6752,23,50,5761,1131,5,35,0,0
468|515,Testuser B,721,4160,100,2280,61,50,5935,832,5,308,0,4
```

!!! info "View entries"
    Use the **"View entries"** button to inspect the imported troops at
    any time.

## 2. Exclude origin villages

![Exclude origin villages](../assets/nuke-planning-tool/tab1_02_exclude_origin_villages.png){ .screenshot }

In the **"Exclude origin villages"** section you can exclude individual
villages from the planning. Paste the coordinates into the text field and
click **"Add"**. Surrounding text is not a problem — the tool detects the
coordinates automatically.

Use the **"View entries"** button to inspect and manage the excluded
villages at any time.

!!! info "No commands from excluded villages"
    For manually excluded origin villages, **no** commands are planned —
    these villages are completely excluded from the planning.

## 3. Set launch times

![Launch times](../assets/nuke-planning-tool/tab1_03_launch_times.png){ .screenshot }

In the **"Launch times"** section you define the time windows in which
commands should be launched. There are two types of launch times.

### Type 1: Standard launch time windows

In the **"Standard launch time windows"** area you enter date, start time
and end time and add the window via **"Add"**. You can create several
windows in a row. These standard windows apply to all players for whom no
individual times are defined.

### Type 2: Player-individual launch time windows

In the **"Player-individual launch times (via Upload)"** area you can
upload individual launch times per player. The players provide you with
their personal times, which you then load into the tool as a structured
file (.csv or .txt).

Expected file format:

```
Testuser A,10.05.2026,10:00:00,10.05.2026,10:07:00
Testuser A,10.05.2026,12:00:00,10.05.2026,12:15:00
Testuser B,10.05.2026,11:30:00,10.05.2026,12:00:00
Testuser B,10.05.2026,17:15:00,10.05.2026,18:15:00
Testuser C,10.05.2026,10:00:00,10.05.2026,10:05:00
Testuser C,10.05.2026,12:00:00,10.05.2026,12:15:00
Testuser C,10.05.2026,17:00:00,10.05.2026,19:00:00
Testuser C,10.05.2026,21:00:00,10.05.2026,21:15:00
```

!!! info "Collect player-individual times via the tw-utils Discord bot"
    Collecting the player-individual launch times can also be done
    conveniently via the tw-utils Discord bot. The submitted times can
    then be exported and uploaded directly into the tool.

!!! info "Standard vs. individual launch windows"
    Standard launch windows and individual launch windows are mutually
    exclusive. If individual times are defined for a player, only those
    times are used — the standard windows then do not apply to that
    player.

!!! info "View entries"
    Use the **"View entries"** button to display, for each scheduled
    player, which launch times apply (standard or individual). The button
    only becomes available once troops have been imported.

## 4. Define the frontline

![Frontline definition](../assets/nuke-planning-tool/tab1_04_frontline_definition.png){ .screenshot }

In the **"Frontline definition"** section you define which villages are
considered frontline villages and are therefore excluded when nukes are
planned. To do so, enter the coordinates that define your frontline into
the **"Coordinates"** field and specify the desired minimum distance to
the frontline under **"Distance (fields)"**. Then click **"Add to the
frontline"**.

The configured distance creates a so-called **frontline area** around the
frontline coordinates. No nukes are planned from this frontline area —
this keeps frontline players mobile so they can react to attacks at short
notice.

Use the **"View entries"** button to inspect and edit the recorded
frontline coordinates at any time.

### Map visualization

![Map visualization of the frontline area](../assets/nuke-planning-tool/tab1_05_frontline_definition_map.png){ .screenshot }

Click **"Map"** to open a map on which the resulting frontline area is
highlighted in yellow. All villages within the yellow area are not planned
as nukes. The map helps you check your inputs visually.

## 5. Troop availability

![Troop availability](../assets/nuke-planning-tool/tab1_06_troop_availability.png){ .screenshot }

In the **"Troop Availability"** section you see at a glance how many
nukes the tool can actually plan. The table shows:

- **All** — all imported nukes in total.
- **Manual** — nukes excluded by manually excluding origin villages.
- **Frontline** — nukes excluded due to the frontline definition.
- **Available** — the nukes that remain available for planning after all
  exclusions.

This way you always have a clear overview of the resources available for
the nuke planning.
