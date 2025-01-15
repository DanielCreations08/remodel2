
  
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


 const track = document.querySelector('.carousel-track');
 const cards = Array.from(track.children);
 const leftButton = document.querySelector('.carousel-btn.left');
 const rightButton = document.querySelector('.carousel-btn.right');

 let currentIndex = 0;

 function updateCarousel() {
   cards.forEach((card, index) => {
     card.classList.remove('center', 'left', 'right');

     if (index === currentIndex) {
       card.classList.add('center');
       card.style.transform = `translateX(0) scale(1)`;
     } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
       card.classList.add('left');
       card.style.transform = `translateX(-120%) scale(0.8)`;
     } else if (index === (currentIndex + 1) % cards.length) {
       card.classList.add('right');
       card.style.transform = `translateX(120%) scale(0.8)`;
     } else {
       card.style.transform = `translateX(200%) scale(0.6)`;
     }
   });
 }

 function moveNext() {
   currentIndex = (currentIndex + 1) % cards.length;
   updateCarousel();
 }

 function movePrev() {
   currentIndex = (currentIndex - 1 + cards.length) % cards.length;
   updateCarousel();
 }

 // Event listeners for buttons
 leftButton.addEventListener('click', movePrev);
 rightButton.addEventListener('click', moveNext);

 // Initialize carousel
 updateCarousel();

 // Auto-scroll every 5 seconds
 setInterval(moveNext, 7000);