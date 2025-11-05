//npm install tone

import * as Tone from "tone";

document.getElementById("btn").addEventListener("click", async () => {
  // Crea un nou sintetizador i el connecta a la sortida d'audio
  const synth = new Tone.Synth().toDestination();

  // Ens assegurem de que l'audio estigui disponible per reproducirse
  await Tone.start();

  // Obtenim el temps actual en el context de Tone.js
  const now = Tone.now();

  // Reprodueix una sequencia de notas amb les seves respectives duracions, i en quin moment volem que sonin
  synth.triggerAttackRelease("C4", "8n", now);
  synth.triggerAttackRelease("D4", "8n", now + 0.5);
  synth.triggerAttackRelease("E4", "8n", now + 1);
  synth.triggerAttackRelease("G4", "8n", now + 1.5);
  synth.triggerAttackRelease("B4", "8n", now + 2);
  synth.triggerAttackRelease("C5", "8n", now + 2.5);
  synth.triggerAttackRelease("B4", "8n", now + 3);
  synth.triggerAttackRelease("G4", "2n", now + 3.5);
});

document.getElementById("btn2").addEventListener("click", async () => {
  // Ens assegurem de que l'audio estigui disponible per reproducirse
  await Tone.start();

  // Creem un nou reproductor d'audio i el conectem a la sortida d'audio
  const player = new Tone.Player(
    "public/file_example_WAV_10MG.wav"
  ).toDestination();

  // Configurem el reproductor perque comeci a reproduir automáticament al carregar
  player.autostart = true;
});
