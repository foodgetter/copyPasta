chrome.runtime.onMessage.addListener(
  function(request) {
    if (request.type == "startcopy"){
    	document.execCommand('Copy');
		chrome.runtime.sendMessage({type: "launchCopyPage"});
		}
	});
