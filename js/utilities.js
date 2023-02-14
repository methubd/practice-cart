function spanToValueConvertbyId (spanId){
    const spanElement = document.getElementById(spanId);
    const spanString = spanElement.innerText;
    const spanValue = parseFloat(spanString);
    return spanValue;
}

function inputToValueConvertbyId (inputId){
    const inputElement = document.getElementById(inputId);
    const inputString = inputElement.value;
    const inputValue = parseFloat(inputString);
    inputElement.value = '';
    return inputValue;
}

function setANewValue(inputId, newValue){
    const itemElement = document.getElementById(inputId);
    itemElement.innerText = newValue;
}