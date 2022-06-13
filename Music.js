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
const Play = document.querySelector(".playpause-track");
const imageofart = document.querySelector(".img");
// const volume = document.querySelector(".volume-track");
// const like = document.querySelector(".like-track");

// Songs Cards Buttons
const artistnames = document.querySelectorAll(".TopArtist");

// Artist Name Buttons
const playlistharrywrap = document.querySelector(".harrywrap");
const playlistartistbilliewrap = document.querySelector(".billiewrap");
const playlistsheeranwrap = document.querySelector(".sheeranwrap");
const playlistarianawrap = document.querySelector(".arianawrap");
const playlistzyanwrap = document.querySelector(".zyanwrap");
const playlistduawrap = document.querySelector(".duawrap");
const playlisttaylorwrap = document.querySelector(".taylorwrap");
const playlistbtswrap = document.querySelector(".btswrap");
const playlistjustinwrap = document.querySelector(".justinwrap");
const playlistshawnwrap = document.querySelector(".shawnwrap");
const playlistselenawrap = document.querySelector(".selenawrap");
const playlistblackpinkwrap = document.querySelector(".blackpinkwrap");

// loadingbutton
const contents = document.querySelector(".contents");
const loader = document.querySelector(".loader");

//login
const logbtn = document.querySelector(".LogIn");
let inputloginname = document.getElementById("username");
let inputpin = document.getElementById("password");

// All Songs selection
const allsongs = document.querySelectorAll(".wrapper");

const accounts = [
  {
    username: "Ankush",
    pin: 0000,
  },
  {
    username: "Ayush",
    pin: 1111,
  },
  {
    username: "Aditya",
    pin: 2222,
  },
  {
    username: "Suyash",
    pin: 3333,
  },
  {
    username: "Arav",
    pin: 4444,
  },
  {
    username: "Nitin",
    pin: 5555,
  },
];

// Navigation Bar switching

const sections = [
  Aboutsection,
  TopArtistsection,
  Trendingsection,
  mainsection,
  playlistharrywrap,
  playlistarianawrap,
  playlistartistbilliewrap,
  playlistblackpinkwrap,
  playlistbtswrap,
  playlistduawrap,
  playlistjustinwrap,
  playlistselenawrap,
  playlistshawnwrap,
  playlistsheeranwrap,
  playlisttaylorwrap,
  playlistzyanwrap,
];

const displayfunction = function (sec) {
  for (let i = 0; i < sections.length; i++) {
    if (!sections[i].classList.contains("hidden") && sections[i] != sec) {
      sections[i].classList.add("hidden");
    }
  }
};

home.addEventListener("click", function () {
  displayfunction(mainsection);
  mainsection.classList.remove("hidden");
});

About.addEventListener("click", function () {
  displayfunction(Aboutsection);
  Aboutsection.classList.remove("hidden");
});

topartist.addEventListener("click", function () {
  displayfunction(TopArtistsection);
  TopArtistsection.classList.remove("hidden");
});

trending.addEventListener("click", function () {
  displayfunction(Trendingsection);
  Trendingsection.classList.remove("hidden");
});

let isplaying = false;
let currentid = 0;
let currenttrack = document.createElement("audio");
let currenttrend = 1;

const eachplaylist = [
  playlistsheeranwrap,
  playlistartistbilliewrap,
  playlistharrywrap,
  playlistarianawrap,
  playlistzyanwrap,
  playlistblackpinkwrap,
  playlisttaylorwrap,
  playlistbtswrap,
  playlistjustinwrap,
  playlistshawnwrap,
  playlistselenawrap,
  playlistduawrap,
];

// Login activities
let curraccoun;
logbtn.addEventListener("click", function (e) {
  e.preventDefault();
  curraccoun = accounts.find((acc) => acc.username === inputloginname.value);
  if (curraccoun == undefined) {
    alert("Invalid username");
  } else if (curraccoun?.pin === Number(inputpin.value)) {
    loader.classList.add("hidden");
    contents.classList.remove("hidden");
  } else if (curraccoun?.pin != Number(inputpin.value)) {
    alert("Invalid Pin or UserName");
  }
});

Play.addEventListener("click", function () {
  if (!isplaying) {
    currenttrack.play();
    isplaying = true;
    const html = `<i class="bx bx-pause" style="font-size: 5rem"></i>`;
    Play.innerHTML = "";
    Play.insertAdjacentHTML("afterbegin", html);
  } else {
    currenttrack.pause();
    isplaying = false;
    const html = `<i class="bx bx-play" style="font-size: 5rem"></i>`;
    Play.innerHTML = "";
    Play.insertAdjacentHTML("afterbegin", html);
  }
});

artistnames.forEach((artist) => {
  artist.addEventListener("click", function (e) {
    console.log(e.path[0].id);
    displayfunction(eachplaylist[e.path[0].id]);
    eachplaylist[e.path[0].id].classList.remove("hidden");
  });
});

allsongs.forEach((box) => {
  box.addEventListener("click", function (event) {
    document.querySelector(".track-name").textContent = event.path[1].className;
    document.querySelector(".track-artist").textContent = event.path[1].id;
    const html1 = `<img src=${event.path[0].currentSrc} alt="img" />`;
    document.querySelector(".img").innerHTML = "";
    document.querySelector(".img").insertAdjacentHTML("afterbegin", html1);
    currenttrack.src = `Database/${event.path[1].className}.mp3`;
    currenttrack.play();
    displayfunction(mainsection);
    mainsection.classList.remove("hidden");
    const html = `<i class="bx bx-pause" style="font-size: 5rem"></i>`;
    Play.innerHTML = "";
    Play.insertAdjacentHTML("afterbegin", html);
    isplaying = true;
  });
});
