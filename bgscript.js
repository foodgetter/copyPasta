var savewindowstart_left = (screen.width/2) - 282;
var savewindowstart_top = (screen.height/2) - 315;


chrome.commands.onCommand.addListener(function(command) {
	if(command == "start_copy"){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  			chrome.tabs.sendMessage(tabs[0].id, {type: "startcopy"});
  			});
  		} else if(command == "start_save"){
  			window.open("save_page.html", "copyPasta", "top="+savewindowstart_top+", left="+savewindowstart_left+", width=565, height=630, ");
  		}
});

chrome.runtime.onMessage.addListener(
  function(request) {
    if (request.type == "launchCopyPage"){
    	copyTextToLocalMemory(request.url, request.description, request.text);
    	} 
});

function copyTextToLocalMemory(url, description, text)
{
	var textToCopy = description+"\r\n \r\n" + "URL: " + url + "\r\n \r\n" + text;
	//save text to local storage
	if(localStorage.copiedtext){
		updateStoredText(textToCopy);
	} else{
		localStorage.copiedtext = textToCopy;
	}
	var notification=new Notification('Copied :~) from',{
		body: description,
		icon: "assets/icon128.png"
	});
	setTimeout(function(){
		notification.close(); //closes the notification
	},1500);
}

function updateStoredText(text){
	var addedText = "\r\n" + "\r\n" + "======================================================" + "\r\n" + "\r\n" + text;
	localStorage.copiedtext = localStorage.copiedtext + addedText;
}
