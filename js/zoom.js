function zoomin(id){
    var myImg = document.getElementById(id);
    var currWidth = myImg.clientWidth;
    if(currWidth == 1024){
        myImg.style.height = (640) + "px";
        myImg.style.width = (480) + "px";
    } 
    if(currWidth == 480){
        myImg.style.height = (1280) + "px";
        myImg.style.width = (1024) + "px";
    }
}