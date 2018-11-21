$(function(){

  var option = {
    section : ".js-section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1200,
    offset : 0,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
    // section : '.js-section', // 対象を指定
    // easing: "swing", // イージングをしてい(jQueryのanimation)
    // scrollSpeed: 800, // スクロール時の速度
    // scrollbars: false, // スクロールバーを表示するか
  };

  $(function() {
    $.scrollify(option); // scrollifyの実行
  });

});
