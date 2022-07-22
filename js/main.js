$(function(){
    //윈도우의 가로길이를 win_width변수에 저장
    var win_width=$(window).width();

    //만약 win_width길이 1024이상이면
    if(win_width>1024){
        //pc버전

        //주메뉴에 마우스 오버했을 때 서브메뉴 나옴
        $("header nav > ul > li").hover(function(){
            //서브메뉴가 하나씩 나옴
            $(this).find(".sub").stop().slideDown();
        //주메뉴에서 마우스 아웃했을 때 서브메뉴 사라짐
        },function(){
            $(this).find(".sub").stop().slideUp();
        });
        //fullpage
        $('#fullpage').fullpage({
            //options here
            navigation: true,
	        navigationPosition: 'right',
	        navigationTooltips: ['MAIN', 'LIVING', 'CATEGORY', 'REVIEW', 
            'STORY', 'BEST ITEM', 'STORE', 'COUNSEL'],
            afterLoad:function(anchorLink, index){
                //만약 section의 인덱스 번호가 9라면
                if(index==9){
                    //fullpage 내비게이션 사라짐
                    $("#fp-nav").fadeOut();
                    //section의 인덱스 번호가 9가 아니라면
                }else{
                    //fullpage 내비게이션 나타남
                    $("#fp-nav").fadeIn();
                }
            }
        });

        if(win_width > 1600){
            
        }else if(win_width > 1200){

        }else{

        }

    } else{
        //태블릿, 모바일 버전
        // 모바일 버전 주메뉴를 클릭했을 때 서브메뉴 나옴
      $('.mobile_nav .mobile_nav_in nav > ul > li').click(function(){
        //만약 클릭한 주메뉴에 active가 없다면
        //$(this) : 클릭한 주메뉴
        //$(this).attr('class') : 클릭한 메뉴의 class속성
        if($(this).attr('class') != 'active'){
          $('.mobile_nav .mobile_nav_in nav > ul > li').removeClass('active');
          $(this).addClass('active');
          $('.mobile_nav .mobile_nav_in nav > ul > li .sub').stop().slideUp();
          $(this).find('.sub').stop().slideDown();
        //클릭한 메뉴에 active 속성이 있으면  
        }else{
          $(this).removeClass("active");
          $(this).find(".sub").stop().slideUp();
        }
      });
      //메뉴 버튼을 클릭하면 서로 메뉴 영역 나옴
      $(".menu_btn").click(function(){
        $(".mobile_nav").animate({
            right: 0
        }); 
      });
      //닫기 버튼을 클릭하면 세로 메뉴 영역 들어감
      $(".mobile_close").click(function(){
        $(".mobile_nav").animate({
            right: "-100%"
        }); 
      });

    }
    //swiper slide(pc, 태블릿, 모바일)
    var swiper = new Swiper(".mySwiper", {
        // autoplay: {
        //     play:4000
        // },
        loop: true,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable:true
        },
    });
    //banner section안의 도형 애니메이션
    //li에 마우스 오버 이벤트 설정
    $(".contents .hover_ani").on("mouseenter",function(){
        var $child=$(this).find(".li_bg");
        //애니메이션 실행 시간
        var duration=0.5;
        //애니메이션 하기 전 대기시간
        var delay=0.1;

        TweenMax.to($child, duration, {
            scaleY:1.1, ease:Expo.easeOut
        });
        TweenMax.to($child, duration, {
            scaleX:1.1, scaleY:1, ease:Back.easeOut,
            easeParams:[3], delay:delay
        });
        TweenMax.to($child, duration*1.25, {
            scaleX:1, scaleY:1, ease:Back.easeOut,
            easeParams:[6], delay:delay*3
        });
        
    });
    

    //splide를 사용한 line_tab
    var main = new Splide('#main-carousel', {
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : false,
      } );
    
      var thumbnails = new Splide('#thumbnail-carousel', {
        fixedWidth  : "auto",
        fixedHeight : 60,
        gap         : 10,
        rewind      : true,
        pagination  : false,
        isNavigation: true,
        focus       : "center"
      });
    
      main.sync(thumbnails);
      main.mount();
      thumbnails.mount();
    //.store 영역의 slide
    var swiper = new Swiper(".mySwiper3", {
        autoplay : {
            delay:4800
        },
        affect:"fade",
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        },
      });
    //top 버튼
    $(".top").click(function(){
        $.fn.fullpage.moveTo(1,1)
    });

    //화면이 스크롤 되면 header에 active 추가
    setInterval(header_color,1);
    function header_color(){
        if($('body').hasClass('fp-viewing-0')===true){
            $('header').removeClass('active');
        }else{
            $('header').addClass('active');
        }
    }
});