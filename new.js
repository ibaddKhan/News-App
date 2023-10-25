const resultDiv = document.querySelector(".resultDiv");
const data = JSON.parse(localStorage.getItem("news"));

resultDiv.innerHTML = `
 <div class=" ">
<img class="m-1" width="80%" height="70%" src="${data.urlToImage}"  alt="...">
<div class="card-body mt-8">
<h1 class=" card-title text-3xl font-bold">${data.title}</h1>
<p class="card-text">${data.content}</p>
<p class="card-text">${data.description}</p>
<h6 class="text-end card-title">Author : ${data.author}</h6>
<h6 class="text-start card-title">Publisted at : ${data.publishedAt}</h6>
<a href="${data.url}">Read Full Article at <span class="underline text-red-300">${data.url}</span></a>
</div>
<a href="./index.html" class=" mt-3 btn btn-primary">Go To Home</a>
</div>`;

// resultDiv.innerHTML = `<div class="card m-8" style="width: 30rem ;">
// <img src="${data.urlToImage}" class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">${data.title}</h5>
//   <p class="card-text"></p>
//   <a href="./index.html" class="btn btn-primary">Go To Home</a>
//   <h6 class="card-title">Author : ${data.author}</h6>
// </div>
// </div>`;
