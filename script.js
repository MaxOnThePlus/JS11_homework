const cards = JSON.parse(cardsBaza);
const products = document.querySelector('.products_cards');

const reverse = cards => cards.map((_, index) => cards[cards.length - 1 - index]);
const cards2 = reverse(cards);

for (let i = 0; i < cards.length; i++) {
    products.insertAdjacentHTML('afterbegin', `
        <div class="card">
                    <div class="change_card" >
                        <img src="${cards[i].img}" alt="product">
                        <div class="hover_card">
                            <button class="hover_button"><img src="img/korzina_2.svg" alt="button"><span>Add to Cart</span></button>
                    </div>
                    </div>
                    <div class="card_text">
                    <h4 class="card_h4">${cards[i].name}</h4>
                    <p class="description">${cards[i].about}</p>
                    <p class="price">${cards[i].price}</p>
                    </div>
                </div>
        `)  
    
}
const cartButton = document.querySelectorAll('.hover_button');
const cardsCartDiv = document.querySelector('.cards_cart');
const cartSection = document.querySelector('.cart_section');
for (let i = 0; i < cards2.length; i++) {
    cartButton[i].addEventListener('click', function (e) {
        const cardsDiv = document.querySelector('.cart');
        cardsCartDiv.style.display = 'flex';
        cardsCartDiv.style.justifyContent = 'center';
    cardsDiv.insertAdjacentHTML('afterbegin',`
    <div class="item">
            <img src="${cards2[i].img}" alt="" class="item_img">
            <div class="item_text">
                <div class="text">
                <h4 class="item_h4">${cards2[i].name}</h4>
                <p class="item_text_el p-special">Price: <span class="price_text">${cards2[i].price}</span></p>
                <p class="item_text_el p-special">Color: <span class="another_color_span">Black</span></p>
                <p class="item_text_el p-special">Size: <span class="another_color_span">XL</span></p>
                <p class="item_text_el p-last">Quantity: <input type="number" class="inp" value="1"></p>
            </div>
            </div>
            <div class="delete"><img src="img/delete.svg" alt="удалить"></div>
        </div>
    `);
    
    const close = document.querySelector('.delete');
const card = document.querySelector('.item');
const cardArr = document.querySelectorAll('.item');
close.addEventListener("click", (e)=>{
    card.remove();
    const cardArr = document.querySelectorAll('.item');
    if (cardArr.length === 0) {
        cardsCartDiv.remove();
    }
});
    });  
    
};



