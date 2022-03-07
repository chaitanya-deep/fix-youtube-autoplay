const toggleButton = document.querySelector(".ytp-autonav-toggle-button");

const setInPageToggle = () => {
  chrome.storage.sync.get("autoplay", ({ autoplay: intendedState = false }) => {
    const actualState = toggleButton.ariaChecked === "true";
    if(actualState !== intendedState) {
      setTimeout(() => {
        toggleButton.click();
      }, 5000);
    }
  });
}

if(toggleButton) {
  setInPageToggle();
}

window.addEventListener('load', setInPageToggle);