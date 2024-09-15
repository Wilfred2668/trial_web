function updateViewBox() {
  var svgElement = document.querySelector('svg'); // Select your SVG element
  if (window.innerWidth <= 768) {
      svgElement.setAttribute('viewBox', '0 0 700 700'); // Mobile viewBox
  } else {
      svgElement.setAttribute('viewBox', '0 -50 1000 800'); // Desktop viewBox
  }
}
const states = document.querySelectorAll('.land');

// Add a click event listener to each state
states.forEach(state => {
  state.addEventListener('click', function () {
    console.log(`Clicked on: ${state.id}`);
    window.location.href = `slider_page.html?state=${state.id}`;
  });
});

const urlParams = new URLSearchParams(window.location.search);
const stateId = urlParams.get('state'); // This gets the state from the URL

// Now you can use stateId to load state-specific content
console.log('State selected:', stateId);

// Example: Update the page content dynamically
if (stateId) {
   document.getElementById('state-name').textContent = `You selected: ${stateId}`;
   // Add more logic to load state-specific data (like festivals, dance, cuisine, etc.)
}

// Call the function on page load
window.addEventListener('load', updateViewBox);

// Call the function when the window is resized
window.addEventListener('resize', updateViewBox);