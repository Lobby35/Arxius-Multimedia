function playAudio() {
  var audio = document.getElementById("buttonAudio");
  audio.play();
}
function stopAudio() {
  var audio = document.getElementById("buttonAudio");
  audio.pause();
  audio.currentTime = 0;
}
