let celsius = document.querySelector('[data-celsius]').value;
let fahrenheit = document.querySelector('[data-fahrenheit]').value;
let btn = document.querySelector('[data-calculate]')
let display = document.querySelector('[data-answer]')
btn.addEventListener('click', multiply)

function multiply(){
    let celsius = document.querySelector('[data-celsius]').value;
    let fahrenheit = document.querySelector('[data-fahrenheit]').value;
    let answer = eval(`${celsius} * 9/5 + 32`)
    console.log(answer)
    display.innerText = answer
}