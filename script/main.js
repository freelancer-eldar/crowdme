$(document).ready((function(){function e(){let e=$(".header-top").innerHeight();return $(".page").css({"margin-top":e+"px","min-height":window.innerHeight-e+"px"}),!1}AOS.init(),AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"init",animatedClassName:"animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:150,delay:0,duration:600,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"}),e(),window.addEventListener("resize",(function(){e(),window.innerWidth>800&&($(".buractive").removeClass("buractive"),$("body").removeClass("lock"))}));var t=0;$(window).scroll((function(e){let n=window.pageYOffset;n>0?$(".header-top").css("box-shadow","0px 12px 25px -8px rgba(0,0,0,0.2)"):$(".header-top").css("box-shadow","none"),n<window.innerHeight&&(t=Math.round(n/5),$(".page__bg").css("top",t+"px"))})),$(".widget__item").on("click",(function(){let e=$(this).index();$(".widget__number_active").removeClass("widget__number_active"),$(".widget__number").eq(e).addClass("widget__number_active"),$(".widget__line").css("left",33.333*e+"%")})),$(".header-top__burger").on("click",(function(){$(".header-top__burger,.header-top__nav").toggleClass("buractive"),$("body").toggleClass("lock")}))}));