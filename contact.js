// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => { mobileMenu.style.display = 'flex'; });
closeBtn.addEventListener('click', () => { mobileMenu.style.display = 'none'; });
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => { mobileMenu.style.display = 'none'; });
});

// Formspree AJAX Submit
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept':'application/json' }
  })
  .then(res => {
    if(res.ok){ successMsg.style.display='block'; form.reset(); }
    else { alert("Oops! Something went wrong. Call 03222629079."); }
  })
  .catch(err => alert("Oops! Could not submit. Call 03222629079."));
});