// Array for cart
let cartData = JSON.parse(localStorage.getItem('cart')) || []

// getting the item from local storage
var item = JSON.parse(localStorage.getItem("bookItem"));
// console.log(item);
// console.log(item[0]['imgOne'])



let mainLeftContainer = document.querySelector('#mainLeftContainer')
mainLeftContainer.innerHTML = `<!-- Start -> SlidingWindow -->
                                <div
                                    id="carouselExampleIndicators"
                                    class="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol class="carousel-indicators">
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="0"
                                        class="active"
                                    ></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img
                                        class="d-block w-100 curve"
                                        src="${item[0]['imgOne']}"
                                        alt="First slide"
                                        />
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                        class="d-block w-100 curve"
                                        src="${item[0]['imgTwo']}"
                                        alt="Second slide"
                                        />
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                        class="d-block w-100 curve"
                                        src="${item[0]['imgThree']}"
                                        alt="Third slide"
                                        />
                                    </div>
                                    </div>
                                    <a
                                    class="carousel-control-prev"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="prev"
                                    >
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                    </a>
                                    <a
                                    class="carousel-control-next"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="next"
                                    >
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                    </a>
                                </div>
                                <!-- End -> SlidingWindow -->`

// 
// 
// //
let mainRightContainer = document.querySelector('#mainRightContainer')
mainRightContainer.innerHTML = `  <div>
<p id="MRCTitle">${item[0]['title']}</p>
<p id="MRCDescription">${item[0]['description']}</p>
<div id="MRCSingleLine">
  <div id="MRCPriceDiv">
    <p id="MRCDiscontPrice">₹${item[0]['discountPrice']}</p>
    <p id="MRCOriginalPrice">₹${item[0]['originalPrice']}</p>
  </div>
  <div id="MRCRatingDiv">
    <p id="MRC"></p>
  </div>
</div>
<div id="count">
  <div id="countOne"><p>-</p></div>
  <div id="countTwo"><p>1</p></div>
  <div id="countThree"><p>+</p></div>
</div>
<button id="MRCButton">ADD TO CART</button>
<hr />
<div id="offer">
  <p id="offerP">Offer</p>
  <div id="topOffer">
    <div id="topOfferTop">
      <div><p class="topLeft">10% Discount</p></div>
      <div><p class="topRight">NEW10</p></div>
    </div>
    <div id="topOfferBottom">
      <p>
        New Users can avail 10% discount on their first order. Cannot
        be clubbed with any other offers or Bella Cash
      </p>
    </div>
  </div>
  <div id="bottomOffer">
    <div id="bottomOfferTop">
      <div><p class="topLeft">4 at the price of 3</p></div>
      <div><p class="topRight">4FOR3</p></div>
    </div>
    <div id="bottomOfferBottom">
      <p>
        Get 4 products for the price of 3! Just add 4 products to your
        cart and use the code '4FOR3'. Cannot be clubbed with any
        other offers or Bella Cash. Offer not valid on Boxes
      </p>
    </div>
  </div>
  <hr />
</div>
<div id="MRCInput">
  <input type="text" placeholder="Check for Availability" />
  <button>Check</button>
</div>
<p>
  While you sleep, the Bella Vita Organic Hydra-plus Night Cream works
  wonders on your skin. This perfect night therapy is blend of natural
  ingredients that effectively relenishes, smoothes, and smoothes out
  skin texture overnight, <u>Read More</u>
</p>
<div id="fourImages">
  <div id="fourImagesOne">
    <img
      src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Premium_Quality_v1_430x.png?v=1654682820"
      alt=""
    />
    <p>Premium</p>
    <p>Quality</p>
  </div>
  <div id="fourImagesTwo">
    <img
      src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Cruelty_Free_V1_1_430x.png?v=1654682279"
      alt=""
    />
    <p>Cruelty</p>
    <p>Free</p>
  </div>
  <div id="fourImagesThree">
    <img
      src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Natural_Products_430x.png?v=1654679967#"
      alt=""
    />
    <p>Natural</p>
    <p>Products</p>
  </div>
  <div id="fourImagesFour">
    <img
      src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Dermatologically_Tested_430x.png?v=1654679967#"
      alt=""
    />
    <p>Derma</p>
    <p>Tested</p>
  </div>
</div>
</div>`


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
  }]


let rightContainer = document.querySelector('#bottomContainerList')

productData.forEach(function (el) {
  let box = document.createElement('div')
  box.setAttribute('class', 'box')
  box.innerHTML = `<img src="${el.imgOne}" alt="" class="boxImg" />
                    <p class="title">${el.title}</p>
                    <p class="description">${el.description}</p>
                    <div class="singleLine">
                    <div class="priceDiv">
                        <p class="discountPrice">₹ ${el.discountPrice}</p>
                        <p class="originalPrice">₹ ${el.originalPrice}</p>
                    </div>
                    <div class="rating">
                        <p class="ratingP">${el.rating}</p>
                    </div>
                    </div>
                    <button class="productBtn">ADD TO CART</button>`

  rightContainer.append(box)
})



let qty = document.querySelector('#countTwo')

let Qty = JSON.parse(localStorage.getItem('Qty'))

qty.innerText = Qty

// // Increasing the count
let plus = document.querySelector('#countThree')
plus.addEventListener('click', function () {
  // console.log('plus')
  qty.innerText++
  // console.log(qty.innerText)
  localStorage.setItem('Qty', JSON.stringify(qty.innerText))
})
// 
// 
// // Decreasing the count
let minus = document.querySelector('#countOne')
minus.addEventListener('click', function () {

  if (qty.innerText == 1) {
    return
  }

  qty.innerText--

  localStorage.setItem('Qty', JSON.stringify(qty.innerText))
})


// // Adding item to cartData
let addButton = document.querySelector('#MRCButton')
addButton.addEventListener('click', function () {
  console.log('add to cart')
  item[0].qty = Qty
  cartData.push(item[0])
  console.log('cart', cartData)
  localStorage.setItem('cart', JSON.stringify(cartData))
  window.location.href='./cart.html'
})


// function haveSameData(obj1, obj2) {
//   const obj1Length = Object.keys(obj1).length;
//   const obj2Length = Object.keys(obj2).length;
//   if (obj1Length === obj2Length) {
//     return Object.keys(obj1).every(
//       key => obj2.hasOwnProperty(key)
//         && obj2[key] === obj1[key]);
//   }
//   return false;
// }


// let countsss = []
// for (let i = 0; i < cartData.length; i++) {
//   // console.log()
//   countsss.push(cartData[i]['qty'])
//   if (cartData[i]['qty'] == qty.innerText) {
//     console.log('present')
//   }
// }
// console.log(countsss)




// for (let i = 0; i < cartData.length; i++) {
//   // console.log(cartData[i].qty)
//   // console.log(cartData[i])
//   let obj1 = cartData[i]
//   let obj2 = item[0]
//   if (haveSameData(obj1, obj2) == true) {
//     console.log('present')
//     break
//   }
//   else {
//     console.log('not present')
//     item[0].qty = Qty
//     cartData.push(item[0])
//     localStorage.setItem('cart', JSON.stringify(cartData))
//   }
// }



