document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".menu");

    hamburgerMenu.addEventListener("click", function() {
        hamburgerMenu.classList.toggle("active");
        menu.classList.toggle("active");
    });

    const menuItems = document.querySelectorAll(".menu > li");

    menuItems.forEach(function(item) {
        item.addEventListener("click", function() {
            const submenu = this.querySelector(".submenu");
            if (submenu) {
                item.classList.toggle("active");
                submenu.classList.toggle("active");
            }
        });
    });

});

var tabButtons = document.querySelectorAll('.tab_btn_dk');
  var tabContents = document.querySelectorAll('.tab_content_dk');
  
  function showTab(tabIndex) {
    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove('active');
    }
    tabButtons[tabIndex].classList.add('active');
    
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }
    tabContents[tabIndex].style.display = "block";
  }