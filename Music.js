// Navigation Bar buttons
const home = document.querySelector(".Home");
const About = document.querySelector(".About");
const topartist = document.querySelector(".TopA");
const trending = document.querySelector(".Trending");

// Sections
const Aboutsection = document.querySelector(".About-display");
const TopArtistsection = document.querySelector(".TopArtist");
const Trendingsection = document.querySelector(".Trending-display");
const mainsection = document.querySelector(".main");

// Music Card buttons
const Play = document.querySelector(".play");
const volume = document.querySelector(".volume");
const loop = document.querySelector(".loop");

// Songs Cards Buttons
const harrystyles = document.querySelector(".imaf_HarryStyles");
const BillieEilish = document.querySelector(".imaf_BillieEilish");
const edsheeran = document.querySelector(".imaf_EdSheeran");
const arianagrande = document.querySelector(".imaf_ArianaGrande");
const zyanmalik = document.querySelector(".imaf_ZyanMalik");
const dualipa = document.querySelector(".imaf_DuaLipa");
const taylorswift = document.querySelector(".imaf_TaylorSwift");
const bts = document.querySelector(".imaf_BTS");
const justinbieber = document.querySelector(".imaf_JustinBieber");
const shawnmendes = document.querySelector(".imaf_ShawnMendes");
const selenagomez = document.querySelector(".imaf_SelenaGomes");
const blackpink = document.querySelector(".imaf_Blackpink");

// Navigation Bar switching
const sections = [Aboutsection, TopArtistsection, Trendingsection, mainsection];

const work = function (sec) {
  for (let i = 0; i < sections.length; i++) {
    if (!sections[i].classList.contains("hidden") && sections[i] != sec) {
      sections[i].classList.add("hidden");
    }
  }
};

home.addEventListener("click", function () {
  work(mainsection);
  mainsection.classList.remove("hidden");
});

About.addEventListener("click", function () {
  work(Aboutsection);
  Aboutsection.classList.remove("hidden");
});

topartist.addEventListener("click", function () {
  work(TopArtistsection);
  TopArtistsection.classList.remove("hidden");
});

trending.addEventListener("click", function () {
  work(Trendingsection);
  Trendingsection.classList.remove("hidden");
});

// Music Playing
let songsofartist = [
  {
    artistname: "Ed-sheeran",
    Song: "Shape of You",
    image:
      "https://st2.depositphotos.com/6694302/9685/i/600/depositphotos_96855090-stock-photo-ed-sheeran-concert.jpg",
    path: "ShapeOfYou-Edsheeran.mp3",
    id: 1,
  },
  {
    artistname: "Zyan",
    Song: "Dusk Till Dawn",
    image:
      "https://aniportalimages.s3.amazonaws.com/media/details/zayynuuumsdfs2022011512393420220115124425.jpg",
    path: "DuskTillDawn-Zyan.mp3",
    id: 2,
  },
  {
    artistname: "Billie Eilish",
    Song: "Lovely",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg/800px-Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg",
    path: "Lovely-BillieEilish.mp3",
    id: 3,
  },
  {
    artistname: "Ariana Grande",
    Song: "Positions",
    image: "https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952",
    path: "Positions-Ariana.mp3",
    id: 4,
  },
  {
    artistname: "Harry Styles",
    Song: "WaterMelon Sugar",
    image:
      "https://media.npr.org/assets/img/2020/02/27/wide-use_hpromophoto_helenepambrun-72fdb64792139d94a06f18686d0bb3131a238a70-s1100-c50.jpg",
    path: "WaterMelon Sugar-Harry Styles.mp3",
    id: 5,
  },
  {
    artistname: "Dua Lipa",
    Song: "Levitating",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Dua_Lipa_with_Warner_Music.jpg",
    path: "Levitating - Dua Lipa.mp3",
    id: 6,
  },
  {
    artistname: "Taylor Swaift",
    Song: "Love Story",
    image: "https://i1.sndcdn.com/avatars-000500544273-6kcyh0-t500x500.jpg",
    path: "Love Story - Taylor Swift.mp3",
    id: 7,
  },
  {
    artistname: "BTS",
    Song: "Dynamite",
    image:
      "https://pyxis.nymag.com/v1/imgs/c10/524/1853b57c011cf5fd8ebc8f4b149345d5d3-BTS-JOIN-LOUIS-VUITTON-AS-HOUSE-AMBASSAD.rsquare.w1200.jpg",
    path: "BTS-DYNAMITE.mp3",
    id: 8,
  },
  {
    artistname: "Justin Bieber",
    Song: "Stay",
    image:
      "https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/4:3/w_2000,h_1500,c_limit/bieber-coverstory-square.jpg",
    path: "Stay - Justin Bieber.mp3",
    id: 9,
  },
  {
    artistname: "Shwan Mendes",
    Song: "Nothin Holding me Back",
    image:
      "https://yt3.ggpht.com/QTpsceScLWmzgZXO6lPJo-s0CzCaGoat2S8PZzfdKtvqJTUh7jCLtYvCPH1RbUzVCOz2t_RIqIA=s900-c-k-c0x00ffffff-no-rj",
    path: "Nothing Holding me back- Shawn Mendes.mp3",
    id: 10,
  },
  {
    artistname: "Selena Gomez",
    Song: "We Don't Talk Anymore",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAwNTE2MDMyMl5BMl5BanBnXkFtZTgwMjAyODM3MTI@._V1_UY1200_CR134,0,630,1200_AL_.jpg",
    path: "Charlie Puth - We Don't Talk Anymore.mp3",
    id: 11,
  },
  {
    artistname: "BlackPink",
    Song: "Ice-Cream",
    image:
      "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/10/16/41e9b47c-07af-11eb-afc8-92e0da0ef1c3_image_hires_155550.jpg?itok=ihKswLDq&v=1602834958",
    path: "Icrecream-Blackpink.mp3",
    id: 12,
  },
];

let isplaying = false;
let currentid = 0;
let currenttrack = document.createElement("audio");

const songcards = [
  edsheeran,
  zyanmalik,
  BillieEilish,
  arianagrande,
  harrystyles,
  dualipa,
  taylorswift,
  bts,
  justinbieber,
  shawnmendes,
  selenagomez,
  blackpink,
];

Play.addEventListener("click", function () {
  if (!isplaying) {
    currenttrack.play();
    isplaying = true;
  } else {
    currenttrack.pause();
    isplaying = false;
  }
});

const playsong = function () {
  for (let j = 0; j < songsofartist.length; j++) {
    if (songsofartist[j].id === currentid) {
      document.querySelector(".nameofartist").textContent =
        songsofartist[j].artistname;
      document.querySelector(".nameofsong").textContent = songsofartist[j].Song;
      document.querySelector(".card-image").style.background =
        "url(" + songsofartist[j].image + ")";
      work(mainsection);
      mainsection.classList.remove("hidden");
      currenttrack.src = songsofartist[j].path;
      currenttrack.play();
      isplaying = true;
    }
  }
};

for (let i = 0; i < songcards.length; i++) {
  songcards[i].addEventListener("click", function () {
    currentid = i + 1;
    playsong();
  });
}
