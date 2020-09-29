const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about')
const articles = document.querySelectorAll(".content");

console.log(about);

about.addEventListener('click',function(e){
const id = e.target.dataset.id;
if(id){
    // remove actve from btns 
    btns.forEach(function(btn){
        btn.classList.remove("active");
        e.target.classList.add("active")
    });
    // hide other aticles 
    articles.forEach(function(article){
        article.classList.remove('active')
    })
  const element = document.getElementById(id);
  element.classList.add('active')
}
});