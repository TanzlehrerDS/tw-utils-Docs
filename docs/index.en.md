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

<div class="home-card" markdown>
<div class="home-card__icon home-card__icon--api"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="8 6 3 12 8 18"/><polyline points="16 6 21 12 16 18"/><line x1="13.5" y1="4.5" x2="10.5" y2="19.5"/></svg></div>
<div class="home-card__body" markdown>
### API documentation
For script developers: endpoints, authentication and examples.
<p class="home-card__actions" markdown>
[Open API docs](https://tw-utils.net/api/v1/docs){ target=_blank rel=noopener }
</p>
</div>
</div>

</div>

## FAQ

### Getting started & account

??? question "How do I link my Tribal Wars account?"
    In your tribe Discord, switch to the `#⚫-bot-config` channel and click `Account-Verification`. The bot walks you through the wizard: enter your player name, paste the generated code into your in-game profile, confirm with the `Verify` button.

    → [Account-Verification](discord-bot/verifizierung.md)

??? question "Do I need an account — does it work without Discord?"
    No, the Discord login is the only way into the website; there is no sign-up or password form. tw-utils does **not** request an email address from Discord — only your Discord ID, your name and your avatar are stored.

    → [Quick-Setup-Guide](discord-bot/quick-setup.md)

??? question "My verification code does not work — what can I do?"
    The code `TWU-VERIFY-XXXXXX` is valid for **15 minutes** and allows **3 attempts**; after that simply restart the wizard. The bot reads your **public** profile page, so make sure the profile is saved before you click `Verify`. Once verification succeeded you may remove the code from your profile again.

    → [Account-Verification](discord-bot/verifizierung.md)

??? question "Can I link several in-game accounts (dual, sitter)?"
    Yes. You can link as many accounts as you like per server and world — every reporting dialog then shows a picker for the account you are reporting for. The other way round, several Discord users may be linked to the same in-game account.

    → [Account-Verification](discord-bot/verifizierung.md)

??? question "What happens to my data when I leave the Discord server?"
    **Deleted** is everything personal: your account links, your tw-utils roles, pending verifications, the notification settings for that server, and that server's API key.

    **Kept** is everything that belongs to the tribe: snob reports, launch times, off exclusions, bunker reports and troop counts. Only the link to your Discord account disappears there — the data itself stays usable for planning.

### Worlds, times & data freshness

??? question "Why does tw-utils show different times than my system clock?"
    All times run in the timezone of the **selected game world**, never in your browser or system time. The world determines the timezone via its market (de/ch/en); switching the world at the top updates every display immediately. The same applies to your input — launch and arrival times are always server time.

??? question "How up to date is the village and player data?"
    The world data is a snapshot that is **refreshed every hour**. Newly founded or conquered villages, renames and tribe changes can therefore be missing for up to an hour — this is also the most common reason a verification reports “account not found”. Player and tribe names in already saved plans are updated automatically on the next data run.

??? question "We are switching the world in the bot — what happens then?"
    Switching the world is a **complete reset of the server**, not a simple toggle. The bot first deletes the channels and categories of every installed module, then wipes all server data: containers and plans, troops, running commands, **all account links**, all granted tw-utils roles, surveys, the configurations of the bunker, sitting and search systems, and all API keys.

    Afterwards **every member has to verify again**, roles have to be granted again and the modules have to be reinstalled. The same happens when the bot is removed from the server.

    → [Module setup](discord-bot/modul-verwaltung.md)

??? question "My world is missing from the list — or the bot does not know it."
    Only worlds that tw-utils already holds in its world data can be selected. A brand-new world therefore appears only after the next data run. Closed worlds disappear from the dropdown — the plans saved for them are kept and are not lost.

    → [Quick-Setup-Guide](discord-bot/quick-setup.md)

### Roles & permissions

??? question "How do I get Leader-View access as tribe leadership?"
    In two steps: (1) Link your Tribal Wars account in the `#⚫-bot-config` channel via `Account-Verification`. (2) You need a tw-utils role. If the server already has a `TWU-Leader`, they grant it to you directly in the Leader-View under `Members` → `Manage`. If nobody is a leader yet, a Discord admin appoints the first one via `Manage Access to Leader-View` → `Grant Access`.

    → [Leader-View — Permission](leader-view/uebersicht.md)

??? question "Are my Discord administrator rights enough to use tw-utils?"
    In the **Discord bot** yes: anyone holding the Discord permission `Administrator` can reach every management button, permanently. On the **website** no — the Leader-View only opens for someone holding a tw-utils role: **TWU-Leader** for bot configuration and modules, **TWU-Bunker** for bunker requests, **TWU-Troops** for troop data, **TWU-Planner** for planning. They are granted in the Leader-View under `Members` → `Manage`; the first TWU-Leader is appointed by a Discord admin via `Manage Access to Leader-View` → `Grant Access`. The former Discord role **TWU-Mod** no longer exists.

    → [Permission Concept](discord-bot/berechtigungskonzept.md)

??? question "I have no tw-utils role — what am I still allowed to do?"
    Every verified member may, without holding any role at all: view their **own** planned commands, upload and view their **own** running commands, and view their **own** troops. So there is no such thing as “no access” — roles widen the view onto everyone else's data.

    → [Permission Concept](discord-bot/berechtigungskonzept.md)

??? question "Which role do I need for what?"
    The roles build on each other:

    - **TWU-Troops** — the tribe's troop data
    - **TWU-Bunker** — troop data **plus** the bunker information system
    - **TWU-Planner** — troop data **plus** planning and all read access
    - **TWU-Leader** — all of the above, plus granting roles, member management, bot configuration and modules

    → [Permission Concept](discord-bot/berechtigungskonzept.md)

??? question "Why can I not remove the leader role from myself?"
    Two safeguards keep a server from locking itself out: nobody can take the leader role away from themselves, and the **last** remaining leader cannot be removed. Another leader always has to make the change. When someone leaves the Discord server, the safeguards deliberately do not apply.

    → [Leader-View — Members](leader-view/mitglieder.md)

??? question "Why does the bot not react in my channel — and why do my messages disappear?"
    Every bot function is bound to the channel it was set up in; if you post elsewhere, the bot points you to the right channel. Inside the module channels every typed message is deleted again right away, with a short hint to use the buttons instead. Those channels are pure button interfaces, not chats.

    → [Module setup](discord-bot/modul-verwaltung.md)

### Discord bot: reports & bunkers

??? question "How do I report snobs, launch times, and exclude villages from nuke planning?"
    Via the tw-utils Discord bot in the `#⚫-queries` channel of your tribe Discord. Three buttons are available:

    - `Snob Report` — report snobs
    - `Launch Times` — enter your own launch time windows
    - `Off-Exclusion` — exclude source villages that the nuke planner should not use

    Each button opens a sub-menu with `Add` / `Show` / `Delete`.

    A **running tribe survey** is required: if there is none, the bot rejects the entry. If several are running, it first asks which one you mean.

    → [Planning-System](discord-bot/planning-system.md)

??? question "How do I request a bunker?"
    Switch to the `#⚫-request-bunker` channel and click the `Request Bunker` button. Enter the coordinate(s), the desired dual strength, and a justification. The bot creates a per-coordinate request channel where a `TWU-Bunker` approves or rejects.

    → [Bunker-Information-System](discord-bot/bunker-info.md)

??? question "How do I request a top-up for a bunker?"
    In the same `#⚫-request-bunker` channel there is a separate `Request Top-Up` button. Enter the coordinate(s) of the existing bunker and the **additional** dual strength. The bot creates a per-coordinate top-up request channel where a `TWU-Bunker` approves the top-up.

    → [Bunker-Information-System](discord-bot/bunker-info.md)

??? question "“There is currently no active survey” — what does that mean?"
    Reports are always tied to a running tribe survey. A survey ends automatically as soon as its deadline has passed — it may still show as active in the overview, but it no longer accepts anything. The tribe leadership then has to start a new one.

    → [Leader-View — Tribe Surveys](leader-view/stammes-umfragen.md)

??? question "Why can I no longer find my old report — and why can I not delete someone else's?"
    Every report belongs to **one** specific survey. `Show` and `Delete` therefore only ever list the entries of the currently selected survey — the same coordinate can appear in several surveys. On top of that, only the owner of the reported account may delete an entry; for launch times the planning leadership can reach other people's entries as well.

    → [Planning-System](discord-bot/planning-system.md)

### Troops & uploads

??? question "What format does the uploaded troops file need to have?"
    A **`.txt` file** with comma-separated values. It is most easily generated via the in-game quickbar script ["Download Tribe Info"](https://forum.tribalwars.net/index.php?threads/download-tribe-info.285469/). The file must start with a header row (`Coords,Player,spear,sword,axe,…,snob`), followed by one row per village with coordinates and troop counts.

    The **content** is CSV, but the **file extension** has to be `.txt` — a file named `troops.csv` is rejected and has to be renamed first.

    → [Leader-View — Troops](leader-view/truppen.md)

??? question "How long is uploaded troop data kept?"
    **5 days.** A daily cleanup removes older uploads — separately per tribe and per scope. For reliable planning you should therefore re-upload your troops regularly.

    → [Leader-View — Troops](leader-view/truppen.md)

??? question "Why does my new upload not overwrite the old troops?"
    “Total troops” and “troops in village” are **two separate data sets**. An upload only ever replaces the data of the same scope for the same tribe — if you accidentally upload into the other scope, the old data set stays untouched next to it. Deleting requires the scope as well.

    → [Leader-View — Troops](leader-view/truppen.md)

### Planning, calculation & plans

??? question "Why does my calculation abort after about 14 minutes?"
    There is a hard time limit of 14 minutes per calculation. For very large plans it helps to reduce the number of targets or source villages and to plan in several runs.

    → [Nuke planning tool — Calculation](off-planner/schritt7-berechnung.md)

??? question "I closed the tab — can I get the result back?"
    No. Leaving the page cancels a running calculation, and finished results expire after 24 hours anyway. A result you want to keep has to be saved as a plan — saved plans are kept permanently.

    → [Saved Plans](meine-plaene/gespeicherte-plaene.md)

??? question "My tribe mates cannot see the published plan."
    Only **active** containers are delivered — the same switch also controls whether reminders go out. While a container is inactive, nobody but the tribe leadership sees it. You will find the switch in the container overview.

    → [Published Containers](meine-plaene/container.md)

??? question "What is the “Gesamtplan” (overall plan)?"
    Besides the plans of the individual players, tw-utils creates an additional collective plan containing **all** commands on every publish. It is always called `Gesamtplan`, sorts first in every list and is meant as an overview for the tribe leadership.

    → [Leader-View — Planning](leader-view/planung.md)

??? question "What happens to the DS-Ultimate plans when I delete a container?"
    The plans themselves **stay on DS-Ultimate** — once created, a DSU plan can no longer be deleted through the interface. Deleting the container only **empties** it: all commands are removed from the associated DSU plans.

    Links you already handed out therefore keep working, but show an empty plan afterwards. To get rid of the plan for good you have to delete it on DS-Ultimate directly.

    → [Leader-View — Planning](leader-view/planung.md)

### Notifications

??? question "I enabled reminders but receive no DM."
    Three things have to line up — check them in order:

    1. Direct messages have to be allowed in the Discord privacy settings **of that server**. If they are blocked there is no fallback — the bot simply cannot reach you.
    2. The switch for that notification type has to be on.
    3. On top of that, the switch **for that server** has to be on.

    → [Notifications](benachrichtigungen.md)

??? question "Why did I get only one DM for several commands — and how do I set the lead time?"
    All due commands of one world arrive together in **one** message; a cooldown then applies so the bot does not message you every minute. You can set a lead time of **1 to 15 minutes** (default 5) and a cooldown of **1 to 60 minutes** (default 15). If you change account links, that takes effect on reminders within the next hour.

    → [Notifications](benachrichtigungen.md)

??? question "Why are the bot's messages always in English?"
    That is intentional: the Discord bot replies in English throughout, regardless of the world and of the language you selected on the website. The website itself is available in German and English.

    → [Notifications](benachrichtigungen.md)

### My commands, share links & API

??? question "I changed a command — why does the shared link still show the old state?"
    A share link is a **frozen snapshot** of the moment you created it. Later changes as well as new or deleted commands do not appear in it — for an up-to-date state simply create a new link. Links are valid for at most **7 days**; after that the page reports that the link has expired.

??? question "How do I get an API key — and why do I not see the field?"
    You create the key under “My accounts” on the card of the respective server. Two prerequisites: you have to be verified on **that** server, and the card has to belong to the world currently set for that server. There is exactly **one key per user and server**.

    → [API documentation](https://tw-utils.net/api/v1/docs){ target=_blank rel=noopener }

??? question "I lost my API key — where can I look it up?"
    You cannot. The key is shown in plain text **exactly once**, right after it is created — only a checksum is stored. You can get a replacement at any time via “regenerate”, but that invalidates the old key immediately and it has to be replaced in every script.

    → [API documentation](https://tw-utils.net/api/v1/docs){ target=_blank rel=noopener }

??? question "My script gets “429 / too many requests” — does a new key help?"
    No. The limits are tied to you and the server, not to the key — regenerating does not reset them. They are: troop upload once every **5 minutes** per tribe and scope, running commands once per **minute** per player, queries **one per second**. An upload rejected because of a format error does not consume the quota.

    → [API documentation](https://tw-utils.net/api/v1/docs){ target=_blank rel=noopener }
