const apiKey = 'T6aYi8aKkYdGv5IqeC73ycorIrHyLPAPAx1WLXnRM4Q';

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

let keyword = '';
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = '';
  }

  const results = data.results;

  results.map((result) => {
    const imageContainer = document.createElement('img');
    imageContainer.src = result.urls.regular;
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = '_blank';

    imageLink.appendChild(imageContainer);
    searchResult.appendChild(imageLink);
  });

  showMoreBtn.style.display = 'block';
}
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener('click', () => {
  page++;
  searchImages();
});
