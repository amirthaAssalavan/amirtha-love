let shootingInterval;


/* Create stars */
for (let i = 0; i < 150; i++) {
  const star = document.createElement("div");
  star.className = "star";

  const size = Math.random() * 2 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";

  star.style.animationDuration = 15 + Math.random() * 20 + "s";
  star.style.opacity = Math.random();

  document.body.appendChild(star);
}



/* Scroll function */
function goToStart() {
  document.getElementById("startSection").scrollIntoView({
    behavior: "smooth"
  });
}

function playMusic() {
  document.getElementById("music1").play();
  document.getElementById("music2").play();
}

// Play after user clicks anywhere


/* TEXT CONTENT */
const hisMessage = "Direct ah sollalame";
const herMessage =
  "Na ungala life long santhosama pathukalam ni iruken 🤭\nNee sona mathiri.. koodavae life longggg..";

/* TYPE EFFECT */
function typeText(el, text, speed, done) {
  let i = 0;
  el.textContent = "";
  function typing() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (done) {
      done();
    }
  }
  typing();
}

const parallaxBoxes = document.querySelectorAll(".parallax");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  parallaxBoxes.forEach(box => {
    const speed = 0.08; // slower + smoother
    box.style.transform = `translateY(${scrollY * speed}px)`;
  });
});



function loveExplosion(e) {
  const popupBox = document.querySelector(".popup-box");
  const rect = popupBox.getBoundingClientRect();

  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  // Create multiple tiny hearts
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "love-spark";
    heart.innerHTML = "💖";

    heart.style.left = clickX + "px";
    heart.style.top = clickY + "px";

    // Random burst direction
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 60 + 30;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    heart.style.setProperty("--x", x + "px");
    heart.style.setProperty("--y", y + "px");

    popupBox.appendChild(heart);

    setTimeout(() => heart.remove(), 800);
  }

  // Close popup slightly after animation
  setTimeout(() => {
    closePopup();

    const boxes = document.querySelectorAll(".intro-box");

    // Show only first box initially
    boxes[0].classList.add("active");


    // SHOW INTRO SECTION AFTER POPUP CLOSES
    const intro = document.getElementById("intro");
    intro.style.display = "block";

    setTimeout(() => {
      intro.style.opacity = "1";
      // Close popup slightly after animation
      setTimeout(() => {
        closePopup();

        const intro = document.getElementById("intro");
        intro.style.display = "block";

        setTimeout(() => {
          intro.style.opacity = "1";

          // ⏳ WAIT BEFORE FIRST IMAGE APPEARS
          setTimeout(() => {

            const boxes = document.querySelectorAll(".intro-box");

            // Reset everything
            boxes.forEach(box => box.classList.remove("active"));

const firstBox = boxes[0];

// 🌸 Flower burst FIRST on 1x1 area
flowerShower(firstBox);

// 🖼 Then reveal 1x1 after delay
setTimeout(() => {
  firstBox.classList.add("active");
}, 1500);


            intro.scrollIntoView({ behavior: "smooth" });

          }, 1200); // ← change this time (1200 = 1.2 seconds pause)

        }, 500);

      }, 600);


      intro.scrollIntoView({ behavior: "smooth" });
    }, 3500);

  }, 600);

}



function showConfetti() {
  const popupBox = document.querySelector(".popup-box");

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = "0px";
    confetti.style.backgroundColor =
      ["#ff4d6d", "#ffd166", "#06d6a0", "#4cc9f0", "#f72585"][
      Math.floor(Math.random() * 5)
      ];

    confetti.style.animationDuration = 1.5 + Math.random() + "s";

    popupBox.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 2000);
  }
}

let confettiInterval;

function startConfetti() {
  const box = document.querySelector(".popup-box");

  confettiInterval = setInterval(() => {
    const conf = document.createElement("div");
    conf.className = "fallConfetti";

    conf.style.left = Math.random() * 100 + "%";
    conf.style.background =
      ["#ff4d6d", "#ffd166", "#06d6a0", "#4cc9f0", "#f72585"][
      Math.floor(Math.random() * 5)
      ];

    conf.style.animationDuration = 2 + Math.random() * 2 + "s";

    box.appendChild(conf);

    setTimeout(() => conf.remove(), 4000);
  }, 150);
}

