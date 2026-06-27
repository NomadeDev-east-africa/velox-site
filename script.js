// ===== VELOX — interactions =====
(function () {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const links = document.querySelector('.nav-links');

  // Nav shrink on scroll
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.classList.toggle('x', open);
    burger.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      burger.classList.remove('x');
      burger.setAttribute('aria-expanded', false);
    })
  );

  // Reveal on scroll
  const revealEls = document.querySelectorAll(
    '.section-head, .svc-card, .feat, .shot, .step, .pay-inner, .dl-card, .hero-copy, .hero-visual, .band-item'
  );
  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 4) * 0.07 + 's';
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));

  // Animated counters
  const counters = document.querySelectorAll('.num[data-count]');
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.dataset.count;
        const suffix = target === 100 ? '%' : '';
        let n = 0;
        const step = Math.max(1, Math.round(target / 40));
        const tick = () => {
          n = Math.min(target, n + step);
          el.textContent = n + suffix;
          if (n < target) requestAnimationFrame(tick);
        };
        tick();
        cio.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((c) => cio.observe(c));
})();
