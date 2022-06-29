let cartData = JSON.parse(localStorage.getItem('cart'))

console.log(cartData)

let CCB = document.querySelector('#CCB')

cartData.forEach(function (el) {
    let cartBox = document.createElement('div')
    cartBox.setAttribute('class', 'cartBox')
    cartBox.innerHTML = `<div class="cartBox">
                            <div class="imgDiv">
                            <img
                                src="${el.imgOne}"
                                alt=""
                            />
                            </div>
                            <div class="titleDiv">
                            <p>${el.title}</p>
                            <p>₹${el.discountPrice}</p>
                            </div>
                            <div class="qtyDiv">
                            <div class="minus"><p>-</p></div>
                            <div class="number"><p>${el.qty}</p></div>
                            <div class="plus"><p>+</p></div>
                            <div class="remove"><i class="fa-solid fa-trash-can"></i></div>
                            </div>
                            <div class="totalDiv"><p>₹${el.discountPrice}</p></div>
                        </div>`
    CCB.append(cartBox)
})


// let remove = document.querySelector('.remove')
// remove.addEventListener('click', function () {
//     // console.log('remove')
//     cartData.splice(1)

// })