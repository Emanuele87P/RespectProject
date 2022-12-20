//setInterval(screenSize, 10);

function screenSize(){
    var p = document.getElementById('demo');
    var x = window.innerWidth;
    var y = window.innerHeight;
    p.innerHTML = "Width: " + x + " Height: " + y;
}


var about = document.getElementById("link");
about.addEventListener("click", redirectAboutLink);

function redirectAboutLink(){
    window.location.href = "page2.html";
}