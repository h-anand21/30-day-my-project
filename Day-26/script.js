const btcEl = document.getElementById('bitcoin');
const ethEl = document.getElementById('ethereum');
const dogeEl = document.getElementById('dogecoin');

// CoinGecko API (single request 🔥)
const API_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd';

async function getPrices() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    btcEl.innerText = '$' + data.bitcoin.usd;
    ethEl.innerText = '$' + data.ethereum.usd;
    dogeEl.innerText = '$' + data.dogecoin.usd;
  } catch (error) {
    console.log('Error:', error);
    btcEl.innerText = 'Error';
    ethEl.innerText = 'Error';
    dogeEl.innerText = 'Error';
  }
}

// run once
getPrices();

// update every 10 sec
setInterval(getPrices, 10000);
