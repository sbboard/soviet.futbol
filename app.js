const stickerArray = ["1.png","2.png","3.png","4.png"]
let i = 0

function switchImg(){
    document.getElementById("stickerImg").src = "stickers/" + stickerArray[i]
    if(i <= stickerArray.length-2){
        i++
    }
    else{
        i = 0
    }
}

setInterval(function(){
    switchImg()
},100);