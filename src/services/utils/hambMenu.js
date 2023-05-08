class MobileNavbar {
    constructor(hambMenuOpen, hambMenuClose, navLinks) {
      this.hambMenuOpen = document.querySelector(hambMenuOpen);
      this.hambMenuClose = document.querySelector(hambMenuClose);
      this.navLinks = document.querySelectorAll(navLinks);
  
      this.hambOpenClick = this.hambOpenClick.bind(this);
      this.hambCloseClick = this.hambCloseClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 1s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }

    hambOpenClick() {
      this.animateLinks();
    }
  
    hambCloseClick() {
      this.animateLinks();
    }
  
    OPClickEvent() {
      this.hambMenuOpen.addEventListener("click", this.hambOpenClick);
    }
  
    CLClickEvent() {
      this.hambMenuClose.addEventListener("click", this.hambCloseClick);
    }
  
    init() {
      if (this.hambMenuOpen) {
        this.OPClickEvent();
        this.CLClickEvent(); // Adicionado para fechar o menu
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
      ".navbar-toggler",
      ".btn-close",
      ".offcanvas-body li"
      ,);

  mobileNavbar.init();
  