/* ══════════════════════════════════════
   CONFIGURATION
   ══════════════════════════════════════ */
var weddingConfig = {
  groomName: 'Harikrishnan',
  groomFullName: 'J. Harikrishnan',
  brideName: 'Pooja',
  brideFullName: 'M. Pooja',

  families: {
    groom: {
      parents: 'Sri. N. Jaishankar & Smt. R. Dhanabakkiyam',
      place: 'Velliyampalayam, Sathyamangalam',
    },
    bride: {
      parents: 'Sri. P. Mahalingam & Smt. M. Prabavathi',
      place: 'Tikondi Village',
    },
  },

  weddingDate: '2026-11-20T05:00:00+05:30',
  couplePhoto: 'assets/images/couple.jpg',

  reception: {
    title: 'Reception',
    date: 'Thursday, 19th November 2026',
    time: '6:00 PM — 9:00 PM',
    venue: 'S.S. Mahal',
    address: 'Nanjappagoundenpudur (Negamam), Sathyamangalam',
    calendarStart: '20261119T123000Z',
    calendarEnd: '20261119T153000Z',
  },

  muhurtham: {
    title: 'Muhurtham',
    date: 'Friday, 20th November 2026',
    time: '5:00 AM — 6:00 AM',
    venue: 'S.S. Mahal',
    address: 'Nanjappagoundenpudur (Negamam), Sathyamangalam',
    calendarStart: '20261119T233000Z',
    calendarEnd: '20261120T003000Z',
  },

  venue: {
    name: 'S.S. Mahal',
    address: 'Nanjappagoundenpudur (Negamam), Sathyamangalam',
    mapsUrl: 'https://www.google.com/maps/search/S.S.+Mahal+Nanjappagoundenpudur+Sathyamangalam',
  },

  announcements: [
    'With great joy, we invite you to celebrate our special day with us.',
    'Muhurtham begins promptly at 5:00 AM. Please be seated by 4:45 AM.',
  ],

  gallery: [
    { src: 'assets/images/couple.jpg', alt: 'Harikrishnan & Pooja' },
    { src: 'assets/images/family.jpg', alt: 'Family celebration' },
  ],

  closingMessage: 'We look forward to celebrating this special day with you.',
  music: null,
};

/* ══════════════════════════════════════
   SVG ICONS
   ══════════════════════════════════════ */
var icons = {
  calendar: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  clock: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  download: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  navigation: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>',
  bell: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
};

/* ══════════════════════════════════════
   DECORATIVE SVGs
   ══════════════════════════════════════ */
function floralCorner() {
  return '<svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M5,145 C5,100 15,65 40,45 C55,33 75,22 100,15 C120,10 140,7 148,5" stroke="var(--gold)" stroke-width="0.7" opacity="0.22"/>' +
    '<path d="M8,125 C12,90 28,58 52,40 C72,27 92,18 118,12" stroke="var(--gold)" stroke-width="0.4" opacity="0.14"/>' +
    '<path d="M28,72 C34,58 30,48 24,53 C26,62 28,72 28,72Z" fill="var(--gold)" opacity="0.08"/>' +
    '<path d="M52,42 C58,28 54,18 48,24 C50,32 52,42 52,42Z" fill="var(--gold)" opacity="0.07"/>' +
    '<path d="M14,102 C20,90 16,80 10,85 C12,92 14,102 14,102Z" fill="var(--gold)" opacity="0.06"/>' +
    '<path d="M82,22 C88,10 84,2 78,7 C80,14 82,22 82,22Z" fill="var(--gold)" opacity="0.06"/>' +
    '<path d="M38,55 C42,47 40,40 36,43 C37,48 38,55 38,55Z" fill="var(--gold)" opacity="0.05"/>' +
    '<circle cx="40" cy="48" r="2" fill="var(--gold)" opacity="0.1"/>' +
    '<circle cx="100" cy="15" r="1.5" fill="var(--gold)" opacity="0.08"/>' +
    '<circle cx="18" cy="92" r="1.5" fill="var(--gold)" opacity="0.07"/>' +
    '<circle cx="65" cy="30" r="1.2" fill="var(--gold)" opacity="0.08"/>' +
    '</svg>';
}

