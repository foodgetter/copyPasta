document.addEventListener('DOMContentLoaded', function () {
	document.title = "copyPasta :~)"
	
	//Paste the selected text in the input field
	document.getElementById("inputTextToSave").focus();
	document.execCommand('Paste');
	
	//focus on copy button
	document.getElementById("copyButton").focus();

	document.querySelector('button').addEventListener('click', copyTextToLocalMemory);
});

function copyTextToLocalMemory()
{
	var textToCopy = document.getElementById("inputTextToSave").value;
	//save text to local storage
	if(localStorage.copiedtext){
		updateStoredText(textToCopy);
	} else{
		localStorage.copiedtext = textToCopy;
	}
	window.close();
}

function updateStoredText(text){
	var addedText = "\r\n" + "\r\n" + "======================================================" + "\r\n" + "\r\n" + text;
	localStorage.copiedtext = localStorage.copiedtext + addedText;
}
