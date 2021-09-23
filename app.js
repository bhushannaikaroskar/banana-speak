var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

function clickEventHandler(){
    textOutput.innerText = textInput.value;
}

buttonTranslate.addEventListener("click",clickEventHandler);