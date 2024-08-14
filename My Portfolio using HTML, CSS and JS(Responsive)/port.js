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
