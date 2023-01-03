const slider_wrapper =
document.querySelectorAll('.slider_wrapper .sliderImg  img')



async function jewelery(arg) {
  let results = await fetch('https://fakestoreapi.com/products/category/jewelery')
  let data = await results.json()
  slider_wrapper[0].src = data[2].image

}

jewelery()

async function electronics(arg) {
  let results = await fetch('https://fakestoreapi.com/products/category/electronics')
  let data = await results.json()
  slider_wrapper[1].src = data[4].image

}

electronics()

async function men(arg) {
  let results = await fetch('https://fakestoreapi.com/products/category/men\'s clothing')
  let data = await results.json()
  slider_wrapper[2].src = data[2].image

}

men()


async function women(arg) {
  let results = await fetch('https://fakestoreapi.com/products/category/women\'s clothing')
  let data = await results.json()
  slider_wrapper[3].src = data[5].image

}

women()


const new_arrivals_wrapper = document.querySelector('.new_arrivals_wrapper');


const favorite = JSON.parse(localStorage.getItem('favorite') || '[]')







async function newArrivals() {
  let url = 
  await fetch('https://fakestoreapi.com/products?limit=6')
  
 let all_products = await url.json()
 showProdcuts(all_products)
}

newArrivals()

function showProdcuts(all_products)
{
  let innerProduct = ''
  for(var i = 0; i < all_products.length; i++) {
    let newProduct = `
    <div class="new_arrivals">
      <div class="arrived_img">
     <button class="material-symbols-outlined favorite">
         favorite
       </button>
      <img src=${all_products[i].image} alt="">
      </div>
      <div class="title">
        <h5>${all_products[i].title}</h5>
        <span>$${all_products[i].price}</span>
        <button class='fullscreen'>
        <a class='material-symbols-outlined' href="${all_products[i].title.trim()}.html">
        fullscreen
        </a>
        </button>
      </div>
     </div>
    `
    innerProduct += newProduct
  }
  
  new_arrivals_wrapper.innerHTML = innerProduct
  
  const favorite_btn = 
  Array.from(document.querySelectorAll('.arrived_img button'))
  
  
  favorite_btn.forEach(favbtn => {
    favbtn.addEventListener('click',function(){
      favbtn.classList.add('active')
     addToFav(all_products[favorite_btn.indexOf(this)].title,all_products[favorite_btn.indexOf(this)].image,all_products[favorite_btn.indexOf(this)].price)
   },{once:true})
    
  })
  
}

function addToFav(title,url,price)
{
 favorite.push({
   title : title, 
   url : url, 
   price : price
 })
 
 
 localStorage.setItem('favorite',JSON.stringify(favorite))
}

