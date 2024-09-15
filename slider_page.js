new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        },
    }
});

// Capture the state ID from the URL
const queryParams = new URLSearchParams(window.location.search);
const stateID = queryParams.get('state'); // e.g., IN-JK

// Select all card links (which represent the different topics like festivals, cuisine, etc.)
const cards = document.querySelectorAll('.card-link');

// Add a click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the topic from the card's data-topic attribute
        const topic = card.getAttribute('data-topic');

        // Navigate to the common page with the state ID and topic in the URL
        window.location.href = `statePage.html?state=${stateID}&topic=${topic}`;
    });
});

