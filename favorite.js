
const favorite_wrapper = 
document.querySelector('.favorite_wrapper')

const getFav = JSON.parse(localStorage.getItem('favorite'))

function showWishlist()
{
  
  if (getFav.length == 0) {
    document.querySelector('#wishListFeedback'). innerHTML = 'Your WistList is empty'
  } else {
    document.querySelector('#wishListFeedback'). innerHTML = `Showing ${getFav.length} item(s) from you WishList cart`
  }
  
}

showWishlist()

async function loadFav() {
  let innerFav = ''
  
  for (var i = 0; i < getFav.length; i++) {
    let newFav = `
          <div class="favorite">
       <div class="fav_img">
        <img src=${getFav[i].url} alt=""> 
       </div>
       <div class="title">
         <p>
        ${getFav[i].title}
         </p>
       </div>
       <div class="btn">
         <p>$${getFav[i].price}</p>
         <button id='delete' class="material-symbols-outlined">
           delete
         </button>
       </div>
      </div>
      
    `
    innerFav += newFav
  }
  
  favorite_wrapper.innerHTML = innerFav
  
  
  const allDeleteBtns = Array.from(document.querySelectorAll('#delete'))
  
  allDeleteBtns.forEach(delBtn =>{
    delBtn.addEventListener('click',function(){
     deleteFavorite(allDeleteBtns.indexOf(this))
    })
  })
}

loadFav()


function deleteFavorite(index)
{
  getFav.splice(index,1)
  localStorage.setItem('favorite',JSON.stringify(getFav))
  loadFav()
  showWishlist()
}
