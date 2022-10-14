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

