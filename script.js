var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function minusSlides(n) {
  showSlides(slideIndex -= n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 0;
var timer;
var progressBar;

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  var i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex += 1;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  slides[slideIndex - 1].style.display = "block";

  // Update progress bar
  var progress = document.getElementById("progress");
  progress.style.width = (slideIndex * (100 / slides.length)) + "%";

  clearTimeout(timer);
  timer = setTimeout(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
}

function plusSlides(n) {
  // clearTimeout(timer);
  showSlides( n += slideIndex);
}

function minusSlides(n) {
  // clearTimeout(timer);
  showSlides(n -= slideIndex);
}

showSlides();

//navigation buuton
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//sliderbar

// const carousel = document.querySelector(."carousel");
// let isDragStart = false, prevPageX, prevSCrollLeft;

// const dragStart= (e) => {
//   isDragStart =true;0
//   prevPageX =e.pageX;
//   prevSCrollLeft = carousel.scrollLeft;
// }


// const dragging= (e) => {
//   if(!isDragStart) return;
//   e.prevenDefault();
//    let positionDiff = e.pageX-prevPageX;
//    carousel.scrollLeft =prevSCrollLeft-positionDiff;
// }

// const dragStop = () =>
// {
//   isDragStart=false;

// }

// ----------------slider-----------------document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const sliderContainerWidth = document.querySelector(".slider-container").offsetWidth;
    const slideWidth = slides[0].offsetWidth;
  
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSliderPosition();
    });
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSliderPosition();
    });
  
    slider.addEventListener("mousedown", handleDragStart);
    slider.addEventListener("mousemove", handleDragMove);
    slider.addEventListener("mouseup", handleDragEnd);
  
    slider.addEventListener("touchstart", handleDragStart);
    slider.addEventListener("touchmove", handleDragMove);
    slider.addEventListener("touchend", handleDragEnd);
  
    function handleDragStart(event) {
      if (event.type === "touchstart") {
        startX = event.touches[0].clientX;
      } else {
        startX = event.clientX;
      }
      isDragging = true;
    }
  
    function handleDragMove(event) {
      if (!isDragging) return;
  
      event.preventDefault();
  
      let x;
      if (event.type === "touchmove") {
        x = event.touches[0].clientX;
      } else {
        x = event.clientX;
      }
  
      const difference = startX - x;
      const maxTranslate = -(slides.length - Math.floor(sliderContainerWidth / slideWidth)) * slideWidth;
      const translate = -currentIndex * slideWidth + difference;
      const finalTranslate = Math.max(Math.min(0, translate), maxTranslate);
  
      slider.style.transform = `translateX(${finalTranslate}px)`;
    }
  
    function handleDragEnd(event) {
      isDragging = false;
  
      let x;
      if (event.type === "touchend") {
        x = event.changedTouches[0].clientX;
      } else {
        x = event.clientX;
      }
  
      const difference = startX - x;
      if (difference > 100) {
        currentIndex = (currentIndex + 1) % slides.length;
      } else if (difference < -100) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      }
      updateSliderPosition();
    }
  
    function updateSliderPosition() {
      const maxTranslate = -(slides.length - Math.floor(sliderContainerWidth / slideWidth)) * slideWidth;
      const finalTranslate = Math.max(Math.min(0, -currentIndex * slideWidth), maxTranslate);
      slider.style.transform = `translateX(${finalTranslate}px)`;
    }
  });

  //collapseable button

  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "block";
      } else {
        content.style.display = "block";
      }
    });
  }

  