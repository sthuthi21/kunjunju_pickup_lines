const heartButton = document.getElementById("heartButton");
const cupid = document.getElementById("cupid");
const pickupLineDisplay = document.getElementById("pickupLine");
const clickSound = document.getElementById("clickSound"); // Get the sound element

const pickupLines = [
  { en: "Are you between Pathanamthitta and Trivandrum? Because ne Kollam!", ml: "നീ പത്തനംതിട്ടയും തിരുവനന്തപുരം ഇടയ്ക്കാണോ? – കാരണം നീ കൊല്ലം!" },
  { en: "Girl, are you from the lake? Because ne oru mothala!", ml: "ചെച്ചി, നീ തടാകത്തിൽ നിന്ന് വന്നതാണോ? – കാരണം നീ ഒരു മൊത്താള!" },
  { en: "Mohanlal said – 'Uyaram koodum thorum chayakk madhuram koodum.' Porunno ente koode Munnarilekk?", ml: "മോഹൻലാൽ പറഞ്ഞത് പോലെ – \"ഉയരം കൂടും തോറും ചായക്ക് മധുരം കൂടും.” പോകുമോ എന്റെ കൂടെ മുന്നറിലേക്ക്?" },
  { en: "Dairy Milk is yummy! Will you be my children’s mummy?", ml: "ഡയറി മിൽക്ക് സുഖമായിരിക്കുന്നു! – നിന്റെ കുഞ്ഞുങ്ങളുടെ അമ്മയായാൽ പൊരുന്നോ?" },
  { en: "Chetta, madhuram kurachoru kaapi. Pakshi nee koode undenkil njan ennum happy!", ml: "ചേട്ടാ, മധുരം കുറച്ചൊരു കാപ്പി. – പക്ഷേ, നീ കൂടെ ഉണ്ടെങ്കിൽ ഞാൻ എന്നും ഹാപ്പി!" }
];

// Typing Effect
const text = "Say it like Kunjunju!";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.querySelector(".typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // Typing speed
  } else {
    document.querySelector(".typing-text").style.borderRight = "none"; // Remove cursor after typing
  }
}

window.onload = typeEffect; // Start typing effect when page loads

// Button Click Event
heartButton.addEventListener("click", function () {
  clickSound.play(); // Play sound effect

  // Shake Cupid before revealing the pickup line
  cupid.style.animation = "shake 0.5s ease-in-out";

  // Show pickup line after animation
  setTimeout(() => {
    pickupLineDisplay.style.opacity = "1";
    const randomLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];
    pickupLineDisplay.innerHTML = `${randomLine.en} <br><span class="ml-text">${randomLine.ml}</span>`;
    cupid.style.animation = ""; // Reset animation
  }, 500);
});

// Floating Hearts Effect
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Sparkles Effect
function createSparkles() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.animationDuration = Math.random() * 2 + "s";
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 2000);
}

setInterval(createSparkles, 500);
