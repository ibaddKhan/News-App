const div = document.querySelector("DIV");
const input = document.querySelector("input");
const button = document.querySelector("button");
const body = document.querySelector("body");

let allNews = [];
const inputVal = localStorage.getItem("inputVal");

async function loadData(searchTerm = inputVal) {
  try {
    const all = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=d31a9c5a7d4348578ce9081e0bda9a81`
    );

    div.innerHTML = "";

    allNews = all.data.articles.slice(0, 30);

    allNews.forEach((item, index) => {
      const desc =
        item.description.length > 30
          ? item.description.slice(0, 100) + "..."
          : item.description;
      const tit =
        item.title.length > 30 ? item.title.slice(0, 50) + "..." : item.title;
      div.innerHTML += `
        <div class="card m-8" style="width: 18rem;">
          <img src="${item.urlToImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title font-bold">${tit}</h5>
            <p class="card-text">${desc}</p>
            <a href="./newWin.html" onclick="saveData(${index})" class="mt-3 btn btn-goto btn-primary">Go somewhere</a>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("load", () => {
  loadData();
});

button.addEventListener("click", async (e) => {
  e.preventDefault();
  const searchTerm = input.value;
  if (searchTerm) {
    loadData(searchTerm);
    localStorage.setItem("inputVal", searchTerm);

    input.value = "";
  }
});

function saveData(index) {
  const dataToSave = allNews[index];
  localStorage.setItem("news", JSON.stringify(dataToSave));
}
