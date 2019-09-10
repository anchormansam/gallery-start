var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
btn.addEventListener('click', showOverlay);

for (let i = 0; i < 5; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + (i + 1) + '.jpg');
  newImage.addEventListener('click', showImage);
  thumbBar.appendChild(newImage);    
  }
/* Wiring up the Darken/Lighten button */

function showImage (e) {
  var imgSrc = e.target.getAttribute('src');
  console.log('img');
  displayedImage.setAttribute('src', imgSrc) 
}


function showOverlay (e) {

  var status = e.target.getAttribute('class');
  if(status == "Darken"){
    var lighten = "Lighten";
    btn.setAttribute('class', lighten);
    btn.textContent = lighten;
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    var dark = "Darken";
    btn.setAttribute('class', dark);
    btn.textContent = dark;
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}