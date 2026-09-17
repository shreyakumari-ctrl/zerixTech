

document.addEventListener('DOMContentLoaded', () => {
  const satellite = document.getElementById('fc-satellite');
  const orbitSys = document.getElementById('fc-v2-orbit-sys');
  const giant24 = document.getElementById('fc-v2-giant24');
  const lensImg = document.getElementById('fc-v2-lens-img');
  const nodes = document.querySelectorAll('.fc-process-node');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


  let angle = -Math.PI / 2; // Start at t
  const R = 215; // matches SVG radius
  const CX = 245, CY = 245; // SVG centre mapped to container

  const nodeAngles = { '1': -Math.PI / 2, '2': 0, '3': Math.PI / 2, '4': Math.PI };
  let targetAngle = null;
  let chasing = false;

  function mapToContainer(svgX, svgY, size) {
    const s = size / 500;
    return { x: svgX * s, y: svgY * s };
  }

  function orbitTick() {
    if (!reduced) {
      if (chasing && targetAngle !== null) {
        angle += (targetAngle - angle) * 0.08;
        if (Math.abs(targetAngle - angle) < 0.005) chasing = false;
      } else {
        angle += 0.007;
      }
    }

    if (satellite && orbitSys) {
      const size = orbitSys.offsetWidth || 490;
      const scale = size / 500;
      const px = (CX + Math.cos(angle) * R) * scale;
      const py = (CY + Math.sin(angle) * R) * scale;
      satellite.style.left = px + 'px';
      satellite.style.top = py + 'px';
    }

    requestAnimationFrame(orbitTick);
  }

  orbitTick();

  // Node hover: snap orbit + highlight
  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      const step = node.getAttribute('data-step');
      if (step && nodeAngles[step] !== undefined) {
        targetAngle = nodeAngles[step];
        chasing = true;
      }
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      if (lensImg) {
        const rot = parseInt(step || '0') * 5;
        lensImg.style.transform = `scale(1.1) rotate(${rot}deg)`;
      }
    });

    node.addEventListener('mouseleave', () => {
      chasing = false;
      if (lensImg) lensImg.style.transform = '';
    });
  });

  // ---- Mouse parallax for giant 24 + orbit tilt ----
  if (!reduced && window.innerWidth > 900) {
    let tX = 0, tY = 0, cX = 0, cY = 0;

    window.addEventListener('mousemove', e => {
      tX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      tY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    });

    document.addEventListener('mouseleave', () => { tX = 0; tY = 0; });

    function paralTick() {
      cX += (tX - cX) * 0.055;
      cY += (tY - cY) * 0.055;

      if (giant24) {
        giant24.style.transform = `translate(${cX * -30}px, ${cY * -20}px)`;
      }

      if (orbitSys) {
        orbitSys.style.transform = `perspective(1200px) rotateY(${cX * 8}deg) rotateX(${-cY * 7}deg)`;
      }

      requestAnimationFrame(paralTick);
    }

    paralTick();
  }
});
