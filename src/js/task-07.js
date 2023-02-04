const textInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
textInput.addEventListener("input", (event) => {
    text.style.fontSize = `${event.currentTarget.value}px` ;
}
);