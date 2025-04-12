let animeList = [];

const searchBox = document.getElementById("searchBox");
const searchResults = document.getElementById("searchResults");

// Fetch anime list from JSON file
fetch("anime.json")
  .then((response) => response.json())
  .then((data) => {
    animeList = data;
  })
  .catch((error) => console.error("Error loading anime data:", error));

searchBox.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query) {
    const filteredAnime = animeList.filter((anime) =>
      anime.name.toLowerCase().includes(query)
    );

    if (filteredAnime.length > 0) {
      searchResults.style.display = "block";
      filteredAnime.forEach((anime) => {
        const resultItem = document.createElement("div");
        resultItem.textContent = anime.name;
        resultItem.addEventListener("click", () => {
          window.location.href = anime.url;
        });
        searchResults.appendChild(resultItem);
      });
    } else {
      searchResults.style.display = "none";
    }
  } else {
    searchResults.style.display = "none";
  }
});
