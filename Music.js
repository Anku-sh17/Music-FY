const home = document.querySelector(".Home");
const About = document.querySelector(".About");
const topartist = document.querySelector(".TopA");
const trending = document.querySelector(".Trending");

const Aboutsection = document.querySelector(".About-display");
const TopArtistsection = document.querySelector(".TopArtist");
const Trendingsection = document.querySelector(".Trending-display");
const mainsection = document.querySelector(".main");

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
