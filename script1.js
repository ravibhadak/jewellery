console.log("welcome to spotify");

// Initialize the variables
let audioElement = new Audio("songs/1.mp3");
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItmes = Array.from(document.getElementsByClassName("songItme"));

let songs = [
  {
    songname: "Arijit Singh All Song",
    filepath: "songs/1.mp3",
    cover: "covers/1.jpg",
  },
  {
    songname: "Badi Katil Hasina",
    filepath: "songs/2.mp3",
    cover: "covers/2.jpg",
  },
  { songname: "Chorni", filepath: "songs/3.mp3", cover: "covers/3.jpg" },
  { songname: "Kahani Suno", filepath: "songs/4.mp3", cover: "covers/4.jpg" },
  { songname: "Kesariya", filepath: "songs/5.mp3", cover: "covers/5.jpg" },
  { songname: "Kya Lige Tom", filepath: "songs/6.mp3", cover: "covers/6.jpg" },
  {
    songname: "Maan Mari Jaan",
    filepath: "songs/7.mp3",
    cover: "covers/7.jpg",
  },
  { songname: "Malang sajna", filepath: "songs/8.mp3", cover: "covers/8.jpg" },
  { songname: "Manike", filepath: "songs/9.mp3", cover: "covers/9.jpg" },
  {
    songname: "Raatan Lambiyan",
    filepath: "songs/10.mp3",
    cover: "covers/10.jpg",
  },
];

songItmes.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].cover;
  element.getElementsByClassName("songname")[0].innerHTML = songs[i].songname;
});

// handle play/pause click
masterPlay.addEventListener('click', () => {
  if(audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play()
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
    gif.style.opacity = 1;
  }
  else {
    audioElement.pause()
    masterPlay.classList.remove('fa-pause')
    masterPlay.classList.add('fa-play')
    gif.style.opacity = 0;
  }
})

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // update  seekber
  console.log('timeupdate')
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress)
  myProgressBar.value = progress;
});

audioElement.addEventListener('timeupdate', () => {
  console.log('timeupdate')
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
  console.log
})

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllplay = () => {
    Array.from(document.getElementsByClassName('songItmeplay')).forEach((element) => {
        element.target.classList.remove('fa-pause-circle');
        element.target.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("songItmeplay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllplay();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'sonds/3.mp3';
        audioElement.currentTime = 0;
        audioElement.play();

    });
});
