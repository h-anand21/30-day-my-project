let productIMg = document.getElementById('product-img');
let btn = document.getElementsByClassName('btn');

btn[0].addEventListener('click', (e) => {
  productIMg.src = 'image1.png';

  for (bt of btn) {
    bt.classList.remove('active');
  }
  e.target.classList.add('active');
});

btn[1].addEventListener('click', (e) => {
  productIMg.src = 'image2.png';

  for (bt of btn) {
    bt.classList.remove('active');
  }
  e.target.classList.add('active');
});

btn[2].addEventListener('click', (e) => {
  productIMg.src = 'image3.png';

  for (bt of btn) {
    bt.classList.remove('active');
  }
  e.target.classList.add('active');
});
