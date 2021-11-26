console.log("Background script was called");
chrome.action.onClicked.addListener((tab) => {
  qs;
  console.log(tab);
  var protocolVersion = "1.0";
  chrome.debugger.attach({ tabId: tab.id }, protocolVersion, () => {
    if (chrome.runtime.lastError) {
      return;
    }
    // 2. Debugger attached, now prepare for modifying the UA
    chrome.debugger.sendCommand(
      {
        tabId: tabId,
      },
      "Network.enable",
      {},
      function (response) {
        // Possible response: response.id / response.error
        // 3. Change the User Agent string!
        chrome.debugger.sendCommand(
          {
            tabId: tabId,
          },
          "Network.setUserAgentOverride",
          {
            userAgent: "Whatever you want",
          },
          function (response) {
            // Possible response: response.id / response.error
            // 4. Now detach the debugger (this restores the UA string).
            chrome.debugger.detach({ tabId: tabId });
          }
        );
      }
    );
  });
});

// Assume: tabId is the ID of the tab whose UA you want to change
// It can be obtained via several APIs, including but not limited to
// chrome.tabs, chrome.pageAction, chrome.browserAction, ...

// 1. Attach the debugger
