//song list
let All_song = [
  {
    name: "(1)terlukis indah",
    path: "terlukisindah.mp3",
    img: "ulzzang1.jpg",
    singer: " Rizky Febian ",
  },
  {
    name: "(2)cuek",
    path: "Rizky-Febian-Cuek.mp3",
    img: "ulzzang2.jpg",
    singer: "Rizky Febian",
  },
  {
    name: "(3)seperti kisah",
    path: "seperti-kisah.mp3",
    img: "ulzzang3.jpg",
    singer: "Rizky febian",
  },
  {
    name: "(4)ragu",
    path: "ragu.mp3",
    img: "ulzzang4.jpg",
    singer: "Rizky Febian",
  },
  {
    name: "(5) casablanca",
    path: "denyutjantung.mp3",
    img: "ulzzang5.jpg",
    singer: "casablanca",
  },
  {
    name: "(6) bentuk cinta",
    path: "bentuk-cinta.mp3",
    img: "ulzzang6.jpg",
    singer: "eclat",
  },
];
/*you can add more song & images from you computer*/

/*tracks*/
let tracks = document.querySelector(".tracks");

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {
  let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
}

/*please follow all the rules so that you do not face any problem*/
