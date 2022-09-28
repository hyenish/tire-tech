$('.navbar_gnb, .sub_shadow').on('mouseenter mouseleave', function(aa){
  if( $(window).width() > 1169){   //PC상태라면(px붙이면 안됨)
    if( aa.type == 'mouseenter'){  //마우스를 올려놨을 때
      $('.sub').stop().slideDown();
      $('.sub_shadow').stop().fadeIn();
    } 
    else {
      $('.sub').stop().slideUp(200, function(){
        $('.sub').removeAttr('style')
      });
      $('.sub_shadow').stop().fadeOut(200, function(){
        $(this).removeAttr('style')
      });
    }
  }
});
/*
  -mouseenter / mouseleave: 자식요소가 있다면 자식요소는 영역에서 '제외'
  -mouseover / mouseout: 자식 요소가 있다면 자식요소는 영역에 '포함'(자식요소를 더 확실하게 인식)

  .stop(): 이벤트가 도중에 끝나면 멈춰라
*/


//모바일 - 메인메뉴 클릭하면 서브메뉴가 슬라이드됨
const $mainBtn = $('.navbar_gnb > li > a');     //메인메뉴

$mainBtn.click(function(){
  if( $(window).width() < 1170){      //모바일 상태였을때만    
    if( !$(this).parents('li').hasClass('on') ) {   //클릭한 a의 부모 li에 on클라스가 없을때
      $('.sub').slideUp(200);  
      $('.navbar_gnb > li').removeClass('on');
      $(this).siblings('.sub').slideDown(500);
      $(this).parents('li').addClass('on');
    }
    else {    //클릭한 부분이 이미 열려있는 상태(on클라스가 있는 상태)
      $('.sub').slideUp(200); 
      $(this).parents('li').removeClass('on'); 
    }
  }
});


//모바일 상태에서 햄버거버튼을 누르면 사이드바가 토글됨
$('.trigger').click(function(){
  $(this).toggleClass('open');

  if( $(this).hasClass('open')){
    $('.gnb').animate({right: 0}, 400);
    $('header').animate({left: -250}, 400);
  }
  else {
    $('.gnb').animate({right: -250}, 200);
    $('header').animate({left: 0}, 200);
  }
})


//모바일 상태에서 서브메뉴 열고 데스크탑 상태로 바꾸면 서브가 그냥 보이는 상태, .sub에 style이 그대로 남아있는 상태를 수정
$(window).resize(function(){
  if( $(window).width() > 1169){
    $('.sub').removeAttr('style');
    $('.navbar_gnb > li').removeClass('on');
  }
});