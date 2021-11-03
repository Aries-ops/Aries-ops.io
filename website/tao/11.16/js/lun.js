(function(){
    var banner = document.getElementsByClassName('solide-img')[0],
        img = document.getElementsByClassName('solide-img')[0].getElementsByTagName('a'),
        li = document.querySelectorAll('.namr li'),
        nul = 0,
        index = 0;
    function gan(bcn){
		//遍历一遍Img中的所有元素
        for(var i = 0;i < img.length;i++){
            img[i].className = '';
            li[i].className = '';
        }
        if(bcn == 'left'){
            nul--;
            if(nul <0 ){
                nul = img.length-1
            }
        }else if(bcn == 'right'){
            nul++;
            if(nul >=img.length){
                nul = 0;
            }
        }
            img[nul].className = "en";
            li[nul].className = "env";
    }
        //自动滚动
        var list = setInterval(function(){
            gan('right');
        },2000);
    for(var h = 0;h < li.length;h++){
        li[h].boss = h;
        li[h].onclick = function(){
            for(var t = 0;t < img.length;t++){
                img[t].className = ""
                li[t].className = ""
            }
            this.className = "env";
            img[this.boss].className = "en";
            nul = this.boss;
        }
    }
    //划入清除自动滚动
    banner.onmouseover = function(){
       clearInterval(list);
    }
    //划出恢复自动滚动
    banner.onmouseout = function(){
        list=setInterval(function(){
            gan('right');
        },2000);
    }
    left.onclick = function(){
        gan("left");
    }
    right.onclick = function(){
        gan("right");
    }
})()