# Permission Concept

tw-utils uses **four roles** that apply both in the Discord bot and in
the [Leader-View](../leader-view/uebersicht.md) on tw-utils.net.
Anyone without one of these roles is a normal member.

!!! info "The roles are not Discord roles"
    The tw-utils roles are kept by the bot in its own database —
    nothing has to be created on the Discord server for them. Discord
    roles appear in the bot in one place only: to control **who may
    see which channels** (see
    [Bot Modules – Setup](modul-verwaltung.md)). They do not grant any
    permissions.

## 1. Normal members

By default, every Discord user on your tribe Discord is a normal
member from the tw-utils Discord bot's point of view. Normal members
can use the interactive features of the installed modules:

- Submit bunker requests in the `#⚫-request-bunker` channel
- Submit account-sitting requests in the `#⚫-request-account-sitting` channel
- Search for off, deff or snob commands via the ODS system
- Enter snob entries and launch times in the planning system, or take
  part in a [tribe survey](../leader-view/stammes-umfragen.md)
- Upload their running commands through the tw-utils API
- etc.

They always see **their own** data only. They cannot open the
Leader-View on tw-utils.net.

## 2. The four tw-utils roles

| Role | What it allows |
|---|---|
| **TWU-Troops** | Upload troop data and manage the Off/Deff/Snob-Search-System and the Account-Sitting-System. |
| **TWU-Bunker** | Like TWU-Troops + management of the Bunker-Information-System (approve/reject requests, dissolve other players' bunkers). |
| **TWU-Planner** | Like TWU-Troops + management of the Planning-System (tribe surveys, containers, running commands). |
| **TWU-Leader** | Full access to all tw-utils features — including bot configuration, module management and granting rights. |

So TWU-Bunker and TWU-Planner each contain everything TWU-Troops may
do; TWU-Leader contains all of them together.

Which role sees which tab in the Leader-View is described under
[Permission](../leader-view/uebersicht.md#which-role-sees-which-tab).

### Additional roles for the API

On top of that there are additional roles concerning the tw-utils API
only, through which userscripts exchange data — **Commands Reader**,
**Troops Reader** and **Free Upload**. They are described under
[Members](../leader-view/mitglieder.md#additional-roles-api).

## 3. Who grants the roles?

The roles are granted in the **Leader-View**: tab **"Members"** →
**"Manage"** button. Only a **TWU-Leader** may do that.

So that a first TWU-Leader can exist at all, there is exactly one
exception: a **Discord administrator** of your server appoints them in
the `#⚫-bot-config` channel via the `Manage Access to Leader-View`
button → `Grant Access`. Via the bot only the `Leader` role
(= TWU-Leader) can be granted; all finer-grained roles come from the
Leader-View afterwards.

The complete procedure is described in the
[Quick-Setup-Guide](quick-setup.md#5-assign-leader-status).

## 4. Discord administrators

Anyone holding the Discord permission **Administrator** on your server
can reach **every** management button in the bot — permanently, and
regardless of which tw-utils roles have been granted. The same goes for
the bot owner. It is this failsafe that makes the initial setup
possible at all: set the world, install modules, appoint the first
leader.

!!! warning "On the website only the tw-utils role counts"
    This back door applies to the Discord bot only. A Discord
    administrator does **not** get to see the Leader-View on
    tw-utils.net without holding a tw-utils role themselves.

It is therefore a good idea, as the admin doing the setup, to give
yourself the TWU-Leader role right at the start — then what the bot
allows matches what the website allows.

!!! info "The TWU-Mod role no longer exists"
    Earlier versions used a Discord role called **TWU-Mod** as the
    bot's management role. It has been replaced by the role model
    described above and grants **no** permissions any more. A TWU-Mod
    role still present on your server can safely be deleted — grant
    TWU-Leader, TWU-Planner, TWU-Bunker or TWU-Troops instead.
