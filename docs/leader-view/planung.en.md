# Planning

The **"Planning"** tab is the largest area of the Leader-View. It is
split into two sub-tabs:

- **Container** — collect, coordinate and distribute attack plans to
  the players.
- **Queries** — collect preparatory data (Snob-Entries, launch times,
  excluded source villages).

## Queries

Under the **"Queries"** sub-tab you'll find three pill tabs:
**Snob-Entries**, **Launch times** and **Excluded Villages**. They
provide the three most important inputs for nuke planning.

!!! info "Data usually comes from the Discord bot"
    Snob-Entries, launch times and excluded source villages are
    usually submitted by the players directly via the
    [Planning-System of the Discord bot](../discord-bot/planning-system.md).
    The entries then appear automatically in these lists. Leaders can
    however always create, edit or delete entries manually.

### Snob-Entries

In this area you collect reports of how many snobs which player has
ready on which target villages. The list is the basis for the later
snob planning.

![Snob-Entries — overview](../assets/leaderview/15_leaderview_planning_snobqueries_overview.png){ .screenshot }

At the top you see a **metrics bar** summarizing all entries:

- **Total Snobs** — sum of all reported snobs across all players.
- **Trains** — number of targets with at least 4 snobs reported
  (full-snob train).
- **1-Snobs / 2-Snobs / 3-Snobs** — number of targets with exactly 1,
  2 or 3 snobs reported.

The table below lists every single entry:

| Column | Meaning |
|---|---|
| **#** | Running number |
| **TW-Account** | Player providing the snobs |
| **Tribe** | Tribe of the player |
| **Coordinate** | Target village of the entry |
| **Count** | How many snobs the player has ready on this target village |
| **Actions** | Edit entry (pencil) or delete (trash) |

Actions above the table: **"Add"**, **"Export"**, **"Delete all"**.

#### Manual add

![Add snob entry](../assets/leaderview/16_leaderview_planning_snobqueries_add.png){ .screenshot }

The **"Add snob entry"** dialog contains two fields:

- **Coordinates (text with coords)** — one or more target coordinates;
  surrounding text is ignored (e.g. `Attack on 500|500 and
  501|501…`).
- **Snob count (per village)** — how many snobs the player has ready
  per target village. The entered value applies to **all**
  coordinates detected in step 1.

### Launch times

Here you collect the individual launch windows of the players — i.e.
the time windows in which the individual players are actually at the
computer and can time attacks cleanly.

![Launch times — overview](../assets/leaderview/17_leaderview_planning_launchtimes_overview.png){ .screenshot }

Table columns:

| Column | Meaning |
|---|---|
| **#** | Running number |
| **TW-Account** | Player available during this time window |
| **Tribe** | Tribe of the player |
| **Date** | Day on which the player can launch |
| **Time range** | From and to time (Tribalwars server time) |
| **Actions** | Edit or delete entry |

Actions above the table: **"Add"**, **"Export"**, **"Delete all"**.

#### Manual add

![Add launch time](../assets/leaderview/18_leaderview_planning_launchtimes_add.png){ .screenshot }

The **"Add launch time"** dialog contains the following fields:

- **Player name (TW-Account)** — with autocomplete via the verified
  accounts.
- **Date** — day of the launch window.
- **From** / **To** — start and end of the time window (Tribalwars
  server time).

### Excluded Villages

Here you mark villages that should **not be used as a source
village** in nuke planning — for example because the player currently
wants to hold the village defensively or because the troops are
reserved for another operation.

![Excluded Villages — overview](../assets/leaderview/19_leaderview_planning_excludedvillages_overview.png){ .screenshot }

Table columns:

| Column | Meaning |
|---|---|
| **#** | Running number |
| **TW-Account** | Owner of the excluded village |
| **Tribe** | Tribe of the owner |
| **Coordinate** | The excluded village |
| **Actions** | Delete entry |

#### Manual add

![Exclude source village](../assets/leaderview/20_leaderview_planning_excludedvillages_add.png){ .screenshot }

In the **"Exclude source village"** dialog you enter one or more
coordinates in the **"Coordinates (text with coords)"** field
(surrounding text is ignored).

## Container

In the **"Container"** sub-tab you manage the actual attack plans. A
**container** bundles an operation — e.g. a nuke wave, a snob action
or an interim cleaner — with all plans and commands and controls the
distribution to the individual players.

![Container — overview](../assets/leaderview/21_leaderview_planning_container_overview.png){ .screenshot }

The overview table shows all existing containers of the tribe:

| Column | Meaning |
|---|---|
| **Name** | Freely chosen name of the operation (e.g. `Op. Phoenix`) |
| **Distribution status** | **"Active"** = container is published, players can fetch the plan. **"Inactive"** = container is offline / in preparation. |
| **World** | TW world the container applies to (badge) |
| **Last modified** | Who last edited the container, and when (or **"No changes yet"** if freshly created) |
| **Open** | Opens the container in the detail view |

### Create a container

![Create container](../assets/leaderview/22_leaderview_planning_container_containeradd.png){ .screenshot }

