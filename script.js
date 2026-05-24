// mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '70px';
  navLinks.style.right = '1.5rem';
  navLinks.style.background = '#0d0d1a';
  navLinks.style.border = '1px solid rgba(255,255,255,0.08)';
  navLinks.style.borderRadius = '12px';
  navLinks.style.padding = '1rem 1.5rem';
  navLinks.style.gap = '1rem';
});

// close menu on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navLinks.style.display = 'none';
    }
  });
});

// waitlist form
const form = document.getElementById('waitlistForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button');
  btn.textContent = 'you\'re in! ✓';
  btn.style.background = 'linear-gradient(135deg, #22d3ee, #06b6d4)';
  form.querySelector('input').disabled = true;
  btn.disabled = true;
});

// intersection observer fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .step, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);
});
