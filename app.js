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
