var audio = document.getElementById('audio');
var play = document.getElementById('play');
var bfq = document.getElementById('bfq');
var gnum = document.getElementById('gum');
var gul = document.getElementById('gul');
var main = document.getElementById('main');
var pic = document.getElementById('pic');
var te = document.getElementById('te');
var uimg = document.getElementById('uimg');
var uname = document.getElementById('uname');
var playbtn = document.getElementById('playbtn');
var mnum = document.getElementById('mnum');
var rlist = document.getElementById('rlist');
var controlbar = document.getElementById('controlbar');
var btnGrop =  document.getElementById('btnGroup');
var pre = document.getElementById('pre');
var next = document.getElementById('next');
var mpic = document.getElementById('mpic');
var ngname = document.getElementById('ngname');
var ngspan = document.getElementById('ngspan');
var progress = document.getElementById('progress');
var pbtn = document.getElementById('pbtn');
var progressbar = document.getElementById('progressBar');
var nowTime = document.getElementById('nowTime');
var endTime = document.getElementById('endTime');
var simg = document.getElementById('simg');
var vol = document.getElementById('vol');
var volbar = document.getElementById('volbar');
var bimg = document.getElementById('bimg');

var isSound = false;
var isSingle = false;
var isPlay = false;
var mlist = [];
var gdlist = [];
var nowIndex = 0;


simg.onclick = function () {
    if(!isSound){
        simg.src='img/mjingyin.png';
        isSound = true;
        audio.volume = 0;
        volbar.style.width = '0';
    }else{
        console.log(1);
        simg.src ='img/msound.png';
        isSound = false;
        false// audio.volume = 0.3;
        volbar.style.width = '30%';
    }
}

bimg.onclick = function () {
    if(!isSingle){
        bimg.src = 'img/mdanqu.png';
        isSingle = true
    }else {
        bimg.src = 'img/mshunxu.png';
        isSingle = false;
    }
}

vol.onclick = function (e) {
    var cha = e.clientX - vol.offsetLeft;
    volbar.style.width = cha / vol.clientWidth * 100 + '%';
    audio.volume = cha / vol.clientWidth;
    if(audio.volume > 0.05){
        simg.src ='img/msound.png';
    }
    else {
        simg.src='img/mjingyin.png';
    }
}

progress.onclick = function (e) {
    console.log(e.clientX + " " + progress.offsetLeft + " " + progress.clientWidth);
    var cha = e.clientX - progress.offsetLeft;
    progressbar.style.width = cha / progress.clientWidth * 100 + '%';
    audio.currentTime = audio.duration * cha / progress.clientWidth;
    var pos = -10 + cha / progress.clientWidth * 500 -5;
    if(pos > -10){
        pbtn.style.marginLeft = pos + 'px';
    }else {
        pbtn.style.marginLeft = -9 + 'px';
    }
}

function toTime(t) {
    var m = parseInt(t / 60);
    var s = parseInt(t % 60);
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    return m + ':' + s;
}

audio.addEventListener('timeupdate', function () {
    nowTime.innerText = toTime(audio.currentTime);
    progressBar.style.width = audio.currentTime / audio.duration * 100 + '%';
    var pos = -10 + audio.currentTime / audio.duration * 500 -5;
    if(pos > -13){
        pbtn.style.marginLeft = pos + 'px';
    }else {
        pbtn.style.marginLeft = -12 + 'px';
    }

})

var waitTime = setTimeout(function () {
    //判断当前加载情况
    if (audio.readyState > 2) {
        endTime.innerText = '/'  + toTime(audio.duration);
        clearTimeout(waitTime);
    }
}, 1000);

play.onclick = function () {
    if (!isPlay) {
        play.src = 'img/mpause.png';
        audio.play();
        isPlay = true;
    } else {
        play.src = 'img/mplay-w.png';
        audio.pause();
        isPlay = false;
    }
}

pre.onclick = function () {
    
}

next.onclick = function () {
    
}