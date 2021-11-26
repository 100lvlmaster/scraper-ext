chrome.devtools.panels.create(
  "My Panel",
  "MyPanelIcon.png",
  "panel.html",
  (panel) => {
    console.log("panel was crated");
    // code invoked on panel creation
  }
);
