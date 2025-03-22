// Array para armazenar os itens no carrinho
let cart = [];

// Função para adicionar produtos ao carrinho
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartCount();
}

// Função para atualizar o contador de itens no carrinho
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

// Função para exibir o carrinho
function displayCart() {
    let cartContent = '';
    let total = 0;

    // Monta o conteúdo do carrinho
    cart.forEach(item => {
        cartContent += `<p>${item.name} - R$ ${item.price.toFixed(2)}</p>`;
        total += item.price;
    });

    cartContent += `<hr><p><strong>Total: R$ ${total.toFixed(2)}</strong></p>`;

    // Exibe o conteúdo no HTML (pode ser em um modal ou numa nova página, por exemplo)
    document.getElementById('cart-display').innerHTML = cartContent;
}
