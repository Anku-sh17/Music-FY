// Navigation Bar buttons
const home = document.querySelector(".Home");
const About = document.querySelector(".About");
const topartist = document.querySelector(".TopA");
const trending = document.querySelector(".Trending");
const visibletrack = document.querySelector(".CS");
const learnmore = document.querySelector(".learnmore");

// Sections
const Aboutsection = document.querySelector(".About-display");
const TopArtistsection = document.querySelector(".TopArtist");
const Trendingsection = document.querySelector(".Trending-display");
const mainsection = document.querySelector(".main");
const introsection = document.querySelector(".header");

// Music Card buttons
const Play = document.querySelector(".playpause-track");
const imageofart = document.querySelector(".img");
const like = document.querySelector(".like-track");

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
const loader = document.querySelector(".LOGIN");
const loadersignup = document.querySelector(".SIGNUP");

//login
const logbtn = document.querySelector(".LogIn");
const signupbtn = document.querySelector(".SignUp");
const registerbtn = document.querySelector(".Register");
let inputloginname = document.getElementById("username");
let inputpin = document.getElementById("password");
let inputregistername = document.getElementById("usernameSignUp");
let inputregisterpassword = document.getElementById("passwordSignUp");
let inputregisterconfirmpassword = document.getElementById("Reenterpassword");

// All Songs selection
const allsongs = document.querySelectorAll(".wrapper");
const alllikedsongs = document.querySelectorAll(".Trending-display");

// General button
const resume = document.querySelector(".button");

let isplaying = false;
let currentid = 0;
let currenttrack = document.createElement("audio");
let currenttrend = 1;
let currentplayingsong;
let currentplayingartist;
let currentplayingimage;
let curraccoun;

const accounts = [
  {
    username: "Ankush",
    pin: 0000,
    id: 0,
  },
  {
    username: "Ayush",
    pin: 1111,
    id: 1,
  },
  {
    username: "Aditya",
    pin: 2222,
    id: 2,
  },
  {
    username: "Suyash",
    pin: 3333,
    id: 3,
  },
  {
    username: "Arav",
    pin: 4444,
    id: 4,
  },
  {
    username: "Nitin",
    pin: 5555,
    id: 5,
  },
];

// Navigation Bar switching
const sections = [
  Aboutsection,
  TopArtistsection,
  Trendingsection,
  mainsection,
  introsection,
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

// secting the sections for each artist avaiable
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

// resume Button
let timesclicked = 0;
resume.addEventListener("click", function (e) {
  const html = `<img src="pngre.JPG" />`;
  const html2 = `<img src="myself.jpeg" />`;
  const images = document.querySelector(".image-section");
  images.innerHTML = "";
  images.insertAdjacentHTML("afterbegin", timesclicked % 2 == 0 ? html : html2);
  timesclicked++;
});

// Login activities
signupbtn.addEventListener("click", function (e) {
  e.preventDefault();
  loader.classList.add("hidden");
  loadersignup.classList.remove("hidden");
});

registerbtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputregistername.value === "" ||
    inputregisterpassword.value == "" ||
    inputregisterconfirmpassword.value == ""
  ) {
    alert("Every filed is madatory");
    inputregistername.value =
      inputregisterpassword.value =
      inputregisterconfirmpassword.value =
        "";
  } else if (
    inputregisterconfirmpassword.value != inputregisterpassword.value
  ) {
    alert("Passwords don't match pls recheck it once");
    inputregisterpassword.value = inputregisterconfirmpassword.value = "";
  } else if (
    accounts.find((acc) => acc.username == inputregistername.value) != undefined
  ) {
    alert("Account already exist");
    inputregistername.value =
      inputregisterpassword.value =
      inputregisterconfirmpassword.value =
        "";
  }
});

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

// display function to hide other sections except the one clicked
const displayfunction = function (sec) {
  for (let i = 0; i < sections.length; i++) {
    if (!sections[i].classList.contains("hidden") && sections[i] != sec) {
      sections[i].classList.add("hidden");
    }
  }
};

// navigation bar 4 buttons functionality
home.addEventListener("click", function () {
  displayfunction(introsection);
  introsection.classList.remove("hidden");
});

About.addEventListener("click", function () {
  displayfunction(Aboutsection);
  Aboutsection.classList.remove("hidden");
});

learnmore.addEventListener("click", function () {
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

visibletrack.addEventListener("click", function () {
  displayfunction(mainsection);
  mainsection.classList.remove("hidden");
});

// Play Pause button
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

// Like Button
like.addEventListener("click", function () {
  const html2 = `<div class="grid-containerTrending">
  <img
    class="imafxTrending"
    id="${currentplayingartist}"
    src=${currentplayingimage}
    alt=${currentplayingsong}
  />
  <p class="artistnameTrending ">${currentplayingsong}</p>
</div>`;
  Trendingsection.insertAdjacentHTML("afterbegin", html2);
});

// When a user click on one of the artiist it displays thier songs.
artistnames.forEach((artist) => {
  artist.addEventListener("click", function (e) {
    displayfunction(eachplaylist[e.path[0].id]);
    eachplaylist[e.path[0].id].classList.remove("hidden");
  });
});

// Function to play the songs
const playsong = function (event, trakname, trackartist, trackimage) {
  document.querySelector(".track-name").textContent = trakname;
  currentplayingsong = trakname;
  document.querySelector(".track-artist").textContent = trackartist;
  currentplayingartist = trackartist;
  const html1 = `<img src=${trackimage} alt="img" />`;
  currentplayingimage = trackimage;
  document.querySelector(".img").innerHTML = "";
  document.querySelector(".img").insertAdjacentHTML("afterbegin", html1);
  currenttrack.src = `Database/${trakname}.mp3`;
  currenttrack.play();
  displayfunction(mainsection);
  mainsection.classList.remove("hidden");
  visibletrack.classList.remove("hidden");
  const html = `<i class="bx bx-pause" style="font-size: 5rem"></i>`;
  Play.innerHTML = "";
  Play.insertAdjacentHTML("afterbegin", html);
  isplaying = true;
};

// Function to play the clicked songs
allsongs.forEach((box) => {
  box.addEventListener("click", function (event) {
    playsong(
      event,
      event.path[1].className,
      event.path[1].id,
      event.path[0].currentSrc
    );
  });
});

// function to play the clicked liked songs
alllikedsongs.forEach((bom) => {
  bom.addEventListener("click", function (event) {
    playsong(event, event.target.alt, event.target.id, event.target.src);
  });
});