Via **"New Container"** the **"New Container"** dialog opens with the
field **"Name"** (max. 50 characters, e.g. `Op. Phoenix`). The
container is automatically assigned to the current world and starts
in the status **"Inactive"**.

### Empty container after opening

![Empty container](../assets/leaderview/23_leaderview_planning_container_overview_empty_container.png){ .screenshot }

Directly after opening you see three areas:

- **Header area** — on the left the container name + world badge as
  well as the link **"Back to overview"**, on the right the
  **publishing toggle** (see [Publishing](#publishing)), the
  **"Changelog"** button and **"Delete container"**.
- **Action bar** — here you import and synchronize the contents:
    - **"Select plan…"** — dropdown with all plans from the
      Nuke / Snob planning tool that can be imported into the
      container.
    - **"Add"** — adds the plan selected in the dropdown.
    - **"Empty plans"** — removes all commands from the container.
    - **"Hide outdated"** — hides commands whose launch time is
      already in the past.
    - **"DSU sync"** — transfers the current commands to
      DS-Ultimate (one DSU plan per player + one "total plan").
- **Tabs** — below them you switch between **"Plans"** (per-player
  view) and **"Commands"** (per-single-attack view).

### "Plans" tab

![\"Plans\" tab](../assets/leaderview/24_leaderview_planning_container_planstab.png){ .screenshot }

The **"Plans"** tab is the player-oriented view. For every player who
has commands in the container, there is one row with the following
columns:

| Column | Meaning |
|---|---|
| **#** | Running number |
| **Player** | Name of the player the commands belong to |
| **Commands** | Number of his commands in the container, plus status (e.g. **"Active"** = commands are published / playable) |
| **Discord** | Linked Discord account; **"not linked"** if the player has not yet verified |
| **DSU plan** | Links to the player's DSU plan: **"Edit"** opens it in DS-Ultimate, **"View"** for read-only. Only appears after DSU sync. |
| **Distribution status** | Shows whether the player has already received the plan: 🔴 = not yet distributed, 🟢 = distributed (with timestamp). The **blue letter icon** opens the dialog for sending the in-game message. |

#### Message template

![Edit message template](../assets/leaderview/25_leaderview_planning_container_planstab_messagetemplate.png){ .screenshot }

Via the **"Message template"** button you open the editor
**"Edit message template"**. The template is the **text template**
used when sending an in-game message for each player. The
placeholders are replaced per player automatically:

| Placeholder | Is replaced with |
|---|---|
| `{player_name}` | Name of the player the message goes to |
| `{dsu_link}` | Individual link to the DS-Ultimate plan of this player |
| `{wb_commands}` | All WB commands of the player in a spoiler block (for the in-game bot "werewolf"). |

#### After DSU sync

![After DSU sync](../assets/leaderview/26_leaderview_planning_container_planstab_after_dsusynchronization.png){ .screenshot }

After clicking **"DSU sync"**, the tool creates a DSU plan on
DS-Ultimate for each player; in the **"DSU plan"** column the links
**"Edit · View"** appear.

In addition, at the very top the highlighted row **"Total Plan"**
appears with the yellow **"Total Plan"** badge — it contains all
commands of all players in a single DSU plan and is suitable, for
example, for a central co-leader overview.

At the top right the hint **"Pending changes: +X / -Y / ±Z"** shows
how many commands have been **added (+)**, **removed (−)** or
**changed (±)** since the last sync. As long as the counter is not
0/0/0, the DSU plans are not up to date.

#### Send in-game message

![Send in-game message](../assets/leaderview/27_leaderview_planning_container_planstab_sendplan_ingame.png){ .screenshot }

A click on the blue **letter icon** in the **"Distribution status"**
column opens the **"Send in-game message"** dialog. The dialog shows
the finished message for the respective recipient (template with
resolved placeholders, including WB-commands spoiler).

Via **"Send & Copy"** the message is copied to the clipboard and at
the same time the in-game inbox is opened in a new tab — there
simply paste with `Ctrl+V` and send. The player is automatically
marked as **"distributed"**.

#### Change distribution status

![Change distribution status](../assets/leaderview/28_leaderview_planning_container_planstab_distributionstatus_change.png){ .screenshot }

The **distribution status** in the respective row jumps to **green**
after sending and shows the timestamp of the distribution. Via the
small **reset icon** (arrow in circle) the status can be manually
reset — e.g. if a player should receive the plan again.

#### Action bar on selection

![Action bar in the \"Plans\" tab](../assets/leaderview/29_leaderview_planning_container_planstab_selectinplans_opens_action_bar.png){ .screenshot }

As soon as you check at least one entry in the player table, an
action bar appears at the top with bulk actions:

- **"Reset fetch status"** — resets the distribution status of all
  selected players to 🔴.
- **"Renew link"** — generates a new DSU link for the selected
  players. **Note:** the old link becomes invalid immediately — the
  players have to actively fetch the new link.
- **"Export Links"** — exports the DSU links of the selected players
  (e.g. for a central forum post).
- **"Cancel"** — discard selection.

### "Commands" tab

![\"Commands\" tab](../assets/leaderview/30_leaderview_planning_container_commandstab_overview.png){ .screenshot }

The **"Commands"** tab is the command-oriented view. Every row is a
single attack command in the container. Columns:

| Column | Meaning |
|---|---|
| **Player** | Attacker (owner of the source village) |
| **Source** | Source village coordinate |
| **Target** | Target village coordinate |
| **Unit** | Fastest unit in the command — determines the runtime |
| **Icon** | DS-Ultimate icon of the command (e.g. Nuke, Snob, Fake icon) |
| **Launch time** | When the attack must be launched |
| **Arrival time** | When the attack arrives at the target |
| **Distance** | Field distance source ↔ target |
| **Runtime** | Calculated runtime based on the unit |

Via the **"Show hidden"** checkbox you can show hidden commands.

At the top right the actions **"UT boost"** and
**"Adjust arrival times"** are available.

#### UT boost modal

![UT boost modal](../assets/leaderview/31_leaderview_planning_container_commandstab_utboost_modal.png){ .screenshot }

In the **"UT boosts"** dialog you assign a boost percentage (0–20 %)
per target player. With this you can specifically give individual
players more fake-UT commands without changing the overall container
logic.

Columns of the table in the modal:

- **Target player** — recipient of the boost.
- **Affected commands** — number of fake-UT commands that the boost
  applies to.
- **UT boost (%)** — input field for the percentage value per player.

!!! info "Only for fake-UT commands"
    UT boosts apply exclusively to **fake-UT commands** and include
    hidden commands as well.

- **"Save only"** — save the values but do not yet apply them.
- **"Save & Apply"** — save the values and immediately apply them to
  all affected commands.

#### Arrival times modal

![Adjust arrival times](../assets/leaderview/32_leaderview_planning_container_commandstab_adjusttimes_modal.png){ .screenshot }

The **"Adjust arrival times"** dialog shifts the arrival times for
certain command groups — typically because the nuke date of a wave
has changed. Procedure in two steps:

1. **Select combinations** — mark the plan type / unit / icon
   combinations that should be adjusted. The **"Count"** column
   shows how many commands in the container match per combination,
   **"Total"** sums the selection.
2. **Upload file** — a text file in the format
   `XXX|YYY,DD.MM.YYYY,HH:MM:SS` (one line per target village). Drag
   & drop or click to select.

The adjustment also applies to hidden commands.

#### Edit a single command

![Edit a single command](../assets/leaderview/33_leaderview_planning_container_commandstab_editsinglecommand_modal.png){ .screenshot }

Via the edit icon of a command you open the **"Edit command"**
dialog. Here you can adjust a single command afterwards:

- **Source village** / **Target village** — coordinates of the two
  villages involved; the player name is automatically shown below
  the field.
- **Type** — command type (e.g. **"Snob"**, **"Nuke"**, **"Fake"**).
- **Unit** — fastest unit used; determines the runtime.
- **Symbol** — DS-Ultimate icon of the command.
- **Launch time** / **Arrival time** — one of the two is editable,
  the other is calculated automatically.
- **UT boost (0–20 %)** — optional, only for fake-UT.
- **Troops** — number of troops per unit type in the command.
- **Preview** — live calculation with type, source, target, unit,
  launch time, arrival time, distance and runtime. The preview is
  informational; the final values are calculated by the server on
  save.

#### Commands action bar

![Action bar in the \"Commands\" tab](../assets/leaderview/34_leaderview_planning_container_commandstab_selectingcommand_opens_action_bar.png){ .screenshot }

As soon as you select commands in the list, an action bar appears
with bulk actions (e.g. UT boost, adjust arrival times, hide or
delete commands).

### Publishing

The **publishing toggle** at the top right in the header area
controls whether the container is active to the outside.

![Publishing active](../assets/leaderview/35_leaderview_planning_container_publishing_active.png){ .screenshot }

![Publishing inactive](../assets/leaderview/36_leaderview_planning_container_publishing_inactive.png){ .screenshot }

- **Publishing: Active** — DSU links are reachable, the Discord bot
  delivers content to the linked players.
- **Publishing: Inactive** — the container is only visible internally
  in the Leader-View. Existing DSU links are not reachable, the
  Discord delivery is paused. Ideal during the preparation of an
  operation.

### Changelog

![Changelog](../assets/leaderview/37_leaderview_planning_container_changelog.png){ .screenshot }

Via the **"Changelog"** button you open the full history of all
changes to the container. Per entry you see the **timestamp**,
**changed by** (leader or player) and the executed **container
action**.

Typical entries:

- `Container activated` / `Container deactivated` — distribution
  status toggled.
- `Plan "…" imported (X commands)` — a plan from the Nuke / Snob
  planning tool was imported.
- `Container cleared (X commands removed)` — all commands were
  removed (`Empty plans`).
- `DSU synchronized (X new, X removed, X changed)` — synchronization
  to DS-Ultimate.
- `"…" manually marked as distributed` — distribution status of a
  player was manually set to 🟢.
