# tw-utils Documentation

Welcome to the documentation of **tw-utils**.

<div class="yt-consent yt-consent--home" data-video-id="mSUZ7KQLL0o" data-thumb="/assets/what-is-tw-utils-thumb.png" data-alt="What is tw-utils? — video preview"></div>

<div class="home-cards" markdown>

<div class="home-card" markdown>
<div class="home-card__icon"><img src="/assets/logo.png" alt="tw-utils Logo"></div>
<div class="home-card__body" markdown>
### tw-utils Discord Bot
Useful tools for your tribe Discord.
<p class="home-card__actions" markdown>
[Invite Bot](https://discord.com/oauth2/authorize?client_id=1457061148980547715&permissions=8&integration_type=0&scope=bot+applications.commands){ target=_blank rel=noopener }
[Quick-Setup-Guide](discord-bot/quick-setup.md)
</p>
</div>
</div>

<div class="home-card" markdown>
<div class="home-card__icon home-card__icon--community"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"/></svg></div>
<div class="home-card__body" markdown>
### Community Discord
Questions, feedback and chat around tw-utils.
<p class="home-card__actions" markdown>
[Join Discord](https://discord.com/invite/rfnGvvGs78){ target=_blank rel=noopener }
</p>
</div>
</div>

</div>

## FAQ

??? question "How do I link my Tribal Wars account?"
    In your tribe Discord, switch to the `#⚫-bot-config` channel and click `Account-Verification`. The bot walks you through the wizard: enter your player name, paste the generated code into your in-game profile, confirm with the `Verify` button.

    → [Account-Verification](discord-bot/verifizierung.md)

??? question "How do I report snobs, launch times, and exclude villages from nuke planning?"
    Via the tw-utils Discord bot in the `#⚫-queries` channel of your tribe Discord. Three buttons are available:

    - `Snob Report` — report snobs
    - `Launch Times` — enter your own launch time windows
    - `Off-Exclusion` — exclude source villages that the nuke planner should not use

    Each button opens a sub-menu with `Add` / `Show` / `Delete`.

    → [Planning-System](discord-bot/planning-system.md)

??? question "How do I request a bunker?"
    Switch to the `#⚫-request-bunker` channel and click the `Request Bunker` button. Enter the coordinate(s), the desired dual strength, and a justification. The bot creates a per-coordinate request channel where a TWU-Mod approves or rejects.

    → [Bunker-Information-System](discord-bot/bunker-info.md)

??? question "How do I request a top-up for a bunker?"
    In the same `#⚫-request-bunker` channel there is a separate `Request Top-Up` button. Enter the coordinate(s) of the existing bunker and the **additional** dual strength. The bot creates a per-coordinate top-up request channel where TWU-Mods approve the top-up.

    → [Bunker-Information-System](discord-bot/bunker-info.md)

??? question "How do I get Leader-View access as tribe leadership?"
    In two steps: (1) Link your Tribal Wars account in the `#⚫-bot-config` channel via `Account-Verification`. (2) A Discord admin grants you Leader rights via the `Manage Access to Leader-View` button → `Grant Access`. Afterwards you have access to the Leader-View on [tw-utils.net](https://tw-utils.net).

    → [Leader-View — Permission](leader-view/uebersicht.md)

??? question "Why can't I use some buttons of the tw-utils Discord bot even though I have administrator rights on the Discord server?"
    Discord administrator rights are only relevant for the initial bot setup. For ongoing management (activating modules, processing bunker requests, uploading troop data), you need the **TWU-Mod** role — a separate Discord role that your server admin assigns manually.

    → [Permission Concept](discord-bot/berechtigungskonzept.md)

??? question "What format does the uploaded troops file need to have?"
    A **TXT or CSV file** with comma-separated values. It is most easily generated via the in-game quickbar script ["Download Tribe Info"](https://forum.tribalwars.net/index.php?threads/download-tribe-info.285469/). The file must start with a header row (`Coords,Player,spear,sword,axe,…,snob`), followed by one row per village with coordinates and troop counts.

    → [Leader-View — Troops](leader-view/truppen.md)
