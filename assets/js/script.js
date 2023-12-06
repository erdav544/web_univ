window.addEventListener("DOMContentLoaded", () => {
    console.log(document.readyState);
    console.log("DOM loaded!");

    // Change Navbar Style On Scroll
    const navbar = document.body.querySelector("nav");
    const cta_box = document.body.querySelector("div.box");
    const cta_btn_nav = document.body.querySelector(".btn-nav-cta");
    const nav_links = document.body.querySelectorAll(".nav-link");
    const navbar_toggler = document.body.querySelector(".navbar-toggler");
    const navbar_collapsible = document.body.querySelector(".collapse");
    let isNavBarCollapsed = true;

    const navbarScroll = () => {
        if (!navbar) {
            return;
        }

        if (window.scrollY === 0) {
            if (window.visualViewport.width < 1200 && !isNavBarCollapsed) {
                //navbar.classList.remove("bg-light", "box-shadow");
            } else {
                navbar.classList.remove("bg-light", "box-shadow");
                cta_box.classList.add("zero-opacity");
                cta_btn_nav.classList.add("blurry");
                nav_links.forEach((nav_link) => {
                    nav_link.classList.add("light");
                });
            }
        } else {
            if (window.visualViewport.width < 1200 && !isNavBarCollapsed) {
                navbar.classList.add("bg-light", "box-shadow");
            } else {
                navbar.classList.add("bg-light", "box-shadow");
                cta_box.classList.remove("zero-opacity");
                cta_btn_nav.classList.remove("blurry");
                nav_links.forEach((nav_link) => {
                    nav_link.classList.remove("light");
                });
            }
        }
    };

    navbarScroll();

    document.addEventListener("scroll", navbarScroll);

    navbar_collapsible.addEventListener("hide.bs.collapse", () => {
        isNavBarCollapsed = true;
    });

    navbar_collapsible.addEventListener("show.bs.collapse", () => {
        isNavBarCollapsed = false;
    });

    // Add or remove the navbar background color and box shadow based on the window scroll position, navbar state and window size
    navbar_toggler.addEventListener("click", () => {
        if (window.scrollY === 0) {
            if (!isNavBarCollapsed) {
                if (
                    window.visualViewport.width >= 992 &&
                    window.visualViewport.width < 1200
                ) {
                    navbar.classList.add("bg-light");
                }
                navbar.classList.add("box-shadow");
            } else {
                if (
                    window.visualViewport.width >= 992 &&
                    window.visualViewport.width < 1200
                ) {
                    navbar.classList.remove("bg-light");
                }
                navbar.classList.remove("box-shadow");
            }
        } else {
            return;
        }
    });
});

window.addEventListener("load", () => {
    console.log(document.readyState);
    console.log("Page loaded!");

    // Hide Preloader
    const preloader = document.body.querySelector(".preloader");
    preloader.classList.remove("d-flex");
    preloader.classList.add("d-none");
});
