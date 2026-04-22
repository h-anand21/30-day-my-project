const btcEl = document.getElementById('bitcoin');
const ethEl = document.getElementById('ethereum');
const dogeEl = document.getElementById('dogecoin');

// API URLs
const btcURL = 'https://api.coinpaprika.com/v1/tickers/btc-bitcoin';
const ethURL = 'https://api.coinpaprika.com/v1/tickers/eth-ethereum';
const dogeURL = 'https://api.coinpaprika.com/v1/tickers/doge-dogecoin';

// fetch function
async function getPrices() {
  try {
    const [btcRes, ethRes, dogeRes] = await Promise.all([
      fetch(btcURL),
      fetch(ethURL),
      fetch(dogeURL),
    ]);

    const btcData = await btcRes.json();
    const ethData = await ethRes.json();
    const dogeData = await dogeRes.json();

    btcEl.innerText = '$' + btcData.quotes.USD.price.toFixed(2);
    ethEl.innerText = '$' + ethData.quotes.USD.price.toFixed(2);
    dogeEl.innerText = '$' + dogeData.quotes.USD.price.toFixed(4);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

// call once
getPrices();

// auto every 10 seconds
setInterval(getPrices, 10000);
