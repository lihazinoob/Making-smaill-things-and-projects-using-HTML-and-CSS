const loc = document.getElementById('location');
function startsearch(){
  let searchqueary = document.getElementById('searchtext').value;
  if(searchqueary === ''){
    alert('Please enter a location');
    return;
  }
  loc.innerHTML = searchqueary;
  document.getElementById('searchtext').value = '';
  api(searchqueary);
  
}

function api(city)
{
  fetch('http://api.weatherapi.com/v1/current.json?key=ab929d9e99054f30a08155141240808&q='+city)
  .then(response => response.json())
  .then(data => console.log(data));
  

}

