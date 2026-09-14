# Troops

![Troops overview](../assets/leaderview/04_leaderview_troops.png){ .screenshot }

The **"Troops"** tab manages the troop-data uploads per tribe. The
data uploaded here is the basis for many other features — both in the
Leader-View (e.g. Bunker-Info) and in the modules of the tw-utils
Discord bot.

!!! info "Re-use by the Discord bot"
    The uploaded **"Troops in village"** data is automatically synced
    with the tw-utils Discord bot and re-used there in the
    **Bunker-Information-System** and **Off/Deff/Snob-Search-System**
    modules.

!!! info "Who sees this tab?"
    The **"Troops"** tab is visible to all four roles — TWU-Troops,
    TWU-Bunker, TWU-Planner and TWU-Leader. Details under
    [Permission](uebersicht.md#which-role-sees-which-tab).

## Table columns

| Column | Meaning |
|---|---|
| **#** | Running number |
| **Tribe** | Tribe the data belongs to |
| **Scope** | "Troops in village" or "Total troops" |
| **Villages** | Number of villages in the dataset |
| **Uploaded at** | Timestamp of the last upload |
| **Uploaded by** | Discord user who triggered the upload |
| **Actions** | Delete entry (trash icon) |

## The two scopes

When uploading you choose which view of the troops the file contains.
Both views can be maintained in parallel.

- **Troops in village** — only the troops currently actually standing
  in the village (i.e. no troops in transit).
- **Total troops** — all existing troops of a village (in village +
  in transit). Pure inventory/analysis view.

## Uploading troops

The button **"Upload Troops"** (top right) opens the upload dialog:

![Upload Troops — dialog](../assets/leaderview/38_leaderview_troops_upload.png){ .screenshot }

Dialog fields:

- **Tribe tag** — tag of the tribe the data belongs to (e.g. `ABC`).
  While typing, the field suggests matching tribes of the current
  world; a tag that does not exist on the world is rejected on upload.
- **Scope** — choose either **"Troops in village"** or
  **"Total troops"** (see [The two scopes](#the-two-scopes)). If the
  selected file names exactly one scope itself, the selection jumps to
  it automatically. What is set here still decides, though: if the file
  does not contain the selected scope, the upload is rejected with a
  message naming what it contains instead.
- **Troops file (.txt, .csv, .json)** — the file produced by one of the
  two supported export scripts (see
  [Expected file format](#expected-file-format)).

An upload always **replaces** the entire previous dataset for that
combination of tribe and scope — nothing is merged. An upload without
any usable rows leaves the existing data untouched instead of clearing
it.

If the file contains units that do not exist on the world at all (e.g.
the export of an archer world for a tribe on a world without archers),
the upload is rejected with a message instead of importing the data
halfway. The success message additionally reports skipped rows and
players who have no unit in any village — the most common cause for
that is a missing troop-sharing setting in the tribe.

### Expected file format

Two export scripts are supported. **You never choose which format you
are uploading** — it is detected from the content of the file. The
allowed file extensions are `.txt`, `.csv` and `.json`.

The file must contain troop columns — a buildings-only export is rejected.
A pure building export is rejected because it contains no troop columns.

#### "Download Tribe Info"

The [quickbar script](https://forum.tribalwars.net/index.php?threads/download-tribe-info.285469/)
downloads the file directly. It must contain a header line with the
column names as its first line, followed by one line per village:

```
Coords,Player,spear,sword,axe,archer,spy,light,marcher,heavy,ram,catapult,knight,snob
483|520,Testuser A,2421,6099,100,5963,50,50,3632,200,5,279,0,8
543|538,Testuser A,100,100,6027,100,6,3014,100,100,159,5,0,0
467|559,Testuser A,3779,4836,100,4803,40,50,6309,1584,5,80,0,0
465|523,Testuser B,4298,5495,100,6752,23,50,5761,1131,5,35,0,0
468|515,Testuser B,721,4160,100,2280,61,50,5935,832,5,308,0,4
```

This format does not say which scope it contains — here your selection
in the **Scope** field alone decides.

#### "NeilsTribeInfo"

Where the in-game **Script Library** exists — on the .net worlds,
for instance — you do not have to install anything: it is listed
there as **"NeilB Tribe Info"**, and one click on **"Activate"**
puts it on your quick bar. The screenshot shows **"Deactivate"**
because the script is already active there.

![NeilB Tribe Info in the in-game Script Library](../assets/leaderview/59_leaderview_troops_script_library.png){ .screenshot }

!!! info "This script does not download a file"
    Instead of a download it offers the buttons **"Copy CSV"** and
    **"Copy JSON"** — the result ends up in the **clipboard**. So paste
    it into an editor (e.g. Notepad) and save it as a file before
    uploading it here.

The file starts with an `exported_at` line, followed by the quoted
column line and one line per village:

```
exported_at,1789240946
"player_name","player_id","village","coords","points","spear","sword","axe",…
"Testuser A","9859907","Test village (603|576) K56","603|576","5491","2222","11","12",…
```

This format names the scope itself: the script page **"Troops"**
yields **Total troops**, the page **"Defence"** yields **Troops in
village**. Troops in transit are deliberately not taken over.
