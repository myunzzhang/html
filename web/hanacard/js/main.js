//event_box2 slide
$('.eb_slider_list').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  pauseOnHover: false,
  /* 마우스를 올릴 때 오토플레이 조절 */
});

//event_box3 slide
$('.card').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  pauseOnHover: false,
});

//재생.정지 버튼
//box2
$('.page_act .btn_stop').click(function (e) {
  e.preventDefault();
  if ($('.event_box2 .page_act').hasClass("on")) {
    $('.event_box2 .page_act').removeClass("on");
    $('.eb_slider_list').slick('slickPause');
  }
})

$('.page_act .btn_play').click(function (e) {
  e.preventDefault();
  $('.event_box2 .page_act').addClass("on")
  $('.eb_slider_list').slick('slickPlay');
})

//box3
$('.pagn_act .btn_stop').click(function (e) {
  e.preventDefault();
  if ($('.event_box3 .pagn_act').hasClass("on")) {
    $('.event_box3 .pagn_act').removeClass("on");
    $('.card').slick('slickPause');
  }
})

$('.pagn_act .btn_play').click(function (e) {
  e.preventDefault();
  $('.event_box3 .pagn_act').addClass("on")
  $('.card').slick('slickPlay');
})

//life button
let tab = $('.life_menu ul li');
let menu = $('.life_style li');

tab.mouseover(function () {
  //태생적으로 태어날때 가지고 나온 번호를 추출하는 방법 --> index()
  let target = $(this);
  let index = target.index();
  console.log(index)
  menu.css({
    opacity: 0
  })
  menu.eq(index).css({
    opacity: 1
  })
})