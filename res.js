$(document).ready(function () {
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            
            var hash = this.hash;

            
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                   
                    window.location.hash = hash;
                }
            );
        } 
    });
});







const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");
const slideshowContainer = document.querySelector(".slideshow-container");
let slideIndex = 1;

prevButton.addEventListener("click", () => {
  if (slideIndex === 1) {
    slideIndex = 5;
  } else {
    slideIndex--;
  }
  slideshowContainer.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
});

nextButton.addEventListener("click", () => {
  if (slideIndex === 5) {
    slideIndex = 1;
  } else {
    slideIndex++;
  }
  slideshowContainer.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
});
