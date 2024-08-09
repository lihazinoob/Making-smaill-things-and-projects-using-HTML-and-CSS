const tog = document.getElementById('toggler');
var Boolean = true;//Boolean true hoile dark mode on hobe
tog.addEventListener('click', function(){
  if(Boolean)
  {
    document.body.classList.toggle('light');
    Boolean = false;
  }
  else
  {
    document.body.classList.toggle('root');
    Boolean = true;
  }
});