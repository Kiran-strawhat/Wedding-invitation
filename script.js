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

  welcomeMessage: 'With great joy, we invite you to celebrate our special day with us.',

  announcements: [
    'Muhurtham begins promptly at 5:00 AM. Please be seated by 4:45 AM.',
  ],

  gallery: [
    { src: 'assets/images/couple.jpg', alt: 'Harikrishnan & Pooja', featured: true },
    { src: 'assets/images/family.jpg', alt: 'Family celebration' },
  ],

  closingMessage: 'We look forward to celebrating this beautiful beginning with you.',
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
    '<path d="M5,145 C5,95 18,60 45,40 C60,30 80,20 108,13 C128,8 145,5 148,4" stroke="var(--gold)" stroke-width="0.8" opacity="0.28"/>' +
    '<path d="M8,130 C12,88 28,55 55,36 C78,22 100,15 130,9" stroke="var(--gold)" stroke-width="0.5" opacity="0.18"/>' +
    '<path d="M12,115 C18,80 35,52 60,38 C80,28 98,22 120,16" stroke="var(--gold)" stroke-width="0.3" opacity="0.10"/>' +
    '<path d="M28,72 C36,56 32,44 24,50 C26,60 28,72 28,72Z" fill="var(--gold)" opacity="0.10"/>' +
    '<path d="M52,42 C60,26 56,14 48,20 C50,30 52,42 52,42Z" fill="var(--gold)" opacity="0.09"/>' +
    '<path d="M14,102 C22,88 18,76 10,82 C12,90 14,102 14,102Z" fill="var(--gold)" opacity="0.08"/>' +
    '<path d="M82,22 C90,8 86,0 78,5 C80,12 82,22 82,22Z" fill="var(--gold)" opacity="0.07"/>' +
    '<path d="M38,55 C44,45 42,36 36,40 C37,46 38,55 38,55Z" fill="var(--gold)" opacity="0.07"/>' +
    '<path d="M68,32 C74,22 72,14 66,18 C68,24 68,32 68,32Z" fill="var(--gold)" opacity="0.06"/>' +
    '<circle cx="40" cy="48" r="2.2" fill="var(--gold)" opacity="0.12"/>' +
    '<circle cx="105" cy="14" r="1.8" fill="var(--gold)" opacity="0.10"/>' +
    '<circle cx="18" cy="92" r="1.8" fill="var(--gold)" opacity="0.09"/>' +
    '<circle cx="65" cy="30" r="1.5" fill="var(--gold)" opacity="0.10"/>' +
    '<circle cx="30" cy="65" r="1.2" fill="var(--gold)" opacity="0.08"/>' +
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
  return '<div class="lamp-wrap hero-seq" aria-hidden="true">' +
    '<svg viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg" class="lamp-svg">' +
    '<path d="M17,65 L33,65" stroke="var(--gold)" stroke-width="0.8" opacity="0.3"/>' +
    '<path d="M20,65 L20,62 L30,62 L30,65" stroke="var(--gold)" stroke-width="0.6" opacity="0.25" fill="none"/>' +
    '<path d="M22,62 L22,58 L28,58 L28,62" stroke="var(--gold)" stroke-width="0.5" opacity="0.22" fill="none"/>' +
    '<line x1="25" y1="58" x2="25" y2="34" stroke="var(--gold)" stroke-width="0.6" opacity="0.25"/>' +
    '<path d="M15,34 Q18,27 25,24 Q32,27 35,34" stroke="var(--gold)" stroke-width="0.7" opacity="0.28" fill="none"/>' +
    '<path d="M25,24 Q23,17 25,10 Q27,17 25,24" fill="var(--gold)" class="flame-path" opacity="0.14"/>' +
    '<path d="M25,18 Q24,14 25,11 Q26,14 25,18" fill="var(--gold)" class="flame-glow" opacity="0.22"/>' +
    '<circle cx="25" cy="12" r="5" fill="var(--gold)" class="flame-halo" opacity="0.04"/>' +
    '<circle cx="25" cy="12" r="8" fill="var(--gold)" class="flame-halo" opacity="0.02"/>' +
    '</svg></div>';
}

