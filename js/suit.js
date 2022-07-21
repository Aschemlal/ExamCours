
function suit() {
    let header = document.getElementById("header")
  
    if(val==1){
        header.classList.add("darkheader")
        lien("white")
  
      } else {
        header.classList.remove("darkheader")
        lien("black")
  
    }
  }
  
let liens= document.getElementsByClassName("a")

function lien(color) {
    for(let i=0; i<liens.length; i++){
        liens[i].style.color=color
    }
}

  
