(function(){
  var sb=document.getElementById('sidebar');
  document.getElementById('menu-btn').addEventListener('click',function(){
    sb.classList.toggle('open');});
  sb.addEventListener('click',function(e){
    if(e.target.tagName==='A'&&window.innerWidth<=900)sb.classList.remove('open');});

  var search=document.getElementById('toc-search');
  search.addEventListener('input',function(){
    var q=search.value.toLowerCase().trim();
    document.querySelectorAll('#sidebar li').forEach(function(li){
      if(li.querySelector('ul'))return;
      var a=li.querySelector('a');
      if(!a){li.style.display='';return;}
      li.style.display=(!q||a.textContent.toLowerCase().indexOf(q)>=0)?'':'none';
    });
  });

  var tt=document.getElementById('totop');
  window.addEventListener('scroll',function(){
    tt.classList.toggle('show',window.scrollY>500);});
  tt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});

  var links={};
  document.querySelectorAll('#sidebar a[href^="#"]').forEach(function(a){
    links[a.getAttribute('href').slice(1)]=a;});
  var spy=document.querySelectorAll('h1[id],h2[id],h3[id]');
  var obs=new IntersectionObserver(function(ents){
    ents.forEach(function(en){
      if(en.isIntersecting){
        var a=links[en.target.id];
        if(a){
          Object.keys(links).forEach(function(k){links[k].classList.remove('active');});
          a.classList.add('active');
          a.scrollIntoView({block:'nearest'});
        }
      }
    });
  },{rootMargin:'-56px 0px -75% 0px'});
  spy.forEach(function(h){obs.observe(h);});
})();
document.querySelectorAll(".images").forEach(img => {

    img.addEventListener("click", () => {

        window.open(img.src, "_blank");

    });

});