function jasmineGarland() {
  var buds = '';
  var positions = [
    [45,14],[65,12],[85,13],[105,16],[125,18],[145,18],[165,16],[185,14],[205,12],[225,13]
  ];
  for (var i = 0; i < positions.length; i++) {
    var x = positions[i][0], y = positions[i][1];
    var r = 3.5 + Math.sin(i * 1.1) * 0.8;
    buds += '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="var(--bg)" stroke="var(--gold)" stroke-width="0.35" opacity="0.18"/>';
    buds += '<circle cx="'+x+'" cy="'+(y-2)+'" r="1" fill="var(--gold)" opacity="0.06"/>';
    buds += '<circle cx="'+(x+2)+'" cy="'+y+'" r="1" fill="var(--gold)" opacity="0.06"/>';
    buds += '<circle cx="'+x+'" cy="'+(y+2)+'" r="1" fill="var(--gold)" opacity="0.06"/>';
    buds += '<circle cx="'+(x-2)+'" cy="'+y+'" r="1" fill="var(--gold)" opacity="0.06"/>';
    buds += '<circle cx="'+x+'" cy="'+y+'" r="1.3" fill="var(--gold)" opacity="0.10"/>';
  }
  return '<div class="section-divider jasmine-wrap reveal" aria-hidden="true">' +
    '<svg viewBox="0 0 270 30" class="jasmine-svg" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M8,16 C40,8 80,10 120,16 C160,22 200,20 262,14" stroke="var(--gold)" stroke-width="0.35" opacity="0.14"/>' +
    '<path d="M12,18 C44,10 84,12 124,18 C164,24 204,22 258,16" stroke="var(--gold)" stroke-width="0.25" opacity="0.08"/>' +
    buds +
    '</svg></div>';
}

function mandapamArch() {
  return '<div class="mandapam-wrap reveal" aria-hidden="true">' +
    '<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="mandapam-svg">' +
    '<path d="M30,85 L30,38 C30,15 65,5 100,5 C135,5 170,15 170,38 L170,85" stroke="var(--gold)" stroke-width="0.7" opacity="0.18"/>' +
    '<path d="M42,85 L42,42 C42,22 68,14 100,14 C132,14 158,22 158,42 L158,85" stroke="var(--gold)" stroke-width="0.45" opacity="0.12"/>' +
    '<path d="M95,5 C98,0 102,0 105,5" stroke="var(--gold)" stroke-width="0.5" opacity="0.15"/>' +
    '<circle cx="100" cy="2" r="2.5" fill="var(--gold)" opacity="0.08"/>' +
    '<path d="M54,85 L54,48 C54,32 74,24 100,24 C126,24 146,32 146,48 L146,85" stroke="var(--gold)" stroke-width="0.3" opacity="0.07"/>' +
    '<rect x="27" y="82" width="6" height="3" rx="0.5" fill="var(--gold)" opacity="0.06"/>' +
    '<rect x="167" y="82" width="6" height="3" rx="0.5" fill="var(--gold)" opacity="0.06"/>' +
    '<line x1="20" y1="85" x2="180" y2="85" stroke="var(--gold)" stroke-width="0.5" opacity="0.12"/>' +
    '<circle cx="100" cy="40" r="8" fill="none" stroke="var(--gold)" stroke-width="0.3" opacity="0.06"/>' +
    '<circle cx="100" cy="40" r="3" fill="var(--gold)" opacity="0.04"/>' +
    '</svg></div>';
}

