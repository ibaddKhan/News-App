const resultDiv = document.querySelector(".resultDiv");
const data = JSON.parse(localStorage.getItem("news"));

resultDiv.innerHTML = `
 <div class="m-2 ">
<img class="m-1" width="80%" height="70%" src="${data.urlToImage}"  alt="...">
<div class="card-body mt-8">
<h1 class=" card-title text-4xl font-bold">${data.title}</h1>
<p class="card-text  mt-2 ">${data.content}</p>
<p class="card-text mt-2 mb-2 font-medium">${data.description}</p>
<a  href="${data.url}">Read Full Article at <span class="underline text-red-300">${data.url}</span></a>
<span class= "flex justify-between mt-2"><h6 class=" inline-block card-title mt-2">Author : <span class="text-cyan-500">${data.author}</span></h6>
<h6 class="card-title mt-2 inline-block ">Published at : ${data.publishedAt}</h6>
</span>
</div>
<a href="./index.html" class=" mt-3 btn btn-primary">Go To Home</a>
</div>`;
