var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");

function clickEventHandler(){
    console.log("Clicked");
    console.log(textInput.value);
}

buttonTranslate.addEventListener("click",clickEventHandler);