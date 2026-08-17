/* ==========================================================================
   INTERACTIVE LOGIC, ANIMATIONS, TRANSLATIONS & LIGHTBOX - COMINTEG PRIM SRL
   ========================================================================== */

/* --------------------------------------------------------------------------
   AICI SUNT CELE 2 IMAGINI CARE SE VOR DESCHIDE (CÂTE UNA PENTRU FIECARE)
-------------------------------------------------------------------------- */
const galleries = {
  // Imaginea pentru "Rețele Edilitare & Canalizare"
  'edilitare': [
    'https://www.image2url.com/r2/default/images/1786948088533-63f98db6-1dae-45ce-bca2-07bdbf6e28e4.jpeg'
  ],
  // Imaginea pentru "Termoficare & Apeduct"
  'termoficare': [
    'https://www.image2url.com/r2/default/images/1786947814371-2b6f64e1-4260-4809-914d-157084c40823.jpeg'
  ]
};

let currentGalleryArray = [];
let currentImageIndex = 0;

// Funcția care deschide imaginea
function openGallery(galleryId) {
  currentGalleryArray = galleries[galleryId];
  
  if (!currentGalleryArray || currentGalleryArray.length === 0) return;
  
  currentImageIndex = 0;
  document.getElementById('galleryImage').src = currentGalleryArray[currentImageIndex];
  
  // ASCUNDE SĂGEȚILE DE NAVIGARE PENTRU CĂ AVEM DOAR O SINGURĂ POZĂ
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  if (currentGalleryArray.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
  }
  
  const modal = document.getElementById('galleryModal');
  modal.style.display = 'flex';
  setTimeout(() => modal.style.opacity = '1', 10);
}

// Funcția care închide imaginea
function closeGallery() {
  const modal = document.getElementById('galleryModal');
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
    document.getElementById('galleryImage').src = "";
  }, 400);
}

// (Păstrăm funcția în caz că vrei vreodată să mai adaugi poze în plus pe viitor)
function changeImage(step) {
  currentImageIndex += step;
  if (currentImageIndex < 0) { currentImageIndex = currentGalleryArray.length - 1; }
  if (currentImageIndex >= currentGalleryArray.length) { currentImageIndex = 0; }
  document.getElementById('galleryImage').src = currentGalleryArray[currentImageIndex];
}

