document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("top-nav");
  const hero = document.getElementById("hero");
  const side = document.getElementById("side-nav");

  if (nav && hero && side) {
    const heroHeight = hero.offsetHeight;

    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY > heroHeight - 10;
      nav.classList.toggle("visible", scrolled);
      side.classList.toggle("visible", scrolled);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Animate experience counter
  const counter = document.getElementById("years");
  if (counter) {
    let years = 5;
    let current = 0;
    const interval = setInterval(() => {
      if (current > years) return clearInterval(interval);
      counter.innerText = current++;
    }, 200);
  }

  // Toggle About dropdown
  const moreAbout = document.getElementById("more-about");
  window.toggleAbout = () => {
    if (moreAbout) {
      moreAbout.classList.toggle("hidden");
    }
  };

  // Sticky nav and sidebar logic
  const nav = document.getElementById("top-nav");
  const hero = document.getElementById("hero");
  const side = document.getElementById("side-nav");

  if (nav && hero && side) {
    const heroHeight = hero.offsetHeight;

    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY > heroHeight - 10;
      nav.classList.toggle("visible", scrolled);
      side.classList.toggle("visible", scrolled);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const countUp = (el, end, duration = 2000, prefix = '', suffix = '') => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / stepTime));
      if (start >= end) {
        el.textContent = prefix + end.toLocaleString() + suffix;
        clearInterval(timer);
      } else {
        el.textContent = prefix + start.toLocaleString() + suffix;
      }
    }, stepTime);
  };

  // Select the elements
  const pledgeEl = document.querySelector('.pledge-info p:first-child');
  const backersEl = document.querySelector('.pledge-info p:nth-child(3) strong:nth-child(1)');
  const daysEl = document.querySelector('.pledge-info p:nth-child(3) strong:nth-child(2)');

  // Extract target numbers (hardcoded or parse from text)
  const pledgeTarget = 737502;
  const backersTarget = 12422;
  const daysTarget = 6;

  if (pledgeEl) countUp(pledgeEl, pledgeTarget, 2500, '$');
  
  // For backers and days inside the same paragraph, update textContent carefully:
  if (backersEl) {
    countUp(backersEl, backersTarget, 2500);
  }
  if (daysEl) {
    countUp(daysEl, daysTarget, 2500);
  }
});
