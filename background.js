chrome.webNavigation.onCommitted.addListener(onNavigate.bind(null, 'onCommitted'));
chrome.webNavigation.onTabReplaced.addListener(onNavigate.bind(null, 'onTabReplaced'));

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  getActiveTab(function(err, activeTab) {
    chrome.tabs.sendMessage(activeTab.id, "toggle");
  })
});

function onNavigate(evt, details) {
  if (isFeedbackUrl(details.url)) {
    showToast()
  }
}

function showToast() {
  getActiveTab(function(err, activeTab) {
    chrome.tabs.sendMessage(activeTab.id, "showToast");
  })
}

function getActiveTab(cb) {
  chrome.tabs.query({active: true}, function(tabs) {
    cb(null, tabs[0])
  });
}

function isFeedbackUrl(url) {
  let match = false
  let feedbackPatterns = [
    /hire\.lever\.co\/interviews\/.+/
  ]
  return feedbackPatterns.every(pattern => pattern.test(url))
}
