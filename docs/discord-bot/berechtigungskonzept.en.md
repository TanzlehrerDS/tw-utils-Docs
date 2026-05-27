# Permission Concept

The tw-utils Discord bot uses two permission levels: **normal members** and Discord users with the **TWU-Mod** role. This distinction controls which buttons and actions are available to a user on your tribe Discord.

## 1. Normal members

By default, every Discord user on your tribe Discord is a normal member from the tw-utils Discord bot's point of view. Normal members can use the interactive features of the installed modules:

- Submit bunker requests in the `#⚫-request-bunker` channel
- Submit account-sitting requests in the `#⚫-request-account-sitting` channel
- Search for off, deff or snob commands via the ODS system
- Enter snob entries and launch times in the planning system
- etc.

## 2. TWU-Mod

The role **TWU-Mod** is the bot's management role on your Discord server. Users with this role (or Discord administrator permissions) have access to **all** management functions — in addition to everything normal members can do:

- Bot configuration in the `#⚫-bot-config` channel (set world, install/update/uninstall modules, assign visibility roles)
- Grant Leader-View access
- Approve or reject bunker requests
- Upload troop data

TWU-Mod users also have access by default to the Leader-View channels (`#⚫-leaderview-bunker`, `#⚫-leaderview-planinfo`, etc.).

The role is assigned like any other Discord role on the server — either directly via the Discord server settings or via your own permission management.

!!! info "Prerequisite for initial setup"
    The initial setup of the bot (invite the bot, set the world, install the first modules) requires **Discord administrator permissions**. After setup, the **TWU-Mod** role is sufficient for ongoing management.

## 3. Distinction from Leader status on tw-utils.net

Access to the [Leader-View](../leader-view/uebersicht.md) on `tw-utils.net` is granted **separately** via the `Manage Access to Leader-View` button in the `#⚫-bot-config` channel. Since TWU-Mods can grant themselves Leader status, a TWU-Mod is to be considered higher in the permission hierarchy.
