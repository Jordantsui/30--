allButtons=$('#buttons>span')
for(let i=0;i<allButtons.length;i++){
  $(allButtons[i]).on('click',function(x){
    var index=$(x.currentTarget).index()
    //x.currentTarget 改成 allButtons[i] 也可以
    //index()输出该子项的index
    var n=index*-300
    $('#images').css({
      transform:'translate('+n+'px)'
    })
    //css这一句实际上控制的是style，而且css里面的是个对象，不可用css的语法
    //translate 写成 translateX 也可以
    //而且这一句写成 'margin-left':'-300px' 也可以，注意属性名中有特殊字符'-'，应加上引号
    activeB(allButtons.eq(index))
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