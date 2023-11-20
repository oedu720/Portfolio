function generateNumber(){

const minValue = Math.ceil (document.querySelector("#first-input").value)
const maxValue = Math.floor (document.querySelector("#second-input").value)
const result = Math.floor (Math.random() * (maxValue - minValue + 1)) + minValue
alert(result)
}

