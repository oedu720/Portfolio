const cartModal = document.getElementById("cart-modal")
const menu = document.getElementById("menu")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutButton = document.getElementById("checkout-btn")
const closeModelButton = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")
// const cartButton = document.getElementById("cart-btn")

let cart = []

function openModal() {
  updateCartModal()

  cartModal.classList.remove("hidden")
  cartModal.classList.add("flex")
}

function closeModal() {
  cartModal.classList.remove("flex")
  cartModal.classList.add("hidden")
}

// Fechar modal quando clicar fora dele
cartModal.addEventListener("click", (event) => {
  if (event.target === cartModal) {
    closeModal()
  }
})

menu.addEventListener("click", (event) => {
  const productButton = event.target.closest(".add-to-cart-btn")
  if (productButton) {
    const productName = productButton.getAttribute("data-name")
    const productPrice = parseFloat(productButton.getAttribute("data-price"))

    addToCart(productName, productPrice)
  }
})

// Adicionar no carrinho e verificar se já tem outro desse item
function addToCart(productName, productPrice) {
  const newItem = {
    productName,
    productPrice,
    quantity: 1,
  }

  const existingItem = cart.find((item) => item.productName === productName)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push(newItem)
  }

  updateCartModal()
}

function removeFromCart(productName) {
  const foundProduct = cart.findIndex(
    (item) => item.productName === productName
  )

  if (cart[foundProduct].quantity > 1) {
    cart[foundProduct].quantity -= 1
  } else {
    cart.splice(foundProduct, 1)
  }

  updateCartModal()
}

function updateCartModal() {
  cartItemsContainer.innerHTML = ""
  let total = 0

  if (cart.length > 0) {
    cart.forEach((item) => {
      const cartItemElement = document.createElement("div")
      // cartItemElement.classList.add("flex", "flex-col", "mb-7")
      const priceInBRL = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(item.productPrice)

      cartItemElement.innerHTML = `
      <div class="flex flex-row items-center justify-between mt-4">
        <div class="flex flex-col justify-center items-start">
          <p class="font-medium">${item.productName}</p>
          <p>(Qtd: ${item.quantity})</p>
          <p class="font-medium mt-2">${priceInBRL}</p>
        </div>
      
        <button type="button" onclick="removeFromCart('${item.productName}')">Remover</button>
      </div>
      `

      total += item.productPrice * item.quantity
      const totalInBRL = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(total)

      cartTotal.textContent = totalInBRL
      cartItemsContainer.appendChild(cartItemElement)
    })
  } else {
    const totalInBRL = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(0.0)

    cartTotal.innerHTML = totalInBRL
    cartItemsContainer.innerHTML = `
      <small class="mt-4 text-center">nenhum item adicionado</small>
    `
  }

  cartCounter.textContent = cart.length
}

// Remover cor e mensagem de error se o input for preenchido
addressInput.addEventListener("input", (event) => {
  let inputValue = event.target.value

  if (inputValue != "") {
    addressInput.classList.remove("border-red-500")
    addressWarn.classList.add("invisible")
  }
})

// Não finalizar pedido se condições forem cumpridas
checkoutButton.addEventListener("click", () => {
  const isOpen = checkIfRestaurantIsOpen()

  if (!isOpen) {
    Toastify({
      text: "Ops o restaurante está fechado no momento!",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#ef4444",
      },
    }).showToast()
    return
  }

  if (cart.length === 0) return

  if (addressInput.value === "") {
    addressWarn.classList.remove("invisible")
    addressInput.classList.add("border-red-500")
    return
  }

  //Enviar o pedido para API do Whatsapp
  const cartItems = cart
    .map((item) => {
      return ` ${item.productName} Quantidade: (${item.quantity}) Preço: R$ ${item.productPrice} |`
    })
    .join("")

  const message = encodeURIComponent(cartItems)
  const phone = "81630193459"

  window.open(
    `https://wa.me/${phone}?text=${message} Endereço: ${addressInput.value}`,
    "_blank"
  )

  cart = []

  updateCartModal()
})

// Verificar a hora e manipular o card horário
function checkIfRestaurantIsOpen() {
  const date = new Date()
  const hour = date.getHours()

  return hour >= 18 && hour < 22
}

const dateItem = document.getElementById("date-span")
const isOpen = checkIfRestaurantIsOpen()

if (!isOpen) {
  dateItem.classList.remove("bg-green-600")
  dateItem.classList.add("bg-red-500")
} else {
  dateItem.classList.remove("bg-red-500")
  dateItem.classList.add("bg-green-600")
}