function stopConfetti() {
  clearInterval(confettiInterval);
}

function fireworkEffect() {
  const box = document.querySelector(".popup-box");
  const rect = box.getBoundingClientRect();

  for (let i = 0; i < 40; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";

    // Start from center
    spark.style.left = rect.width / 2 + "px";
    spark.style.top = rect.height / 2 + "px";

    // Random direction
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 150 + 150;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    spark.style.setProperty("--x", x + "px");
    spark.style.setProperty("--y", y + "px");

    box.appendChild(spark);

    setTimeout(() => spark.remove(), 2500);
  }
}


// function heartPoppers() {
//   const box = document.querySelector(".popup-box");
//   const rect = box.getBoundingClientRect();

//   for (let i = 0; i < 25; i++) {
//     const heart = document.createElement("div");
//     heart.className = "heart";
//     heart.innerHTML = "💖";

//     // Start from random bottom position
//     heart.style.left = Math.random() * rect.width + "px";
//     heart.style.top = rect.height - 40 + "px";

//     // Random float direction
//     const floatX = (Math.random() - 0.5) * 200;
//     const floatY = - (Math.random() * 200 + 100);

//     heart.style.setProperty("--hx", floatX + "px");
//     heart.style.setProperty("--hy", floatY + "px");

//     box.appendChild(heart);

//     setTimeout(() => heart.remove(), 6000);
//   }
// }


function bigHeartClose() {
  const box = document.querySelector(".popup-box");

  const heart = document.createElement("div");
  heart.className = "bigHeart";
  heart.innerHTML = "❤️";

  box.appendChild(heart);

  setTimeout(() => heart.remove(), 2500);
}


function openPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";
  setTimeout(() => {
    popup.style.opacity = "1";
  }, 10);


  const bgSong = document.getElementById("bgSong");
  bgSong.volume = 0.15; // reduce background volume
  showConfetti();  // 🎉 POPPERS HERE

  const title = document.getElementById("centerTitle");
  const content = document.getElementById("popupContent");

  // Start continuous confetti BEFORE 1K animation
  startConfetti();

  // Reset states
  title.classList.remove("show");
  content.classList.remove("show");
  content.style.display = "none";

  // IMPORTANT: reset position to center
  title.style.top = "50%";
  title.style.transform = "translate(-50%, -50%) scale(0.2)";
  title.style.opacity = "0";

  // STEP 1 — Spread from center
  setTimeout(() => {
    title.style.opacity = "1";
    title.style.transform = "translate(-50%, -50%) scale(1.4)";
  }, 100);

  // STEP 2 — Move to top
  setTimeout(() => {
    title.style.top = "20px";
    title.style.transform = "translate(-50%, 0) scale(1)";
    stopConfetti();
  }, 1400);



  // STEP 3 — Show rest of content
  setTimeout(() => {
    content.style.display = "block";
    content.classList.add("show");

    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = "💖";
      heart.style.position = "absolute";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.top = Math.random() * 100 + "%";
      heart.style.opacity = "0.15";
      heart.style.fontSize = "14px";
      heart.style.pointerEvents = "none";
      document.querySelector(".popup-box").appendChild(heart);
    }

    fireworkEffect(); // ✨ sparkle when message appears

    const m1 = document.getElementById("music1");
    const m2 = document.getElementById("music2");

    m1.volume = 0.5;
    m2.volume = 0.3;
    m1.play();
    m2.play();

    const hisEl = document.getElementById("hisText");
    const herEl = document.getElementById("herText");

    hisEl.textContent = "";
    herEl.textContent = "";

    //   let heartInterval = setInterval(heartPoppers, 800);

    // setTimeout(() => {
    // 	clearInterval(heartInterval);
    // }, 6000);
    // 💕 when typing starts

    typeText(hisEl, hisMessage, 60, () => {
      typeText(herEl, herMessage, 45);
    });
    title.classList.add("glowRotate");
  }, 2000);
}



