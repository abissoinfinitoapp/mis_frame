// artist.js
// Dati dell'artista mostrati nella frontpage (index.html), organizzati come l'EPK.
//
// I testi che cambiano con la lingua si scrivono così:
//   { it: "testo italiano", en: "English text" }
// Un testo scritto senza { it, en } resta uguale nelle due lingue.
// Un link con url vuoto ("") non viene mostrato. Le immagini vanno in img/.

window.ARTISTA = {
  nome: "Mis_Frame",
  sottotitolo: "Gothic / Alternative Metal",
  luogo: {
    it: "Novara · Nord Italia · Area di Milano",
    en: "Novara · Northern Italy · Milan area"
  },
  motto: {
    it: "Atmosfere oscure. Voce potente. Identità metal moderna.",
    en: "Dark atmospheres. Powerful vocals. Modern metal identity."
  },

  // Foto principale (verticale, riempie lo schermo del telefono)
  foto: "img/vera-4.jpg",

  // Carosello di foto (nell'ordine in cui scorrono)
  galleria: [
    "img/vera-1.jpg",
    "img/vera-2.jpg",
    "img/vera-3.jpg",
    "img/vera-5.jpg"
  ],

  // Sfondo tenue di tutta la pagina
  sfondoPagina: "img/cover-framelake.jpg",

  // Numeri in evidenza (dall'EPK): aggiornali quando crescono
  numeri: [
    { valore: "5K+",  titolo: { it: "Visualizzazioni Instagram", en: "Instagram views" },     nota: { it: "nel primo mese", en: "in the first month" } },
    { valore: "500+", titolo: { it: "Follower Instagram",        en: "Instagram followers" }, nota: { it: "e in crescita", en: "and growing" } },
    { valore: "2",    titolo: { it: "Singoli originali",         en: "Original singles" },    nota: { it: "disponibili su Spotify", en: "available on Spotify" } }
  ],

  // About: un paragrafo per riga
  bio: {
    it: [
      "Mis_Frame è un progetto Gothic / Alternative Metal emergente a voce femminile, con base a Novara, nel Nord Italia, nell'area di Milano.",
      "Il progetto unisce atmosfere oscure, intensità melodica, chitarre pesanti e una voce femminile espressiva, dando forma a un'identità metal contemporanea costruita su musica originale e su una forte direzione visiva.",
      "Su Spotify sono disponibili due singoli originali: “A World Without Rules” e “New Blood”. Altro materiale originale uscirà progressivamente, ampliando il catalogo e il racconto artistico del progetto.",
      "Dal recente lancio, Mis_Frame ha iniziato a costruire un pubblico organico attraverso i social, superando le 5.000 visualizzazioni su Instagram nel primo mese e i 500 follower, in costante crescita.",
      "Il prossimo passo è il palco. La formazione definitiva con band completa è in via di completamento, insieme a una live session professionale di tre brani pensata per promoter, agenzie di booking, locali e organizzatori di festival."
    ],
    en: [
      "Mis_Frame is an emerging female-fronted Gothic / Alternative Metal project based in Novara, Northern Italy, within the Milan area.",
      "The project combines dark atmospheres, melodic intensity, heavy guitars and expressive female vocals, shaping a contemporary metal identity built around original music and a strong visual direction.",
      "Two original singles are currently available on Spotify: “A World Without Rules” and “New Blood”. Further original material will be released progressively, expanding the project catalogue and its artistic narrative.",
      "Since its recent launch, Mis_Frame has begun building an organic audience through social media, reaching more than 5,000 Instagram views in the first month and over 500 followers, with continued growth.",
      "The next step is the live stage. The definitive full-band line-up is currently being completed, together with a professional three-song live session created for promoters, booking agencies, venues and festival organizers."
    ]
  },

  // Genere e influenze
  generi: ["Gothic Metal", "Alternative Metal", "Dark Rock", "Modern Melodic Metal"],

  // Prossima uscita, mostrata in evidenza con l'anteprima audio.
  // Lascia titolo "" per non mostrarla.
  //   anteprima: estratto audio in estratti/
  //   video:     copertina animata (facoltativa)
  //   link:      pre-save (facoltativo), linkTesto: testo del pulsante
  prossima: {
    titolo: "I Can't Be Ready",
    tipo: { it: "Singolo", en: "Single" },
    data: { it: "28 novembre 2026", en: "November 28, 2026" },
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
      tipo: { it: "Singolo", en: "Single" },
      anno: "2026",
      data: { it: "7 novembre 2026", en: "November 7, 2026" },
      copertina: "img/cover-new-blood.jpg",
      estratto: "estratti/new-blood.mp3",
      link: "https://open.spotify.com/album/3BozLhrZmMiO6qIw8hoNrM"
    },
    {
      titolo: "A World Without Rules",
      tipo: { it: "Singolo", en: "Single" },
      anno: "2026",
      copertina: "img/cover-a-world-without-rules.jpg?v=2",
      estratto: "estratti/a-world-without-rules.mp3",
      link: "https://open.spotify.com/album/16sY4rROTUTHP8RZgUfppN"
    }
  ],

  // Live & booking
  live: {
    testo: {
      it: "Mis_Frame sta preparando la produzione live e completando la formazione definitiva con band completa per i prossimi concerti. È in produzione una live session professionale con tre brani originali, presto disponibile per promoter, agenzie di booking, locali e organizzatori di festival.",
      en: "Mis_Frame is preparing its live production and completing the definitive full-band line-up for upcoming performances. A professional live session featuring three original tracks is currently in production and will soon be available for promoters, booking agencies, venues and festival organizers."
    },
    schede: [
      { titolo: "Support slots",
        testo: { it: "Aperture selezionate per artisti Metal, Gothic Metal, Alternative Metal e generi affini.",
                 en: "Selected opening opportunities with Metal, Gothic Metal, Alternative Metal and related artists." } },
      { titolo: "Festival",
        testo: { it: "Opportunità per artisti emergenti e partecipazioni a festival in Italia e in alcuni mercati europei.",
                 en: "Emerging artist opportunities and festival appearances in Italy and selected European markets." } },
      { titolo: "Club shows",
        testo: { it: "Date selezionate nei club, showcase ed eventi metal / alternative.",
                 en: "Selected club dates, showcases and metal / alternative events." } },
      { titolo: { it: "Date europee", en: "European dates" },
        testo: { it: "Opportunità internazionali adatte, in base al percorso del tour e alle esigenze di produzione.",
                 en: "Suitable international opportunities, subject to routing and production requirements." } }
    ],
    info: [
      { etichetta: { it: "Base",       en: "Based in" },   valore: { it: "Novara · Area di Milano", en: "Novara · Milan area" } },
      { etichetta: { it: "Formazione", en: "Format" },     valore: { it: "Band completa", en: "Full band" } },
      { etichetta: { it: "Repertorio", en: "Repertoire" }, valore: { it: "Brani originali", en: "Original material" } },
      { etichetta: "Live session",                         valore: { it: "In produzione", en: "In production" } }
    ]
  },

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

  // Booking (come nell'EPK). Lascia "" per non mostrare il telefono.
  contatti: "missframeartist@gmail.com",
  telefono: "+39 348 574 4940"
};
