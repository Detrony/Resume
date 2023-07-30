// SWIPER
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 2500,
  // keyboard: true,
  effect: 'fade',
  autoplay: {
    disableOnInteraction: false,
    delay: 1000
  },
  pagination: {
    el: '.swiper-pagination',
    // clickable: true,
    dynamicBullets: true,
  },
  a11y: {
    enabled: true,
    slideLabelMessage: '{{index}}'
  },
});

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  speed: 2500,
  // keyboard: true,
  effect: 'fade',
  autoplay: {
    disableOnInteraction: false,
    delay: 1000
  },
  pagination: {
    el: '.swiper-pagination',
    // clickable: true,
    dynamicBullets: true,
  },
  a11y: {
    enabled: true,
    slideLabelMessage: '{{index}}'
  },
});


// Accordion

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});



function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}



