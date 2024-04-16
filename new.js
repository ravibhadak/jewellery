console.log("play songs")
let audioElement = new Audio('songs/7.mp3');
let masterPlay = document.getElementById("masterPlay")

masterPlay.addEventListener('click', () => {
  if(audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play()
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
  }
  else {
    audioElement.pause()
    masterPlay.classList.remove('fa-pause')
    masterPlay.classList.add('fa-play')
  }
})