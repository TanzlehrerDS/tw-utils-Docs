# Bunker-Information-System

The Bunker-Information-System is where you manage your bunkers. Tribe members submit bunker requests, TWU-Mods approve or reject them. Top-ups can be requested and approved the same way, and bunkers can be dissolved. The module also gives leaders a quick Bunker-Health check and a way to identify and control flex bunkers.

## 1. Module channels

After the [setup](modul-verwaltung.md), the bot creates the category `🧱 BUNKER-INFORMATION-SYSTEM` with four channels:

- `#⚫-request-bunker` — central request channel with the buttons to request, top up, view and dissolve your own bunkers
- `#⚫-leaderview-bunker` — leader view with the Bunker-Health overview of all approved bunkers
- `#⚫-leaderview-flexbunker` — leader view with the flex-bunker control
- `#⚫-report-bunker` — channel for reporting and managing enemy bunkers

![Channel overview of the Bunker-Information-System](../assets/discordbot/bunker-information-system/01_channel_overview.png){ .screenshot }

As soon as someone submits a request or a top-up, the bot creates **a dedicated channel per coordinate** in the same category (e. g. `❓-bunker-for-500-501-Playername` or `❓-top-up-500-501`). The entire approval workflow runs inside this per-request channel.

## 2. Request a bunker

Switch to the `#⚫-request-bunker` channel.

