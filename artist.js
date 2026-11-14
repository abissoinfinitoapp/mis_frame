// artist.js
// Dati dell'artista mostrati nella frontpage (index.html).
// Sostituisci i testi tra virgolette. Le immagini vanno nella cartella img/.
// Un link con url vuoto ("") non viene mostrato.

window.ARTISTA = {
  nome: "Mis_Frame",
  sottotitolo: "Gothic / Alternative Metal",
  // Bio (dall'EPK): un paragrafo per riga
  bio: [
    "Mis_Frame è un progetto Gothic / Alternative Metal a voce femminile nato a Novara, nell'area di Milano.",
    "Atmosfere oscure, intensità melodica, chitarre pesanti e una voce espressiva: un'identità metal contemporanea costruita su musica originale e su una forte direzione visiva.",
    "Su Spotify sono disponibili i singoli originali “A World Without Rules” e “New Blood”; altro materiale originale uscirà progressivamente.",
    "Il prossimo passo è il palco: la formazione definitiva con band completa è in via di definizione, insieme a una live session professionale di tre brani dedicata a promoter, agenzie di booking, locali e festival."
  ],

  // Foto principale (verticale, riempie lo schermo del telefono)
  foto: "img/vera-4.jpg",

  // Carosello di foto sotto l'header (nell'ordine in cui scorrono)
  galleria: [
    "img/vera-1.jpg",
    "img/vera-2.jpg",
    "img/vera-3.jpg",
    "img/vera-5.jpg"
  ],

  // Sfondo tenue di tutta la pagina, sotto la foto principale
  sfondoPagina: "img/cover-framelake.jpg",

  // Prossima uscita, mostrata in evidenza con l'anteprima audio.
  // Lascia titolo "" per mostrare invece l'ultima uscita pubblicata.
  //   anteprima: estratto audio in estratti/
  //   video:     copertina animata (facoltativa)
  //   link:      pre-save (facoltativo), linkTesto: testo del pulsante
  prossima: {
    titolo: "I Can't Be Ready",
    tipo: "Singolo",
    data: "28 novembre 2026",
    copertina: "img/cover-i-cant-be-ready.jpg",
    video: "",
    anteprima: "estratti/i-cant-be-ready.mp3",
    link: "",
    linkTesto: "Pre-save"
  },

  // Uscite pubblicate, dalla più recente.
  //   estratto: circa 30 secondi in estratti/ (NON il brano intero)
  //   link:     dove ascoltare il brano completo
  uscite: [
    {
      titolo: "New Blood",
      tipo: "Singolo",
      anno: "2026",
      data: "7 novembre 2026",
      copertina: "img/cover-new-blood.jpg",
      estratto: "estratti/new-blood.mp3",
      link: "https://open.spotify.com/album/3BozLhrZmMiO6qIw8hoNrM"
    },
    {
      titolo: "A World Without Rules",
      tipo: "Singolo",
      anno: "2026",
      copertina: "img/cover-a-world-without-rules.jpg",
      estratto: "estratti/a-world-without-rules.mp3",
      link: "https://open.spotify.com/album/16sY4rROTUTHP8RZgUfppN"
    }
  ],

  // Store e piattaforme di ascolto
  store: [
    { nome: "Spotify",       url: "https://open.spotify.com/artist/7BFveF1jeRU5WFZIRJcoML" },
    { nome: "Apple Music",   url: "https://music.apple.com/ca/artist/mis-frame/6821687939" },
    { nome: "YouTube Music", url: "" },
    { nome: "Amazon Music",  url: "https://music.amazon.co.uk/artists/B0HMPVKGZB/mis_frame" },
    { nome: "Deezer",        url: "" },
    { nome: "Tidal",         url: "" }
  ],

  // Social
  social: [
    { nome: "Instagram", url: "https://www.instagram.com/mis_frame_official/" },
    { nome: "YouTube",   url: "" },
    { nome: "TikTok",    url: "" },
    { nome: "Facebook",  url: "" }
  ],

  contatti: "missframeartist@gmail.com"   // booking
};
