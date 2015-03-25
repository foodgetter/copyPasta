chrome.commands.onCommand.addListener(function(command) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  			chrome.tabs.sendMessage(tabs[0].id, {type: "startcopy"});
  	});
});

chrome.runtime.onMessage.addListener(
  function(request) {
    if (request.type == "launch")
    	window.open("index.html", "copyPasta", "height=350,width=540");
});
