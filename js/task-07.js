const textInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = '52px';
textInput.addEventListener("input", (event) => {
    text.style.fontSize = `${event.currentTarget.value}px` ;
}
);