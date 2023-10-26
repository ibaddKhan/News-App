document.addEventListener("DOMContentLoaded", function () {
  const resultDiv = document.querySelector(".main-div");
  const btn = document.querySelector(".btn");

  let allNews = []; // Move the allNews variable to a higher scope

  // Load the data from local storage
  const data = JSON.parse(localStorage.getItem("news"));

  if (data) {
    // Display the data if it exists
    function printt() {
      resultDiv.innerHTML = `
        <div class=" ">
          <img class="m-1" width="80%" height="70%" src="${data.urlToImage}" alt="...">
          <div class="card-body mt-8">
            <h1 class="card-title text-3xl font-bold">${data.title}</h1>
            <p class="card-text">${data.content}</p>
            <p class="card-text">${data.description}</p>
            <h6 class="text-end card-title">Author : ${data.author}</h6>
            <h6 class="text-start card-title">Published at : ${data.publishedAt}</h6>
            <a href="${data.url}">Read Full Article at <span class="underline text-red-300">${data.url}</span></a>
          </div>
        </div>`;
    }
    printt();
  } else {
    // Handle the case when no data is found
    resultDiv.innerHTML = "<p>No data found in local storage.</p>";
  }

  btn.addEventListener("click", () => {
    render();
  });

  async function render() {
    resultDiv.innerHTML = "";

    try {
      const input = localStorage.getItem("input");
      console.log(input);

      const key = JSON.parse(input);
      console.log(key);

      const all = await axios.get(
        `https://newsapi.org/v2/everything?q=${input.value}&apiKey=d31a9c5a7d4348578ce9081e0bda9a81`
      );

      allNews = all.data.articles.slice(0, 30); // Assign the new data to allNews

      // Display the new data
      allNews.forEach((item, index) => {
        const desc =
          item.description.length > 30
            ? item.description.slice(0, 100) + "..."
            : item.description;
        const tit =
          item.title.length > 30 ? item.title.slice(0, 50) + "..." : item.title;
        resultDiv.innerHTML += `
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
      console.log("Not working", error);
      resultDiv.innerHTML =
        "<h1 class='mt-52 text-4xl'>404 Data not found</h1>";
    }
  }
});

function saveData(index) {
  const itemToSave = allNews[index];
  localStorage.setItem("news", JSON.stringify(itemToSave));
}
