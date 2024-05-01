$(document).ready(function(){//시작


    //모바일 메뉴 열었다 닫았다
    $(".ham").click(function(){
        $(".dim").fadeIn();
        $(".mgnb_wrap").animate({
            right:"0"
        });
    });

    $(".mgnb_close").click(function(){
        $(".dim").fadeOut();
        $(".mgnb_wrap").animate({
            right:"-100%"
        });
    });//모바일 메뉴 열었다 닫았다 끝


    //depth2 메뉴 작동
    $(".mdepth2").hide();
    $(".mgnb > li").click(function(){

        if($(this).children(".mdepth2").css("display") == "block"){
            $(this).children(".mdepth2").stop().slideUp();
        }else{
            $(".mdepth2").stop().slideUp();
            $(this).children(".mdepth2").stop().slideDown();
        }
        /*
        $(".mdepth2").stop().slideUp();
        $(this).children(".mdepth2").stop().slideDown();
        */
    });
    

    //pc depth2 서브 메뉴 작동
    $(".gnb > li").mouseenter(function(){
        $(this).children(".depth2").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function(){
        $(this).children(".depth2").stop().fadeOut();
    });//pc 서브메뉴 동작 끝

    //fullpage 작동
    $('#fullpage').fullpage({
		//options here
        menu:".gnb",
        navigation:true,
        anchors:['menu1', 'menu2', 'menu3', 'menu4', 'menu5'],
        navigationTooltips: ['메인', '브랜드', '메뉴', '홍보영상', '포토 갤러리'],
        navigationPosition: 'right',
        showActiveTooltip: true,
        //responsiveWidth: 1024,
		autoScrolling:true,
        onLeave: function(index, nextIndex, direction){
            if(nextIndex == 6){
                $("#fp-nav").fadeOut(300);
            }else{
                $("#fp-nav").fadeIn(300);
            }
        },
	
	});//fullpage작동 끝

    $(window).on("hashchange", function(){
        var hashname = location.hash;
    
        if(hashname == "#menu1"){
            $("header").show();
        }else if(hashname == "#menu2"){
            $("header").hide();
        }else if(hashname == "#menu3"){
            $("header").hide();
        }else if(hashname == "#menu4"){
            $("header").hide();
        }else if(hashname == "#menu5"){
            $("header").hide();
        }else if(hashname == "#menu6"){
            $("header").hide();
        }else{
            $("header").show();
        }
      });



    //gallery 슬라이드
    var photogallery = new Swiper(".photo_gallery", {
        centeredSlides:true,
        slidesPerView:1,
        speed:1000,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          breakpoints:{
            768:{
                slidesPerView:2,
                spaceBetween:10,
            },
            1200:{
                slidesPerView:3,
                spaceBetween:20,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },
      });//gallery 슬라이드 끝

      //sub2 추천메뉴 슬라이드
      var photogallery = new Swiper(".menu_slide", {
        centeredSlides:true,
        slidesPerView:1,
        speed:1000,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          breakpoints:{
            768:{
                slidesPerView:2,
                spaceBetween:10,
            },
            1200:{
                slidesPerView:3,
                spaceBetween:20,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },
      });//sub2 추천메뉴 슬라이드 끝


      //sub2 전체메뉴 마우스 오버 액션
      $(".whole_menu_box li").mouseenter(function(){
        $(".whole_menu_box li .cover").fadeIn();
      });
     

      




});//끝