function lampPairDivider() {
  return '<div class="section-divider lamp-pair-wrap reveal" aria-hidden="true">' +
    '<svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" class="lamp-pair-svg">' +
    '<line x1="20" y1="25" x2="70" y2="25" stroke="var(--gold)" stroke-width="0.4" opacity="0.15"/>' +
    '<line x1="130" y1="25" x2="180" y2="25" stroke="var(--gold)" stroke-width="0.4" opacity="0.15"/>' +
    '<g transform="translate(90,5)">' +
    '<path d="M7,42 L13,42" stroke="var(--gold)" stroke-width="0.6" opacity="0.22"/>' +
    '<path d="M8,42 L8,40 L12,40 L12,42" stroke="var(--gold)" stroke-width="0.4" opacity="0.18" fill="none"/>' +
    '<line x1="10" y1="40" x2="10" y2="24" stroke="var(--gold)" stroke-width="0.5" opacity="0.20"/>' +
    '<path d="M5,24 Q7,19 10,17 Q13,19 15,24" stroke="var(--gold)" stroke-width="0.5" opacity="0.22" fill="none"/>' +
    '<path d="M10,17 Q9,12 10,7 Q11,12 10,17" fill="var(--gold)" class="flame-path" opacity="0.12"/>' +
    '<circle cx="10" cy="8" r="3" fill="var(--gold)" class="flame-halo" opacity="0.04"/>' +
    '</g>' +
    '</svg></div>';
}

/* ══════════════════════════════════════
   UTILITIES
   ══════════════════════════════════════ */
function ornament() {
  return '<div class="ornament hero-seq" aria-hidden="true">' +
    '<svg viewBox="0 0 200 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="10" y1="9" x2="82" y2="9" stroke="var(--gold)" stroke-width="0.6" opacity="0.45"/>' +
    '<path d="M92,9 L100,2 L108,9 L100,16 Z" stroke="var(--gold)" stroke-width="0.6" fill="none" opacity="0.45"/>' +
    '<circle cx="100" cy="9" r="1.6" fill="var(--gold)" opacity="0.3"/>' +
    '<line x1="118" y1="9" x2="190" y2="9" stroke="var(--gold)" stroke-width="0.6" opacity="0.45"/>' +
    '</svg></div>';
}

function ornamentReveal() {
  return '<div class="ornament reveal" aria-hidden="true">' +
    '<svg viewBox="0 0 200 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="10" y1="9" x2="82" y2="9" stroke="var(--gold)" stroke-width="0.6" opacity="0.45"/>' +
    '<path d="M92,9 L100,2 L108,9 L100,16 Z" stroke="var(--gold)" stroke-width="0.6" fill="none" opacity="0.45"/>' +
    '<circle cx="100" cy="9" r="1.6" fill="var(--gold)" opacity="0.3"/>' +
    '<line x1="118" y1="9" x2="190" y2="9" stroke="var(--gold)" stroke-width="0.6" opacity="0.45"/>' +
    '</svg></div>';
}

