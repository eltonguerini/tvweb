const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");


const data = {
  title:
    "TVA A TV QUE MAIS CRESCE",
  artist: "© Copyright E.M.G 2024",
  cover: "https://player.logicahost.com.br/player.php?player=1013",
  file: ""
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = ` ${data.artist}`;