/* --------------------------------------------------------------------------
   SISTEMUL DE TRADUCERI
-------------------------------------------------------------------------- */
const translations = {
  ro: {
    click_gallery: "Vezi Imaginea",
    intro_title: "Vizualizare Platformă", intro_desc: "Selectează dispozitivul pentru a încărca designul potrivit.", intro_btn_pc: "Calculator", intro_btn_mob: "Telefon",
    nav_home: "Acasă", nav_about: "Despre Noi", nav_services: "Servicii", nav_portfolio: "Portofoliu", nav_contact: "Contact",
    hero_badge: "Excelență în Infrastructură & Rețele Inginerești",
    hero_title: "Construim infrastructura de mâine. <span>Sigur. Durabil.</span>",
    hero_desc: "Cominteg Prim SRL livrează soluții tehnice complexe, de la magistrale de apeduct și canalizare pluvială, la puncte termice și rețele edilitare de înaltă performanță.",
    hero_btn1: "Explorează Lucrările", hero_btn2: "Descoperă Compania",
    about_tag: "Despre Noi", about_title: "Experți în <span>rețele inginerești</span> și infrastructură",
    about_lead: "<strong>Cominteg Prim SRL</strong> este o companie de top specializată în proiectarea, execuția și reabilitarea de rețele inginerești și infrastructură edilitară.",
    about_p1: "Dispunând de o echipă tehnică înalt calificată și un parc de utilaje performant, executăm cu precizie lucrări complexe: de la magistrale de apeduct și rețele de canalizare pluvială, la infrastructură pentru puncte termice tehnologice, coordonând implementarea sistemelor în cascadă.",
    about_p2: "Fiecare proiect gestionat de <strong>Cominteg Prim SRL</strong> reflectă angajamentul nostru ferm pentru calitate, durabilitate, siguranță și funcționalitate pe termen lung a rețelelor inginerești construite, respectând cu strictețe normele de execuție obiective.",
    about_list1: "Execuție precisă a rețelelor inginerești complexe (apă, canalizare, termoficare)", about_list2: "Management de șantier eficient, bazat pe evaluări tehnice riguroase",
    iso_9001: "Managementul Calității", iso_14001: "Management de Mediu", iso_45001: "Sănătate și Securitate",
    qual_title: "Calitate Garantată", qual_desc: "Standarde tehnice superioare",
    serv_tag: "Domenii de Activitate", serv_title: "Servicii Integrate de Construcții",
    serv1_title: "Rețele Edilitare & Canalizare", serv1_desc: "Construcție de rețele pentru ape pluviale, subtraversări complexe de bulevarde și execuția sistemelor de drenaj.",
    serv2_title: "Termoficare & Apeduct", serv2_desc: "Proiectare, execuție și reabilitare pentru rețele termice magistrale, puncte tehnologice și sisteme avansate de încălzire în cascadă, integrate cu magistrale de apă potabilă și rețele de înaltă presiune.",
    port_tag: "Experiență Demonstrată", port_title: "Proiecte de Referință",
    port1_cat: "Rețele Edilitare", port1_title: "Rețea de canalizare pluvială - Satul German", port1_desc: "Execuția complexă a rețelei de colectare a apelor pluviale pentru un ansamblu rezidențial din zona Satul German, asigurând gestionarea eficientă și sigură a apelor meteorice.",
    port2_cat: "Instalații Termice", port2_title: "Punct Termic - Aeroportul Iași", port2_desc: "Amenajarea și implementarea punctului termic tehnologic de înaltă performanță aferent terminalului Aeroportului Internațional Iași, respectând cele mai stricte norme de calitate.",
    cont_tag: "Contactați-ne", cont_title: "Sunteți gata să începeți următorul proiect?", cont_desc: "Echipa Cominteg Prim SRL vă stă la dispoziție pentru expertize tehnice, oferte de preț și consultanță în execuție.",
    cont_hq: "Sediul Central", cont_hq_desc: "Strada Albişoara 84/6, Chișinău, Republica Moldova", cont_email: "Adresă Email", cont_phone: "Telefon",
    footer_rights: "&copy; 2026 Cominteg Prim SRL. Toate drepturile rezervate. Execuție la cele mai înalte standarde."
  },
  en: {
    click_gallery: "View Image",
    intro_title: "Platform View", intro_desc: "Select your device to load the appropriate design.", intro_btn_pc: "Desktop", intro_btn_mob: "Mobile",
    nav_home: "Home", nav_about: "About Us", nav_services: "Services", nav_portfolio: "Portfolio", nav_contact: "Contact",
    hero_badge: "Excellence in Infrastructure & Engineering Networks",
    hero_title: "Building tomorrow's infrastructure. <span>Safe. Durable.</span>",
    hero_desc: "Cominteg Prim SRL delivers complex technical solutions, from aqueduct and stormwater networks to thermal points and high-performance civil infrastructure.",
    hero_btn1: "Explore Projects", hero_btn2: "Discover the Company",
    about_tag: "About Us", about_title: "Experts in <span>engineering networks</span> and infrastructure",
    about_lead: "<strong>Cominteg Prim SRL</strong> is a top company specialized in the design, execution, and rehabilitation of engineering networks and civil infrastructure.",
    about_p1: "With a highly qualified technical team and high-performance equipment, we precisely execute complex works: from aqueduct mains and stormwater drainage networks to infrastructure for thermal points.",
    about_p2: "Every project managed by <strong>Cominteg Prim SRL</strong> reflects our firm commitment to quality, durability, safety, and long-term functionality, strictly complying with execution standards.",
    about_list1: "Precise execution of complex engineering networks (water, sewage, heating)", about_list2: "Efficient site management, based on rigorous technical evaluations",
    iso_9001: "Quality Management", iso_14001: "Environmental Management", iso_45001: "Health & Safety",
    qual_title: "Guaranteed Quality", qual_desc: "Superior technical standards",
    serv_tag: "Areas of Activity", serv_title: "Integrated Construction Services",
    serv1_title: "Edilitary & Sewage Networks", serv1_desc: "Construction of stormwater networks, complex boulevard undercrossings, and drainage systems execution.",
    serv2_title: "Thermal Heating & Aqueduct", serv2_desc: "Design, execution, and rehabilitation for main thermal networks, technological points, and advanced cascade heating systems, integrated with drinking water supply mains and high-pressure networks.",
    port_tag: "Demonstrated Experience", port_title: "Reference Projects",
    port1_cat: "Edilitary Networks", port1_title: "Stormwater drainage network - Satul German", port1_desc: "Complex execution of the stormwater collection network for a residential complex in the Satul German area, ensuring efficient and safe management of meteoric waters.",
    port2_cat: "Thermal Installations", port2_title: "Thermal Point - Iași Airport", port2_desc: "Arrangement and implementation of the high-performance technological thermal point for the Iași International Airport terminal, respecting the strictest quality standards.",
    cont_tag: "Contact Us", cont_title: "Ready to start your next project?", cont_desc: "The Cominteg Prim SRL team is at your disposal for technical expertise, price offers, and execution consulting.",
    cont_hq: "Headquarters", cont_hq_desc: "84/6 Albisoara Street, Chișinău, Republic of Moldova", cont_email: "Email Address", cont_phone: "Phone",
    footer_rights: "&copy; 2026 Cominteg Prim SRL. All rights reserved. Execution at the highest standards."
  },
  ru: {
    click_gallery: "Смотреть изображение",
    intro_title: "Просмотр платформы", intro_desc: "Выберите устройство для загрузки подходящего дизайна.", intro_btn_pc: "Компьютер", intro_btn_mob: "Телефон",
    nav_home: "Главная", nav_about: "О нас", nav_services: "Услуги", nav_portfolio: "Портфолио", nav_contact: "Контакты",
    hero_badge: "Передовой опыт в инфраструктуре и инженерных сетях",
    hero_title: "Строим инфраструктуру завтрашнего дня. <span>Надежно. Долговечно.</span>",
    hero_desc: "Cominteg Prim SRL предлагает сложные технические решения: от магистралей водоснабжения и ливневой канализации до тепловых пунктов и передовой инженерной инфраструктуры.",
    hero_btn1: "Смотреть проекты", hero_btn2: "О компании",
    about_tag: "О нас", about_title: "Эксперты в <span>инженерных сетях</span> и инфраструктуре",
    about_lead: "<strong>Cominteg Prim SRL</strong> — ведущая компания, специализирующаяся на проектировании, строительстве и реконструкции инженерных сетей и гражданской инфраструктуры.",
    about_p1: "Имея высококвалифицированную техническую команду и современное оборудование, мы точно выполняем сложные работы: от магистралей водоснабжения до инфраструктуры технологических тепловых пунктов.",
    about_p2: "Каждый проект <strong>Cominteg Prim SRL</strong> отражает нашу твердую приверженность качеству, долговечности, безопасности и долгосрочной функциональности.",
    about_list1: "Точное выполнение сложных инженерных сетей (вода, канализация, отопление)", about_list2: "Эффективное управление объектом на основе строгих технических оценок",
    iso_9001: "Менеджмент качества", iso_14001: "Экологический менеджмент", iso_45001: "Охрана труда",
    qual_title: "Гарантия качества", qual_desc: "Высокие технические стандарты",
    serv_tag: "Направления деятельности", serv_title: "Комплексные строительные услуги",
    serv1_title: "Инженерные и канализационные сети", serv1_desc: "Строительство сетей ливневой канализации, сложных подземных переходов бульваров и дренажных систем.",
    serv2_title: "Теплоснабжение и Водопровод", serv2_desc: "Проектирование, строительство и реконструкция магистральных тепловых сетей, технологических пунктов и передовых каскадных систем отопления, интегрированных с магистралями питьевого водоснабжения.",
    port_tag: "Доказанный опыт", port_title: "Реализованные проекты",
    port1_cat: "Инженерные сети", port1_title: "Сеть ливневой канализации - Satul German", port1_desc: "Комплексное строительство сети сбора ливневых вод для жилого комплекса в районе Satul German, обеспечивающее безопасное управление сточными водами.",
    port2_cat: "Тепловые установки", port2_title: "Тепловой пункт - Аэропорт Яссы", port2_desc: "Обустройство высокопроизводительного технологического теплового пункта для терминала Международного аэропорта Яссы.",
    cont_tag: "Свяжитесь с нами", cont_title: "Готовы начать ваш следующий проект?", cont_desc: "Команда Cominteg Prim SRL к вашим услугам для технической экспертизы, коммерческих предложений и консультаций.",
    cont_hq: "Главный офис", cont_hq_desc: "Улица Албишоара 84/6, Кишинев, Республика Молдова", cont_email: "Адрес Email", cont_phone: "Телефон",
    footer_rights: "&copy; 2026 Cominteg Prim SRL. Все права защищены. Выполнение по самым высоким стандартам."
  }
};

