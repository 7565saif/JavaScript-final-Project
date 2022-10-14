$(document).ready(function () {
  $(".carousel-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
var search = document.getElementById("search");
var close = document.getElementById("close");
var bar = document.getElementById("bar");
var navSection = document.getElementById("section-name");
if (bar) {
  bar.addEventListener("click", () => {
    navSection.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    navSection.classList.remove("active");
  });
}
if (search) {
  search.addEventListener("click", () => {
    search.classList.add("active");
  });
}

// https://5d76bf96515d1a0014085cf9.mockapi.io/product

var section1 = document.createElement("h2");
section1.innerText = "Clothing for Men and Women";
var main = document.getElementById("main-container");
main.append(section1);
var clothingSection = document.createElement("div");
clothingSection.classList.add("card-container");

var cardContainer1 = document.createElement("div");
cardContainer1.classList.add("cards");
main.append(clothingSection);

var section2 = document.createElement("h2");
section2.innerText = "Accessories for Men and Women";
main.append(section2);
var accessoriesSection = document.createElement("div");
accessoriesSection.classList.add("card-container");
// accessoriesSection.append(section2);
var cardContainer2 = document.createElement("div");
cardContainer2.classList.add("cards");
main.append(accessoriesSection);

var ajax = new XMLHttpRequest();
ajax.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product");
ajax.send();
ajax.addEventListener("readystatechange", onReadyStateChange);
function onReadyStateChange(e) {
  if ((e.target.readyState === 4) & (e.target.status === 200)) {
    console.log(JSON.parse(e.target.responseText));
    var data = JSON.parse(e.target.responseText);
    productList = data;

    for (var i = 0; i < productList.length; i++) {
      var product = productList[i];

      
      var id = document.createElement("div");
      id.innerText = product.id;
      id.classList.add("id");

      var imgPointer = document.createElement("a");
      imgPointer.id ="cardContainer";
      imgPointer.href = "/productDetail/Product-Deatail.html";

      var cardContainer = document.getElementById('cardContainer');

      var card = document.createElement("div");
      var conentWrapper = document.createElement("div");
      conentWrapper.classList.add("conent-wrapper");
      var img = document.createElement("img");
      img.src = product.preview;
      img.id = product.id;




      img.alt = "wallpaper";
      var paraGraph = document.createElement("p");
      paraGraph.innerText = product.name;

      var heading1 = document.createElement("h5");
      heading1.innerText = product.brand;
      var heading2 = document.createElement("h4");
      heading2.innerText = "Rs. " + product.price;

      card.append(id);
      card.append(imgPointer, img);
      img.classList.add("resize-img");
      card.append(paraGraph);
      paraGraph.classList.add("paragraph-content");
      card.append(heading1);
      heading1.classList.add("heading", "paragraph-content");
      card.append(heading2);
      heading2.classList.add("heading2", "paragraph-content");

      // cardContainer1.append(card);
      main.append(card);
      card.append(conentWrapper);
      conentWrapper.append(paraGraph, heading1, heading2);
      imgPointer.append(img, conentWrapper);
      card.classList.add("card");


      img.addEventListener('click', onCardClick);



      // heading1.innerText= brand;
      // heading2.innerText= price;

      if (product.isAccessory === true) {
        accessoriesSection.append(card);
      } else {
        clothingSection.append(card);
      }

      function onCardClick(e) {
        console.log(e.target);
        var id = e.target.id;
        for(var j=0; j<imgPointer.length; j++){
          var productList = imgPointer[j];
          if(id == productList.id){
            cardContainer.src ="https://5d76bf96515d1a0014085cf9.mockapi.io/product" + productList.id;
          }
        }
      }

      // if( id =  productList.id){
      //   productList.src
      // }
    }
  }
}
