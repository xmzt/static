function load(w, h, id, showid, num, width, height) {
    NEWS_FEED({
        w: w,
        h: h,
        placeholderId: id,
        showid: showid,
        sign: "llq",
        inject: "define",
        noCSS: false,
        useCapture: true,
        pureAdNum: num,
        displayType: "singleImage",
        define: {
            imagePosition: "top",
            imageWidth: width,
            imageHeight: height,
            imageFill: "clip"
        }
    })
}

function imgplus() {
    NEWS_FEED({
      w: 600,
      placeholderId: 'feed',
      showid: 'hqOJpF',
      inject: 'textual',
      useCapture: true,
      usePolling: true,
      displayType: 'singleImage',
      noCSS: true,
      pureAdNum: 1,
      onFail: function (e) {
          return;
      }
  });
}

!(function() {
    var style = "<style>#siderbox{height:222px}.box .singleImage .feed__link{padding:0!important}.box .singleImage{background:#eee!important}#siderbox .singleImage{background:#fff!important}.box .singleImage__title{padding:10px 10px 0 10px!important;font-size:12px!important;font-family:Arial!important;font-weight:normal!important}.box .singleImage__desc,.box .img .adTag{display:none!important}#feed {margin: 10px}#feed .textual__title,#feed .adTag{display: inline-block;}#feed .textual__title{font-size: 14px;font-weight: bold;}#feed .textual__body a:hover{color: #ff0000}#feed .adTag{float: left;margin-right: 10px;padding: 1px 4px;border: 1px solid #999;border-radius: 3px;font-size: 11px;color: #999;opacity:0.3}<style>";
    $("head").prepend(style);
    //ncov2019 start
    if ($("#like")[0]) {
        $("#like").before('<div style="padding:10px;margin-bottom:10px;font-size:0"><a target="_blank" style="display: block;" href="https://www.360kuai.com/mob/subject/400?sign=360_6aa05217"><img alt="新型肺炎实时疫情追踪" src="https://wxt.sinaimg.cn/mw690/9d52c073gy1gbi5s496wcj206o06odi0.jpg" width="240" height="240"></a></div>')
    }
    //ncov2019 end
    if ($(".widgets_top")[0]) {
        $(".widgets_top a:eq(2)").before('<div class="box" id="siderbox" ></div>');
        load(250, 222, "siderbox", "FzMxUs", 1, 240, 160)
    }
    if ($("#pins")[0]) {
        var arr = [[1,3,5,13,18,23],[2,6,10,14,21,28],[4,6,8,16,21,26]];
        var pinsarr = arr[Math.floor((Math.random()*arr.length))];
        $.each(pinsarr,function(i, n) {
            var eq = "#pins li:eq(" + n + ")";
            var id = "container_" + i;
            if ($(eq)[0]) {
                $(eq).after('<li class="box" id="' + id + '"></li>');
                load(236, 416, id, "6k36rp", 6, 236, 354);
            }
        })
        return;
    }
    if ($(".hotlist")[0]) {
        var arr =[[1,3,5],[0,2,6],[0,3,6],[0,4,6]];
        var listarr = arr[Math.floor((Math.random()*arr.length))];
        $.each(listarr,function(i, n) {
            var eq = ".hotlist dd:eq(" + n + ")";
            var id = "container_" + i;
            $(eq).after('<dd class="box" id="' + id + '"></dd>');
            load(236, 220, id, "2W80qd", 3, 236, 158)
        })
        $(".main-image p").after('<div id="feed"></div>');
        $("#feed").css("margin-left",$(".main-image p img")[0].offsetLeft);
        imgplus();
    }
})();
