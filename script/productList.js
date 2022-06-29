// //
// 
let productData = [
    // 1
    {
        imgOne: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HydraplusFaceWash-03_700x.jpg?v=1654164895',
        imgTwo: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HydraplusFaceWash-02_700x.jpg?v=1654164895',
        imgThree: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HydraplusFaceWash-01_700x.jpg?v=1654164895',
        title: 'Hydra-Plus Face Wash ,100ml',
        description: 'Hydrating, Cleansing & Brightening',
        originalPrice: '279',
        discountPrice: '195',
        rating: '5.0',
    },
    // 2
    {
        imgOne: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiFaceWash-01_1_700x.jpg?v=1652341314',
        imgTwo: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiFaceWash-02_700x.jpg?v=1652341314',
        imgThree: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiFaceWash-03_700x.jpg?v=1652341314',
        title: 'Kumkumadi Face Wash - 100ml',
        description: 'Pore Cleansing, Radiating',
        originalPrice: '399',
        discountPrice: '279',
        rating: '4.8',
    },
    // 3 
    {
        imgOne: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceSerum-01_1_700x.jpg?v=1651698248',
        imgTwo: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceSerum-06_9d045130-dcb9-4c59-aa41-12ef9cafcdd1_700x.jpg?v=1652182969',
        imgThree: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceSerum-03_b2b01a82-a561-401e-b716-ec87573af2b1_700x.jpg?v=1652182969',
        title: 'C-Glow Face Serum ,30ml',
        description: 'Brightening & Anti Pigmentation',
        originalPrice: '375',
        discountPrice: '263',
        rating: '5.0',
    },
    // 4 
    {
        imgOne: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hydra-Plus-Face-Gel-03_700x.jpg?v=1654164918',
        imgTwo: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hydra-Plus-Face-Gel-02_700x.jpg?v=1654164918',
        imgThree: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hydra-Plus-Face-Gel-01_700x.jpg?v=1654164918',
        title: 'Hydra-Plus Face Gel ,50gm',
        description: 'Hydrating & Moisturising',
        originalPrice: '399',
        discountPrice: '279',
        rating: '4.6',
    },
    // 5 
    {
        imgOne: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiDayCream-01_757f9cf0-0c09-4baa-8a13-c6803a6e1f94_700x.jpg?v=1652341381',
        imgTwo: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiDayCream-02_700x.jpg?v=1652341381',
        imgThree: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiDayCream-03_0a9431f1-e0a1-42f9-b513-feae37cdedc1_700x.jpg?v=1652341381',
        title: 'Kumkumadi Day Cream ,50gm',
        description: 'Skin Brightening, Repair And Dryness',
        originalPrice: '549',
        discountPrice: '384',
        rating: '5.0',
    },
    // 6 
    {
        imgOne: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hydra-plusNightCream-03_700x.jpg?v=1654165749',
        imgTwo: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hydra-plusNightCream-02_700x.jpg?v=1654165750',
        imgThree: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hydra-plusNightCream-01_700x.jpg?v=1654165749',
        title: 'Hydra-Plus Night Cream ,50gm',
        description: 'Hydrating, Repairing And Nourishing',
        originalPrice: '449',
        discountPrice: '314',
        rating: '5.0',
    },
    // 7 
    {
        imgOne: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ReverseShampoo_Conditinor-01_1_700x.jpg?v=1651698374',
        imgTwo: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ReverseShampoo_Conditinor-06_700x.jpg?v=1652183038',
        imgThree: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ReverseShampoo_Conditinor-03_700x.jpg?v=1652183038',
        title: 'Reverse Hairwash Conditioner',
        description: 'Anti Frizz, Anti Hairfall & Nourishing',
        originalPrice: '599',
        discountPrice: '549',
        rating: '4.9',
    },
    // 8 
    {
        imgOne: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Kumkumadi-Face-Oil-01_700x.jpg?v=1652341175',
        imgTwo: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiFaceOil-02_700x.jpg?v=1652341175',
        imgThree: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiFaceOil-03_700x.jpg?v=1652341175',
        title: 'Ayurvedic Kumkumadi Face Oil, 30ml',
        description: 'Skin Brightening & Hydrating Oil',
        originalPrice: '599',
        discountPrice: '419',
        rating: '4.7',
    }

]

let rightContainer = document.querySelector('#rightContainer')

productData.forEach(function (el) {
    let box = document.createElement('div')
    box.setAttribute('class', 'box')
    box.addEventListener('click', function () {
        bookingPage(el);
    })
    box.innerHTML = `<img src="${el.imgOne}" alt="" class="boxImg" />
                    <p class="title">${el.title}</p>
                    <p class="description">${el.description}</p>
                    <div class="singleLine">
                    <div class="priceDiv">
                        <p class="discountPrice">₹ ${el.discountPrice}</p>
                        <p class="originalPrice">₹ ${el.originalPrice}</p>
                    </div>
                    <div class="rating">
                        <p class="ratingP">${el.rating}</p><span><i class="fa-solid fa-star"></i></span>
                    </div>
                    </div>
                    <button class="productBtn">ADD TO CART</button>`

    rightContainer.append(box)
})


// taking the item to booking page
// array to store the element
function bookingPage(el) {
    // console.log('going to product detail page')
    var bookingItem = [];
    bookingItem.push(el)
    localStorage.setItem('bookItem', JSON.stringify(bookingItem))
    window.location.href = "./productDetail.html";
}

// 
// 
// 
localStorage.setItem('Qty', JSON.stringify(1))


let goToCartPage = document.querySelector('#cartLogo')
goToCartPage.addEventListener('click', function () {
    console.log('goToCartPage')
    // window.location.href = './cart.html'
})