document.addEventListener('DOMContentLoaded', function () {
	document.title = "NoteComet :~)";
	
	//Paste all the copied text in the input field
	document.getElementById("completeTextToSave").value = localStorage.copiedtext;
	document.getElementById("txtFileName").focus();

	document.getElementById('download_button').addEventListener('click', saveTextAsFile);
	document.getElementById('save_button').addEventListener('click', saveTextToClipboard);
});

function saveTextAsFile()
{      

// grab the content of the form field and place it into a variable
    var textToWrite = document.getElementById("completeTextToSave").value;
//  create a new Blob (html5 magic) that conatins the data from your form feild
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
// Specify the name of the file to be saved
    var fileNameToSaveAs = document.getElementById("txtFileName").value;
    

// create a link for our script to 'click'
    var downloadLink = document.createElement("a");
//  supply the name of the file (from the var above).
// you could create the name here but using a var
// allows more flexability later.
    downloadLink.download = fileNameToSaveAs;
// provide text for the link. This will be hidden so you
// can actually use anything you want.
    downloadLink.innerHTML = "My Hidden Link";
    
// allow our code to work in webkit & Gecko based browsers
// without the need for a if / else block.
    window.URL = window.URL || window.webkitURL;
          
// Create the link Object.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
// when link is clicked call a function to remove it from
// the DOM in case user wants to save a second file.
    downloadLink.onclick = destroyClickedElement;
// make sure the link is hidden.
    downloadLink.style.display = "none";
// add the link to the DOM
    document.body.appendChild(downloadLink);
    
// click the new link
    downloadLink.click();

// remove the stored text from local storage
	localStorage.removeItem("copiedtext");
    
    window.close();
}

function destroyClickedElement(event)
{
// remove the link from the DOM
    document.body.removeChild(event.target);
}

function saveTextToClipboard()
{
  //grab the content of the text field and place it in a variable
  var textToSave = document.getElementById("completeTextToSave").value;
  localStorage.copiedtext = textToSave;
}
// EOF