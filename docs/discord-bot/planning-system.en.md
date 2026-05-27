# Planning-System

The Planning-System is the Discord-side bridge to the Off-Planner on [tw-utils.net](https://tw-utils.net). In addition to the website, players can also use the tw-utils Discord bot to report Snobs, enter launch times and exclude origin villages from their plans. Tribe leadership in turn distributes the finished attack plans. Leaders can also check in on the planning from anywhere via Discord.

!!! info "Prerequisite: verified TW account"
    Without a linked account the input buttons and the `Download` button in the Plan-Distribution channel cannot be used.

## 1. Module channels

After the [setup](modul-verwaltung.md), the bot creates the category `🪓 PLANNING-SYSTEM` with four base channels:

- `#⚫-queries` — reporting channel for players (Snob reports, launch times, off-exclusions)
- `#⚫-plan-distribution` — players can download their personal attack plan here
- `#⚫-leaderview-planinfo` — leaders can review the planned commands here
- `#⚫-nuke-replacement` — enables a structured search for replacement Nukes

![Channel overview of the Planning-System](../assets/discordbot/planning-system/01_planning_system_channels.png){ .screenshot }

## 2. Snob reports

In the `#⚫-queries` channel you'll find three colour-coded buttons below the `Queries` embed: `Snob Report`, `Launch Times` and `Off-Exclusion`.

![Queries channel](../assets/discordbot/planning-system/02_planning_system_queries_channel.png){ .screenshot }

![Query buttons in the Queries channel](../assets/discordbot/planning-system/03_planning_system_queries_channel_query-buttons.png){ .screenshot }

Clicking `Snob Report` opens an ephemeral sub-menu with the buttons `Add`, `Show` and `Delete`.

![Snob Report sub-menu](../assets/discordbot/planning-system/04_planning_system_snobquery_add-show-delete-button.png){ .screenshot }

With the `Add` button you start a new Snob report. First you pick the verified TW account in the dropdown for which the report should apply.

![Account selection for Snob report](../assets/discordbot/planning-system/05_planning_system_snobquery_select_verified_account.png){ .screenshot }

Then the Snob-report modal opens, in which you enter the details of the report.

![Snob-report modal](../assets/discordbot/planning-system/06_planning_system_snobquery_modal.png){ .screenshot }

After a successful submission, the bot confirms your report with a short ephemeral success message.

![Success message after Snob report](../assets/discordbot/planning-system/07_planning_system_snobquery_success_message.png){ .screenshot }

With the `Show` button you can view all the Snobs you have already reported for the selected account.

![Show view of the Snob reports](../assets/discordbot/planning-system/08_planning_system_snobquery_show_button.png){ .screenshot }

With the `Delete` button you can delete a specific Snob report again.

![Delete button for Snob reports](../assets/discordbot/planning-system/09_planning_system_snobquery_delete_button.png){ .screenshot }

## 3. Launch times

Clicking `Launch Times` likewise opens an ephemeral sub-menu with the buttons `Add`, `Show` and `Delete`.

![Launch Times sub-menu](../assets/discordbot/planning-system/10_planning_system_launchtimequery_add-show-delete-button.png){ .screenshot }

With the `Add` button you start a new launch-time entry. First you pick the verified TW account in the dropdown for which the time should apply.

![Account selection for launch time](../assets/discordbot/planning-system/11_planning_system_launchtimequery_select_verified_account.png){ .screenshot }

Then the launch-times modal opens, in which you enter your available time window.

![Launch-times modal](../assets/discordbot/planning-system/12_planning_system_launchtimequery_modal.png){ .screenshot }

With the `Show` button you can view all the time windows already stored for the selected account. With the `Delete` button you can delete a specific time window.

## 4. Off-exclusion

Clicking `Off-Exclusion` opens the sub-menu with the buttons `Add`, `Show` and `Delete`.

![Off-Exclusion sub-menu](../assets/discordbot/planning-system/13_planning_system_offexclusionquery_add-show-delete-button.png){ .screenshot }

With the `Add` button you start a new off-exclusion entry. First you pick the verified TW account in the dropdown for which the exclusion should apply.

![Account selection for off-exclusion](../assets/discordbot/planning-system/14_planning_system_offexclusionquery_select_verified_account.png){ .screenshot }

Then the off-exclusion modal opens, in which you enter the origin villages that the planner should not use as Off sources for you.

![Off-exclusion modal](../assets/discordbot/planning-system/15_planning_system_offexclusionquery_modal.png){ .screenshot }

With the `Show` button you can view all the off-exclusions already stored for the selected account. With the `Delete` button you can remove a specific entry again.

## 5. Admin functions

Below the player buttons, the `#⚫-queries` channel also offers two additional admin buttons.

With `Admin: Delete All` you can delete **all** Snob reports, launch times and off-exclusion entries on the entire server. This is especially useful when the tribe leadership wants to start a completely fresh round of planning and reset all old player data from the three query areas. Before the action runs, a confirmation prompt appears with the buttons `Confirm` and `Cancel` so that nothing is deleted by accident.

![Admin Delete All button](../assets/discordbot/planning-system/16_planning_system_queries_admin_delete_all_button.png){ .screenshot }

With the `Admin: Export` button you can export all currently submitted reports as a file — handy for further processing the collected entries outside of Discord, e. g. inside the tribe leadership.

![Admin Export button](../assets/discordbot/planning-system/17_planning_system_queries_admin_export_button.png){ .screenshot }

!!! info "Who can use the admin functions?"
    Only users with the `TWU-Mod` role or Discord administrator permissions can press the `Admin: Delete All` and `Admin: Export` buttons. For normal members the buttons are visible but a click is rejected by the bot with a permission error.

## 6. Plan distribution

In the `#⚫-plan-distribution` channel you'll find the `Download` button below the `Plan Distribution` embed.

![Plan-Distribution channel](../assets/discordbot/planning-system/18_planning_system_plandistribution_channel.png){ .screenshot }

![Download button in the Plan-Distribution channel](../assets/discordbot/planning-system/19_planning_system_plandistribution_channel_download_button.png){ .screenshot }

Click `Download`: The bot checks the player's linked TW accounts and sends them their attack plans for download via Discord DM.

![Plan download via DM](../assets/discordbot/planning-system/20_planning_system_plandistribution_channel_plandownload_via_dm.png){ .screenshot }

!!! info "Plan download via DM"
    For the bot to deliver the plans, direct messages from the bot must be allowed in your Discord settings. Otherwise an ephemeral error message appears in the channel reminding you to enable DMs.

## 7. Plan information

In the `#⚫-leaderview-planinfo` channel you'll find the `Retrieve Plan Information` button below the `Plan Information` embed.

![Leaderview-PlanInfo channel](../assets/discordbot/planning-system/21_planning_system_leaderview-planinfo_channel.png){ .screenshot }

![Retrieve-Plan-Information button](../assets/discordbot/planning-system/22_planning_system_leaderview-planinfo_retrieve-plan-information_button.png){ .screenshot }

Clicking `Retrieve Plan Information` opens the `Plan Information` modal. Enter the desired target coordinate in the `Coordinate` field in the format `XXX|YYY` and submit the modal to see the planned commands for that village.

![Plan Information modal](../assets/discordbot/planning-system/23_planning_system_leaderview-planinfo_retrieve-plan-information_modal.png){ .screenshot }

The bot then renders an overview directly in the channel of all currently planned commands from all active plan containers for the given coordinate.

![Bot answer with plan information](../assets/discordbot/planning-system/24_planning_system_leaderview-planinfo_retrieve-plan-information_botanswer.png){ .screenshot }

The detailed view additionally shows the individual commands with origin village, player, command type as well as launch and arrival time — so you can tell at a glance which players are preparing which command on the target village.

![Detailed bot answer with plan information](../assets/discordbot/planning-system/25_planning_system_leaderview-planinfo_retrieve-plan-information_botanswer_detailed.png){ .screenshot }

!!! info "Leaderview-PlanInfo visibility"
    The `#⚫-leaderview-planinfo` channel is by default **only visible to users with the `TWU-Mod` role**. Normal members do not see the channel — plan information thus stays within the tribe leadership.

## 8. Nuke-Replacement

In the `#⚫-nuke-replacement` channel you'll find five management buttons at the top under the `Nuke-Replacement` embed; below them, two status embeds (`NOT DONE` and `DONE`) list the current state of all replacement requests.

![Nuke-Replacement overview](../assets/discordbot/planning-system/26_planning_system_nuke_replacementsystem_overview.png){ .screenshot }

With the `Request Nuke-replacement` button you submit a new replacement request when you cannot send a planned Nuke yourself and are looking for a fellow tribe member to take it over.

![Request-Nuke-replacement button](../assets/discordbot/planning-system/27_planning_system_nuke_replacementsystem_requestnukereplacement_button.png){ .screenshot }

Clicking it opens the request modal with input fields for the target coordinate, the desired launch time and the Nuke size (entered as axe and light-cavalry count).

![Request-Nuke-replacement modal](../assets/discordbot/planning-system/32_planning_system_nuke_replacementsystem_requestnukereplacement_modal.png){ .screenshot }

After submitting, the request is sorted into the embed under `NOT DONE` so all tribe members can see where a replacement is still being sought.

![Request added to NOT DONE](../assets/discordbot/planning-system/33_planning_system_nuke_replacementsystem_requestnukereplacement_addedtonotdoneembed.png){ .screenshot }

With the `I want to replace a Nuke` button you take over an existing open request.

![I-want-to-replace-a-Nuke button](../assets/discordbot/planning-system/28_planning_system_nuke_replacementsystem_iwanttoreplaceanuke_button.png){ .screenshot }

Clicking it first opens a dropdown in which you pick the specific request you want to take over.

![Selection of the request to take over](../assets/discordbot/planning-system/34_planning_system_nuke_replacementsystem_iwanttoreplaceanuke_selectarequesttotakeover.png){ .screenshot }

Then an input field follows in which you enter your own verified account that will perform the takeover.

![Selection of the takeover account](../assets/discordbot/planning-system/35_planning_system_nuke_replacementsystem_iwanttoreplaceanuke_selecttheaccountwhotakesover.png){ .screenshot }

After a successful takeover, the request moves to the `DONE` section of the embed so it is visible to everyone that a replacement has been found.

![Request changes to DONE](../assets/discordbot/planning-system/36_planning_system_nuke_replacementsystem_iwanttoreplaceanuke_requestchangestoDONE.png){ .screenshot }

With the `Withdraw replacement` button you can take back a takeover you have already committed to; the request returns to the `NOT DONE` section.

![Withdraw-replacement button](../assets/discordbot/planning-system/29_planning_system_nuke_replacementsystem_withdrawreplacement_button.png){ .screenshot }

With the `Delete Request` button you can completely delete your own request once it is no longer needed.

![Delete-Request button](../assets/discordbot/planning-system/30_planning_system_nuke_replacementsystem_deleterequest_button.png){ .screenshot }

With `Admin: Delete all requests` you can finally delete all Nuke-Replacement requests in one go; before the deletion a confirmation prompt appears.

![Admin-Delete-all-requests button](../assets/discordbot/planning-system/31_planning_system_nuke_replacementsystem_admindeleteallrequests_button.png){ .screenshot }

!!! info "Who can delete Nuke-Replacement requests?"
    A single request can only be deleted by its creator or by a user with the `TWU-Mod` role via `Delete Request`. The `Admin: Delete all requests` button for bulk deletion of all requests is only available to users with the `TWU-Mod` role or Discord administrator permissions.
