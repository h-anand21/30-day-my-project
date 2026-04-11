const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const icon = document.getElementById('icon');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Change icon
  if (body.classList.contains('dark')) {
    icon.src = 'moon.png';
  } else {
    icon.src = 'sun.png';
  }
});
