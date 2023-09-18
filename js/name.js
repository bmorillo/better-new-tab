const greetingElement = document.getElementById("greeting");
const nameInputElement = document.getElementById("nameInput");

// Add event listeners
greetingElement.addEventListener('dblclick', makeNameEditable);
nameInputElement.addEventListener('blur', updateName);

// Make the name editable and hide the original greeting
function makeNameEditable() {
    const currentName = greetingElement.innerText;
    nameInputElement.value = currentName;
    greetingElement.style.display = "none";
    nameInputElement.style.display = "inline-block";
    nameInputElement.style.display = "inline-block";
    nameInputElement.focus();
}

// Function to update the name when editing is done
function updateName() {
    const newName = nameInputElement.value;
    greetingElement.innerText = newName;
    nameInputElement.style.display = "none";
    greetingElement.style.display = "inline";
}
