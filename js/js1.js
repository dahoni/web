$(document).ready(function(){
    $('.m_img2').hide();
    $('.ra').click(function(){
        $('.m_img1').show();
        $('.m_img2').hide();
        
        // 첫번째 보여줄 이미지를 변수에 저장
        var showImg1 = $('.m_img1 img:eq(0)');
        // 두번째 보여줄 이미지를 변수에 저장
        var nextImg1 = $('.m_img1 img:eq(1)');
        nextImg1.addClass('selected'); // 두번째 이미지에 클래스 추가하여 z-index 변경
        nextImg1.css('opacity','0').animate({opacity : 1}, 500, function(){ // 두번째 이미지의 opacity를 0~1로 애니메이션 설정하고 첫번째 이미지를 맨뒤로 보낸 후 클래스 삭제
            showImg1.appendTo('.m_img1').removeClass('selected');
            
        })
    });
    
   $('.la').click(function(){
        $('.m_img1').hide();
        $('.m_img2').show();
       
        // 첫번째 보여줄 이미지를 변수에 저장
        var showImg1 = $('.m_img2 img:eq(3)');
        // 두번째 보여줄 이미지를 변수에 저장
        var nextImg1 = $('.m_img2 img:eq(2)');
        nextImg1.addClass('selected'); // 두번째 이미지에 클래스 추가하여 z-index 변경
        nextImg1.css('opacity','0').animate({opacity : 1}, 500, function(){ // 두번째 이미지의 opacity를 0~1로 애니메이션 설정하고 첫번째 이미지를 맨뒤로 보낸 후 클래스 삭제
            showImg1.prependTo('.m_img2');
            $('.m_img2 img').removeClass('selected');
        })
    });
    
    $('.submenu').css('display','none');
    $('.top_gnb > li').mouseover(function(){
          $('.submenu').removeClass('selected'); 
          $(this).children('ul').addClass('selected').stop().slideDown(500);
    });
     $('.top_gnb > li').mouseout(function(){
          $('.submenu').removeClass('selected'); 
          $(this).children('ul').addClass('selected').stop().slideUp(500);
        });
    
//    $('.l_menu > li').mouseover(function(){
//       $(this).children('ul').slideToggle(1500)
//         $(this).css('margin-bottom','230px');
//        $(this).mouseleave('margin-bottom','0');
//    });
    
//    $(".s_menu").hide();
//    $(".l_menu > li").click(function() {
//        $('.s_menu', this).slideToggle(500);	
//    });
    
    
	$(".s_menu").css({display:"none"});
	$(".l_menu").mouseover(function(){
		$(this).children('ul').stop().slideDown(1000);	     
      }).mouseout(function(){
        $(this).children('ul').stop().slideUp(1000);
    }); 
    
    $('.event li').mouseover(function(){
        $(this).children('.event li span').stop().animate({'margin-bottom':'65px'},'normal');
    }).mouseout(function(){        
        $(this).children('.event li span').stop().animate({'margin-bottom':'0px'},'normal');    
    });
    
    $('.cover,.banner_logo,.banner_1 ,.banner_2, .banner_3').hide();
    $('.cover').fadeIn(2000);
    $('.banner_logo').fadeIn(4000);
    $('.banner_1').fadeIn(5000);
    $('.banner_2').fadeIn(5000);
    $('.banner_3').fadeIn(5000);
    
   
    
});