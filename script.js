const questions = [
  "Hey you vennela, pure and beautiful soul! 🌸",
  "Do you like sweet surprises chinnithalli? 🎁",
  "Would you love endless cuddles venneluuu? 🧸",
  "Dreaming of magical moments? ✨",
  "Get ready for Lokesh's Love! 🖤"
];

const stickers = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png"
];

let step = 0;

const questionEl = document.getElementById("question");
const stickerEl = document.getElementById("sticker");
const finalEl = document.getElementById("final");
const nextBtn = document.getElementById("nextBtn");

function showStep() {
  if (step < questions.length) {
    questionEl.textContent = questions[step];
    stickerEl.src = stickers[step];
    stickerEl.classList.remove("hidden");
  } else {
    questionEl.classList.add("hidden");
    stickerEl.classList.add("hidden");
    finalEl.classList.remove("hidden");
    nextBtn.style.display = "none";
  }
  step++;
}

nextBtn.addEventListener("click", showStep);

// Start first step
showStep();

// Floating hearts
for (let i = 0; i < 30; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  heart.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(heart);
}