function ornamentStar() {
  return '<div class="ornament-star" aria-hidden="true">' +
    '<svg viewBox="0 0 200 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="30" y1="9" x2="88" y2="9" stroke="var(--gold-light)" stroke-width="0.5" opacity="0.5"/>' +
    '<text x="100" y="13" text-anchor="middle" fill="var(--gold-light)" font-size="10" opacity="0.7">&#10022;</text>' +
    '<line x1="112" y1="9" x2="170" y2="9" stroke="var(--gold-light)" stroke-width="0.5" opacity="0.5"/>' +
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
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Wedding//Invitation//EN',
    'BEGIN:VEVENT',
    'DTSTART:' + event.calendarStart, 'DTEND:' + event.calendarEnd,
    'SUMMARY:' + weddingConfig.groomName + ' & ' + weddingConfig.brideName + ' — ' + event.title,
    'LOCATION:' + event.venue + '\\, ' + event.address,
    'DESCRIPTION:' + event.title + ' of ' + weddingConfig.groomFullName + ' & ' + weddingConfig.brideFullName,
    'END:VEVENT', 'END:VCALENDAR',
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
    '<div class="card-corner tl"></div><div class="card-corner tr"></div>' +
    '<div class="card-corner bl"></div><div class="card-corner br"></div>' +
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

function createSealParticles() {
  var seal = document.getElementById('waxSeal');
  var card = document.getElementById('inviteCard');
  if (!seal || !card) return;
  var sealRect = seal.getBoundingClientRect();
  var cardRect = card.getBoundingClientRect();
  var cx = sealRect.left - cardRect.left + sealRect.width / 2;
  var cy = sealRect.top - cardRect.top + sealRect.height / 2;

  for (var i = 0; i < 14; i++) {
    var p = document.createElement('div');
    p.className = 'seal-particle';
    var angle = (Math.PI * 2 / 14) * i + (Math.random() - 0.5) * 0.6;
    var dist = 25 + Math.random() * 35;
    p.style.setProperty('--tx', (Math.cos(angle) * dist) + 'px');
    p.style.setProperty('--ty', (Math.sin(angle) * dist) + 'px');
    p.style.left = cx + 'px';
    p.style.top = cy + 'px';
    p.style.width = (2 + Math.random() * 2.5) + 'px';
    p.style.height = p.style.width;
    p.style.animationDelay = (Math.random() * 0.12) + 's';
    card.appendChild(p);
  }
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
    '<p class="hero-subtitle hero-seq">Together with our families</p>' +
    ornament() +
    '<h1 class="hero-name hero-seq">' + c.groomName + '</h1>' +

    '<div class="hero-portrait hero-seq">' +
    '<div class="hero-portrait-glow"></div>' +
    '<div class="hero-portrait-sweep"></div>' +
    '<img src="' + c.couplePhoto + '" alt="' + c.groomName + ' & ' + c.brideName + '">' +
    '</div>' +

    '<span class="hero-amp hero-seq">&</span>' +
    '<h1 class="hero-name hero-seq">' + c.brideName + '</h1>' +
    ornament() +
    '<p class="hero-tagline hero-seq">request the pleasure of your presence</p>' +
    '<p class="hero-date hero-seq">November 2026</p>' +
    '<div class="countdown hero-seq" id="countdownTimer"></div>' +
    traditionalLamp() +
    '</div>' +

    '<div class="scroll-indicator" id="scrollIndicator">' +
    '<span class="scroll-label">Discover Our Day</span>' +
    '<div class="scroll-chevron">' +
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<polyline points="7 10 12 15 17 10" stroke="var(--gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>' +
    '</div>' +
    '<div class="scroll-line"></div>' +
    '</div>' +

    '</section>';
}

function createAnnouncement() {
  var c = weddingConfig;
  var noticeHtml = '';
  if (c.announcements && c.announcements.length > 0) {
    noticeHtml = '<div class="ann-divider-line"></div><div class="ann-notice">';
    for (var i = 0; i < c.announcements.length; i++) {
      noticeHtml += '<p class="ann-notice-text">' + c.announcements[i] + '</p>';
    }
    noticeHtml += '</div>';
  }

  return '<section class="announcement" id="announcement">' +
    '<div class="ann-frame reveal">' +
    '<div class="ann-frame-border"></div>' +
    '<div class="ann-frame-inner"></div>' +
    ornamentStar() +
    '<p class="ann-welcome">' + c.welcomeMessage + '</p>' +
    noticeHtml +
    '</div></section>';
}

function createEventCard(event, index) {
  var c = weddingConfig;
  return '<div class="event-card reveal" data-delay="' + (index * 200) + '">' +
    '<div class="event-card-accent"></div>' +
    '<div class="event-icon">' + icons.calendar + '</div>' +
    '<h3 class="event-title">' + event.title + '</h3>' +
    '<div class="event-details">' +
    '<div class="event-info">' + icons.calendar + '<span>' + event.date + '</span></div>' +
    '<div class="event-info">' + icons.clock + '<span>' + event.time + '</span></div>' +
    '<div class="event-info venue-line">' + icons.mapPin + '<span>' + event.venue + ', ' + event.address + '</span></div>' +
    '</div>' +
    '<div class="event-actions">' +
    '<button class="btn" data-calendar="' + event.title + '">' + icons.download + ' Add to Calendar</button>' +
    '<a class="btn" href="' + c.venue.mapsUrl + '" target="_blank" rel="noopener noreferrer">' + icons.navigation + ' Directions</a>' +
    '</div></div>';
}

function createDetails() {
  return '<section class="details section" id="details">' +
    ornamentReveal() +
    '<h2 class="section-title reveal">Wedding Celebrations</h2>' +
    '<div class="events">' +
    createEventCard(weddingConfig.reception, 0) +
    createEventCard(weddingConfig.muhurtham, 1) +
    '</div></section>';
}

function createGallery() {
  var photos = weddingConfig.gallery;
  if (!photos || photos.length === 0) return '';
  var items = '';
  for (var i = 0; i < photos.length; i++) {
    var cls = 'gallery-item reveal' + (photos[i].featured ? ' gallery-item--featured' : '');
    items += '<div class="' + cls + '" data-index="' + i + '" data-delay="' + (i * 150) + '">' +
      '<img src="' + photos[i].src + '" alt="' + photos[i].alt + '" loading="lazy">' +
      '</div>';
  }
  return '<section class="gallery section" id="gallery">' +
    ornamentReveal() +
    '<h2 class="section-title reveal">Moments</h2>' +
    '<div class="gallery-grid">' + items + '</div>' +
    '</section>';
}

function createVenue() {
  var v = weddingConfig.venue;
  return '<section class="venue section" id="venue">' +
    mandapamArch() +
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
    ornamentReveal() +
    '<p class="closing-message reveal">' + c.closingMessage + '</p>' +
    '<p class="closing-names reveal">' + c.groomName + ' & ' + c.brideName + '</p>' +
    '<p class="closing-date reveal">November 2026</p>' +
    ornamentReveal() +
    '<p class="closing-footer reveal">With love and blessings from both families</p>' +
    '</section>';
}

function createMusicToggle() {
  if (!weddingConfig.music) return '';
  return '<button class="music-toggle" id="musicToggle" aria-label="Toggle music">' +
    '<span id="musicIcon">&#128263;</span></button>' +
    '<audio id="weddingAudio" loop preload="none">' +
    '<source src="' + weddingConfig.music + '" type="audio/mpeg"></audio>';
}

function createLightbox() {
  return '<div class="lightbox" id="lightbox">' +
    '<button class="lightbox-close" id="lightboxClose" aria-label="Close">&times;</button>' +
    '<img src="" alt="" id="lightboxImg"></div>';
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
    createSealParticles();
    seal.classList.add('broken');

    animationTimeouts.push(setTimeout(function () {
      card.classList.add('opened');
    }, 200));

    animationTimeouts.push(setTimeout(function () {
      scene.classList.add('fade-out');
    }, 1900));

    animationTimeouts.push(setTimeout(function () {
      scene.classList.add('removed');
      page.classList.add('visible');
      animating = false;
      onPageVisible(false);
    }, 2600));

    try { sessionStorage.setItem('invitation-opened', '1'); } catch (e) {}
  }

  function skipToPage() {
    if (!animating) return;
    for (var i = 0; i < animationTimeouts.length; i++) clearTimeout(animationTimeouts[i]);
    animationTimeouts = [];
    scene.classList.add('removed');
    page.classList.add('visible');
    page.style.transition = 'none';
    animating = false;
    onPageVisible(true);
  }

  card.addEventListener('click', openCard);
  scene.addEventListener('click', function (e) {
    if (animating && e.target !== card && !card.contains(e.target)) skipToPage();
  });
}

