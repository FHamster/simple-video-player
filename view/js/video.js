var video = document.getElementById('video');
var isPlay = false;
var play = document.getElementById('play');
var imgs =document.getElementsByTagName('img');

var program = document.getElementById('program');
var programBar = document.getElementById('programBar');
var nowTime = document.getElementById('nowTime');
var endTime = document.getElementById('endTime');

var full = document.getElementById('full');

var volume = document.getElementById('volume');
var v_program = document.getElementById('v_program');
var v_bar = document.getElementById('v_bar');
var volumeNumber = 0.5;
var isMute = false;

//视频点击播放及暂停
play.onclick = function () {
    if(isPlay){
        play.src = 'img/on/play.png';
        video.pause();
        isPlay = false;
    }else{
        play.src = 'img/on/stop.png';
        video.play();
        isPlay = true;
    }
};
video.onclick = function () {
    if(isPlay){
        play.src = 'img/off/play.png';
        video.pause();
        isPlay = false;
    }else{
        play.src = 'img/off/stop.png';
        video.play();
        isPlay = true;
    }
};

//图标hover改变颜色
for (var i = 0; i < imgs.length; i++) {
    imgs[i].onmouseenter = function () {
        var str = this.src;
        // console.log(str);
        str = str.replace(/off/, 'on');
        this.src = str;
    };
    imgs[i].onmouseout = function () {
        var str = this.src;
        // console.log(str);
        str = str.replace(/on/, 'off');
        this.src = str;
    }
}

//播放进度条
program.onclick = function (e) {
    var ev = window.event || e;
    var cha = ev.clientX - program.offsetLeft;
    // console.log(cha,program.offsetWidth);
    programBar.style.width = cha / program.offsetWidth * 100 + '%';
    video.currentTime = 204 * cha / program.offsetWidth;
};
video.addEventListener('timeupdate',function () {
    nowTime.innerHTML = getTime(video.currentTime);
    programBar.style.width = video.currentTime / 204 * 100 + '%';
});

//获取指定格式时间
function getTime(t) {
    var mTime = parseInt(t/60);
    var sTime = parseInt(t%60);
    if(mTime < 10){
        mTime = '0' + mTime;
    }
    if(sTime < 10){
        sTime = '0' + sTime;
    }
    return mTime + ':' + sTime;
}

//全屏
full.onclick = function () {
    if (video.requestFullscreen) {
        video .requestFullscreen();
    } else if (video .mozRequestFullScreen) {
        video .mozRequestFullScreen();
    } else if (video .webkitRequestFullScreen) {
        video .webkitRequestFullScreen();
    }
};

//声音
//进度条
v_program.onclick = function(e){
    var ev = window.event || e;
    var cha = ev.clientX - v_program.offsetLeft;
    // console.log(cha,v_program.offsetWidth);
    v_bar.style.width = cha / v_program.offsetWidth * 100 + '%';
    video.volume = cha / v_program.offsetWidth;
};
//按钮
volume.onclick = function () {
    if(isMute){
        video.muted = false;
        isMute = false;
    }else{
        video.muted = true;
        isMute = true;
    }
};