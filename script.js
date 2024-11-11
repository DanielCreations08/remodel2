
  
  // NAV BAR FUNCTION START (...)
  
  function toggleMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var mobileMenuContainer = document.querySelector('.mobile-menu-container');
    mobileMenu.classList.toggle('show');
    mobileMenuContainer.style.display = mobileMenu.classList.contains('show') ? 'block' : 'none';
  }

  function closeMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var mobileMenuContainer = document.querySelector('.mobile-menu-container');
    mobileMenu.classList.remove('show');
    mobileMenuContainer.style.display = 'none';
  }

  // NAV BAR FUNCTION START (...)

  // Slide Sections 
  AOS.init({
    duration: 3000,
    once: true,
  });
  // Slide Sections Ends (...)

  //Services Pop Up (...)

// Open popup
function openPopup(id) {
  document.getElementById(id).style.display = 'flex';
}

// Close popup
function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}

// Prevent popup content click from closing the popup
function eventStopPropagation(event) {
  event.stopPropagation();
}

// Request Service function (can be customized)
function requestService() {
  alert('Service requested!');
}

 //Services Pop Up Ends(...)