function cardFloral() {
  return '<svg viewBox="0 0 120 24" class="card-floral" aria-hidden="true">' +
    '<path d="M15,20 Q35,8 60,6 Q85,4 105,16" fill="none" stroke="var(--gold)" stroke-width="0.5" opacity="0.22"/>' +
    '<ellipse cx="38" cy="11" rx="5" ry="2.5" transform="rotate(-15,38,11)" fill="var(--gold)" opacity="0.06"/>' +
    '<ellipse cx="60" cy="7" rx="4" ry="2" fill="var(--gold)" opacity="0.05"/>' +
    '<ellipse cx="82" cy="10" rx="4.5" ry="2" transform="rotate(12,82,10)" fill="var(--gold)" opacity="0.06"/>' +
    '<circle cx="60" cy="5" r="1.5" fill="var(--gold)" opacity="0.1"/>' +
    '</svg>';
}

function traditionalLamp() {
  return '<div class="lamp-wrap reveal" data-delay="600" aria-hidden="true">' +
    '<svg viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg" class="lamp-svg">' +
    '<path d="M17,65 L33,65" stroke="var(--gold)" stroke-width="0.8" opacity="0.3"/>' +
    '<path d="M20,65 L20,62 L30,62 L30,65" stroke="var(--gold)" stroke-width="0.6" opacity="0.25" fill="none"/>' +
    '<path d="M22,62 L22,58 L28,58 L28,62" stroke="var(--gold)" stroke-width="0.5" opacity="0.22" fill="none"/>' +
    '<line x1="25" y1="58" x2="25" y2="34" stroke="var(--gold)" stroke-width="0.6" opacity="0.25"/>' +
    '<path d="M15,34 Q18,27 25,24 Q32,27 35,34" stroke="var(--gold)" stroke-width="0.7" opacity="0.28" fill="none"/>' +
    '<path d="M25,24 Q23,17 25,10 Q27,17 25,24" fill="var(--gold)" opacity="0.14"/>' +
    '<path d="M25,18 Q24,14 25,11 Q26,14 25,18" fill="var(--gold)" opacity="0.22"/>' +
    '<circle cx="25" cy="12" r="5" fill="var(--gold)" opacity="0.04"/>' +
    '<circle cx="25" cy="12" r="8" fill="var(--gold)" opacity="0.02"/>' +
    '</svg></div>';
}

/* ══════════════════════════════════════
   UTILITIES
   ══════════════════════════════════════ */
function ornament() {
  return '<div class="ornament reveal" aria-hidden="true">' +
    '<svg viewBox="0 0 200 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="10" y1="9" x2="82" y2="9" stroke="var(--gold)" stroke-width="0.6" opacity="0.45" class="orn-line"/>' +
    '<path d="M92,9 L100,2 L108,9 L100,16 Z" stroke="var(--gold)" stroke-width="0.6" fill="none" opacity="0.45"/>' +
    '<circle cx="100" cy="9" r="1.6" fill="var(--gold)" opacity="0.3"/>' +
    '<line x1="118" y1="9" x2="190" y2="9" stroke="var(--gold)" stroke-width="0.6" opacity="0.45" class="orn-line"/>' +
    '</svg></div>';
}

