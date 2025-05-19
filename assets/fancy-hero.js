document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.fancy-hero');
  if (!hero || typeof gsap === 'undefined') return;

  const heading = hero.querySelector('.fancy-hero__heading');
  const subtext = hero.querySelector('.fancy-hero__subtext');
  const model = hero.querySelector('model-viewer');

  gsap.from(heading, { y: -40, opacity: 0, duration: 1 });
  gsap.from(subtext, { y: 40, opacity: 0, duration: 1, delay: 0.2 });
  gsap.from(model, { opacity: 0, duration: 1, delay: 0.4 });
});
