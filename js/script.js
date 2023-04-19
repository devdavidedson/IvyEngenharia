const observer = new IntersectionObserver(entries => {
    // console.log(entries)

    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('init-hidden-off')
        }
    })
}, {
    threshold: [0, .5, 1]
})

Array.from(document.querySelectorAll('.init-hidden')).forEach( element => {
    observer.observe(element)   
});

var slides = document.querySelectorAll(".slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000); // movimento automático a cada 5 segundos

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function prevSlide() {
  clearInterval(slideInterval);
  showSlide(currentSlide - 1);
  slideInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
  clearInterval(slideInterval);
  showSlide(currentSlide + 1);
  slideInterval = setInterval(nextSlide, 5000);
}

showSlide(currentSlide);