function getFullCountdown() {
  var diff = new Date(weddingConfig.weddingDate) - new Date();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function generateICS(event) {
  var lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding//Invitation//EN',
    'BEGIN:VEVENT',
    'DTSTART:' + event.calendarStart,
    'DTEND:' + event.calendarEnd,
    'SUMMARY:' + weddingConfig.groomName + ' & ' + weddingConfig.brideName + ' — ' + event.title,
    'LOCATION:' + event.venue + '\\, ' + event.address,
    'DESCRIPTION:' + event.title + ' of ' + weddingConfig.groomFullName + ' & ' + weddingConfig.brideFullName,
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return lines.join('\r\n');
}

function downloadICS(event) {
  var ics = generateICS(event);
  var blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = weddingConfig.groomName + '-' + weddingConfig.brideName + '-' + event.title + '.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ══════════════════════════════════════
   ENVELOPE SCENE
   ══════════════════════════════════════ */
function createEnvelopeScene() {
  var c = weddingConfig;
  return '<div id="inviteScene" class="invite-scene">' +
    '<div class="invite-wrapper">' +

    '<div class="invite-card" id="inviteCard">' +

    '<div class="card-back">' +
    '<div class="card-back-content">' +
    '<p class="cbc-subtitle">Together with their families</p>' +
    '<p class="cbc-names">' + c.groomName + '</p>' +
    '<span class="cbc-amp">&</span>' +
    '<p class="cbc-names">' + c.brideName + '</p>' +
    '<p class="cbc-line" style="margin-top:0.8rem">invite you to celebrate their union</p>' +
    '<p class="cbc-date">19 & 20 November 2026</p>' +
    '</div></div>' +

    '<div class="card-front" id="cardFront">' +
    '<div class="card-front-face">' +
    '<div class="card-corner tl"></div>' +
    '<div class="card-corner tr"></div>' +
    '<div class="card-corner bl"></div>' +
    '<div class="card-corner br"></div>' +
    cardFloral() +
    '<p class="cf-pre">The Wedding of</p>' +
    '<h1 class="cf-name">' + c.groomName + '</h1>' +
    '<span class="cf-amp">&</span>' +
    '<h1 class="cf-name">' + c.brideName + '</h1>' +
    '<p class="cf-date">November 2026</p>' +
    '<div class="card-floral-bottom">' + cardFloral() + '</div>' +
    '<div class="wax-seal" id="waxSeal">' +
    '<span>' + c.groomName.charAt(0) + '</span>' +
    '<span class="seal-star">&#10022;</span>' +
    '<span>' + c.brideName.charAt(0) + '</span>' +
    '</div>' +
    '</div>' +
    '<div class="card-front-back"></div>' +
    '</div>' +

    '</div>' +

    '<p class="tap-hint" id="tapHint">Tap to Open</p>' +

    '</div></div>';
}

/* ══════════════════════════════════════
   WEDDING PAGE SECTIONS
   ══════════════════════════════════════ */
function createHero() {
  var c = weddingConfig;

  return '<section class="hero" id="home">' +
    '<canvas class="particle-canvas" id="particleCanvas"></canvas>' +

    '<div class="hero-floral hero-floral-tl">' + floralCorner() + '</div>' +
    '<div class="hero-floral hero-floral-tr">' + floralCorner() + '</div>' +
    '<div class="hero-floral hero-floral-bl">' + floralCorner() + '</div>' +
    '<div class="hero-floral hero-floral-br">' + floralCorner() + '</div>' +

    '<div class="hero-content">' +
    '<p class="hero-subtitle reveal" data-delay="0">Together with our families</p>' +
    ornament() +

    '<h1 class="hero-name reveal" data-delay="150">' + c.groomName + '</h1>' +

    '<div class="hero-portrait reveal" data-delay="300">' +
    '<img src="' + c.couplePhoto + '" alt="' + c.groomName + ' & ' + c.brideName + '">' +
    '</div>' +

    '<span class="hero-amp reveal" data-delay="350">&</span>' +
    '<h1 class="hero-name reveal" data-delay="450">' + c.brideName + '</h1>' +

    ornament() +

    '<p class="hero-tagline reveal" data-delay="550">request the pleasure of your presence</p>' +
    '<p class="hero-date reveal" data-delay="600">November 2026</p>' +

    '<div class="countdown reveal" data-delay="650" id="countdownTimer"></div>' +

    traditionalLamp() +

    '</div></section>';
}

function createAnnouncement() {
  var items = weddingConfig.announcements;
  if (!items || items.length === 0) return '';
  var html = '';
  for (var i = 0; i < items.length; i++) {
    html += '<p class="announcement-text">' + items[i] + '</p>';
  }
  return '<section class="announcement" id="announcement">' +
    '<div class="announcement-icon reveal">' + icons.bell + '</div>' +
    '<div class="reveal">' + html + '</div>' +
    '</section>';
}

function createEventCard(event) {
  var c = weddingConfig;
  return '<div class="event-card reveal">' +
    '<div class="event-icon">' + icons.calendar + '</div>' +
    '<h3 class="event-title">' + event.title + '</h3>' +
    '<div class="event-info">' + icons.calendar + '<span>' + event.date + '</span></div>' +
    '<div class="event-info">' + icons.clock + '<span>' + event.time + '</span></div>' +
    '<div class="event-info venue-line">' + icons.mapPin + '<span>' + event.venue + ', ' + event.address + '</span></div>' +
    '<div class="event-actions">' +
    '<button class="btn" data-calendar="' + event.title + '">' + icons.download + ' Add to Calendar</button>' +
    '<a class="btn" href="' + c.venue.mapsUrl + '" target="_blank" rel="noopener noreferrer">' + icons.navigation + ' Directions</a>' +
    '</div></div>';
}

function createDetails() {
  return '<section class="details section" id="details">' +
    '<h2 class="section-title reveal">Wedding Celebrations</h2>' +
    '<div class="events">' +
    createEventCard(weddingConfig.reception) +
    createEventCard(weddingConfig.muhurtham) +
    '</div></section>';
}

function createGallery() {
  var photos = weddingConfig.gallery;
  if (!photos || photos.length === 0) return '';
  var items = '';
  for (var i = 0; i < photos.length; i++) {
    items += '<div class="gallery-item reveal" data-index="' + i + '">' +
      '<img src="' + photos[i].src + '" alt="' + photos[i].alt + '" loading="lazy">' +
      '</div>';
  }
  return '<section class="gallery section" id="gallery">' +
    '<h2 class="section-title reveal">Moments</h2>' +
    '<div class="gallery-grid">' + items + '</div>' +
    '</section>';
}

function createVenue() {
  var v = weddingConfig.venue;
  return '<section class="venue section" id="venue">' +
    ornament() +
    '<h2 class="section-title reveal">Venue</h2>' +
    '<p class="venue-name reveal">' + v.name + '</p>' +
    '<p class="venue-address reveal">' + v.address + '</p>' +
    '<a class="btn-directions reveal" href="' + v.mapsUrl + '" target="_blank" rel="noopener noreferrer">' +
    icons.mapPin + ' Get Directions</a>' +
    '</section>';
}

function createClosing() {
  var c = weddingConfig;
  return '<section class="closing section" id="closing">' +
    ornament() +
    '<p class="closing-message reveal">' + c.closingMessage + '</p>' +
    '<p class="closing-names reveal">' + c.groomName + ' & ' + c.brideName + '</p>' +
    '<p class="closing-date reveal">November 2026</p>' +
    '<p class="closing-footer reveal">With love and blessings from both families</p>' +
    ornament() +
    '</section>';
}

function createMusicToggle() {
  if (!weddingConfig.music) return '';
  return '<button class="music-toggle" id="musicToggle" aria-label="Toggle music">' +
    '<span id="musicIcon">&#128263;</span>' +
    '</button>' +
    '<audio id="weddingAudio" loop preload="none">' +
    '<source src="' + weddingConfig.music + '" type="audio/mpeg">' +
    '</audio>';
}

function createLightbox() {
  return '<div class="lightbox" id="lightbox">' +
    '<button class="lightbox-close" id="lightboxClose" aria-label="Close">&times;</button>' +
    '<img src="" alt="" id="lightboxImg">' +
    '</div>';
}

/* ══════════════════════════════════════
   SETUP FUNCTIONS
   ══════════════════════════════════════ */
var animationTimeouts = [];

function setupEnvelope() {
  var card = document.getElementById('inviteCard');
  var seal = document.getElementById('waxSeal');
  var scene = document.getElementById('inviteScene');
  var page = document.getElementById('weddingPage');
  var hint = document.getElementById('tapHint');
  var opened = false;
  var animating = false;

  function openCard() {
    if (opened) return;
    opened = true;
    animating = true;

    hint.classList.add('hidden');
    seal.classList.add('broken');

    animationTimeouts.push(setTimeout(function () {
      card.classList.add('opened');
    }, 150));

    animationTimeouts.push(setTimeout(function () {
      scene.classList.add('fade-out');
    }, 1800));

    animationTimeouts.push(setTimeout(function () {
      scene.classList.add('removed');
      page.classList.add('visible');
      animating = false;
      setupAnimations();
      setupParticles();
      setupCountdown();
      showMusicToggle();
    }, 2500));

    try { sessionStorage.setItem('invitation-opened', '1'); } catch (e) {}
  }

  function skipToPage() {
    if (!animating) return;
    for (var i = 0; i < animationTimeouts.length; i++) {
      clearTimeout(animationTimeouts[i]);
    }
    animationTimeouts = [];
    scene.classList.add('removed');
    page.classList.add('visible');
    page.style.transition = 'none';
    animating = false;
    setupAnimations();
    setupParticles();
    setupCountdown();
    showMusicToggle();
  }

  card.addEventListener('click', openCard);

  scene.addEventListener('click', function (e) {
    if (animating && e.target !== card && !card.contains(e.target)) {
      skipToPage();
    }
  });
}

function setupAnimations() {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = entry.target.getAttribute('data-delay');
          if (delay) {
            entry.target.style.transitionDelay = delay + 'ms';
          }
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
  );

  var elements = document.querySelectorAll('#weddingPage .reveal');
  for (var i = 0; i < elements.length; i++) {
    observer.observe(elements[i]);
  }
}

function setupParticles() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var particles = [];
  var count = window.innerWidth < 600 ? 18 : 30;
  var running = true;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function make() {
    return {
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 20,
      size: Math.random() * 2 + 0.5,
      vy: -(Math.random() * 0.25 + 0.08),
      vx: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.2 + 0.04,
    };
  }

  for (var i = 0; i < count; i++) {
    var p = make();
    p.y = Math.random() * canvas.height;
    particles.push(p);
  }

  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(184, 150, 62, ' + p.opacity + ')';
      ctx.fill();
      p.y += p.vy;
      p.x += p.vx;
      if (p.y < -10) particles[i] = make();
    }
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);

  var heroEl = document.getElementById('home');
  var io = new IntersectionObserver(function (entries) {
    running = entries[0].isIntersecting;
    if (running) draw();
  }, { threshold: 0 });
  if (heroEl) io.observe(heroEl);

  draw();
}

