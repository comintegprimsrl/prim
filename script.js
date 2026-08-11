/* ==========================================================================
   INTERACTIVE LOGIC & ANIMATIONS - COMINTEG PRIM SRL
   ========================================================================== */

// 1. LOGICA PENTRU ECRANUL DE START ȘI ÎNCĂRCARE
function startSite(deviceType) {
  const introModal = document.getElementById('introModal');
  const preloader = document.getElementById('preloader');
  const mainSite = document.getElementById('main-site-wrapper');

  introModal.style.opacity = '0';
  setTimeout(() => {
    introModal.style.display = 'none';

    if (deviceType === 'mobile' && window.innerWidth > 1024) {
      document.body.classList.add('simulare-mobil-activa');
    }

    preloader.style.display = 'flex';
    setTimeout(() => preloader.style.opacity = '1', 50);

    const progressBar = document.querySelector(".progress");
    setTimeout(() => { progressBar.style.width = "100%"; }, 100);

    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
        
        mainSite.style.display = 'block'; 
        
        setTimeout(() => {
          mainSite.style.opacity = '1';
          mainSite.style.transition = 'opacity 1s ease';
          initAOS();
          initParallax(); // Pornește efectul 3D Parallax!
        }, 50);

      }, 800); // Tranziție mai lină de ieșire
    }, 1800); 

  }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflow = "hidden";

  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      const icon = menuToggle.querySelector("i");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    });
  });
});

// 2. EFECT PARALLAX (Pentru a da adâncime 3D imaginii Hero)
function initParallax() {
  const heroBg = document.querySelector('.hero-bg');
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    // Mișcăm fundalul la 40% din viteza de scroll
    if (heroBg && scrollPos < window.innerHeight) {
      heroBg.style.transform = `translateY(${scrollPos * 0.4}px)`;
    }
  });
}

// 3. ANIMAȚII LA SCROLL ULTRA-PREMIUM (AOS Vanilla)
function initAOS() {
  document.body.style.overflow = "auto"; 

  const revealElements = document.querySelectorAll('[data-aos]');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-aos-delay') || 0;
        setTimeout(() => {
          // AICI SE ÎNTÂMPLĂ MAGIA: O curbă de tranziție super fluidă
          entry.target.style.transition = "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translate(0, 0) scale(1)";
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 }); // Declanșează puțin mai târziu pentru un efect mai spectaculos

  revealElements.forEach(el => {
    const type = el.getAttribute('data-aos');
    el.style.opacity = "0";
    
    // Deplasări mai ample pentru o aterizare mai vizibilă
    if(type === "fade-up") el.style.transform = "translateY(60px)";
    if(type === "fade-right") el.style.transform = "translateX(-60px)";
    if(type === "fade-left") el.style.transform = "translateX(60px)";
    if(type === "zoom-in") el.style.transform = "scale(0.85)";
    
    revealObserver.observe(el);
  });
}