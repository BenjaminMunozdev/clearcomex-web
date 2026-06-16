// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// ── Formulario → WhatsApp ──
const servicios = {
  verify:    { nombre: 'ClearVERIFY',    desc: 'segunda opinión experta' },
  logistics: { nombre: 'ClearLOGISTICS', desc: 'acompañamiento logístico' },
  business:  { nombre: 'ClearBUSINESS',  desc: 'negocio internacional' }
};

function enviarWA(tipo) {
  const nombre = document.getElementById('nombre-' + tipo).value.trim();
  const msg    = document.getElementById('msg-' + tipo).value.trim();
  const s      = servicios[tipo];

  if (!nombre) {
    alert('Por favor ingresa tu nombre.');
    return;
  }

  const texto = `Hola Constanza, mi nombre es ${nombre} y me interesa el servicio ${s.nombre} (${s.desc}).${msg ? '\n\n' + msg : ''}`;
  const url   = 'https://wa.me/56929182084?text=' + encodeURIComponent(texto);
  window.open(url, '_blank');
}