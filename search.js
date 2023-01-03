const input = document.querySelector('#input')

const wrapper = 
document.querySelector('.wrapper')



async function loadData() {
  const results = 
  await fetch('https://fakestoreapi.com/products')
  
  const data = await results.json()
  
  let innerCard = ''
  for (var i = 0; i < data.length; i++) {
    if (data[i].category.includes(input.value.toLowerCase())) {
      let newCard = `
       <div class="card">
      <div class="card_img">
     <button class="material-symbols-outlined favorite">
         favorite
       </button>
      <img src=${data[i].image} alt="">
      </div>
      <div class="title">
        <h5>${data[i].title}</h5>
        <span>$${data[i].price}</span>
      </div>
     </div>
     
      `
      document.querySelector('#results_search').innerHTML = `Showing result(s) for ${input.value}`
      innerCard += newCard
    }
    
    wrapper.innerHTML = innerCard
    
    
    const addFavBtns = Array.from(document.querySelectorAll('.favorite'))
    
    addFavBtns.forEach(fav => {
      fav.addEventListener('click',function(){

      })
    })
  }

 
}


 
 




input.addEventListener('keyup',function(){
  loadData()
  
})
  
