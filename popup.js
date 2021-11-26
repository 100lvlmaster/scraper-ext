// Initialize button with user's preferred color
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: callScript,
  });
});
function callScript() {
  console.log("Popup script was called");
}
