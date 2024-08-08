const loc = document.getElementById('location');
function startsearch(){
  let searchqueary = document.getElementById('searchtext').value;
  loc.innerHTML = searchqueary;
  document.getElementById('searchtext').value = '';
}