$(function(){
//   $('.nav-menu img').on('click',function f() {
//       $('.overlay').addClass('actived');
//       return false
//   })
//     $('.nav-close img').on('click',function () {
//         $('.overlay').removeClass('actived');
//
//     })

    // 轮播图
    var clientW = d$('.slide').innerWidth();
  // // 定义clintW为body宽度
 $('.slide-container').css('width', function(){
       return 4 * clientW;
  //       // 返回body宽度的四倍
  });
   window.onresize = function(){
  //       // onresize是当窗口或者框架调整大小时调用的方法
      clientW = d$('.slide').innerWidth();

     $('.slide-container img').css({
          width: clientW
     });
      // 让图片等于body宽度
      $('.slide-container').css('width', function(){
           return 4 * clientW;
       });
  //       // 让容图框变成body的四倍
  };


    var nowIndex = 1;
    // 定义nowIndex变量为1

    var speed = 1500;
// 定义速度为1500
    var play = function(){
        if(nowIndex == 4){
            nowIndex = 1;
            // 当移动到第5张图时让nowindex为1
            $('.slide-container').css({
                transition: 'none',
                transform: 'translateX(0px)'
            });
            // 给容图框一个css没有移动特效，拽到最开始的地方
            speed = 0;
            // 让这个动作等待的时间为0 瞬间执行
        }else{
            $('.slide-container').css({
                transition: 'transform .8s ease',
                // 移动特效
                transform: 'translateX(-'+ clientW * (nowIndex++) +'px)'
                // 让图片移动位置到下一张图上
            });
            speed = 1500;
            // 让这个动作挂起的时间为1500
        }
        clearTimeout(timer);
        // 清除定时器，避免多个定时器
        timer = setTimeout(play, speed);
        // 设置定时器
    };
    var timer = setTimeout(play, speed);




});