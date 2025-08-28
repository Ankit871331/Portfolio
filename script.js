// =====================
// Mobile Menu Toggle
// =====================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('showing');
  });
}

// =====================
// Smooth Scroll
// =====================
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// =====================
// Fade-in Animations
// =====================
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// =====================
// Contact Form (Formspree)
// =====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });
      if (response.ok) {
        alert("✅ Thank you for your message! I will get back to you soon.");
        contactForm.reset();
      } else {
        alert("❌ Oops! Something went wrong.");
      }
    } catch (error) {
      alert("⚠️ Error submitting form. Please try again later.");
    }
  });
}

// =====================
// Newsletter Form (Formspree)
// =====================
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(newsletterForm);
    try {
      const response = await fetch(newsletterForm.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });
      if (response.ok) {
        alert("🎉 Thank you for subscribing!");
        newsletterForm.reset();
      } else {
        alert("❌ Subscription failed. Try again.");
      }
    } catch (error) {
      alert("⚠️ Error submitting subscription.");
    }
  });
}