function onPageVisible(fast) {
  revealHeroSequence(fast);
  setupAnimations();
  setupParticles();
  setupCountdown();
  setupScrollIndicator();
  showMusicToggle();
}

function revealHeroSequence(fast) {
  var items = document.querySelectorAll('.hero-seq');
  var delays = fast
    ? [0,0,0,0,0,0,0,0,0,0,0,0]
    : [200,450,700,1000,1350,1500,1750,2000,2200,2350,2500,2650];

  for (var i = 0; i < items.length; i++) {
    (function(el, d) {
      setTimeout(function () { el.classList.add('visible'); }, d);
    })(items[i], delays[i] || delays[delays.length - 1]);
  }

  var indicator = document.getElementById('scrollIndicator');
  if (indicator) {
    setTimeout(function () {
      indicator.classList.add('active');
    }, fast ? 300 : 3000);
  }
}

function setupAnimations() {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = entry.target.getAttribute('data-delay');
          if (delay) entry.target.style.transitionDelay = delay + 'ms';
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );

  var elements = document.querySelectorAll('#weddingPage .reveal');
  for (var i = 0; i < elements.length; i++) observer.observe(elements[i]);
}

function setupParticles() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var particles = [];
  var count = window.innerWidth < 600 ? 22 : 38;
  var running = true;

  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }

  function make() {
    return {
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 20,
      size: Math.random() * 2.5 + 0.4,
      vy: -(Math.random() * 0.2 + 0.05),
      vx: (Math.random() - 0.5) * 0.1,
      opacity: 0,
      maxOpacity: Math.random() * 0.18 + 0.03,
      phase: Math.random() * Math.PI * 2,
      wobble: Math.random() * 0.01 + 0.003,
      life: 0,
      maxLife: 300 + Math.random() * 400,
    };
  }

  for (var i = 0; i < count; i++) { var p = make(); p.y = Math.random() * canvas.height; p.life = Math.random() * p.maxLife; particles.push(p); }

  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.life++;
      var lifeRatio = p.life / p.maxLife;
      if (lifeRatio < 0.15) p.opacity = p.maxOpacity * (lifeRatio / 0.15);
      else if (lifeRatio > 0.85) p.opacity = p.maxOpacity * ((1 - lifeRatio) / 0.15);
      else p.opacity = p.maxOpacity;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(184, 150, 62, ' + p.opacity + ')';
      ctx.fill();
      p.y += p.vy;
      p.phase += p.wobble;
      p.x += p.vx + Math.sin(p.phase) * 0.06;
      if (p.life >= p.maxLife || p.y < -10) particles[i] = make();
    }
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  var heroEl = document.getElementById('home');
  var io = new IntersectionObserver(function (e) { running = e[0].isIntersecting; if (running) draw(); }, { threshold: 0 });
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

