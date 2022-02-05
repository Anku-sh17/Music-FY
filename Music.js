const Home = document.querySelector(".Home");
const About = document.querySelector(".About");
const Top = document.querySelector(".TopArtists");
const Trending = document.querySelector(".Trending");
const MainDisplay = document.querySelector(".MainDisplay");
const Modalabout = document.querySelector(".ModalAbout");
const ModalTopArtist = document.querySelector(".ModalTopArtist");
const ModalTrending = document.querySelector(".ModalTrending");

// const buttons = [
//   Home,
//   About,
//   Top,
//   Trending,
//   MainDisplay,
//   ModalTopArtist,
//   ModalTrending,
//   Modalabout,
// ];

// const Show = function (j) {
//   for (let i = 0; i < length; i++) {
//     if (buttons[i] == j) {
//       buttons[i].classList.remove(".hidden");
//     } else {
//       buttons[i].classList.add(".hidden");
//     }
//   }
// };

// for (let i = 0; i < buttons.length; i++) {
//   let j = buttons[i];
//   console.log(buttons[i]);
//   //   buttons[i].addEventListener("click", Show(j));
// }

window.onload = function () {
  About.addEventListener("click", function () {
    Modalabout.classList.remove(".hidden");
  });
};