function setupCountdown() {
  var el = document.getElementById('countdownTimer');
  if (!el) return;

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function update() {
    var cd = getFullCountdown();
    if (!cd) { el.innerHTML = ''; return; }
    el.innerHTML =
      '<div class="cd-unit"><span class="cd-num">' + cd.days + '</span><span class="cd-label">Days</span></div>' +
      '<div class="cd-sep">&middot;</div>' +
      '<div class="cd-unit"><span class="cd-num">' + pad(cd.hours) + '</span><span class="cd-label">Hours</span></div>' +
      '<div class="cd-sep">&middot;</div>' +
      '<div class="cd-unit"><span class="cd-num">' + pad(cd.minutes) + '</span><span class="cd-label">Min</span></div>' +
      '<div class="cd-sep">&middot;</div>' +
      '<div class="cd-unit"><span class="cd-num">' + pad(cd.seconds) + '</span><span class="cd-label">Sec</span></div>';
  }
  update();
  setInterval(update, 1000);
}

function setupGallery() {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  if (!lightbox) return;

  var items = document.querySelectorAll('.gallery-item');
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (function (item) {
      return function () {
        var img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      };
    })(items[i]));
  }

  function closeLB() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLB);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLB();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLB();
  });
}

function setupCalendar() {
  var buttons = document.querySelectorAll('[data-calendar]');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (function (btn) {
      return function () {
        var title = btn.getAttribute('data-calendar');
        var event = title === weddingConfig.reception.title
          ? weddingConfig.reception
          : weddingConfig.muhurtham;
        downloadICS(event);
      };
    })(buttons[i]));
  }
}

