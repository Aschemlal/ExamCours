var val=1
function dark() {
    if(val==1) {
        document.body.setAttribute("class", "sombre color")

        val=0;
    } else  {
        document.body.setAttribute("class", "light black")
        val=1;

    }
}


function reveal() {
    var balise = document.querySelectorAll(".reveal");
    for (var i = 0; i < balise.length; i++) {
      if (balise[i].getBoundingClientRect().top < window.innerHeight - 10) {
        balise[i].classList.add("active");
      } else {
        balise[i].classList.remove("active");
      }
    }
  }
window.addEventListener("load", reveal);
