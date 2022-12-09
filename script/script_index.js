var img = document.querySelector(".ciak0");
img.addEventListener("click", imageRemove);


function imageRemove(){
    img.remove();
    document.getElementById('particle0').style.animation = 'screen 7s linear';
    const myTimout2 = setTimeout(removeBackground, 500);
    const myTimout = setTimeout(relocation, 5000);
}

function backgroundSet(){
    document.getElementById('body').backgroundColor = 'black';
}

function removeBackground(){
    document.getElementById('loader').style.backgroundColor = '';
    document.getElementById('loader').style.filter = 'blur(0)';
    document.getElementById('loader').style.filter = 'contrast(1)';

}

function relocation(){
    window.location.href = "docs/page1.html";
}
