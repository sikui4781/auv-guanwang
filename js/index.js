// 适配px转换rem单位
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
  recalc();
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  document.querySelector('body').style.visibility = "visible";
})(document, window);
// 点击菜单键
$(".nav").click(function () {
  $(".navList").animate({ right: 0 }, 500)
})
// 点击关闭菜单键
$(".close").click(function () {
  $(".navList").animate({ right: "-100%" }, 500)
})
// 箭头跳动
setInterval(() => {
  $('.jiantou').animate({ bottom: '.7rem' }, 400);
  setTimeout(() => {
    $('.jiantou').animate({ bottom: '.5rem' }, 400);
  }, 400)
}, 20)
// 爱优卫文案进行视图方式
setTimeout(() => {
  $(".banner-text").animate({ "margin-left": 0 }, 500)
  setTimeout(() => {
    $(".banner-phone").animate({ "margin-top": "1rem" }, 500),
      setTimeout(() => {
        $(".download").animate({ top: "5.4rem" }, 300)
      }, 500)
  }, 650)
}, 800)
// 点击箭头事件
$(".jiantou").click(function () {
  $("html,body").animate({ scrollTop: $(".banner").height() }, 500)
});
// 市场规模数字跳动
(function ($) {
  $.fn.numberRock = function (options) {
    var defaults = {
      speed: 24,
      count: 100
    };
    var opts = $.extend({}, defaults, options);
    var div_by = 100,
      count = opts["count"],
      speed = Math.floor(count / div_by),
      sum = 0,
      $display = this,
      run_count = 1,
      int_speed = opts["speed"];
    var int = setInterval(function () {
      if (run_count <= div_by && speed != 0) {
        $display.text(sum = speed * run_count);
        run_count++;
      } else if (sum < count) {
        $display.text(++sum);
      } else {
        clearInterval(int);
      }
    }, int_speed);
  }
})(jQuery)
function scrollNumber() {
  $(".auv-number-1").numberRock({
    speed: 10,
    count: 18890
  })
  $(".auv-number-2").numberRock({
    speed: 6,
    count: 26795
  })
  $(".auv-number-3").numberRock({
    speed: 4,
    count: 300
  })
  $(".auv-number-4").numberRock({
    speed: 5,
    count: 500
  })
}
scrollNumber()
// 合作伙伴轮播指示按钮点击进行翻页
$(".pagingDevice span").click(function () {
  console.log($(this).index(), 'index')
  $(this).addClass('pagingDevice-active').siblings().removeClass('pagingDevice-active')
  if ($(this).index() == 0) {
    $(".cooperation-logos1").animate({ "margin-left": 0 }, 500)
  } else {
    $(".cooperation-logos1").animate({ "margin-left": "-6rem" }, 500)
  }
})
//菜单导航列表点击事件
$(".navList ul li").click(function () {
  $(".navList").animate({ right: '-100%' }, 500)
  switch ($(this).index()) {
    case 0: $("html,body").animate({ scrollTop: 0 }, 500); break;
    case 1:
      $("html,body").animate({ scrollTop: $('.banner').height() + 1 }, 500)
      scrollNumber(); break;
    case 2: $("html,body").animate({ scrollTop: $('.banner').height() + $('.market').height() + 1 }, 500); break;
    case 3: $("html,body").animate({ scrollTop: $('.banner').height() + $('.market').height() + $('.serve').height() + 1 }, 500); break;
    case 4: $("html,body").animate({ scrollTop: $('.banner').height() + $('.market').height() + $('.serve').height() + $('.about').height() + 1 }, 500); break;
    case 5: $("html,body").animate({ scrollTop: $('.banner').height() + $('.market').height() + $('.serve').height() + $('.about').height() + $('.cooperation').height() + 1 }, 500); break;
  }
})
// 滚动条滚动事件
$(window).scroll(function () {
  var scrTop = $(window).scrollTop();
  console.log(scrTop, '滚动条')
  console.log($('.banner').height(), "banner的高度")
  if (scrTop >= 100) {
    $(".headerNav").css("background", "#4076E7")
  } else {
    $(".headerNav").css("background", "none")
  }
  if (scrTop <= $('.banner').height()) {
    $(".navList ul li").eq(0).addClass('navListActive').siblings().removeClass('navListActive')
  } else if (scrTop >= $('.banner').height() + 1 && scrTop <= $('.banner').height() + $('.market').height()) {
    $(".navList ul li").eq(1).addClass('navListActive').siblings().removeClass('navListActive')
  } else if (scrTop >= $('.banner').height() + $('.market').height() + 1 && scrTop <= $('.banner').height() + $('.market').height() + $('.serve').height()) {
    $(".navList ul li").eq(2).addClass('navListActive').siblings().removeClass('navListActive')
  } else if (scrTop >= $('.banner').height() + $('.market').height() + $('.serve').height() + 1 && scrTop <= $('.banner').height() + $('.market').height() + $('.serve').height() + $('.about').height()) {
    $(".navList ul li").eq(3).addClass('navListActive').siblings().removeClass('navListActive')
  } else if (scrTop >= $('.banner').height() + $('.market').height() + $('.serve').height() + $('.about').height() + 1 && scrTop <= $('.banner').height() + $('.market').height() + $('.serve').height() + $('.about').height() + $('.cooperation').height()) {
    $(".navList ul li").eq(4).addClass('navListActive').siblings().removeClass('navListActive')
  } else if (scrTop >= $('.banner').height() + $('.market').height() + $('.serve').height() + $('.about').height() + $('.cooperation').height() + 1) {
    $(".navList ul li").eq(5).addClass('navListActive').siblings().removeClass('navListActive')
  }
})

