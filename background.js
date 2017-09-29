// omnibox
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  suggest([
    {content: "color-divs", description: "Make everything red"}
  ]);
});

chrome.omnibox.onInputEntered.addListener(function(text) {
  if (text === "해축") {
    navigate("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=해외축구일정");
  }
  else {
    navigate("http://endic.naver.com/search.nhn?sLn=kr&searchOption=all&query=" + text);
  }
});

// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "color-divs":
            colorDivs();
        break;
    }
    return true;
});

// listening for an event / long-lived connections
// coming from devtools
chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
        switch(port.name) {
      case "color-divs-port":
        colorDivs();
      break;
    }
    });
});

// send a message to the content script
var colorDivs = function() {
  chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: "#F00"});
      // setting a badge
    chrome.browserAction.setBadgeText({text: "red!"});
  });
}

/************************************/
function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: 'Typing: %s'
  });
}
resetDefaultSuggestion();

function navigate(url) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}
