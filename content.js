setTimeout(function() {
  chrome.runtime.sendMessage({}, function() {});
}, 2000);
