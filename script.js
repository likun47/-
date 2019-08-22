//分装一个getElementById()的方法
function byId(id){
    return typeof(id)=== 'string'?document.getElementById(id):id;
}

console.log(byId('main'));

//全局变量
var index = 0, timer = null;
var pics = byId("banner").getElementsByTagName("div");
var len = pics.length;

function slideImg(){
    var main = byId("main");
    //滑过清除定时器, 离开定时器继续
    main.onmouseover = function(){

    }
    main.onmouseout = function(){
        timer = setInterval(function(){
            index++;
            if(index>2){
                index = 0;
            }
        },2000)
        console.log(index);
    }
}

slideImg();