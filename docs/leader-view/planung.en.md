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
provide the three most important inputs for nuke planning and must be
supplied by the tribe members.

!!! info "Data usually comes from the Discord bot"
    Snob-Entries, launch times and excluded source villages are
    usually submitted by the players directly via the
    [Planning-System of the Discord bot](../discord-bot/planning-system.md).
    The entries then appear automatically in these lists. Leaders can
    however always create, edit or delete entries manually.

### Snob-Entries

In this area the snob entries are managed. The list is the basis for
the later snob planning.

![Snob-Entries — overview](../assets/leaderview/15_leaderview_planning_snobqueries_overview.png){ .screenshot }

At the top you see a **metrics bar** summarizing all entries:

- **Total Snobs** — sum of all reported snobs across all players.
- **Trains** — number of source villages from which at least 4 snobs
  are reported (full-snob train).
- **1-Snobs / 2-Snobs / 3-Snobs** — number of source villages from
  which exactly 1, 2 or 3 snobs are reported.

The table below lists every single entry:

| Column | Meaning |
|---|---|
| **#** | Running number |
| **TW-Account** | Player providing the snobs |
| **Tribe** | Tribe of the player |
| **Coordinate** | Source village of the entry |
| **Count** | How many snobs the player has ready from this source village |
| **Actions** | Edit entry (pencil) or delete (trash) |

Above the table you have the following options: **"Add"**,
**"Export"**, **"Delete all"**.

### Launch times

Here you manage the individual launch windows of the players — i.e.
the time windows in which the individual players actually have time to
send commands.

![Launch times — overview](../assets/leaderview/17_leaderview_planning_launchtimes_overview.png){ .screenshot }

Table columns:

| Column | Meaning |
|---|---|
| **#** | Running number |
| **TW-Account** | Account the entered time window applies to |
| **Tribe** | Tribe of the player |
| **Date** | Day on which the player can launch |
| **Time range** | From and to time (Tribalwars server time) |
| **Actions** | Edit or delete entry |

Above the table you have the following options: **"Add"**,
**"Export"**, **"Delete all"**.

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

### Manual add

All three lists in **Queries** can not only be filled via the Discord
bot, but also directly in the Leader-View. Clicking the **"Add"**
button above the respective table opens the matching input modal.
After confirming, the new entry appears immediately in the
corresponding table.

The three input modals in detail:

#### Add snob entry

![Add snob entry](../assets/leaderview/16_leaderview_planning_snobqueries_add.png){ .screenshot }

Fields:

- **Coordinates (text with coords)** — one or more source coordinates;
  surrounding text is ignored (e.g. `Snobs ready in 500|500 and
  501|501…`).
- **Snob count (per village)** — how many snobs the player has ready
  per source village. The entered value applies to **all**
  coordinates detected in step 1.

#### Add launch time

![Add launch time](../assets/leaderview/18_leaderview_planning_launchtimes_add.png){ .screenshot }

Fields:

- **Player name (TW-Account)** — with autocomplete via the verified
  accounts.
- **Date** — day of the launch window.
- **From** / **To** — start and end of the time window (Tribalwars
  server time).

#### Exclude source village

![Exclude source village](../assets/leaderview/20_leaderview_planning_excludedvillages_add.png){ .screenshot }

In the **"Coordinates (text with coords)"** field you enter one or
more coordinates (surrounding text is ignored).

## Container

In the **"Container"** sub-tab you manage the actual attack plans. A
**container** bundles an operation — e.g. a nuke wave, a snob action
or an interim cleaner — with all plans and commands and controls the
distribution to the individual players.

![Container — overview](../assets/leaderview/21_leaderview_planning_container_overview.png){ .screenshot }

Here you can open existing containers and create new ones. Clicking
**"Open"** switches to the respective container overview.

### Create a new container

By clicking the **"New Container"** button you create a new container.
A modal opens in which you must set a **name** for the container
(max. 50 characters, e.g. `Op. Phoenix`).

![Create container](../assets/leaderview/22_leaderview_planning_container_containeradd.png){ .screenshot }

After confirming, the container is automatically assigned to the
current world, starts in the status **"Inactive"** and appears
immediately in the container overview.

### Structure of a container

Right after creation, a container is still completely empty — neither
plans nor commands are stored yet. The basic frame with header,
action bar and the two tabs is however already visible:

