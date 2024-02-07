const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

// Toggle mobile menu
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        // Add the menu(hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>"
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>"
    }
}

// Add event listener
toggle.addEventListener("click", toggleMenu, false)


const items = document.querySelectorAll(".item");
function toggleItem() {
    if (this.classList.contains('submenu-active')) {
        this.classList.remove('submenu-active');
    } else if (menu.querySelector('.submenu-active')) {
        menu.querySelector('.submenu-active').classList.remove('submenu-active');
        this.classList.add('submenu-active');
    } else {
        this.classList.add("submenu-active");
    }
}

for (const item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener('click', toggleItem, false);
        item.addEventListener('keypress', toggleItem, false);
            
    }
}


function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active")) {
        let isClickInside = menu.querySelector(".submenu-active").contains(e.target);

        if (!isClickInside && menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
        }
    }
}
document.addEventListener("click", closeSubmenu, false);