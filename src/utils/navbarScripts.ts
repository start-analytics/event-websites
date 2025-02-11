export function initializeMobileNavToggle(toggleStateCallback: React.Dispatch<React.SetStateAction<boolean>>) {
    const toggleMobileNav = () => {
      const body = document.body;
      const toggleButton = document.querySelector(".mobile-nav-toggle") as HTMLElement | null; // Explicitly cast to HTMLElement
      if (!toggleButton) return;
  
      body.classList.toggle("mobile-nav-active");
      toggleButton.classList.toggle("bi-list");
      toggleButton.classList.toggle("bi-x");
  
      toggleStateCallback((prev) => !prev);
    };
  
    const toggleButton = document.querySelector(".mobile-nav-toggle") as HTMLElement | null; // Explicitly cast to HTMLElement
    if (toggleButton) {
      toggleButton.addEventListener("click", toggleMobileNav);
    }
  
    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener("click", toggleMobileNav);
      }
    };
  }
  
  export function initializeMobileNavCloseOnLinkClick() {
    const handleNavLinkClick = () => {
      if (document.body.classList.contains("mobile-nav-active")) {
        const toggleButton = document.querySelector(".mobile-nav-toggle") as HTMLElement | null; // Explicitly cast to HTMLElement
        if (toggleButton) {
          toggleButton.click(); // Simulates a click on the mobile nav toggle button
        }
      }
    };
  
    const navLinks = document.querySelectorAll("#navmenu a") as NodeListOf<HTMLAnchorElement>; // Type the NodeList
    navLinks.forEach((link) => link.addEventListener("click", handleNavLinkClick));
  
    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", handleNavLinkClick));
    };
  }
  
  export function initializeScrollspy() {
    const handleScrollspy = () => {
      const navLinks = document.querySelectorAll(".navmenu a") as NodeListOf<HTMLAnchorElement>; // Type the NodeList
  
      navLinks.forEach((link) => {
        if (!link.hash) return;
        const section = document.querySelector(link.hash) as HTMLElement | null; // Explicitly cast to HTMLElement
        if (!section) return;
  
        const position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          document.querySelectorAll(".navmenu a.active").forEach((activeLink) => activeLink.classList.remove("active"));
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };
  
    window.addEventListener("scroll", handleScrollspy);
    window.addEventListener("load", handleScrollspy);
  
    return () => {
      window.removeEventListener("scroll", handleScrollspy);
      window.removeEventListener("load", handleScrollspy);
    };
  }
  