function navbar() {
  return `<div id="navTop">
              <p>Father's Day Sale - FLAT 50% OFF on Skincare*</p>
              <button>Shop Nowsssss</button>
            </div>
            <div id="navMiddle">
              <div id="navMiddleContact">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <div id="navMiddleImg">
                <img
                  src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_220_x_220.png?v=1653304683"
                  alt=""
                />
                <img
                  src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220.png?v=1653304701"
                  alt=""
                />
                <img
                  src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220.png?v=1653304721"
                  alt=""
                />
              </div>
              <div id="iconDiv">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-heart"></i>
                <div id="cartLogo"><i class="fa-solid fa-bag-shopping"></i></div>
              </div>
              <div id="navMiddleIcon"></div>
            </div>
            <div id="navBottom">
              <dropDown>SHOP ALL</dropDown>
              <dropDown>NEW ARRIVALS</dropDown>
              <dropDown>BESTSELLERS</dropDown>
              <dropDown class="skinCare">SKIN CARE</dropDown>
              <!-- Start -> Skin Care - Drop down -->
              <div class="skinCareContainer">
                <!-- one -->
                <div class="insideDiv">
                  <div class="topText">
                    <p>BY PRODUCT TYPE</p>
                  </div>
                  <div class="bottomText">
                    <p>ALL SKINCARE PRODUCTS</p>
                    <p>FACE CREAM</p>
                    <p>FACE PACK/MASK</p>
                    <p>FACE SERUM</p>
                    <p>FACE SCRUB</p>
                    <p>FACE TONER</p>
                    <p>FACE GEL</p>
                    <p>FACE MOISTURISERS</p>
                  </div>
                </div>
                <!-- two -->
                <div class="insideDiv">
                  <div class="topText"></div>
                  <div class="bottomText">
                    <p>SUNSCREEN WITH SPF</p>
                    <p>LIP CARE</p>
                    <p>NIGHT CARE</p>
                    <p>UNDER EYE CARE</p>
                    <p>EYE BROWS</p>
                    <p>EXFOLIATORS</p>
                    <p>FACE WASH</p>
                  </div>
                </div>
                <!-- three -->
                <div class="insideDiv">
                  <div class="topText">
                    <p>BY CONCERN</p>
                  </div>
                  <div class="bottomText">
                    <p>PIGMENTATION</p>
                    <p>ACNE & PIMPLES</p>
                    <p>AGEING</p>
                    <p>DARK SPOTS</p>
                    <p>DARK CIRCLES</p>
                    <p>BLACKHEADS & WHITE</p>
                    <p>HEADS</p>
                  </div>
                </div>
                <!-- four -->
                <div class="insideDiv">
                  <div class="topText"></div>
                  <div class="bottomText">
                    <p>TAN REMOVAL</p>
                    <p>HYDRATION</p>
                    <p>SKIN BRIGHTENING</p>
                    <p>PORE CARE</p>
                    <p>SUN PROTECT</p>
                    <p>OIL CONTROL</p>
                    <p>PUFFINESS</p>
                  </div>
                </div>
                <!-- five -->
                <div class="insideDiv">
                  <div class="topText">
                    <p>BY SKIN TYPE</p>
                  </div>
                  <div class="bottomText">
                    <p>DULL SKIN</p>
                    <p>DRY SKIN</p>
                    <p>OILY SKIN</p>
                    <p>NORMAL SKIN</p>
                  </div>
                  <!-- </div> -->
                </div>
              </div>
              <!-- End -> Skin Care - Drop down -->
              <dropDown class="hairCare">HAIR CARE</dropDown>
              <!-- Start -> Hair Care - Drop down -->
              <div class="hairCareContainer">
                <!-- one -->
                <div class="insideDiv">
                  <div class="topText"><p>BY PRODUCT TYPE</p></div>
                  <div class="bottomText">
                    <p>ALL HAIRCARE PRODUCTS</p>
                    <p>SHAMPOO</p>
                    <p>CONDITIONER</p>
                    <p>HARI OIL</p>
                    <p>HAIR MASK</p>
                  </div>
                </div>
                <!-- two -->
                <div class="insideDiv">
                  <div class="topText">
                    <p>BY HAIR CONCERN</p>
                  </div>
                  <div class="bottomText">
                    <p>HAIR LOSS</p>
                    <p>HAIR THINNING</p>
                    <p>DULL HAIR</p>
                    <p>DANDRUFF</p>
                    <p>DAMAGE HAIR</p>
                    <p>FRIZZY HAIR</p>
                    <p>DRY HAIR & SCALP</p>
                  </div>
                </div>
                <!-- three -->
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hair_Care_Megamenu.png?v=1651665849"
                    alt=""
                    class="insideImg"
                  />
                </div>
              </div>
              <!-- End -> Hair care - Drop down -->
              <dropDown>BODY CARE</dropDown>
              <dropDown>PERFUMES</dropDown>
              <dropDown>COMBOS</dropDown>
              <dropDown>BUILD A BOX</dropDown>
            </div>`
}

export default navbar;

// let goToCartPage = document.querySelector('#cartLogo')
// goToCartPage.addEventListener('click', function () {
//   console.log('goToCartPage')
//   // window.location.href = './cart.html'
// })