//分装一个getElementById()的方法
function byId(id){
    return typeof(id)=== 'string'?document.getElementById(id):id;
}

console.log(byId('main'));

//全局变量
var index = 0, timer = null;
var pics = byId("banner").getElementsByTagName("div");
var dots = byId("dots").getElementsByTagName('span');
var len = pics.length;
var prev = byId('prev'), next = byId('next');

function slideImg(){
    var main = byId("main");
    //滑过清除定时器, 离开定时器继续
    main.onmouseover = function(){
        if(timer) clearInterval(timer);
    };
    main.onmouseout = function(){
        timer = setInterval(function(){ //setInterval 执行完后会返回一个非零的整数
            // 这个数字是用来确定这个这个间隔的.
            index++;
            if(index>=len){
                index = 0;
            }
            changeImg();
        },1500);
    }
    //自动触发这个事件.
    main.onmouseout();

    //便利所有点击, 且绑定点击事件, 点击圆点切换图片
    for(var d=0; d<len; d++){
        dots[d].id = d;
        dots[d].onclick = function(){
            //改变index为当前span的id.
            index = parseInt(this.id);
            changeImg();
        }
    }

    next.onclick = function(){
        index = index+1 < len? index+1: 0
        console.log(index);
        changeImg()
    };

    prev.onclick = function(){
        index = index - 1>=0? index-1: len-1;
        console.log(index);
        changeImg();
    }
}

function changeImg(){
    //先把所有的图片隐藏, 然后再把index对应的这张显示
    for(var i=0; i< len; i++){
        pics[i].style.display = 'none';
        dots[i].className = '';
    }
    pics[index].style.display = 'block';
    dots[index].className = "active";
}

slideImg();