const langPositions = { 'ro': 0, 'en': 1, 'ru': 2 };

function changeLanguage(lang) {
  localStorage.setItem('selectedLang', lang);
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const slider = document.querySelector('.lang-slider');
  if(slider) {
    slider.style.transform = `translateX(${langPositions[lang] * 100}%)`;
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
}

/* --------------------------------------------------------------------------
   FUNCTII DE BAZĂ (Meniu, Scroll, Animații)
-------------------------------------------------------------------------- */
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
          initParallax(); 
        }, 50);

      }, 800); 
    }, 1800); 

  }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('selectedLang') || 'ro';
  changeLanguage(savedLang);

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

function initParallax() {
  const heroBg = document.querySelector('.hero-bg');
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    if (heroBg && scrollPos < window.innerHeight) {
      heroBg.style.transform = `translateY(${scrollPos * 0.4}px)`;
    }
  });
}

function initAOS() {
  document.body.style.overflow = "auto"; 

  const revealElements = document.querySelectorAll('[data-aos]');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-aos-delay') || 0;
        setTimeout(() => {
          entry.target.style.transition = "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translate(0, 0) scale(1)";
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => {
    const type = el.getAttribute('data-aos');
    el.style.opacity = "0";
    
    if(type === "fade-up") el.style.transform = "translateY(60px)";
    if(type === "fade-right") el.style.transform = "translateX(-60px)";
    if(type === "fade-left") el.style.transform = "translateX(60px)";
    if(type === "zoom-in") el.style.transform = "scale(0.85)";
    
    revealObserver.observe(el);
  });
}