function setupScrollIndicator() {
  var indicator = document.getElementById('scrollIndicator');
  if (!indicator) return;
  var hidden = false;
  window.addEventListener('scroll', function () {
    if (!hidden && window.scrollY > 50) {
      indicator.classList.add('hidden');
      hidden = true;
    }
  }, { passive: true });
  indicator.addEventListener('click', function () {
    var ann = document.getElementById('announcement');
    if (ann) ann.scrollIntoView({ behavior: 'smooth' });
  });
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
  function closeLB() { lightbox.classList.remove('active'); document.body.style.overflow = ''; }
  lightboxClose.addEventListener('click', closeLB);
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLB(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLB(); });
}

function setupCalendar() {
  var buttons = document.querySelectorAll('[data-calendar]');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (function (btn) {
      return function () {
        var title = btn.getAttribute('data-calendar');
        var event = title === weddingConfig.reception.title ? weddingConfig.reception : weddingConfig.muhurtham;
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
    if (playing) { audio.pause(); icon.innerHTML = '&#128263;'; }
    else { audio.play(); icon.innerHTML = '&#128266;'; }
    playing = !playing;
    try { sessionStorage.setItem('music-playing', playing ? '1' : '0'); } catch (e) {}
  });
}

function showMusicToggle() {
  var toggle = document.getElementById('musicToggle');
  if (toggle) setTimeout(function () { toggle.classList.add('show'); }, 600);
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
    jasmineGarland() +
    createDetails() +
    lampPairDivider() +
    createGallery() +
    createVenue() +
    createClosing() +
    '</main>' +
    createMusicToggle() +
    createLightbox();

  var alreadyOpened = false;
  try { alreadyOpened = sessionStorage.getItem('invitation-opened') === '1'; } catch (e) {}

  if (alreadyOpened) {
    document.getElementById('inviteScene').classList.add('removed');
    var page = document.getElementById('weddingPage');
    page.classList.add('visible');
    page.style.transition = 'none';
    onPageVisible(true);
  } else {
    setupEnvelope();
  }

  setupGallery();
  setupCalendar();
  setupMusic();
}

document.addEventListener('DOMContentLoaded', init);
