//底部弹窗
window.onload=function(){
    msg.style.bottom="0px";
}
msg.children[1].onclick=function(){
    msg.style.bottom="-150px";
    setTimeout(function(){
        msg.style.bottom="0px";
    },30000)
}

//侧边栏
$(function() {
    $(".Focus").mousemove(function () {
        $(".nav-content").show();
    }).mouseout(function () {
        $(".nav-content").hide();
    })
    $(".phone").mousemove(function () {
        $(".nav-content1").show();
    }).mouseout(function () {
        $(".nav-content1").hide();
    })

});