// CONFIGURA TU NÚMERO AQUÍ
const WHATSAPP_PHONE = "541168742472"; // código país sin +
const DEFAULT_MSG = "Hola, quiero asesoramiento sobre herramientas de mecanizado.";

const menu = document.getElementById('menu');
const burger = document.getElementById('burger');
const year = document.getElementById('year');
const fab = document.getElementById('fab');
const ctaWhats = document.getElementById('ctaWhats');

year.textContent = new Date().getFullYear();

// Toggle menú mobile
burger?.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => menu.classList.remove('open'))
);

// Scroll activo
const links = Array.from(menu.querySelectorAll('a'));
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const onScroll = () => {
  const y = window.scrollY + 90;
  let active = links[0];
  sections.forEach((sec, i) => {
    if (sec.offsetTop <= y) active = links[i];
  });
  links.forEach(l => l.classList.remove('active'));
  active.classList.add('active');
};
document.addEventListener('scroll', onScroll, { passive:true });
onScroll();

// WhatsApp link builder
function buildWaUrl(text = DEFAULT_MSG) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
fab.setAttribute('href', buildWaUrl());
ctaWhats.addEventListener('click', () =>
  window.open(buildWaUrl("Hola, quiero hablar con un experto ahora."), "_blank")
);
document.querySelectorAll('[data-whatsapp]').forEach(btn => {
  btn.addEventListener('click', () =>
    window.open(buildWaUrl(btn.getAttribute('data-whatsapp')), "_blank")
  );
});

// Formulario: enviar por WhatsApp
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const text = `Hola, soy ${nombre || "un cliente"}.
Email: ${email || "sin especificar"}.
Mensaje: ${mensaje || "—"}`;
  window.open(buildWaUrl(text), "_blank");
});
