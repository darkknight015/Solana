document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".menu");

    hamburgerMenu.addEventListener("click", function() {
        menu.classList.toggle("active");
    });

    const menuItems = document.querySelectorAll(".menu > li");

    // menuItems.forEach(function(item) {
    //     item.addEventListener("mouseover", function() {
    //         const submenu = this.querySelector(".submenu");
    //         if (submenu) {
    //             submenu.classList.toggle("active");
    //         }
    //     });
    // });
});