![Empty container](../assets/leaderview/23_leaderview_planning_container_overview_empty_container.png){ .screenshot }

**Header area**

In the header area you find the container name and the world badge
of the associated TW world on the left. Via the **"Back to overview"**
link you return to the tribe's container overview.

On the right side you find the container-wide actions:

- the **publishing toggle** to activate / deactivate the container
  (see [Publishing](#publishing)),
- the **"Changelog"** button for the change history (see
  [Other](#other)),
- the **"Delete container"** button for completely removing the
  container (see [Other](#other)).

**Action bar**

Directly below the header sits the action bar with the tools to
populate and synchronize the container:

![Action bar — buttons](../assets/leaderview/40_leaderview_container_import_plan.png){ .screenshot }

Via the **"Select plan…"** dropdown you choose a plan from your
saved plans and add it to the container with a click on **"Add"**.
After adding, the **"Plans"** and **"Commands"** tabs update
accordingly — the imported per-player plans and commands appear
there immediately. In the same way you can add further plans one
after another.

To empty the container completely, a click on **"Empty plans"**
removes all previously imported commands in one step. The
**"Hide outdated"** switch hides commands whose launch time already
lies in the past — they remain in the container but are simply no
longer displayed.

!!! info "DSU plans persist after \"Empty plans\""
    If the container has previously been transferred to DS-Ultimate
    via **"DSU sync"**, the DSU plans created there (one per player +
    total plan) also remain after **"Empty plans"**. The commands
    within those DSU plans are however also removed by
    **"Empty plans"** — only the empty DSU plan stays behind.

A click on **"DSU sync"** transfers the commands currently in the
container to DS-Ultimate. The tool creates a separate DSU plan per
player as well as a "total plan" with all commands. Details on this
step can be found in the [DSU sync](#dsu-sync) section.

**"Plans" and "Commands" tabs**

In the lower area of the container the two tabs **"Plans"** and
**"Commands"** are available. Details for both tabs are in the
respective sections below.

### "Plans" tab

In the **"Plans"** tab you manage the players' attack plans — there
is one row per player for whom commands exist in the container.

![\"Plans\" tab](../assets/leaderview/24_leaderview_planning_container_planstab.png){ .screenshot }

At a glance you can tell whether the player account is linked to a
Discord account; that immediately shows you whether the player can
download the plan themselves via the tw-utils Discord bot or whether
you need to send it to them via in-game message. You also see the
**DSU plan** link of the respective player — this only appears
after a [DSU sync](#dsu-sync) has been performed. The
**distribution status** finally turns green as soon as the plan has
been sent via in-game message **or** as soon as a linked Discord user
has downloaded the plan via the Discord bot.

In addition, several functions are available to you as tribe
leadership, described in the following sub-sections.

#### Functions

##### DSU sync

![After DSU sync](../assets/leaderview/26_leaderview_planning_container_planstab_after_dsusynchronization.png){ .screenshot }

After clicking **"DSU sync"**, the tool creates a DSU plan on
DS-Ultimate for each player; in the **"DSU plan"** column the links
**"Edit · View"** appear.

![DSU plan: Edit / View](../assets/leaderview/42_leaderview_planning_dsulink_edit_view.png){ .screenshot }

In addition, the highlighted row **"Total Plan"** appears at the very
top with the yellow **"Total Plan"** badge — it contains all commands
of all players in a single DSU plan.

![Pending changes](../assets/leaderview/41_leaderview_planning_pendingchanges.png){ .screenshot }

At the top right the hint **"Pending changes: +X / -Y / ±Z"** shows
how many commands have been **added (+)**, **removed (−)** or
**changed (±)** since the last sync. As long as the counter is not
0/0/0, the DSU plans are not up to date.

!!! info "What gets synchronized?"
    Only commands that are present in the container **and** not
    hidden are transferred to the DSU plans. Hidden commands (via
    **"Hide outdated"** or manually) remain in the container but do
    not flow into the DSU sync.

##### Plan distribution

The finished plans can be distributed to the players in **three
ways**:

1. **Via the Discord bot** — players with completed account
   verification can download the plan themselves via the tribe's
   Discord server.
2. **Via in-game message** — the leader sends the plan individually
   via in-game message, optionally with the message template provided
   by tw-utils.
3. **Other distribution via export** — the DSU links can be exported
   as a TXT file and reused outside the game (e.g. forum posting,
   Discord DM, etc.).

**Distribution via the Discord bot**

Players who have completed their account verification with their TW
account can download the attack plan themselves via the
[Planning-System of the tw-utils Discord bot](../discord-bot/planning-system.md).
Active sending by the leader is not necessary here. Which players are
verified via the bot can be seen in the **Discord** column of the
overview.

**Distribution via in-game message**

If players are to receive the plan via in-game message, the
**message template** comes into play — the text template that is
individually filled in for each player when sending.

![Edit message template](../assets/leaderview/25_leaderview_planning_container_planstab_messagetemplate.png){ .screenshot }

Via the **"Message template"** button you open the editor
**"Edit message template"**. The placeholders are replaced per
player automatically:

| Placeholder | Is replaced with |
|---|---|
| `{player_name}` | Name of the player the message goes to |
| `{dsu_link}` | Individual link to the DS-Ultimate plan of this player |
| `{wb_commands}` | All WB commands of the player in a spoiler block. |

Once the message template has been created and saved, you can start
the distribution by clicking the blue **letter icon** in the
**"Distribution status"** column:

![Send in-game message](../assets/leaderview/43_leaderview_planning_send_ingame_message.png){ .screenshot }

The **"Send in-game message"** dialog opens, showing the finished
message for the respective recipient (template with resolved
placeholders, including WB-commands spoiler).

![\"Send in-game message\" dialog](../assets/leaderview/45_leaderview_planning_send_ingame_message_dialog.png){ .screenshot }

Via **"Send & Copy"** the message is copied to the clipboard and at
the same time the in-game message is opened in a new tab — there
simply paste with `Ctrl+V` and send. The player is automatically
marked as **"distributed"**.

**Other distribution via export of DSU links**

If the distribution is to take place outside of Discord and in-game —
e.g. centrally in the tribe forum — you can download the DSU links of
the selected players as a TXT file via the bulk action
**"Export Links"**.

![Bulk bar in the \"Plans\" tab](../assets/leaderview/44_leaderview_planning_bulk_bar_planstab.png){ .screenshot }

To do so, mark the desired players in the player table; in the action
bar that appears at the top, you then choose **"Export Links"**. The
TXT file contains one DSU link per marked player and can be reused
freely.

##### Status & link management (bulk actions)

To allow a single player to receive the plan again, or to manage
multiple players at once, there are two tools: the **reset icon** in
each individual row and the **action bar with bulk actions** above
the column selector.

**Reset distribution status individually**

![Change distribution status](../assets/leaderview/28_leaderview_planning_container_planstab_distributionstatus_change.png){ .screenshot }

The **distribution status** in each row jumps to **green** after
sending and shows the timestamp of the distribution. Via the small
**reset icon** (arrow in circle) the status can be manually reset —
e.g. if a player should receive the plan again.

**Bulk actions for multiple players**

As soon as you check at least one entry in the player table, an
action bar appears at the top with bulk actions. Via
**"Reset fetch status"** you reset the distribution status of all
selected players to 🔴 — useful when the plans should be distributed
again. With **"Renew link"** a new DSU link is generated for the
selected players; the old link becomes invalid immediately, so the
affected players have to actively fetch the new link. The bulk action
**"Export Links"** is described in the
[Plan distribution](#plan-distribution) section. Via **"Cancel"** you
discard the current selection.

### "Commands" tab

![\"Commands\" tab](../assets/leaderview/30_leaderview_planning_container_commandstab_overview.png){ .screenshot }

In the **"Commands"** tab you, as a leader, manage the commands
contained in the container. Individual commands can be edited, hidden
or deleted here — hidden commands can be brought back into view at
any time via the **"Show hidden"** checkbox. Bulk actions such as
adjusting arrival times and applying UT boosts to fake-UT commands
are also possible here. The individual functions are described in
the following.

#### Functions

##### Edit a single command

![Edit a single command](../assets/leaderview/33_leaderview_planning_container_commandstab_editsinglecommand_modal.png){ .screenshot }

Via the edit icon of a command you open the **"Edit command"**
dialog. Here you can adjust a single command afterwards.

In the upper area of the dialog, **Source village** and **Target
village** with their coordinates are available for editing; the
player name is automatically shown below the respective field. Via
the **"Type"** field (e.g. **"Snob"**, **"Nuke"** or **"Fake"**),
**"Unit"** (fastest unit used, it determines the runtime) and
**"Symbol"** (DS-Ultimate icon of the command), you set the key data
of the command. For the times, one of the two values **Launch time**
and **Arrival time** is editable — the other is calculated
automatically. The **UT boost (0–20 %)** is optional and only
relevant for fake-UT commands. Under **"Troops"** you enter the
number of troops per unit type in the command.

The **Preview** at the bottom of the dialog provides a live preview
of the command. It is purely informational — the final values are
calculated by the server on save.

##### Adjust arrival times

![Adjust arrival times](../assets/leaderview/32_leaderview_planning_container_commandstab_adjusttimes_modal.png){ .screenshot }

The **"Adjust arrival times"** dialog shifts the arrival times for
certain command groups. This function is often used to align snob
commands to the latest running nuke, for example.

In the first step, you selectively choose which plan-type / unit /
icon combinations should be adjusted — so you can limit the
adjustment to individual command groups and leave others untouched.
The **"Count"** column shows, per row, how many commands in the
container fall under the respective combination; the **"Total"**
column sums the currently marked selection.

In the second step you upload a text file with the new arrival times
— one line per target village in the format
`XXX|YYY,DD.MM.YYYY,HH:MM:SS`. The file can be placed via drag & drop
or selected by clicking.

!!! info "Adjustment includes hidden commands"
    The adjustment of arrival times also applies to currently hidden
    commands of the selected combination.

##### Apply UT boost

![UT boost modal](../assets/leaderview/31_leaderview_planning_container_commandstab_utboost_modal.png){ .screenshot }

Enemy players often activate the UT boost during an offensive
action. Support commands like fake-UTs then have a shorter runtime.
The originally created attack commands do not account for this,
because at planning time it is not clear whether an enemy player
will activate the UT boost.

Once a player has activated the UT boost, you can use the
**"UT boosts"** dialog to retroactively adjust all fake-UT commands
targeting that player to the activated boost. To do so, enter the
corresponding boost percentage (0–20 %) per target player in the
table.

!!! info "Only for fake-UT commands"
    UT boosts apply exclusively to **fake-UT commands** and include
    hidden commands as well.

- **"Save only"** — stores the entered boost values without
  recalculating the affected fake-UT commands yet. The actual
  adjustment of the commands only happens on a later click on
  **"Save & Apply"**.
- **"Save & Apply"** — save the values and immediately apply them to
  all affected commands.

### Publishing

Via the **publishing toggle** at the top right of the header area the
leader controls whether the container is actively delivered to the
outside.

![Publishing active](../assets/leaderview/35_leaderview_planning_container_publishing_active.png){ .screenshot }

![Publishing inactive](../assets/leaderview/36_leaderview_planning_container_publishing_inactive.png){ .screenshot }

If the toggle is set to **"Active"**, the players can download their
plans themselves via the Discord bot (Planning-System) and see the
corresponding commands on their **"My Commands"** page at
tw-utils.net. If the toggle is set to **"Inactive"**, both pause:
neither the Discord download nor the display under **"My Commands"**
is then available. In this state the container is only visible
internally in the Leader-View — ideal during the preparation of an
operation.

!!! info "No effect on already distributed DSU plans"
    The publishing toggle only affects the Discord download and the
    display under **"My Commands"**. Plans already synchronized to
    DS-Ultimate remain there and are still accessible, even if the
    container is switched to **"Inactive"**.

### Other

#### Changelog

![Changelog](../assets/leaderview/37_leaderview_planning_container_changelog.png){ .screenshot }

Via the **"Changelog"** button you open the full history of all
changes to the container. Per entry you see the **timestamp**,
**changed by** (leader or player) and the executed **container
action**.

#### Delete container

Via the **"Delete container"** button in the header area (right next
to **"Changelog"**) the entire container including all imported plans
and commands is removed. The action is **irreversible** — deleted
containers cannot be restored. Before deletion a confirmation dialog
appears to prevent accidental deletions.

!!! info "Already distributed DSU plans remain intact"
    Deleting the container has no effect on plans already
    synchronized to DS-Ultimate — these remain in DS-Ultimate. If you
    also want to empty the DSU plans before deletion, the recommended
    workflow is: first remove all commands from the container via
    **"Empty plans"**, then transfer the emptied state to DS-Ultimate
    via **"DSU sync"** — and only then delete the container.
