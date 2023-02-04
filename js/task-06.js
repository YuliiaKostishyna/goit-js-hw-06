const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
    if (textInput.value.length === Number(textInput.dataset.length)) {
        return textInput.classList.contains("invalid") ? textInput.classList.replace("invalid", "valid") : textInput.classList.add("valid");
    }
return textInput.classList.contains("invalid") ? textInput.classList.replace("valid" ,"invalid") : textInput.classList.add("invalid");
}
 
);

