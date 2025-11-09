function getInputValueById(id) {
    const inputField = document.getElementById(id);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    
    return inputValue;
    
}

function getInnertextById(id) {
    const valueString = document.getElementById(id).innerText;
    const value = parseFloat(valueString);
    return value;
}
function setInnertextById(id, value) {
    document.getElementById(id).innerText = value;
}

function handleToggle(id, status) {

    document.getElementById(id).style.display = status;

}