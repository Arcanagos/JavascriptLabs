let currentSlideIndex = 1;

function start() {
  showSlide(currentSlideIndex);
}

function prevSlide() {
  showSlide(currentSlideIndex -= 1);
}

function nextSlide() {
  showSlide(currentSlideIndex += 1);
}

function currentSlide(n) {
  showSlide(currentSlideIndex = n);
}

function showSlide(n) {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');

  if (n > 4) {
    currentSlideIndex = 1;
  }

  if (n < 1) {
    currentSlideIndex = 4;
  }

  slides.style.transition = "transform 0.7s ease-in-out";
  slides.style.transform = `translateX(${-512 * (currentSlideIndex - 1)}px)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlideIndex - 1].classList.add('active');
}
