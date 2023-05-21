// Task 9
//#1
const api =  `https://dummyjson.com/products`;
const list = document.getElementById(`product_list`);
const limitInput = document.getElementById(`limit`);
const loadMoreBtn = document.getElementById(`Show_more_Btn`);
let pagination = {
  limit: 3,
  skip: 0,
  total: null,
  next(){
    this.skip +=this.limit;
  },
  get is_End(){
    if (this.total == null) return false;
    return this.skip >= this.total;
  }
};

function Load_Products(){
  pagination.limit = parseInt(limitInput.value);
  let url = `${api}?skip=${pagination.skip}&limit=${pagination.limit}`;
  pagination.next();

  fetch(url).then(result=> result.json()).then(data=>{
    pagination.total = data.total;
    Show_more_Btn.disabled = pagination.is_End;
    const products = data.products;
    for(const product of products){
      Show_Product(product);
    }
  
  });
}

function Show_Product(product){
    list.innerHTML+=`<div class="card h-100" style="width: 18rem;">
                      <img src="${product.thumbnail}" class="card-img-top align-self-start" alt="...">
                      <div class="card-body">
                        <h5 class="card-title overflow-hidden text-truncate">${product.title}</h5>
                        <p class="card-text overflow-hidden text-truncate">${product.description}</p>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Brand: ${product.brand}</li>
                        <li class="list-group-item">Rating: ${product.rating} points</li>
                        <li class="list-group-item">Price: ${product.price}$</li>
                      </ul>
                      <div class="card-body">
                        
                        <a href="selected_product.html?id=${product.id}" class="card-link"><button  type="button" class="btn btn-info">Details</button></a>
                        
                      </div>
                    </div>`
}
Load_Products();

Show_more_Btn.onclick = () => {
  Load_Products();
}

