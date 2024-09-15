function toggleMenu() {
    var navbar = document.querySelector(".navbar");
    var body = document.body;

    // Toggle the "open" class for the navbar
    navbar.classList.toggle("open");

    // Toggle the body scroll lock when the menu is open
    if (navbar.classList.contains("open")) {
        body.classList.add("menu-open");
    } else {
        body.classList.remove("menu-open");
    }
}
  function closeMenuOnClickOutside(event) {
      var navbar = document.querySelector(".navbar");
      var toggleButton = document.querySelector(".menu-toggle");

      // Check if the click happened outside of the navbar and the toggle button
      if (!navbar.contains(event.target) && !toggleButton.contains(event.target)) {
          navbar.classList.remove("open");
          document.removeEventListener("click", closeMenuOnClickOutside);
      }
}