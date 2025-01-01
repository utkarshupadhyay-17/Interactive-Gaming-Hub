// Theme Toggle
const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Scroll-to-Top Button
const scrollTopButton = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// News Ticker
const newsTicker = document.getElementById("news-ticker");
const newsUpdates = [
  "New game added: Rocket Pro!",
  "Upcoming event: GameZone Championship!",
  "Play Brain game to Refresh your Mood.",
];

let currentNewsIndex = 0;
function updateNews() {
  newsTicker.textContent = newsUpdates[currentNewsIndex];
  currentNewsIndex = (currentNewsIndex + 1) % newsUpdates.length;
}
setInterval(updateNews, 3000); // Update every 3 seconds