var search = document.getElementById('search');
var close = document.getElementById('close');
var bar = document.getElementById('bar');
var navSection = document.getElementById('section-name');
if(bar){
  bar.addEventListener('click', ()=>{
    navSection.classList.add('active');
  });
}
  if(close){
   close.addEventListener('click', ()=>{
      navSection.classList.remove('active');
    });
}
if(search){
  search.addEventListener('click', ()=>{
    search.classList.add('active');
  });
}



// https://5d76bf96515d1a0014085cf9.mockapi.io/product/1

var ajax = new XMLHttpRequest();
ajax.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product");
ajax.send();
ajax.addEventListener("readystatechange", onReadyStateChange);
function onReadyStateChange(e) {
  if ((e.target.readyState === 4) & (e.target.status === 200)) {
    console.log(JSON.parse(e.target.responseText));
    var data = JSON.parse(e.target.responseText);
    productList = data;

  

// var productData = function(){
  
  // }
    for (var i = 0; i < productList.length; i++) {
        var product = productList[i];
        var counter = i+1;
        
      var main = document.getElementById('main-container');
      
      var cardContainer = document.createElement("div");
      cardContainer.classList.add("container");
      main.append(cardContainer);





      var content = document.createElement("div");
      content.classList.add("content");
      cardContainer.append(content);



      var productName = document.createElement("h1");
      productName.classList.add("name");
      productName.innerText = product.name;

      content.append(productName);


      

      var bigImg = document.createElement("div");
      bigImg.classList.add("bigImg");
      cardContainer.append(bigImg,content);

      var mainImg = document.createElement("img");
      bigImg.append(mainImg);
      mainImg.id = "mainImg";
      mainImg.src = product.preview;
      


      var brand = document.createElement("p");
      brand.classList.add("brand");
      brand.innerText = product.brand;
      content.append(brand);


      var price = document.createElement("h4");
      price.classList.add("price");
      price.innerText = "Price: Rs " + product.price;
      content.append(price);

      var paragraph = document.createElement("h2");
      paragraph.classList.add("paragraph");
      paragraph.innerText = "Description";

      var Paragraph = document.createElement("p");
      Paragraph.classList.add("Paragraph");
      Paragraph.innerText = product.description;
      paragraph.append(Paragraph);

      var preview = document.createElement("h2");
      preview.innerText = "Product Preview";
      content.append(paragraph, preview);

      
      var productImg = product.photos;
      for(var counter=0; counter<productImg.length; counter++){
          
        
        var smallImg = document.createElement("img");
        content.append(smallImg);
        smallImg.id = "smallImg";
        smallImg.classList.add('images');
        smallImg.src = productImg[counter];
        smallImg.addEventListener('click',onSmallImgClick);
        
      }   
      function onSmallImgClick(e){
        mainImg.src = e.target.src;
      }
    
      var btndiv = document.createElement("div");
      btndiv.classList.add("btn");  
        
      var cardbtn = document.createElement('button');
      btndiv.append(cardbtn);
      cardbtn.classList.add('cardBtn');
      cardbtn.type = "submit";
      cardbtn.innerText= "add to cart";
      cardbtn.id = 'btnId';


      content.append(btndiv);

      for(var i=0; i<product.cardbtn.length; i++){

      }
    }
  
}



// let carts = document.querySelectorAll('cardBtn');

// for(var i=0; i<carts.length; i++ ){
//   console.log('my loop');
// }


}


