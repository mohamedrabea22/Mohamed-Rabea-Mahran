function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("show");
}

// إغلاق القائمة عند الضغط خارجها
document.addEventListener("click", function (e) {
  const menu = document.getElementById("sideMenu");
  const toggleBtn = document.querySelector(".menu-toggle");

  if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
    menu.classList.remove("show");
  }
});
/*let slideImages = document.querySelectorAll("img");
// Access the next and prev buttons
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
// Access the indicators
let dots = document.querySelectorAll(".dot");

var counter = 0;

// Code for next button
next.addEventListener("click", slideNext);
function slideNext() {
  slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}

// Code for prev button
prev.addEventListener("click", slidePrev);
function slidePrev() {
  slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  indicators();
}

// Auto slideing
function autoSliding() {
  deletInterval = setInterval(timer, 3000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener("mouseout", autoSliding);

// Add and remove active class from the indicators
function indicators() {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[counter].className += " active";
}

// Add click event to the indicator
function switchImage(currentImage) {
  currentImage.classList.add("active");
  var imageId = currentImage.getAttribute("attr");
  if (imageId > counter) {
    slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
    counter = imageId;
    slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
  } else if (imageId == counter) {
    return;
  } else {
    slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
    counter = imageId;
    slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  }
  indicators();
}*/

const slider = document.getElementById('slider');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    // تحريك يدوي بالأزرار
    prevBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -270, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      slider.scrollBy({ left: 270, behavior: 'smooth' });
    });

    // تشغيل أوتوماتيك
    let autoSlide = setInterval(() => {
      slider.scrollBy({ left: 270, behavior: 'smooth' });

      // لو وصل للنهاية يرجع للبداية
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 3000); // كل 3 ثواني

    // إيقاف التشغيل التلقائي عند المرور بالماوس
    slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
    slider.addEventListener('mouseleave', () => {
      autoSlide = setInterval(() => {
        slider.scrollBy({ left: 270, behavior: 'smooth' });
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, 3000);
    });

 // Matrix Background Effect
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const letters = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = "#0e1b2b17";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setInterval(draw, 35);

    window.addEventListener("resize", () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    });

    // Typing Effect with loop
    const typingElement = document.getElementById("typing");
    const text = "Frontend Developer";
    let index = 0;
    let isDeleting = false;

    function type() {
      if (!isDeleting) {
        typingElement.textContent = text.substring(0, index++);
        if (index > text.length) {
          isDeleting = true;
          setTimeout(type, 1000); // توقف لحظة بعد ما الكلمة تتكتب
          return;
        }
      } else {
        typingElement.textContent = text.substring(0, index--);
        if (index < 0) {
          isDeleting = false;
          index = 0;
        }
      }
      setTimeout(type, isDeleting ? 80 : 120);
    }

    type();
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const bars = entry.target.querySelectorAll(".progress");
      const numbers = entry.target.querySelectorAll(".percentage");

      bars.forEach((bar, index) => {
        const value = bar.getAttribute("data-progress");

        // بطء حركة الشريط
        bar.style.transition = "width 3s ease";
        bar.style.width = value + "%";

        // بطء عداد الأرقام
        let current = 0;
        const target = parseInt(value);
        const speed = 40; // كلما زاد الرقم → الحركة أبطأ

        const counter = setInterval(() => {
          if (current >= target) {
            clearInterval(counter);
          } else {
            current++;
            numbers[index].textContent = current + "%";
          }
        }, speed);
      });

      observer.unobserve(entry.target);
    }
  });
});

const skillsSection = document.querySelector(".skills");
observer.observe(skillsSection);



document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let status = document.getElementById("status");

  if (name === "" || email === "" || message === "") {
    status.textContent = "Please fill in all required fields.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Your message was sent successfully. ✅";
  status.style.color = "green";

  this.reset();
});
