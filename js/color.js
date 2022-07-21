var indice = 0


function footer() {
    let header = document.getElementById("header")
        if(document.body.getBoundingClientRect().top<-1800){
            document.body.classList.add("footer", "color");
            indice=1
        } else  if(document.body.getBoundingClientRect().top>-1800){
            document.body.classList.remove("footer", "color");
            indice=0
        }
}

window.addEventListener("scroll", footer)


function disapear() {
    let header = document.getElementById("header")

    if(indice==1){
        header.classList.add("disapear")
    } else {
        header.classList.remove("disapear")

    }
}
window.addEventListener("scroll", disapear)

