const loc = document.getElementById('location');
const weatherinfo = document.getElementById('weather');
const infowind = document.getElementById('windinfo');
const infohumidity = document.getElementById('humidityinfo');
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
  .then(data => {loc.innerHTML = data.location.name + "," + data.location.country;

  weatherinfo.innerHTML = data.current.condition.text;
  infowind.innerHTML = data.current.wind_kph + " Kph";
  infohumidity.innerHTML = data.current.humidity + "%";
});

  

}

