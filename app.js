const div = document.querySelector("DIV");
const input = document.querySelector("input");
const button = document.querySelector("button");
let allNews = [];

button.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log(input.value);

  try {
    const all = await axios.get(
      `https://newsapi.org/v2/everything?q=${input.value}&apiKey=d31a9c5a7d4348578ce9081e0bda9a81`
    );

    // div.innerHTML = "";

    allNews = all.data.articles.slice(0, 30);
  } catch (error) {
    console.log(error);
    // div.innerHTML = "";
  }

  allNews.forEach((item, index) => {
    console.log(item);
    const desc =
      item.description.length > 30
        ? item.description.slice(0, 100) + "..."
        : item.description;
    const tit =
      item.title.length > 30
        ? item.description.slice(0, 50) + "..."
        : item.description;
    div.innerHTML += `
    <div class="card m-8" style="width: 18rem ;">
    <img src="${item.urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title font-bold">${tit}</h5>
      <p class="card-text">${desc}</p>
      <a href="./newWin.html" onclick="saveData(${index})" class=" mt-3 btn btn-goto btn-primary">Go somewhere</a>
    </div>
  </div>
  `;
  });

  input.value = "";
});
const arr = [];
function saveData(index) {
  const arr = allNews[index];
  //   arr.push(allNews[index]);
  console.log(arr);
  localStorage.setItem("news", JSON.stringify(arr));
}

// ! App.js Index Page end here
