let cartCount = 0;

function toggleMobileMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

function addToCart() {
  cartCount++;
  document.querySelector(".cart-count").textContent = cartCount;
  const cartIcon = document.querySelector(".cart-icon");
  cartIcon.style.transform = "scale(1.2)";
  setTimeout(() => {
    cartIcon.style.transform = "scale(1)";
  }, 200);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document.addEventListener("click", function (e) {
  const navMenu = document.getElementById("navMenu");
  const toggleButton = document.querySelector(".mobile-menu-toggle");

  if (!navMenu.contains(e.target) && !toggleButton.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});
