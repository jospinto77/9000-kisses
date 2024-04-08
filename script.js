document.addEventListener("DOMContentLoaded", function() {
  const kissesContainer = document.getElementById("kisses-container");
  const kissSound = document.getElementById("kiss-sound");

  // Function to generate a random position within the window
  function randomPosition() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    };
  }

  // Function to create a kiss image
  function createKissImage() {
    const kiss = new Image();
    kiss.src = "kiss.png";
    kiss.className = "kiss";
    const position = randomPosition();
    kiss.style.position = "absolute";
    kiss.style.left = position.x + "px";
    kiss.style.top = position.y + "px";
    kissesContainer.appendChild(kiss);

    // Add event listener for click to play the kiss sound
    kiss.addEventListener("click", function() {
      kissSound.currentTime = 0;
      kissSound.play();
    });

    // Remove the kiss after a delay
    setInterval(function() {
      kiss.remove();
    }, 3500); // Change 5000 to adjust the duration of each kiss
  }

  // Create 9000 kisses
     setInterval(
      createKissImage, 250
    )
  
});
  
