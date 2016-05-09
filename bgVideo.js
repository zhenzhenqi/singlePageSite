$(document).ready(function () {
    resize_background();
    $(window).resize(function () {
        resize_background();
    });
});

function resize_background() {
    $("#video1").css("height", $(window).height() + "px");
    console.log("video_height:"+$(window).height());
    var video_width = parseInt($("#video1").css("width"));
    console.log("video_width:"+video_width);
    var window_width = $(window).width();
    console.log("window_width:"+$(window).width());
    if (video_width > window_width) {
        var left_pos = ((video_width - window_width) / 2) * (-1);
        $("#video1").css("left", left_pos + "px");
    } else {
        $("#video1").css("left", 0);
    }
}