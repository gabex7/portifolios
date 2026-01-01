const slider = document.querySelectorAll('.sliderImg');
const texts = document.querySelectorAll('.sliderText');
const btnPrev = document.getElementById("prevButon");
const btnNext = document.getElementById("nextButon");

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
  texts.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
  texts[currentSlide].classList.add('on');
}

// mostrar o primeiro slide e texto ao carregar
showSlider();

function nextSlide() {
  hideSlider();
  currentSlide = (currentSlide === slider.length - 1) ? 0 : currentSlide + 1;
  showSlider();
}

function prevSlide() {
  hideSlider();
  currentSlide = (currentSlide === 0) ? slider.length - 1 : currentSlide - 1;
  showSlider();
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

// luz no mouse

// document.addEventListener("mousemove", (e) =>{
//     const x = e.pageX;
//     const y = e.pageY

//     document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 255, 0.6) 40px, rgba(0, 0, 0, 0.95) 80px)`;
// })