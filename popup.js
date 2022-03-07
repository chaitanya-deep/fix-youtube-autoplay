const optionButton = document.getElementById("btn-flex");
let autoplay = false;

// Initialize the form with the user's autoplay preference
chrome.storage.sync.get('autoplay', ({ autoplay: storedValue = false }) => {
  autoplay = Boolean(storedValue);
  if(autoplay) {
    optionButton.classList.add("selected");
  }
});

// Immediately persist options changes
optionButton.addEventListener('click', (event) => {
  autoplay = !autoplay;
  if(autoplay) {
    optionButton.classList.add("selected");
  } else {
    optionButton.classList.remove("selected");
  }
  chrome.storage.sync.set({
    autoplay,
  });
});
