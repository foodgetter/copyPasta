chrome.commands.onCommand.addListener(function(command) {
	if(command == "start_copy"){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  			chrome.tabs.sendMessage(tabs[0].id, {type: "startcopy"});
  			});
  		} else if(command == "start_save"){
  			window.open("save_page.html", "copyPasta", "height=350,width=540");
  		}
});

chrome.runtime.onMessage.addListener(
  function(request) {
    if (request.type == "launchCopyPage")
    	window.open("copy_page.html", "copyPasta", "height=350,width=540");
});
