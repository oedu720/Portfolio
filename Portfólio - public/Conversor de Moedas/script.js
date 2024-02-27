function showOnScreen() {
    let inputCurrency = document.querySelector("#input-currency").value
    const currencyValueReal = document.querySelector("#currency-value-real")
    let currencyValueDolar = document.querySelector("#currency-value-dolar")
    let mySecondSelect = document.querySelector("#my-second-select")

    let realToday = 1
    let dolarToday = 4.97
    let euroToday = 5.33
    let libraToday = 6.26

    let realConverted = inputCurrency / realToday
    let dolarConverted = inputCurrency / dolarToday
    let euroConverted = inputCurrency / euroToday
    let libraConverted = inputCurrency / libraToday

    console.log("real")
    console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrency))
    currencyValueReal.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrency)

    if (mySecondSelect.value == "real") {
        console.log("real")
        console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(realConverted))
        currencyValueDolar.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(realConverted)
    }

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

    if (mySecondSelect.value == "libra") {
        console.log("libra")
        console.log(new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(libraConverted))
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(libraConverted)
    }

}

function changeSecondSelect() {
    let mySecondSelect = document.querySelector("#my-second-select")
    let inputCurrency = document.querySelector("#input-currency").value
    let arrow = document.querySelector("#arrow")

    let realToday = 1
    let dolarToday = 4.97
    let euroToday = 5.33
    let libraToday = 6.26

    let realConverted = inputCurrency / realToday
    let dolarConverted = inputCurrency / dolarToday
    let euroConverted = inputCurrency / euroToday
    let libraConverted = inputCurrency / libraToday

    const unitedStatesFlag = document.querySelector("#united-states-flag")
    const titleDolar = document.querySelector("#title-dolar")
    let currencyValueDolar = document.querySelector("#currency-value-dolar")

    arrow.style = "margin-top: 30px;"

    if (mySecondSelect.value == "dolar") {
        unitedStatesFlag.src = "United States.png"
        unitedStatesFlag.style = "position: relative; top: 5px;"
        titleDolar.style = "height: 25px; margin-top: 55px;"
        currencyValueDolar.style = "margin-top: 46px;"
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dolarConverted)
    }

    if (mySecondSelect.value == "euro") {
        unitedStatesFlag.src = "./Euro.png"
        unitedStatesFlag.style = "position: relative; top: 5px;"
        titleDolar.innerHTML = "Euro"
        currencyValueDolar.style = "margin-top: 35px;"
        currencyValueDolar.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(euroConverted)
    }

    if (mySecondSelect.value == "libra") {
        arrow.style = "margin-top: 20px;"
        unitedStatesFlag.src = "./Libra.png"
        unitedStatesFlag.style = "height: 55px; position: relative; top: 1px;"
        titleDolar.innerHTML = "Libra Esterlina"
        currencyValueDolar.style = "margin-top: 48px;"
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(libraConverted)
    }

    if (mySecondSelect.value == "real") {
        unitedStatesFlag.src = "Brazil.png"
        unitedStatesFlag.style = "margin-top: 30px;"
        titleDolar.innerHTML = "Real"
        titleDolar.style = "height: 20px; margin-top: 80px;"
        currencyValueDolar.style = "text-align: center; margin-left: 97px;"
        currencyValueDolar.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(realConverted)
    }
}