// Navigation toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu){
  toggle.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    toggle.setAttribute('aria-expanded', String(!open));
  });
}

// Dropdown keyboard a11y
document.querySelectorAll('.dropdown .dropbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const menu = btn.nextElementSibling;
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });
});

// Slider
(function(){
  const slider = document.querySelector('.slider');
  if(!slider) return;
  const slides = slider.querySelector('.slides');
  const items = Array.from(slides.children);
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  const dotsWrap = slider.querySelector('.dots');
  let i = 0, autoplay = slider.dataset.autoplay === 'true', interval = +slider.dataset.interval || 4500, timer;

  function go(n){
    i = (n + items.length) % items.length;
    slides.style.transform = `translateX(${-i*100}%)`;
    dotsWrap.querySelectorAll('button').forEach((b,idx)=> b.classList.toggle('active', idx===i));
  }
  items.forEach((_, idx) => {
    const b = document.createElement('button');
    if(idx===0) b.classList.add('active');
    b.addEventListener('click', ()=> go(idx));
    dotsWrap.appendChild(b);
  });
  prev.addEventListener('click', ()=> go(i-1));
  next.addEventListener('click', ()=> go(i+1));
  if(autoplay){
    timer = setInterval(()=> go(i+1), interval);
    slider.addEventListener('mouseenter', ()=> clearInterval(timer));
    slider.addEventListener('mouseleave', ()=> timer = setInterval(()=> go(i+1), interval));
  }
})();

// Market indicator filters
const chips = document.querySelectorAll('.filters .chip');
const cards = document.querySelectorAll('.module-card');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const f = chip.dataset.filter;
  cards.forEach(card => {
    if(f === 'all') { card.classList.remove('hide'); return; }
    const cats = card.dataset.cats.split(' ');
    if(cats.includes(f)) card.classList.remove('hide'); else card.classList.add('hide');
  });
}));

// Gallery zoom
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');
document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.showModal();
  });
});
if(closeModal){ closeModal.addEventListener('click', ()=> modal.close()); }
