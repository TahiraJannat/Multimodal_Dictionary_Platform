window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    document.getElementById("top").style.display = "block";
    document.getElementById("pagination").style.top = "0";


  } else {
    document.getElementById("top").style.display = "none";
    document.getElementById("pagination").style.top = "100px";

  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}