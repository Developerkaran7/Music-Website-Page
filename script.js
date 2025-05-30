var mySongs = document.getElementById("mySongs");
var icon = document.getElementById("icon");
icon.onclick = function (){
    if (mySongs.paused){
        mySongs.play();
        icon.src = "./pause.png";
    }else {
        mySongs.pause();
        icon.src = "./play.png"
    }
}