![#⚫-request-bunker channel](../assets/discordbot/bunker-information-system/02_request_bunker_channel.png){ .screenshot }

Click the `Request Bunker` button.

![Request Bunker button](../assets/discordbot/bunker-information-system/03_request_bunker_button.png){ .screenshot }

The `Request Bunker` modal opens with three input fields:

- `Coordinates` — one or more coordinates (e. g. `500|501, 503|502, 540|589`)
- `Bunker Size (Dual-Strength)` — desired dual strength of the bunker (e. g. `20000`)
- `Reason` — reason why this bunker is needed

![Modal: Request Bunker](../assets/discordbot/bunker-information-system/04_request_bunker_modal.png){ .screenshot }

After submitting, the bot creates a dedicated channel `❓-bunker-for-XXX-YYY-Playername` per coordinate in the category.

![New request channel in the category](../assets/discordbot/bunker-information-system/05_request_bunker_new_channel_created.png){ .screenshot }

In the new channel the bot posts a request embed with player, coordinate, desired size and reason, plus the approval buttons for TWU-Mods.

![Request summary in the new channel](../assets/discordbot/bunker-information-system/06_request_bunker_new_channel_request_summary.png){ .screenshot }

!!! info "Multiple coordinates per request"
    In a single request you can enter as many coordinates as you like — separated by commas or spaces. The bot creates **a dedicated request channel per coordinate**. Each channel is approved, rejected or withdrawn individually.

## 3. Approve or reject a bunker

In the per-request channel, TWU-Mods see the `Admin: Approve` button.

![Admin: Approve button](../assets/discordbot/bunker-information-system/07_approve_bunker.png){ .screenshot }

A click opens the approval modal — the mod can enter the finally approved size or accept the originally requested size.

![Approval modal](../assets/discordbot/bunker-information-system/08_approve_bunker_modal.png){ .screenshot }

After a successful approval, both the requester and the user who approved the request receive a Discord direct message titled `Bunker Approved` (or `Top-Up Approved`). The DM contains all key information plus a ready-made text string to drop straight into the tribe forum. The request channel is automatically deleted after the approval.

![Approval DM](../assets/discordbot/bunker-information-system/09_approve_bunker_summary_as_discord_dm.png){ .screenshot }

Instead of approving, TWU-Mods can also reject a request with `Admin: Reject`. Both the requester and the rejecting TWU-Mod then receive a Discord direct message about the rejection; the request channel is likewise deleted automatically.

![Admin: Reject button](../assets/discordbot/bunker-information-system/14_leader_reject_button.png){ .screenshot }

The requester — or a TWU-Mod — can withdraw the request at any time via `Withdraw (Delete)`. The per-request channel is deleted along with it.

![Withdraw (Delete) button](../assets/discordbot/bunker-information-system/15_withdraw_delete_button.png){ .screenshot }

!!! info "Approval with size override"
    In the approval modal the TWU-Mod can assign a different size — for example because the village should have a different strength than originally requested. This size becomes the binding target size and is the basis for the Bunker-Health traffic light in the leader view.

!!! info "Copy the SD command from the approval DM"
    The `Bunker Approved` DM ends with a ready-made SD command string (`{coord} {units}"{Player}"request tw-utils.net""`). You can paste this block straight into the tribe forum without building it manually.

## 4. Request a top-up

For already approved bunkers whose strength is no longer sufficient, you can request a top-up in the `#⚫-request-bunker` channel via the `Request Top-Up` button.

![Request Top-Up button](../assets/discordbot/bunker-information-system/10_request_topup_button.png){ .screenshot }

In the `Request Top-Up` modal you specify:

- `Coordinates` — coordinate(s) of the already approved bunkers
- `Additional Size (Dual-Strength)` — **only** the additional dual strength (e. g. `+5000`)
- `Reason` — reason for the top-up

![Modal: Request Top-Up](../assets/discordbot/bunker-information-system/11_request_topup_modal.png){ .screenshot }

Analogous to the bunker request, the bot creates a dedicated channel `❓-top-up-XXX-YYY` per coordinate.

![New top-up channel in the category](../assets/discordbot/bunker-information-system/12_request_topup_new_channel_created.png){ .screenshot }

In the channel the bot posts a top-up summary. The approval workflow is identical to Section 3 — on approval the requester receives a DM titled `Top-Up Approved`, and the additional strength is added on top of the existing target size.

![Top-up summary in the channel](../assets/discordbot/bunker-information-system/13_request_topup_new_channel_request_sumamry.png){ .screenshot }

## 5. View and dissolve your own bunkers

In the `#⚫-request-bunker` channel every player can use `Show My Bunkers` to bring up an overview of their approved bunkers at any time.

![Show My Bunkers button](../assets/discordbot/bunker-information-system/16_show_my_bunkers_button.png){ .screenshot }

The bot posts an ephemeral list (only visible to you), grouped by your linked Tribalwars account, with a coord link and approved size per bunker. A completed account verification is the prerequisite.

![List of your own bunkers](../assets/discordbot/bunker-information-system/17_show_my_bunkers_bunkerlist.png){ .screenshot }

When a bunker is no longer needed (e. g. because the village is in the safe zone), players dissolve their own bunkers via the `Dissolve Bunker` button.

![Dissolve Bunker button](../assets/discordbot/bunker-information-system/18_dissolve_Bunker_button.png){ .screenshot }

In the `Dissolve Bunker` modal you enter the coordinates to be dissolved — the `Coordinate(s) / Text` field also accepts several coordinates or text with embedded coordinates. After a confirmation the bot removes the affected bunkers from the database and updates the leader view. TWU-Mods can dissolve other players' bunkers the same way.

![Modal: Dissolve Bunker](../assets/discordbot/bunker-information-system/19_dissolve_Bunker_modal.png){ .screenshot }

## 6. Bunker-Health & flex-bunker control

In the `#⚫-leaderview-bunker` channel, TWU-Mods see all approved bunkers at a glance.

![#⚫-leaderview-bunker channel overview](../assets/discordbot/bunker-information-system/20_leaderview_bunker_channel_overview.png){ .screenshot }

The `Bunker Health` button refreshes the overview and compares the approved target size against the currently uploaded troop data for each bunker. The result is shown as a traffic light per bunker.

![Bunker Health button in the leader view](../assets/discordbot/bunker-information-system/21_leaderview_bunker_channel_bunkerhealth_button.png){ .screenshot }

!!! info "Bunker-Health traffic-light legend"
    The Health overview uses a four-step traffic light per bunker:

    - ⚪ no troop data — no troop data is available for this bunker
    - 🟢 less than 10 % deviation from the target size
    - 🟠 10 % to 25 % deviation
    - 🔴 more than 25 % deviation

In the second leader-view channel `#⚫-leaderview-flexbunker`, the `Flexbunker Control` button is available — it helps to identify villages that tie up high defensive capacity but are not approved bunkers themselves.

![Flexbunker Control button](../assets/discordbot/bunker-information-system/22_leaderview_bunker_flexcontrol.png){ .screenshot }

In the `Flexbunker Control` modal you enter the threshold dual strength:

![Modal: Flexbunker Control](../assets/discordbot/bunker-information-system/23_leaderview_bunker_flexcontrol_modal.png){ .screenshot }

As a result you get a table of all villages in the tribe whose actual dual strength reaches the threshold — grouped by tribe and player, sorted by strength in descending order. Approved bunkers are hidden so that only additional flex bunkers appear.

![FlexControl result table](../assets/discordbot/bunker-information-system/24_leaderview_bunker_flexcontrol_result_table.png){ .screenshot }

!!! warning "Rate limit on Bunker-Health & FlexControl"
    Both `Bunker Health` and `Flexbunker Control` are limited for performance reasons to **one execution per minute per server**. If you press the button twice in quick succession, the second click returns a notice — just wait a moment and click again.

## 7. Report enemy bunkers

In the `#⚫-report-bunker` channel, known enemy bunkers are collected. The bot provides four buttons there.

![Report-bunker channel with buttons](../assets/discordbot/bunker-information-system/25_report_bunker_channel_buttons.png){ .screenshot }

`Report-Link / Copy & Paste` lets you add enemy bunkers directly from a report — via TW report link, `[report]` tag or pasted report text. `Manual Entry` allows manual entry of coordinate, units and info time when no report is available. With `Admin: Remove Bunker`, TWU-Mods can remove individual enemy-bunker entries again, and `Export` returns the full list as a TSV file for Excel & co.

`Report-Link / Copy & Paste` opens a modal that accepts a report link, `[report]` tag or pasted report text. The bot parses the units, coordinate and info time automatically from the report.

![Modal: Report-Link / Copy & Paste](../assets/discordbot/bunker-information-system/26_report_bunker_report_modal.png){ .screenshot }

If no report is available, `Manual Entry` helps with the `Report Enemy Bunker (Manual)` modal and three fields: `Coordinate (XXX|YYY)`, `Units (...)` with all units of the respective world, and `Info Date (DD.MM.YYYY HH:MM:SS)`.

![Modal: Manual Entry](../assets/discordbot/bunker-information-system/27_report_bunker_manualentry_modal.png){ .screenshot }

No matter which path was chosen — the bot shows a preview and asks for confirmation with the `Confirm` / `Cancel` buttons before the entry is saved.

![Confirmation of the enemy-bunker entry](../assets/discordbot/bunker-information-system/28_report_bunker_manualentry_confirmation_message.png){ .screenshot }

After `Confirm`, the entry is saved and the bot confirms the successful operation.

![Success message after enemy-bunker entry](../assets/discordbot/bunker-information-system/29_report_bunker_manualentry_success_message.png){ .screenshot }

The entry then shows up in the enemy-bunker overview in the channel — grouped by enemy tribe, then by player, with coordinate, unit counts and info time.

![Enemy-bunker overview in the channel](../assets/discordbot/bunker-information-system/30_report_bunker_manualentry_enemy_bunker_overview.png){ .screenshot }
