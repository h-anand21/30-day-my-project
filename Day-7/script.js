const quote = document.getElementById('quote');
const author = document.getElementById('author');

const api_url = 'https://dummyjson.com/quotes/random';

async function getquote(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    quote.innerText = data.quote;
    author.innerText = '— ' + data.author;
  } catch (error) {
    console.error(error);
  }
}

// Load first quote
getquote(api_url);
function tweet() {
  window.open(
    'https://twitter.com/intent/tweet?text=' +
      quote.innerText +
      ' ' +
      author.innerText,
    'Tweet Window',
    'width=600,height=300',
  );
}