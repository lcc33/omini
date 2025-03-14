// const greeting = `Search your favourite anime here`;

// function greet() {
//   console.log(greeting);
// }

// greet();

const animeList = [
  {
    name: "Re:Zero - Starting Life in Another World",
    url: "components/rezero.html",
  },
  { name: "Blue Lock", url: "components/bluelock.html" },
  { name: "DANDADAN", url: "components/dandandan.html" },
  { name: "Tower of God", url: "components/tower.html" },
  { name: "Solo Leveling", url: "components/sololeveling.html" },
  { name: "Haikyu", url: "components/haikyu.html" },
  { name: "Ninja Kamui", url: "components/ninjakamui.html" },
  { name: "Pseudo Harem", url: "components/pseudo.html" }
  // Add more anime here
];

const searchBox = document.getElementById("searchBox");
const searchResults = document.getElementById("searchResults");

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
        resultItem.addEventListener("click", function () {
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
