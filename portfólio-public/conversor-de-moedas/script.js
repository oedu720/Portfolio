function showOnScreen() {
    let inputCurrency = document.querySelector("#input-currency").value
    let currencyValueReal = document.querySelector("#currency-value-real")
    let currencyValueDolar = document.querySelector("#currency-value-dolar")
    let myFirstSelect = document.querySelector("#my-first-select")
    let mySecondSelect = document.querySelector("#my-second-select")

    let realToday = 1
    let dolarToday = 4.97
    let euroToday = 5.39
    let libraToday = 6.29

    let realConverted = inputCurrency / realToday
    let dolarConverted = inputCurrency / dolarToday
    let euroConverted = inputCurrency / euroToday
    let libraConverted = inputCurrency / libraToday

    let realConvertedAgain = inputCurrency * realToday
    let dolarConvertedAgain = inputCurrency * dolarToday
    let euroConvertedAgain = inputCurrency * euroToday
    let libraConvertedAgain = inputCurrency * libraToday

    if (myFirstSelect.value == "real") {
        console.log("real")
        console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrency))
        console.log(`\n`)
        currencyValueReal.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrency)
    }

    if (myFirstSelect.value == "dolar") {
        console.log("dolar")
        console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrency))
        console.log(`\n`)
        currencyValueReal.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrency)
    }

    if (myFirstSelect.value == "euro") {
        console.log("euro")
        console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrency))
        console.log(`\n`)
        currencyValueReal.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrency)
    }

    if (myFirstSelect.value == "libra") {
        console.log("libra")
        console.log(new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(inputCurrency))
        console.log(`\n`)
        currencyValueReal.innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(inputCurrency)
    }

    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------//

    if (mySecondSelect.value == "real" && myFirstSelect.value == "dolar") {
        console.log("real")
        console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dolarConvertedAgain))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dolarConvertedAgain)
    }

    if (mySecondSelect.value == "real" && myFirstSelect.value == "euro") {
        console.log("real")
        console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(euroConvertedAgain))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(euroConvertedAgain)
    }

    if (mySecondSelect.value == "real" && myFirstSelect.value == "libra") {
        console.log("real")
        console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(libraConvertedAgain))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(libraConvertedAgain)
    }
    if (mySecondSelect.value == "real" && myFirstSelect.value == "real") {
        console.log("real")
        console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrency))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrency)
    }



    if (mySecondSelect.value == "dolar" && myFirstSelect.value == "euro") {
        console.log("dolar")
        console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrency * 1.08))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrency * 1.08)
    }

    if (mySecondSelect.value == "dolar" && myFirstSelect.value == "libra") {
        console.log("real")
        console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrency * 1.27))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrency * 1.27)
    }

    if (mySecondSelect.value == "dolar" && myFirstSelect.value == "real") {
        console.log("real")
        console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrency * 0.202))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrency * 0.202)
    }
    if (mySecondSelect.value == "dolar" && myFirstSelect.value == "dolar") {
        console.log("real")
        console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrency))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrency)
    }



    if (mySecondSelect.value == "euro" && myFirstSelect.value == "dolar") {
        console.log("euro")
        console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrency * 0.92))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrency * 0.92)
    }

    if (mySecondSelect.value == "euro" && myFirstSelect.value == "libra") {
        console.log("euro")
        console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrency * 1.17))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrency * 1.17)
    }

    if (mySecondSelect.value == "euro" && myFirstSelect.value == "real") {
        console.log("euro")
        console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrency * 0.19))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrency * 0.19)
    }
    if (mySecondSelect.value == "euro" && myFirstSelect.value == "euro") {
        console.log("real")
        console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrency))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrency)
    }



    if (mySecondSelect.value == "libra" && myFirstSelect.value == "dolar") {
        console.log("libra")
        console.log(new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(inputCurrency * 0.79))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(inputCurrency * 0.79)
    }

    if (mySecondSelect.value == "libra" && myFirstSelect.value == "euro") {
        console.log("libra")
        console.log(new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(inputCurrency * 0.86))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(inputCurrency * 0.86)
    }

    if (mySecondSelect.value == "libra" && myFirstSelect.value == "real") {
        console.log("libra")
        console.log(new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(inputCurrency * 0.16))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(inputCurrency * 0.16)
    }
    if (mySecondSelect.value == "libra" && myFirstSelect.value == "libra") {
        console.log("real")
        console.log(new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(inputCurrency))
        console.log(`\n`)
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(inputCurrency)
    }

}



function changeFirstSelect() {
    let myFirstSelect = document.querySelector("#my-first-select")
    let brazilFlag = document.querySelector("#brazil-flag")
    let titleReal = document.querySelector("#title-real")
    let currencyValueReal = document.querySelector("#currency-value-real")
    let currencyValueDolar = document.querySelector("#currency-value-dolar")
    let inputCurrency = document.querySelector("#input-currency").value

    let realToday = 1
    let dolarToday = 4.97
    let euroToday = 5.33
    let libraToday = 6.26

    let realConverted = inputCurrency / realToday
    let dolarConverted = inputCurrency / dolarToday
    let euroConverted = inputCurrency / euroToday
    let libraConverted = inputCurrency / libraToday

    if (myFirstSelect.value == "real") {
        brazilFlag.src = "./assets/Brazil.png"
        titleReal.innerHTML = "Real"
    }

    if (myFirstSelect.value == "dolar") {
        brazilFlag.src = "./assets/United States.png"
        titleReal.innerHTML = "Dolar Americano"
    }

    if (myFirstSelect.value == "euro") {
        brazilFlag.src = "./assets/Euro.png"
        titleReal.innerHTML = "Euro"
    }

    if (myFirstSelect.value == "libra") {
        brazilFlag.src = "./assets/Libra.png"
        titleReal.innerHTML = "Libra Esterlina"
    }
}



function changeSecondSelect() {
    let myFirstSelect = document.querySelector("#my-first-select")
    let mySecondSelect = document.querySelector("#my-second-select")
    let currencyValueReal = document.querySelector("#currency-value-real")
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

    let unitedStatesFlag = document.querySelector("#united-states-flag")
    let titleDolar = document.querySelector("#title-dolar")
    let currencyValueDolar = document.querySelector("#currency-value-dolar")

    arrow.style = "margin-top: 30px;"

    if (mySecondSelect.value == "dolar") {
        unitedStatesFlag.src = "./assets/United States.png"
        titleDolar.innerHTML = "Dolar Americano"
    }

    if (mySecondSelect.value == "euro") {
        unitedStatesFlag.src = "./assets/Euro.png"
        titleDolar.innerHTML = "Euro"
    }

    if (mySecondSelect.value == "libra") {
        unitedStatesFlag.src = "./assets/Libra.png"
        unitedStatesFlag.style = "width: 55px;"
        titleDolar.innerHTML = "Libra Esterlina"
    }

    if (mySecondSelect.value == "real") {
        unitedStatesFlag.src = "./assets/Brazil.png"
        titleDolar.innerHTML = "Real"
    }
}