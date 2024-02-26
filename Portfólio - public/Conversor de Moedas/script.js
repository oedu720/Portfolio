function showOnScreen() {
    let inputCurrency = document.querySelector("#input-currency").value
    const currencyValueReal = document.querySelector("#currency-value-real")
    let currencyValueDolar = document.querySelector("#currency-value-dolar")
    let mySecondSelect = document.querySelector("#my-second-select")
    const dolarToday = 4.97
    let euroToday = 5.33

    const dolarConverted = inputCurrency / dolarToday
    let euroConverted = inputCurrency / euroToday

    currencyValueReal.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrency)

    console.log("real")
    console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrency))

    if (mySecondSelect.value == "dolar") {
        console.log("dolar")
        console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dolarConverted))
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dolarConverted)
    }

    if (mySecondSelect.value == "euro") {
        console.log("euro")
        console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(euroConverted))
        currencyValueDolar.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(euroConverted)
    }

}

function changeSecondSelect() {
    let mySecondSelect = document.querySelector("#my-second-select")
    let inputCurrency = document.querySelector("#input-currency").value
    let arrow = document.querySelector("#arrow")
    let euroToday = 5.33
    let euroConverted = inputCurrency / euroToday
    const unitedStatesFlag = document.querySelector("#united-states-flag")
    const titleDolar = document.querySelector("#title-dolar")
    let currencyValueDolar = document.querySelector("#currency-value-dolar")

    arrow.style = "margin-top: 30px;"

    if (mySecondSelect.value == "dolar") {
        unitedStatesFlag.src = "United States.png"
        unitedStatesFlag.style = "position: relative; top: 5px;"
        titleDolar.style = "height: 25px; margin-top: 55px;"
        currencyValueDolar.style = "margin-top: 30px;"
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(currencyValueDolar)
    }

    if (mySecondSelect.value == "euro") {
        unitedStatesFlag.src = "./Euro.png"
        titleDolar.innerHTML = "Euro"
        currencyValueDolar.style = "margin-top: 85px;"
        currencyValueDolar.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(euroConverted)
    }
}