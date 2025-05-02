chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "finviz-lookup",
    title: "View on Finviz",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "finviz-lookup" && info.selectionText) {
    const ticker = info.selectionText.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    const finvizUrl = `https://finviz.com/quote.ashx?t=${ticker}&ty=c&p=d&b=1`;
    chrome.windows.create({
      url: finvizUrl,
      type: "popup",
      width: 1080,
      height: 710
    });
  }
}); 