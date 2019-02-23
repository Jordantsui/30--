allButtons=$('#buttons>span')
for(let i=0;i<allButtons.length;i++){
  $(allButtons[i]).on('click',function(x){
    var index=$(x.currentTarget).index()
    //x.currentTarget 改成 allButtons[i] 也可以
    //index()输出该子项的index
    var p=index*-300
    $('#images').css({
      transform:'translate('+p+'px)'
    })
    //css这一句实际上控制的是style，而且css里面的是个对象，不可用css的语法
    //translate 写成 translateX 也可以
    //而且这一句写成 'margin-left':'-300px' 也可以，注意属性名中有特殊字符'-'，应加上引号
    n=index
    //注意，这个n是为了跟下面的n保持一致，否则点击按钮能使图片发生变化，但之后仍按原先图片轮播的顺序进行，只爽一下
    activeB(allButtons.eq(n))
    //eq()的作用是取出index为n的对象，并将其转化为jQuery对象
  })
}

var n=0
var timeID=setTime()
var size=allButtons.length

function setTime(){
  return setInterval(()=>{
    n+=1
    allButtons.eq(n%size).trigger('click')
    //trigger是指触发
  },3000)
}

function activeB($button){
  $button
    .addClass('active')
    .siblings('.active').removeClass('active')
    //'.red'表示选择器，'red'表示类
}

$('.window').on('mouseenter',function(){
    //class前面加'.'，ID加'#'
   window.clearInterval(timeID)
})

$('.window').on('mouseleave',function(){
   timeID=setTime()
   //由于n并未归零，因此鼠标一离开，就接着上面停滞的位置开始滚动
})