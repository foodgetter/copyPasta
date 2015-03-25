chrome.runtime.onMessage.addListener(
  function(request) {
    if (request.type == "launch")
    	window.open("index.html", "copyPasta", "height=350,width=540");
});
