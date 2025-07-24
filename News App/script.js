const newsData = [
  {
    title: "Tech Stocks Surge as Market Rebounds",
    content: "Technology stocks saw a major boost today following positive earnings reports from leading firms..."
  },
  {
    title: "Weather Update: Storm Alert in the Midwest",
    content: "The National Weather Service issued storm warnings in several states across the Midwest today..."
  },
  {
    title: "Sports: Championship Final Ends in a Draw",
    content: "An intense final match ended with a 2-2 draw, leading to a highly anticipated rematch next weekend..."
  }
];

const newsContainer = document.getElementById("news-container");

newsData.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "news-card";
  card.innerHTML = `<h3>${item.title}</h3>`;
  card.addEventListener("click", () => showModal(item));
  newsContainer.appendChild(card);
});

function showModal(item) {
  document.getElementById("modal-title").textContent = item.title;
  document.getElementById("modal-content").textContent = item.content;
  document.getElementById("modal").classList.remove("hidden");
}

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});
