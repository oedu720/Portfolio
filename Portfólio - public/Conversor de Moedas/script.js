function showOnScreen(){
    const inputCurrency = document.querySelector("#input-currency").value
    const currencyValueReal = document.querySelector("#currency-value-real")
    const currencyValueDolar = document.querySelector("#currency-value-dolar")
    const dolarToday = 4.97
    const dolarConverted = inputCurrency / dolarToday

    currencyValueReal.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrency)
    currencyValueDolar.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dolarConverted)

    console.log("real")
    console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrency))

    console.log("dolar")
    console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dolarConverted))
}