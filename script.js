// DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // === Mobile navigation toggle ===
  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');

  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // === "Hire Me" button: simple alert ===
  const hireBtn = document.getElementById('hireMeBtn');
  hireBtn.addEventListener('click', () => {
    alert('Thanks for your interest! Please use the contact form below or email navin@example.com.');
  });

  // === Toggle extra About text ===
  const toggleMoreBtn = document.getElementById('toggleMoreBtn');
  const moreText = document.getElementById('moreText');
  toggleMoreBtn.addEventListener('click', () => {
    const isHidden = moreText.hasAttribute('hidden');
    if (isHidden) {
      moreText.removeAttribute('hidden');
      toggleMoreBtn.textContent = 'Show less';
    } else {
      moreText.setAttribute('hidden', '');
      toggleMoreBtn.textContent = 'More about me';
    }
  });

  // === Contact form validation ===
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Basic checks: not empty and simple email pattern
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !emailOk) {
      e.preventDefault();
      alert('Please provide a valid name and email.');
      return;
    }

    // Pretend to submit and show a friendly message (no backend here)
    e.preventDefault();
    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
  });
});
