# tw-utils Docs

Dokumentation für [tw-utils](https://github.com/Tanzlehrer/tw-utils).

Live unter: <https://docs.tw-utils.net/>

## Lokale Vorschau

```bash
pip install -r requirements.txt
mkdocs serve
```

Öffne anschließend <http://127.0.0.1:8000>.

## Deployment

Automatisch via GitHub Actions bei Push auf `main`.

## Tutorial-Videos einbinden

Die Doku unterstützt datenschutzkonforme YouTube-Embeds (2-Klick-Lösung
über `youtube-nocookie.com`, eigenes Vorschaubild). Pro Video genügt
**eine Zeile** im Markdown.

1. Video bei YouTube hochladen — unter „Mehr anzeigen" muss
   **„Einbettung erlauben"** aktiv sein. Video-ID notieren (Teil hinter
   `v=` in der URL bzw. hinter `youtu.be/`).
2. Vorschaubild als JPG/PNG (1280×720 empfohlen) unter
   `docs/assets/<name>.jpg` ablegen.
3. Eine Zeile in die gewünschte Markdown-Datei einfügen:

   ```html
   <div class="yt-consent" data-video-id="VIDEO_ID" data-thumb="/assets/<name>.jpg" data-alt="Beschreibung"></div>
   ```

4. Bei zweisprachiger Doku denselben Snippet auch in der `.en.md`-Datei
   einfügen (gleiche `data-video-id` und `data-thumb`, `data-alt` ggf.
   auf Englisch übersetzen).
5. Commit + Push — der Rest passiert automatisch:
   - Vorschaubild mit Play-Button wird angezeigt
   - Klick 1 öffnet Datenschutz-Hinweis (DE/EN je nach Seitensprache)
   - Klick 2 lädt das Video über `youtube-nocookie.com`

### Texte ändern (Hinweis, Button-Label, DSE-Link)

Alle UI-Texte sind zentral in `docs/assets/yt-consent.js` definiert
(`TRANSLATIONS`-Objekt, `PRIVACY_URL`-Konstante). Eine Änderung wirkt
sich automatisch auf alle eingebundenen Videos aus.
