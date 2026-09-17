````

document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('fc-hero-v1');
  const canvas = document.getElementById('fc-living-canvas');
  const img = document.getElementById('fc-living-img');
  const nodes = [
    document.getElementById('fc-node-1'),
    document.getElementById('fc-node-2'),
    document.getElementById('fc-node-3'),
  ];
  const wall = document.getElementById('fc-kinetic-wall');
  const depthEls = document.querySelectorAll('[data-depth]');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !hero) return;

  let tX = 0, tY = 0, cX = 0, cY = 0;

  window.addEventListener('mousemove', e => {
    const w = window.innerWidth, h = window.innerHeight;
    tX = (e.clientX - w / 2) / (w / 2);
    tY = (e.clientY - h / 2) / (h / 2);
  });

  document.addEventListener('mouseleave', () => { tX = 0; tY = 0; });

  function lerp(a, b, t) { return a + (b - a) * t; }

  function tick() {
    cX = lerp(cX, tX, 0.055);
    cY = lerp(cY, tY, 0.055);


    if (canvas && window.innerWidth > 900) {
      canvas.style.transform = `
        perspective(1400px)
        rotateY(${cX * 16}deg)
        rotateX(${-cY * 11}deg)
        translateZ(24px)
      `;
    }


    if (img) img.style.transform = `scale(${1.06 + Math.abs(cX) * 0.035})`;


    depthEls.forEach(el => {
      const depth = parseFloat(el.getAttribute('data-depth') || '0.1');
      const x = cX * depth * 80;
      const y = cY * depth * 55;

      if (el.classList.contains('fc-float-node')) {
        const zArr = [50, 64, 44];
        const i = [...nodes].indexOf(el);
        const z = i >= 0 ? zArr[i] : 40;
        el.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
      } else {
        el.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      }
    });


    if (wall) {
      const speed = 1 + Math.abs(cX) * 0.6;
      wall.style.setProperty('--wall-speed', speed);
    }

    requestAnimationFrame(tick);
  }

  tick();


  const btn = document.getElementById('fc-v1-btn-schedule');
  if (btn && window.innerWidth > 900) {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const dx = e.clientX - r.left - r.width / 2;
      const dy = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${dx * 0.28}px, ${dy * 0.28}px) scale(1.04)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  }
});
