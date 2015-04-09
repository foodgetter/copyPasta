chrome.runtime.onMessage.addListener(
  function(request) {
    if (request.type == "startcopy"){
    	windowurl = window.location.href;
    	windowtitle = document.title;
    	textObj = window.getSelection();
    	copiedtext = textObj.toString();
		chrome.runtime.sendMessage({type: "launchCopyPage", url: windowurl, description: windowtitle, text: copiedtext});
		}
	});
