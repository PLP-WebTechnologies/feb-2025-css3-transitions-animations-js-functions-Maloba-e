// Animation Logic
const animateButton = document.getElementById('animateButton');
const animatedImage = document.getElementById('animatedImage');

animateButton.addEventListener('click', () => {
  animatedImage.classList.toggle('rotate');  // Toggle the 'rotate' class
});


// Local Storage Logic
const usernameInput = document.getElementById('username');
const savePreferencesButton = document.getElementById('savePreferences');
const displayedUsername = document.getElementById('displayedUsername');

// Function to load preferences from localStorage
function loadPreferences() {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    usernameInput.value = savedUsername;
    displayedUsername.textContent = savedUsername;
  }
}

// Call loadPreferences when the page loads
loadPreferences();

savePreferencesButton.addEventListener('click', () => {
  const username = usernameInput.value;
  localStorage.setItem('username', username);
  displayedUsername.textContent = username;
});