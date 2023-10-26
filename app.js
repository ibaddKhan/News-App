const div = document.querySelector("DIV");
const input = document.querySelector("input");
const button = document.querySelector("button");
const body = document.querySelector("body");

// ! Declared allNews in global scope to get the index of the clicked news in to save in ls
let allNews = [];

//? getting input value saved on search from localStorage

const inputVal = localStorage.getItem("inputVal");

//? Func which run when the page loads and search the input value which i got from local storage

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

// ?calling the block of code when page reload

window.addEventListener("load", () => {
  loadData();
});

// ? saving and loading the data according to the query user entered

button.addEventListener("click", async (e) => {
  e.preventDefault();
  const searchTerm = input.value;
  loadData(searchTerm);
  localStorage.setItem("inputVal", searchTerm);
  input.value = "";
});

// ? saving the whole news by index of that object to get it in new window to read full news

function saveData(index) {
  const dataToSave = allNews[index];
  localStorage.setItem("news", JSON.stringify(dataToSave));
}
