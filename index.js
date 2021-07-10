function modalit(id, city, index) {
    // Get the modal
var modal = document.getElementById(id);

// Get the button that opens the modal
var btn = document.getElementById(city);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[index];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

}

function openme(name){
    newwindow = window.open(name, 'newwindow', '_parent', 'height=300,width=600, top = 400, left = 500, titlebar="yes",menubar=0,location=0, resizable=0, toolbar=0, status = no');
}

function myFunction(id) {
  var x = document.getElementById(id);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  window.onclick = function(event) {
    if (event.target == x) {
      x.style.display = "none";
      
    }
  }
  
}

function checkForId(id) {
  var z = document.getElementById(id);
  z.style.display = "block";
  setTimeout(function(){ z.style.display = "none"; }, 6000);
  
}