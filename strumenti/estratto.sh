#!/usr/bin/env bash
# Crea un estratto (anteprima) da un brano completo, con dissolvenza in entrata e in uscita.
# Il brano completo NON viene pubblicato: tienilo in brani-completi/ (esclusa da git).
#
# Uso:  bash strumenti/estratto.sh "brani-completi/New Blood.mp3" new-blood 1:05 30
#        - file di partenza
#        - nome dell'estratto (diventa estratti/<nome>.mp3)
#        - da dove iniziare (minuti:secondi), di solito il ritornello
#        - durata in secondi (facoltativa, predefinita 30)

set -euo pipefail
cd "$(dirname "$0")/.."

ingresso="$1"
nome="$2"
inizio="$3"
durata="${4:-30}"
fine_fade=$(( durata - 3 ))

mkdir -p estratti
ffmpeg -v error -y -ss "$inizio" -t "$durata" -i "$ingresso" -map 0:a \
  -af "afade=t=in:st=0:d=1.5,afade=t=out:st=${fine_fade}:d=3" \
  -codec:a libmp3lame -b:a 160k "estratti/${nome}.mp3"

echo "creato estratti/${nome}.mp3 ($(du -k "estratti/${nome}.mp3" | cut -f1) KB, ${durata}s da ${inizio})"
