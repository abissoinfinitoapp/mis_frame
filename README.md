# Sito artista

Due pagine, nessun login, nessun database:

- `index.html` — frontpage pubblica: foto, prossima uscita con **anteprima**, bio, discografia con **estratti**, link store e social
- `brani.html` — **area di studio per la cantante**, NON collegata dalla home e nascosta ai motori di ricerca:
  per ogni brano **traccia guida**, **base** e **testo**, pensati per lo smartphone.
  Si apre solo con il link diretto: `https://<dominio>/brani.html`

## Dove mettere le cose

| Cosa | Dove |
|---|---|
| Nome, bio, uscite, link store/social | `artist.js` |
| Foto artista, copertine, video | cartella `img/` |
| Brani completi pubblicati (solo per tagliare gli estratti, non pubblicati) | cartella `brani-completi/` |
| Estratti e anteprime per la home | cartella `estratti/` |
| MP3 guida e base (area di studio) | cartella `audio/` |
| Testi (.txt) (area di studio) | cartella `testi/` |
| Elenco brani di studio | `songs.js` |

Nei testi: una riga vuota separa le strofe, `[Ritornello]` su una riga diventa un'etichetta.

## Creare un estratto

```bash
bash strumenti/estratto.sh "brani-completi/New Blood.mp3" new-blood 1:05 30
```

Taglia 30 secondi a partire da 1:05, con dissolvenza. Poi in `artist.js` metti `estratto: "estratti/new-blood.mp3"`
(per la prossima uscita: `anteprima: ...`).

## Ridurre gli MP3 di studio

```bash
bash strumenti/comprimi-audio.sh
```

Porta a 192 kbps gli MP3 in `audio/` più pesanti (serve ffmpeg). Gli originali finiscono in
`audio-originali/`, che non viene pubblicata.

## Cartelle non pubblicate

`brani-completi/`, `audio-originali/`, `img-originali/` sono escluse da git (`.gitignore`).

## Avvio locale

```bash
python -m http.server 5500
```

Apri `http://127.0.0.1:5500`
