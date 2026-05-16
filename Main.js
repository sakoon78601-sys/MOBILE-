/* ═══════════════════════════════════════
   Mobile Shop Pro — Main JS
═══════════════════════════════════════ */

// ── CONFIG ──
const GAS_URL = 'https://script.google.com/macros/s/AKfycbzvPULDeTjlHYS_V4qM1jyeleGzPhyieNOks079JrAkHOGW73vsu-Hdj6SuauLeDubynQ/exec';

// ── NAV SCROLL ──
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => obs.observe(el));
}

// ── GAS API HELPER ──
async function gasGet(params) {
  const url = new URL(GAS_URL);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  try {
    const res = await fetch(url.toString());
    return await res.json();
  } catch (err) {
    console.error('API error:', err);
    return { status: 'error', message: 'Network error. Please try again.' };
  }
}

// ── SHOW / HIDE MESSAGE BOX ──
function showMsg(el, text, type = 'info') {
  if (!el) return;
  el.textContent = text;
  el.className = `msg-box show ${type}`;
}

function hideMsg(el) {
  if (!el) return;
  el.className = 'msg-box';
}

// ── LOADING OVERLAY ──
const loadingOverlay = document.getElementById('loadingOverlay');
function showLoading(show) {
  if (!loadingOverlay) return;
  loadingOverlay.classList.toggle('show', show);
}

// ── MODAL HELPERS ──
function openModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

// ── FORMAT PKR ──
function formatPKR(n) { return 'Rs ' + Number(n).toLocaleString('en-PK'); }
