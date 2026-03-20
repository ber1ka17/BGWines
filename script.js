function toggleBurger(navId, burgerId) {
  const nav = document.getElementById(navId);
  const burger = document.getElementById(burgerId);
  if (!nav || !burger) return;
  burger.addEventListener('click', () => nav.classList.toggle('open'));
}

toggleBurger('mainNav', 'burgerBtn');
toggleBurger('mainNav2', 'burgerBtn2');
toggleBurger('mainNav3', 'burgerBtn3');

function toastAlert(message) {
  alert(message);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all required fields before sending.');
    return false;
  }

  setTimeout(() => {
    alert('Thank you ' + name + '! Your message has been sent.');
  }, 100);

  document.getElementById('contactForm').reset();
  return false;
}
