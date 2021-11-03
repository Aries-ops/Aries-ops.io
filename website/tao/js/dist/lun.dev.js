"use strict";

// 轮播图
(function () {
  var list = document.querySelector(".wrap"),
      ul = document.querySelector(".con-slide-lun ul"),
      left = document.querySelector(".con-slide_bottom .left"),
      right = document.querySelector(".con-slide_bottom .right"),
      pan = document.querySelectorAll(" .con-slide_dian span");
  box = list.offsetWidth;
  var index = 0; //img当前索引值

  var nu = 0; //span当前索引值

  ul.innerHTML += ul.innerHTML; //计算ul的总长数

  var len = ul.children.length;
  ul.style.width = len * box + 'px';
  ul.style.transform = 'translateX(0px)';
  var can = true; //满足这个条件的时候

  var then = null; //控制自动滚动
  // 向右移动

  right.onclick = function () {
    if (!can) {
      return; //条件成立说明图片在走
    }

    index++;
    show();
  }; // 向左移动


  left.onclick = function () {
    if (!can) {
      return;
    }

    if (index == 0) {
      index = len / 2;
      ul.style.transition = null;
      ul.style.transform = 'translateX(' + -index * box + 'px)';
    }

    setTimeout(function () {
      //暂停自动滚动
      index--;
      show();
    }, 13);
  }; // 圆点点击


  for (var i = 0; i < pan.length; i++) {
    pan[i].index = i;

    pan[i].onclick = function () {
      if (!can) {
        return;
      }

      index = this.index;
      show();
    };
  }

  function show() {
    can = false; //不满足这个条件的时候调用

    ul.style.transition = '.3s'; //过渡时间

    ul.style.transform = 'translateX(' + -index * box + 'px)';
    var hn = index % (len / 2); //圆点对应的索引值

    pan[nu].className = '';
    pan[hn].className = 'active';
    nu = hn;
  }

  ul.addEventListener('transitionend', function () {
    if (index == len / 2) {
      index = 0;
      ul.style.transition = null;
      ul.style.transfrom = 'translate(0)';
    }

    can = true;
  });
  then = setInterval(right.onclick, 3000);
})(); // 选项卡


(function () {
  var pc = document.querySelectorAll('.pc-none'),
      pan = document.querySelectorAll('.pc-lun span');
  console.log(pc, pan);

  for (var i = 0; i < pan.length; i++) {
    pan[i].index = i;

    pan[i].onclick = function () {
      for (var h = 0; h < pc.length; h++) {
        pan[h].className = '';
      }

      this.className = 'cur';
    };
  }
})();