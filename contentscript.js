Mousetrap.bind('alt+c', function(e){
	document.execCommand('Copy');
	var url = chrome.extension.getURL('index.html');
	chrome.runtime.sendMessage({type: "launch"}
	);
})
