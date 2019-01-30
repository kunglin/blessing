$(function () {
    //播放器控制
    var audio = document.getElementById('mp3Btn');
    audio.volume = .5;

    $('.btn-audio').click(function (event) {
        event.stopPropagation(); //防止冒泡
        if (audio.paused) { //如果当前是暂停状态
            $('.fa').removeClass("fa-pause").addClass("fa-music");
            audio.play(); //播放
            return;
        } else { //当前是播放状态
            $('.fa').removeClass("fa-music").addClass("fa-pause");
            audio.pause(); //暂停
        }
    });
})