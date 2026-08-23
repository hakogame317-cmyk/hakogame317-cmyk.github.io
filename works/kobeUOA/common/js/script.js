$(function(){
 $(".menu_toggle").on("click",function(){
		$("body").toggleClass("menu_open");
	})
});

const swiper = new Swiper('.swiper', {
  loop: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.arrow_right',
    prevEl: '.arrow_left',
  },

});

const items = document.querySelectorAll('.work-item');

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add('show');

}

});

}, {
threshold: 0.5
});

items.forEach(item => observer.observe(item));