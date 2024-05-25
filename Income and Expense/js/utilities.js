// To get Text field value

function GetTextField (element){
    const elementName = document.getElementById(element);
    const elementNameString = elementName.innerText;
    const elementNameNumber = parseFloat(elementNameString);
    return elementNameNumber;
}

//To get input field value 
function GetInputField (value){
    const valueName = document.getElementById(value);
    const valueNameString = valueName.value;
    const valueNameNumber = parseFloat(valueNameString);
    return valueNameNumber;
}

//To set value at TEXT field

function setvalueatTextField (fieldId,newvalue){
    const fieldIdcalcu = document.getElementById(fieldId);
    fieldIdcalcu.innerText=newvalue;
}