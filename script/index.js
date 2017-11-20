/**
 * Created by Administrator on 2017/3/13.
 */
window.onload = function () {
    var jiantouTimer = null;
    var jiantouEle = document.querySelectorAll('.swiper-slide')


    // 设置底部下箭头的闪烁 
    jiantouTimer = setInterval(function () {
        jiantouEle.forEach(function (e) {
            if (e.classList.contains('jiantou-animate')) {
                e.classList.remove('jiantou-animate')
            } else {
                e.classList.add('jiantou-animate')
            }

        })
    }, 600)

}

// 滑动 之后回调
function sliderEnd() {

    var twoPageEle = document.querySelector('.twoPage')
    var pageWidth = parseInt(getCurrentStyle(twoPageEle).width)
    
    // 第二页  每个模块的 头部 圆样式 闪烁一下
    var skillBlo = document.querySelectorAll('.twoPage > div');
    skillBlo.forEach(function(el){
        el.classList.remove('active')
        el.style.overflow = "hidden"
    })
    if(twoPageEle.classList.contains('swiper-slide-active')){
        setTimeout(function () {
            skillBlo[0].classList.add('active')
            skillBlo[1].classList.add('active')

            skillBlo[0].style.overflow = "visible"
            skillBlo[1].style.overflow = "visible"
        }, 200)
        setTimeout(function () {
            skillBlo[2].classList.add('active')
            skillBlo[3].classList.add('active')

            skillBlo[2].style.overflow = "visible"
            skillBlo[3].style.overflow = "visible"
            
        }, 600)
        setTimeout(function () {
            skillBlo[4].classList.add('active')
            skillBlo[5].classList.add('active')
            
            skillBlo[4].style.overflow = "visible"
            skillBlo[5].style.overflow = "visible"
        }, 800)
    }
}


function getCurrentStyle(node){
    var style = null;
    
    if(window.getComputedStyle) {
        style = window.getComputedStyle(node, null);
    }else{
        style = node.currentStyle;
    }
    
    return style;
}