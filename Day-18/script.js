const scriptURL =
  'https://script.google.com/macros/s/AKfycbwRtkI9oyOEQuu7BCpfmMB0W1NbSkefYz0Pkq4r_qkE46qCP3HnkJCz58pgDJ145MJE/exec'; // 🔴 paste your deployed URL
const form = document.forms['Email List'];
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
    mode: 'no-cors', // ✅ important for CORS
  })
    .then(() => {
      msg.innerHTML = '✅ Thank you for subscribing!';
      form.reset();

      setTimeout(() => {
        msg.innerHTML = '';
      }, 3000);
    })
    .catch((error) => {
      console.error('Error!', error.message);
      msg.innerHTML = '❌ Something went wrong';
    });
});