function setupMusic() {
  var toggle = document.getElementById('musicToggle');
  var audio = document.getElementById('weddingAudio');
  var icon = document.getElementById('musicIcon');
  if (!toggle || !audio) return;

  var playing = false;
  toggle.addEventListener('click', function () {
    if (playing) {
      audio.pause();
      icon.innerHTML = '&#128263;';
    } else {
      audio.play();
      icon.innerHTML = '&#128266;';
    }
    playing = !playing;
    try { sessionStorage.setItem('music-playing', playing ? '1' : '0'); } catch (e) {}
  });
}

function showMusicToggle() {
  var toggle = document.getElementById('musicToggle');
  if (toggle) {
    setTimeout(function () { toggle.classList.add('show'); }, 600);
  }
}

/* ══════════════════════════════════════
   INIT
   ══════════════════════════════════════ */
function init() {
  var app = document.getElementById('app');

  app.innerHTML =
    createEnvelopeScene() +
    '<main id="weddingPage" class="wedding-page">' +
    createHero() +
    createAnnouncement() +
    createDetails() +
    createGallery() +
    createVenue() +
    createClosing() +
    '</main>' +
    createMusicToggle() +
    createLightbox();

  var alreadyOpened = false;
  try { alreadyOpened = sessionStorage.getItem('invitation-opened') === '1'; } catch (e) {}

  if (alreadyOpened) {
    var scene = document.getElementById('inviteScene');
    var page = document.getElementById('weddingPage');
    scene.classList.add('removed');
    page.classList.add('visible');
    page.style.transition = 'none';
    setupAnimations();
    setupParticles();
    setupCountdown();
    showMusicToggle();
  } else {
    setupEnvelope();
  }

  setupGallery();
  setupCalendar();
  setupMusic();
}

document.addEventListener('DOMContentLoaded', init);
