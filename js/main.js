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

    randomBlessing();
})

function randomBlessing() {
    var blessing1 = ["猪事顺利", "猪圆玉润", "猪笼入水", "万事如意", "幸福安康", "一帆风顺", "生意兴隆", "大吉大利", "心想事成", "五福临门 "];
    var blessing2 = ["八面来财", "青春永猪", "百尺竿头", "吉祥如意", "金玉满堂", "福如东海", "飞黄腾达", "年年有余", "六六大顺", "荣华富贵 "];
    var text1 = blessing1[Math.floor(Math.random() * 10)];
    var text2 = blessing2[Math.floor(Math.random() * 10)];
    $("#blessing1").html(text1);
    $("#blessing2").html(text2);
}