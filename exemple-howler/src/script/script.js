// npm install howler
// l'importem
import { Howl } from "howler";

var sound = new Howl({
  src: ["public/file_example_MP3_5MG.mp3"],
  //Que comenci automaticament
  //autoplay: true,
  //Que soni en bucle
  //loop: true,
  //Ajustem el volum,
  //volume: 0.5,
});

document.getElementById("btn").addEventListener("click", () => {
  //evita que es pugi clicar molts cops el boto i que sonin tots de cop
  if (!sound.playing()) {
    sound.play();
  }
});

document.getElementById("btn2").addEventListener("click", () => {
  sound.stop();
});
