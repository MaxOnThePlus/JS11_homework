const cards = JSON.parse(cardsBaza);
const products = document.querySelector('.products_cards');
cards.reverse().forEach(element => {
    products.insertAdjacentHTML('afterbegin', `
    <div class="card">
                <div class="change_card" >
                    <img src="${element.img}" alt="product">
                    <div class="hover_card">
                        <button class="hover_button"><img src="img/korzina_2.svg" alt="button"><span>Add to Cart</span></button>
                </div>
                </div>
                <div class="card_text">
                <h4 class="card_h4">${element.name}</h4>
                <p class="description">${element.about}</p>
                <p class="price">${element.price}</p>
                </div>
            </div>
    `)
});