function closePopup() {

  bigHeartClose(); // ❤️ one big heart

  setTimeout(() => {
    const popup = document.getElementById("popup");
    popup.style.opacity = "0";

    setTimeout(() => {
      popup.style.display = "none";
    }, 600);


    document.getElementById("music1").pause();
    document.getElementById("music2").pause();

    const bgSong = document.getElementById("bgSong");
    bgSong.volume = 0.6;
  }, 1000);


}



document.addEventListener("click", function () {
  const bgSong = document.getElementById("bgSong");

  if (bgSong.paused) {
    bgSong.volume = 0.6; // Normal front page volume
    bgSong.play().catch(error => {
      console.log("Playback prevented:", error);
    });
  }
}, { once: true });

document.addEventListener("DOMContentLoaded", function () {

  const storyBoxes = document.querySelectorAll(".intro-box");

  storyBoxes.forEach((box, index) => {

    box.addEventListener("mouseenter", function () {

      // Only allow hover on visible box
      if (!box.classList.contains("active")) return;

      const nextBox = storyBoxes[index + 1];

      if (nextBox && !nextBox.classList.contains("active")) {

        // 🌸 Flower on NEXT box position
        flowerShower(nextBox);

        // 🖼 Then reveal next image
        setTimeout(() => {
          nextBox.classList.add("active");
        }, 800);

      }

    });

  });

});

function flowerShower(box) {

  const flowers = ["🌸", "🌺", "💮"];

  const centerX = box.offsetWidth / 2;
  const centerY = box.offsetHeight / 2;

  for (let i = 0; i < 40; i++) {

    const petal = document.createElement("div");
    petal.className = "flower-petal";
    petal.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left = centerX + "px";
    petal.style.top = centerY + "px";

    petal.style.fontSize = (25 + Math.random() * 12) + "px";

    // 360° random direction
    const angle = Math.random() * 2 * Math.PI;

    // Distance spread
    const maxDistance = Math.max(box.offsetWidth, box.offsetHeight) * 1.2;

    const distance = Math.random() * maxDistance;


    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    petal.style.setProperty("--moveX", moveX + "px");
    petal.style.setProperty("--moveY", moveY + "px");

    box.appendChild(petal);

    setTimeout(() => petal.remove(), 3000);
  }
}


function showLifeImage() {
  const wrapper = document.getElementById("lifeImageWrapper");
  wrapper.classList.add("show");

  launchPoppers();
}

function launchPoppers() {
  const wrapper = document.getElementById("lifeImageWrapper");

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = "-20px";

    confetti.style.background =
      `hsl(${Math.random() * 360}, 100%, 60%)`;

    confetti.style.animationDuration =
      (Math.random() * 2 + 1) + "s";

    wrapper.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
     document.getElementById("lifeImageWrapper").onclick = function() {
    this.classList.remove("show");
  }
  }
}


  const oldMusic = document.getElementById("bgSong");
  const newMusic = document.getElementById("newMusic");
  const textOverlay = document.getElementById("lifeTextOverlay");
  const imageWrapper = document.getElementById("lifeImageWrapper");

  function showLifeImage() {

    // Stop old music
    oldMusic.pause();

    // Show text
    textOverlay.classList.add("show");

    // Start new music
    newMusic.currentTime = 0;
    newMusic.play();

    // After 3 seconds → fade text and show image
    setTimeout(() => {
      textOverlay.classList.remove("show");

      setTimeout(() => {
        imageWrapper.classList.add("show");
      }, 10);

    }, 4000);
  }

  // Close image
  imageWrapper.addEventListener("click", function() {
    imageWrapper.classList.remove("show");

    // Stop new music
    newMusic.pause();

    // Resume old music
    oldMusic.play();
  });
