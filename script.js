const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((element) => revealObserver.observe(element));

document.querySelectorAll('.auth-switch').forEach((button) => {
  button.addEventListener('click', () => {
    const currentForm = button.closest('.contact-form');
    const targetForm = document.getElementById(button.getAttribute('aria-controls'));
    currentForm.hidden = true;
    targetForm.hidden = false;
    targetForm.classList.add('visible');

    document.querySelectorAll('.auth-switch').forEach((switchButton) => {
      const controlledForm = document.getElementById(switchButton.getAttribute('aria-controls'));
      switchButton.setAttribute('aria-expanded', String(Boolean(controlledForm && !controlledForm.hidden)));
    });
  });
});

if (new URLSearchParams(window.location.search).get('login') === '1') {
  document.getElementById('signup-form').hidden = true;
  document.getElementById('login-form').hidden = false;
  document.getElementById('login-form').classList.add('visible');
  document.querySelectorAll('.auth-switch').forEach((button) => {
    button.setAttribute('aria-expanded', String(button.getAttribute('aria-controls') === 'login-form'));
  });
}

document.querySelectorAll('.contact-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const feedback = form.querySelector('.form-feedback');
    if (form.id === 'login-form') {
      window.location.href = 'public/index.html';
      return;
    }

    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Mensagem enviada';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
    }, 1800);
  });
});

const googleLoginButton = document.querySelector('.google-login-button');
googleLoginButton.addEventListener('click', () => {
  document.querySelector('#login-form .form-feedback').textContent =
    'O login com Google ainda não está disponível.';
});
