const tog = document.getElementById('toggler');
var Boolean = true;//Boolean true hoile dark mode on hobe
tog.addEventListener('click', function(){
  console.log(Boolean);
  if(Boolean)
  {
    document.body.classList.toggle('light');
    Boolean = false;
  }
  else
  {
    document.body.classList.toggle('dark');
    Boolean = true;
  }
});

// Here I am trying to add onscroll animation
let animationselector = document.querySelectorAll('.animation');
window.addEventListener('scroll',function()
{
  animationselector.forEach(element =>
    {
      let top = this.window.scrollY;
      let offset = element.offsetTop-200;
      let height = element.offsetHeight;
      if(top > offset && top < offset + height)
      {
        element.classList.add('active');
      }
      else
      {
        element.classList.remove('active');
      }
    })
}

);