const url_Params = new URLSearchParams(window.location.search);
const id = url_Params.get('id');

function Show_Details(id){
  fetch(`https://dummyjson.com/products/${id}`)
  .then(response => response.json())
  .then(product => {
    
    const productDetail = document.createElement('div');
    
    productDetail.innerHTML = `
      <div>
        <img src="${product.thumbnail}" alt="Product Image">
      </div>
      <div>
        <h4>Name product: ${product.title}</h2>
        <p>Brand: ${product.brand}</p>
        <p>Category: ${product.category}</p>
        <p>Description: ${product.description}</p>
        <p>Price: ${product.price}$</p>
        <p>Rating: ${product.rating} points</p>
      </div>
    `;
    const imagesContainer = document.getElementById('images-container');
    for (const imageSrc of product.images) {
        const image = document.createElement('img');
        console.log(imageSrc);
        image.src = imageSrc;
        image.className=`rounded mx-auto d-block`;
        image.id=`photos`;
        imagesContainer.appendChild(image);
        }
    
    const detailContainer = document.getElementById('product_detail');
    detailContainer.innerHTML = '';
    detailContainer.appendChild(productDetail);
  });
}

Show_Details(id);

