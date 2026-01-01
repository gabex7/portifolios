const slider = document.querySelectorAll('.sliderImg');
const btnPrev = document.getElementById("prevButon");
const btnNext = document.getElementById("nextButon");

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSloder(){
    slider[currentSlide].classList.add('on')
}


function nextSlide(){
    hideSlider()
    if(currentSlide == slider.length - 1){
         currentSlide = 0
    } else {
        currentSlide ++
    }
}

function prevSlide(){
    hideSlider()
    if(currentSlide == 0){
         currentSlide = slider.length -1 
    } else {
        currentSlide--
    }
}
btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)


console.log(slider)

