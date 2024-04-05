
window.onscroll = function () {
  if (window.scrollY > 100) {
    document.querySelector(".home__header-navbar").classList.add("scroll");
  } else {
    document.querySelector(".home__header-navbar").classList.remove("scroll");
  }

  highlightActiveSection(); 
};

function highlightActiveSection() {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('.home__header-navbar .navbar__link a'); // Chỉnh sửa selector ở đây
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('.home__header-navbar .navbar__link a[href="#' + id + '"]').classList.add('active');
    }
  });
}


