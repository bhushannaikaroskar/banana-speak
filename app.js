var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

// Mock API
// var apiURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var apiURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslateURL(text){
    return encodeURI(apiURL+"?text="+text);
}

function errorHandling(error){
    console.log("error handling ",error);
    alert("Something went wrong. Try after sometime")
}

function clickEventHandler(){

    var inputTxt = textInput.value;
    
    // textOutput.innerText = textInput.value;
    fetch(getTranslateURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        console.log(json);
        var translatedText = json.contents.translated;
        textOutput.innerHTML = translatedText;
    }).catch(errorHandling);
}

buttonTranslate.addEventListener("click",clickEventHandler);

