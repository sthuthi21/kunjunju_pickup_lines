const heartButton = document.getElementById("heartButton");
const cupid = document.getElementById("cupid");
const pickupLineDisplay = document.getElementById("pickupLine");
const clickSound = document.getElementById("clickSound"); // Get the sound element

const pickupLines = [
  { en: "Are you between Pathanamthitta and Trivandrum? Because ne Kollam!", ml: "നീ പത്തനംതിട്ടയും തിരുവനന്തപുരം ഇടയ്ക്കാണോ? – കാരണം നീ കൊല്ലം!" },
  { en: "Girl, are you from the lake? Because ne oru mothala!", ml: "ചെച്ചി, നീ തടാകത്തിൽ നിന്ന് വന്നതാണോ? – കാരണം നീ ഒരു മൊത്താള!" },
  { en: "Mohanlal said – 'Uyaram koodum thorum chayakk madhuram koodum.' Porunno ente koode Munnarilekk?", ml: "മോഹൻലാൽ പറഞ്ഞത് പോലെ – \"ഉയരം കൂടും തോറും ചായക്ക് മധുരം കൂടും.” പോകുമോ എന്റെ കൂടെ മുന്നറിലേക്ക്?" },
  { en: "Dairy Milk is yummy! Will you be my children’s mummy?", ml: "ഡയറി മിൽക്ക് സുഖമായിരിക്കുന്നു! – നിന്റെ കുഞ്ഞുങ്ങളുടെ അമ്മയായാൽ പൊരുന്നോ?" },
  { en: "Chetta, madhuram kurachoru kaapi. Pakshi nee koode undenkil njan ennum happy!", ml: "ചേട്ടാ, മധുരം കുറച്ചൊരു കാപ്പി. – പക്ഷേ, നീ കൂടെ ഉണ്ടെങ്കിൽ ഞാൻ എന്നും ഹാപ്പി!" },
  { en: "Kazhikan bread, kidakkan bed, ninne kandappol njan dead!", ml: "കഴിക്കാൻ ബ്രഡ്, കിടക്കാൻ ബെഡ്, – നിന്നെ കണ്ടപ്പോൾ ഞാൻ ഡെഡ്!" },
  { en: "Breadil undoru butter, nee enikku better, ninakku njan taratte love letter!", ml: "ബ്രെഡിൽ ഉണ്ടൊരു ബട്ടർ, – നീ എനിക്ക് ബെറ്റർ, നിനക്ക് ഞാൻ തരട്ടെ ലവ് ലെറ്റർ!" },
  { en: "Anchu kazhinjal aaru, uchakku unnan choru, neeyillatha life bore!", ml: "അഞ്ചു കഴിഞ്ഞാൽ ആറ്, ഉച്ചക്ക് ഉണ്ണാൻ ചോറ്, – നീയില്ലാത്ത ലൈഫ് ബോർ!" },
  { en: "Vandikalkkundu tyre, neelathil valarum hair, neeyanente dear!", ml: "വണ്ടികൾക്കുണ്ട് ടയർ, നീളത്തിൽ വളരും ഹെയർ, – നീയാണെന്റെ ഡിയർ!" },
  { en: "Ninakku undoru thadi, nammal nalloru jodi, nee akumo en pillereude daddy?", ml: "നിനക്ക് ഉണ്ടൊരു താടി, നമ്മൾ നല്ലൊരു ജോഡി, – നീ ആകുമോ എൻ പിള്ളേരുടെ ഡാഡി?" },
  { en: "Footballil undu coach, ball vannal catch, nammal thammil match!", ml: "ഫുട്ബോളിൽ ഉണ്ട് കോച്ച്, ബോൾ വന്നാൽ ക്യാച്ച്, – നമ്മൾ തമ്മിൽ മാച്ച്!" },
  { en: "Galaxyil undu blackhole, cinemayil undu loophole, ente ammaye mindil neeyanu marumol!", ml: "ഗ്യാലക്സിയിൽ ഉണ്ട് ബ്ലാക്ക്ഹോൾ, സിനിമയിൽ ഉണ്ട് ലൂപ്പ്ഹോൾ, – എന്റെ അമ്മയുടെ മൈൻഡിൽ നീയാണ് മരുമോൾ!" },
  { en: "Kaattil undu chimpanzee, mindumbol vendathu decency, ente hridayathil undu ninakkoru vacancy!", ml: "കാട്ടിൽ ഉള്ളത് ചിമ്പാൻസി, മിണ്ടുമ്പോൾ വേണ്ടത് ഡീസെൻസി, – എന്റെ ഹൃദയത്തിൽ ഉണ്ട് നിനക്കൊരു വേക്കൻസി!" },
  { en: "Hey, vedanayullidathellam parattam murivenna. Ee ente pranayam onnu manasilakiyal nee parayum 'Enikk ningal mathram mathi anna!'", ml: "ഹേയ്.. വേദനയുള്ളിടത്തെല്ലാം പരാട്ടം മുറിവെണ്ണ. – ഈ എൻ്റെ പ്രണയം ഒന്ന് മനസിലാക്കിയാൽ നീ പറയും \"എനിക്ക് നിങ്ങൾ മാത്രം മതി അണ്ണാ!\"" },
  { en: "Hey, kochukuttikale priya kalipattam kaatadi. Paksha ninte oru otta chiriyil njan flat-adi!", ml: "ഹേയ്.. കൊച്ചുകുട്ടികളുടെ പ്രിയപ്പെട്ട കളിപ്പാട്ടമാണ് കാറ്റാടി. – പക്ഷെ നിന്റെ ഒരു ഒറ്റ ചിരിയിൽ ഞാൻ ഫ്ലാറ്റാടി!" },
  { en: "Is your name Vasan Eye Care? Enikku nalla vyakthamayi nammude future kanan pattunnund!", ml: "നിന്റെ പേര് വസൻ ഐ കെയർ ആണോ? – എനിക്ക് നന്നായി നമുക്കു വേണാ ഭാവി കാണാൻ കഴിയുന്നുണ്ട്!" },
  { en: "Vangichu tharum Sip Up, nee okay paranjal Thumbs Up, nee cheat cheythal Break Up!", ml: "ഞാൻ വാങ്ങി തരും സിപ് അപ്പ്, – നീ ഓക്കേ പറഞ്ഞാൽ തംബ് അപ്പ്, നീ ചീറ്റ് ചെയ്താൽ ബ്രേക്ക് അപ്പ്!" },
  { en: "Nee aalu oru mass, ninakku undoru fans, enikku undo oru chance?", ml: "നീ ആളൊരു മാസ്സ്, നിനക്ക് ഉണ്ടൊരു ഫാൻസ്, – എനിക്ക് ഉണ്ടോ ഒരു ചാൻസ്?" }

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
