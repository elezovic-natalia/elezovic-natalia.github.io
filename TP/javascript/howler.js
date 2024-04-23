function playSound(soundName) {
  var sound = new Howl({
      src: [`sound/${soundName}.wav`],
      sprite: {
          jazzSnippet: [0, 12000] // Play only the first 12 seconds (12000 ms)
      },
      html5: true, 
      onplay: function() {
          // Fade out the sound after 10 seconds (leaving 2 seconds for the fade)
          this.fade(1, 0, 2000, this.playing());
      }
  });

  // Play the snippet and apply the fade out
  sound.play('jazzSnippet');
}

document.addEventListener('DOMContentLoaded', () => {
  const soundImage = document.getElementById('sound01');

  soundImage.addEventListener('click', () => {
      playSound('jazz'); 
  });
});
