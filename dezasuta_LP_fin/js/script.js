$(function() {
  // headerのスライダー
  $('.slider1').slick({
      autoplaySpeed: 2000,
      autoplay: true,
      dots: true
  });

  // jQueryのレスポンシブ
  var windowWidth = window.innerWidth;

  if (windowWidth > 767) {
      // ギャラリーのスライダー
      $('.slider2').slick({
          autoplaySpeed: 2000,
          autoplay: true,
          infinite: true, // スライドのループを有効にするか
          slidesToShow: 5, // 表示するスライド数を設定
          slidesToScroll: 1 // スクロールするスライド数を設定
      });
  } else {
      // ギャラリーのスライダー
      $('.slider2').slick({
          autoplaySpeed: 2000,
          autoplay: true,
          infinite: true, // スライドのループを有効にするか
          slidesToShow: 1, // 表示するスライド数を設定
          slidesToScroll: 1 // スクロールするスライド数を設定
      });
  }
  //            スライダーが2枚になることへの対処
  $(window).on('load', function() {
      //                $('.slick-cloned a').removeAttr('data-lightbox');
      //                $('.slick-cloned').hide();
      //                $('.slick-cloned a').removeAttr('rel');
  });
  // スマホハンバーガーメニュー ナビゲーションクリックでも消える
  $('.sp_menu_btn,.sp_nav a').click(function() {
      $('.sp_nav').fadeToggle();
      $('.sp_menu_btn').toggleClass('open');
  });

  //トップに戻る
  //トップにボタン消す
  $('.toTop').hide();
  // トップにボタン出現
  $(window).on('scroll', function() {
      if ($(this).scrollTop() > 200 //offset.top
      ) {
          $('.toTop').fadeIn();
      } else {
          $('.toTop').fadeOut();
      }
  });
  // スクロール
  $('a[href^="#"]').click(function() {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      var speed = 500;
      $("html, body").animate({
          scrollTop: position
      }, speed, "swing");
      return false;
  });
});