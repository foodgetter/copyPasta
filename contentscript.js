chrome.runtime.onMessage.addListener(
  function(request) {
    if (request.type == "startcopy"){
    	document.execCommand('Copy');
		var url = chrome.extension.getURL('index.html');
		chrome.runtime.sendMessage({type: "launch"});
		}
	});
