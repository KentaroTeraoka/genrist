$(function(){

  var option = {
    section : '.js-section', // 対象を指定
    easing: "swing", // イージングをしてい(jQueryのanimation)
    scrollSpeed: 800, // スクロール時の速度
    scrollbars: false, // スクロールバーを表示するか
  };

  $(function() {
    $.scrollify(option); // scrollifyの実行
  });

});
