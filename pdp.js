var swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 8,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper3 = new Swiper(".mySwiper2", {
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display ="block";
    } else {
      dropdownContent.style.display = "none";
    }
  });
}

var swiper4 = new Swiper(".mySwipermadle", {
  slidesPerView: 4,
  spaceBetween: 30,
  spaceBetweenSlides: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    360: {
      slidesPerView: 4,
      spaceBetweenSlides: 0,
      spaceBetween: 2,
    },

    767: {
      slidesPerView: 3,
      spaceBetweenSlides: 0,
    },
    1200: {
      slidesPerView: 4,
      spaceBetweenSlides: 0,
    },
  },
});

var swiper = new Swiper(".mySwiperimg", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper5 = new Swiper(".mySwiper-s", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


function openMenu() {
  document.querySelector(".hamburger-menu").classList.add("open");
}

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".hamburger-menu").classList.remove("open");
});