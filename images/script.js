const heartButton = document.getElementById('heartButton');
const cupid = document.getElementById('cupid');
const pickupLine = document.getElementById('pickupLine');
const pickupLines = [
    "Do you believe in love at first sight, or should I walk by again?",
    "Are you a parking ticket? Because you've got 'fine' written all over you.",
    // ... more pickup lines
];

heartButton.addEventListener('click', () => {
    // 1. Cupid Animation (Arrow Shooting)
    const arrow = document.createElement('img');
    arrow.src = 'arrow.png'; // Replace with your arrow image
    arrow.classList.add('arrow');
    cupid.appendChild(arrow);

    // Trigger animation after a short delay (for image to load)
    setTimeout(() => {
      arrow.classList.add('animate');

      // Remove arrow after animation completes (adjust delay as needed)
      setTimeout(() => {
        cupid.removeChild(arrow);
      }, 1000); // Matches animation duration

    }, 50);

    // 2. Generate and Display Pickup Line (after a slight delay)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * pickupLines.length);
      pickupLine.textContent = pickupLines[randomIndex];
    }, 500); // Adjust delay as needed
});