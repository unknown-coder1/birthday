// Password page to home page
var button = document.querySelector("button");
button.addEventListener('click', function(){
    var name = document.getElementById('name').value;
    var pass = Number(document.getElementById('pass').value);
    if(pass === 474747){
        document.getElementById('passPage').style.display = "none";
        document.getElementById('homePage').style.display = "block";
        greet(name);
    }
    else{
        alert("wrong pass");
    }
});
var backTopass = document.getElementById('backToPass');
backToPass.addEventListener('click',function (){
    document.getElementById('passPage').style.display = "block";
    document.getElementById('homePage').style.display = "none";
});

// greet page or home page
function greet(name){
    document.getElementById('greet').innerHTML = "Hi " + name;
};
// Birthday audio
var audioButton = document.getElementById('audioButton');
audioButton.addEventListener('click',function (){
    document.getElementById('content').style.display = 'none';
    document.getElementById('songPage').style.display = 'block';
});
function play(){
    document.getElementById('mainvideo').play();
    var song = new Audio('audios/themeSong.mp3');
    song.play()

}
document.getElementById('blowbutton').addEventListener('click', function(){
    document.getElementById('light-container').style.display = "none";
    document.getElementById('age-container').style.marginTop = "200px";
    alert("Your wish is heard May it be completed!");
})

//home page tp giftgreet
var nextPage = document.getElementById('nextPage');
nextPage.addEventListener('click',function (){
    document.getElementById('songPage').style.display = 'none';
    document.getElementById('wish').style.display = 'block';
    document.getElementById('mainvideo').pause();
    var song = new Audio('audios/themeSong.mp3');
    song.pause()
});
var wishbutton = document.getElementById('wishbutton');
wishbutton.addEventListener('click',function (){
    document.getElementById('giftfromme').style.display = 'block';
    document.getElementById('wish').style.display = 'none';
});

var giftfrommebutton = document.getElementById('giftfrommebutton');
giftfrommebutton.addEventListener('click',function (){
    document.getElementById('gift-container').style.display = 'block';
    document.getElementById('giftfromme').style.display = 'none';
});
 var backToIntro = document.getElementById('backToIntro');
 backToIntro.addEventListener('click',function (){
    document.getElementById('content').style.display = 'block';
    document.getElementById('gift-container').style.display = 'none';
});


// OPEN GIFT
var openButton = document.getElementById('openButton');
openButton.addEventListener('click',function(){
    var gift = document.getElementById('gift');
    gift.style.display = 'block';
});
//CLOSE GIFT
var closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click',function(){
    var gift = document.getElementById('gift');
    gift.style.display = 'none';
});

//gift 2
var openButton2 = document.getElementById('openButton2');
openButton2.addEventListener('click',function(){
    var gift2 = document.getElementById('gift2');
    gift2.style.display = 'block';
});
var closeButton2 = document.getElementById('closeButton2');
closeButton2.addEventListener('click',function(){
    var gift2 = document.getElementById('gift2');
    gift2.style.display = 'none';
});

//gift 3
var openButton3 = document.getElementById('openButton3');
openButton3.addEventListener('click',function(){
    var gift3 = document.getElementById('gift3');
    gift3.style.display = 'block';
});
var closeButton3 = document.getElementById('closeButton3');
closeButton3.addEventListener('click',function(){
    var gift3 = document.getElementById('gift3');
    gift3.style.display = 'none';
});



//letter section fitst gift
var mainAudio = new Audio ("audios/mainSong.mp3");
document.getElementById('firstGiftButton').addEventListener('click',function(){
    document.getElementById('gift-container').style.display = 'none';
    document.getElementById('firstGiftContainer').style.display = 'block';
})
document.getElementById('mainSongButton').addEventListener('click',function(){
    mainAudio.play();
})
document.getElementById('backToGift-1').addEventListener('click',function(){
    document.getElementById('gift-container').style.display = 'block';
    document.getElementById('firstGiftContainer').style.display = 'none';
    mainAudio.pause();
})
document.getElementById('backToGift-2').addEventListener('click',function(){
    document.getElementById('gift-container').style.display = 'block';
    document.getElementById('secondGiftContainer').style.display = 'none';
    document.getElementById('mainvid').pause();
})
document.getElementById('backToGift-3').addEventListener('click',function(){
    document.getElementById('gift-container').style.display = 'block';
    document.getElementById('thirdGiftContainer').style.display = 'none';
    mainAudio.pause();
})


//video section gift
document.getElementById('secondGiftButton').addEventListener('click',function(){
    document.getElementById('gift-container').style.display = 'none';
    document.getElementById('secondGiftContainer').style.display = 'block';
})
function vidplay(){
    document.getElementById('mainvid').play();
}


//third gift
document.getElementById('thirdGiftButton').addEventListener('click',function(){
    document.getElementById('gift-container').style.display = 'none';
    document.getElementById('thirdGiftContainer').style.display = 'block';
})
