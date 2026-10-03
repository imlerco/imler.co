(function(){
  var b=document.querySelector('.menu-btn'), m=document.getElementById('mnav');
  if(!b||!m) return;
  function set(o){b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu');m.classList.toggle('open',o)}
  b.addEventListener('click',function(){set(b.getAttribute('aria-expanded')!=='true')});
  m.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  document.addEventListener('click',function(e){if(!e.target.closest('.nav'))set(false)});
  window.addEventListener('resize',function(){if(window.innerWidth>860)set(false)});
})();
