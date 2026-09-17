
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.fc-tab');
  const estimate = document.getElementById('fc-est-val');
  const visual = document.querySelector('.fc-v3-visual');
  const image = document.querySelector('.fc-v3-image-wrap');
  const card = document.querySelector('.fc-v3-booking-card');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      if (!estimate) return;
      estimate.style.opacity = '0';
      setTimeout(() => {
        estimate.textContent = tab.dataset.time || '24 hr return';
        estimate.style.opacity = '1';
      }, 120);
    });
  });

  if (reducedMotion || !visual || !image || !card || window.innerWidth < 980) return;

  visual.addEventListener('mousemove', (event) => {
    const rect = visual.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 14;

    image.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
    card.style.transform = `translate(${x * -0.55}px, ${y * -0.55}px)`;
  });

  visual.addEventListener('mouseleave', () => {
    image.style.transform = '';
    card.style.transform = '';
  });
});
