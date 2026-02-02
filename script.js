// Change this to your crush's name or nickname 😊
const name = "beanie"; // ← edit here
document.getElementById("crushName").textContent = name;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  question.classList.add("hidden");
  document.querySelector(".buttons").classList.add("hidden");
  response.classList.remove("hidden");
  
  // Create floating hearts
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDelay = Math.random() * 3 + "s";
    heart.style.setProperty("--x", (Math.random() - 0.5) * 200 + "px");
    document.querySelector(".hearts").appendChild(heart);
    
    // Remove after animation
    setTimeout(() => heart.remove(), 7000);
  }
});

// No button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 80 - 40;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  alert("PS all No responses will automaticlaly be switched to YASES 😉😘");
});
