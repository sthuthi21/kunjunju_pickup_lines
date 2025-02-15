const heartButton = document.getElementById('heartButton');
const cupid = document.getElementById('cupid');
const pickupLine = document.getElementById('pickupLine');
const pickupLines = [
  "Are you between Pathanamthitta and Trivandrum? Because ne Kollam!",
  "Girl, are you from the lake? Because ne oru mothala!",
  "Mohanlal said – 'Uyaram koodum thorum chayakk madhuram koodum.' Porunno ente koode Munnarilekk?",
  "Dairy Milk is yummy! Will you be my children’s mummy?",
  "Chetta, madhuram kurachoru kaapi. Pakshi nee koode undenkil njan ennum happy!",
  "Kazhikan bread, kidakkan bed, ninne kandappol njan dead!",
  "Breadil undoru butter, nee enikku better, ninakku njan taratte love letter!",
  "Anchu kazhinjal aaru, uchakku unnan choru, neeyillatha life bore!",
  "Vandikalkkundu tyre, neelathil valarum hair, neeyanente dear!",
  "Ninakku undoru thadi, nammal nalloru jodi, nee akumo en pillereude daddy?",
  "Footballil undu coach, ball vannal catch, nammal thammil match!",
  "Galaxyil undu blackhole, cinemayil undu loophole, ente ammaye mindil neeyanu marumol!",
  "Kaattil undu chimpanzee, mindumbol vendathu decency, ente hridayathil undu ninakkoru vacancy!",
  "Hey, vedanayullidathellam parattam murivenna. Ee ente pranayam onnu manasilakiyal nee parayum 'Enikk ningal mathram mathi anna!'",
  "Hey, kochukuttikale priya kalipattam kaatadi. Paksha ninte oru otta chiriyil njan flat-adi!",
  "Is your name Vasan Eye Care? Enikku nalla vyakthamayi nammude future kanan pattunnund!",
  "Nee aalu oru mass, ninakku undoru fans, enikku undo oru chance?"
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