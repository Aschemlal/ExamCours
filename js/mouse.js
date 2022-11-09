let div = document.getElementById("mouse")

document.addEventListener("mousemove", function(e) {
    var x = e.clientX-6;
    var y = e.clientY-6;
    div.style.left = x + "px"
    div.style.top = y + "px"
})

