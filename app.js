let stickerArray = ["1.png","2.png","3.png","4.png","6.png","7.png"]
shuffle(stickerArray)
let i = 0

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

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