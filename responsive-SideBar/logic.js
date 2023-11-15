
function displayWindowSize(){
    var width = document.documentElement.clientWidth;
    if(width > 900){
        document.getElementById("secondDiv").style.right="0%";
    }
}

window.addEventListener("resize",displayWindowSize);

displayWindowSize();

function showDiv(){
    var width = document.documentElement.clientWidth;

    if(width < 900){
        document.getElementById("secondDiv").style.right="0%";
    }
}

function closeDiv(){
    var width = document.documentElement.clientWidth;

    if(width < 900){
        document.getElementById("secondDiv").style.right="100%";
    }
}