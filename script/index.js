/**
 * Created by Administrator on 2017/3/13.
 */
window.onload = function(){
    var jiantouTimer = null;
    var jiantouEle = document.querySelectorAll('.swiper-slide')
    
   
    // 设置底部下箭头的闪烁
    jiantouTimer = setInterval(function(){
        jiantouEle.forEach(function(e){
            if(e.classList.contains('jiantou-animate')){
                e.classList.remove('jiantou-animate')
            }else {
                e.classList.add('jiantou-animate')
            }
            
        })
    },600)
}