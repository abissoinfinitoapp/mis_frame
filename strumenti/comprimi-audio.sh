#!/usr/bin/env bash
# Porta a 192 kbps tutti gli MP3 in audio/ che sono più pesanti.
# Gli originali vengono spostati in audio-originali/ (esclusa da git).
# Uso:  bash strumenti/comprimi-audio.sh

set -euo pipefail
cd "$(dirname "$0")/.."

BITRATE=192
mkdir -p audio-originali

shopt -s nullglob
for f in audio/*.mp3; do
  nome="$(basename "$f")"
  kbps=$(( $(ffprobe -v error -show_entries format=bit_rate -of default=nw=1:nk=1 "$f") / 1000 ))

  if [ "$kbps" -le $((BITRATE + 8)) ]; then
    echo "ok      $nome (${kbps} kbps)"
    continue
  fi

  mv "$f" "audio-originali/$nome"
  ffmpeg -v error -y -i "audio-originali/$nome" -map 0:a -codec:a libmp3lame -b:a ${BITRATE}k -map_metadata 0 "$f"
  prima=$(du -k "audio-originali/$nome" | cut -f1)
  dopo=$(du -k "$f" | cut -f1)
  echo "ridotto $nome: ${kbps} -> ${BITRATE} kbps, ${prima} KB -> ${dopo} KB"
done
