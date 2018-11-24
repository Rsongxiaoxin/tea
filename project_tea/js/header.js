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
// 自动获取输入框焦点
Vue.directive("focus",{
    inserted(elem){
        elem.focus();
    }
})
var vm=new Vue({
    el:"#app"
})


















