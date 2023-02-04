let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action = "decrement"]');
const buttonIncrement = document.querySelector('button[data-action = "increment"]');
const result =  document.querySelector("#value")

// const decrementValue = ()
buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    result.textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    result.textContent = counterValue;
});