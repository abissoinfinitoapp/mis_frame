// songs.js
// Elenco brani della pagina "brani.html", nell'ordine in cui vuoi vederli.
//
// Per ogni brano servono:
//   - guida: MP3 con la voce guida        -> cartella audio/
//   - base:  MP3 solo base strumentale    -> cartella audio/
//   - testo: file .txt con il testo       -> cartella testi/
//
// Nel file di testo:
//   - una riga vuota separa le strofe
//   - una riga tra parentesi quadre è un'etichetta, es. [Ritornello]
//
// Esempio (togli // davanti alle righe per attivarlo):
//
//   {
//     id: "titolo-brano",
//     titolo: "Titolo Brano",
//     guida: "audio/titolo-brano-guida.mp3",
//     base:  "audio/titolo-brano-base.mp3",
//     testo: "testi/titolo-brano.txt"
//   },

window.BRANI = [

  {
    id: "nobody-owns-my-freedom-tonight",
    titolo: "Nobody Owns My Freedom Tonight",
    guida: "audio/Nobody owns my freedom tonight vocal.mp3",
    base:  "audio/Nobody owns my freedom tonight base.mp3",
    testo: "testi/Nobody owns my freedom tonight.txt"
  },

  {
    id: "im-leaving-here",
    titolo: "I'm Leaving Here",
    guida: "audio/i living here guida.mp3",
    base:  "audio/i living here base.mp3",
    testo: "testi/i living here.txt"
  },

  {
    id: "insane",
    titolo: "Insane",
    guida: "audio/insane guida.mp3",
    base:  "audio/insane base.mp3",
    testo: "testi/Insane.txt"
  },

];
