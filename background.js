chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ autoplay: false });
});

chrome.storage.onChanged.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['script.js']
  });
});