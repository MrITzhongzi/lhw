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
function sliderEnd(activeIndex) {
   
    var twoPageEle = document.querySelector('.twoPage')
    var threePageEle = document.querySelector('.threePage')
    
    // 第二页  每个模块的 头部 圆样式 闪烁一下
    var skillBlo = document.querySelectorAll('.twoPage > div');
    var skill3Blo = document.querySelectorAll('.threePage > div');

    skillBlo.forEach(function(el){
        el.classList.remove('active')
        el.style.overflow = "hidden"
    })
    if(activeIndex % 3 == 2){
        setTimeout(function () {
            skillBlo[0].classList.add('active')
            skillBlo[1].classList.add('active')

            skillBlo[0].style.overflow = "visible"
            skillBlo[1].style.overflow = "visible"

            skillBlo[0].style.paddingTop = "10px"
            skillBlo[1].style.paddingTop = "10px"
        }, 200)
        setTimeout(function () {
            skillBlo[2].classList.add('active')
            skillBlo[3].classList.add('active')

            skillBlo[2].style.overflow = "visible"
            skillBlo[3].style.overflow = "visible"

            skillBlo[2].style.paddingTop = "10px"
            skillBlo[3].style.paddingTop = "10px"
            
        }, 600)
        setTimeout(function () {
            skillBlo[4].classList.add('active')
            skillBlo[5].classList.add('active')
            
            skillBlo[4].style.overflow = "visible"
            skillBlo[5].style.overflow = "visible"

            skillBlo[4].style.paddingTop = "10px"
            skillBlo[5].style.paddingTop = "10px"
        }, 800)
    }

    // 第三个页面逻辑和第二个页面一样
    
    skill3Blo.forEach(function(el){
        el.classList.remove('active')
        el.style.overflow = "hidden"
    })

    if(activeIndex % 3 == 0){
        
        setTimeout(function () {
            skill3Blo[7].classList.add('active')
            skill3Blo[8].classList.add('active')

            skill3Blo[7].style.overflow = "visible"
            skill3Blo[8].style.overflow = "visible"

            skill3Blo[7].style.paddingTop = "10px"
            skill3Blo[8].style.paddingTop = "10px"

            
        }, 200)
        setTimeout(function () {
            skill3Blo[9].classList.add('active')
            skill3Blo[10].classList.add('active')

            skill3Blo[9].style.overflow = "visible"
            skill3Blo[10].style.overflow = "visible"

            skill3Blo[9].style.paddingTop = "10px"
            skill3Blo[10].style.paddingTop = "10px"
            
        }, 600)
        setTimeout(function () {
            skill3Blo[11].classList.add('active')
            skill3Blo[12].classList.add('active')
            
            skill3Blo[11].style.overflow = "visible"
            skill3Blo[12].style.overflow = "visible"

            skill3Blo[11].style.paddingTop = "10px"
            skill3Blo[12].style.paddingTop = "10px"
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