$(function() {
  //lazyload初始化
  $("img.lazy").lazyload({
    threshold: 50,
    effect: "fadeIn"
  })
  //猜你喜欢
  $('#guess').click(function() {
    showlike(0);
    $('#guess').addClass('on');
    $('#love').removeClass('on');
  });
  //网友最爱
  $('#love').click(function() {
    showlike(1);
    $('#guess').removeClass('on');
    $('#love').addClass('on');
  });
  //滚动条事件
  var rtopH = $('#widgets_fix').offset().top;
  $(window).scroll(function() {
    var nowH = $(this).scrollTop();
    if (nowH >= (rtopH - 70)) {
      $('#widgets_fix').css({
        'position': 'fixed',
        top: 70 + 'px'
      });
    } else if (nowH < rtopH) {
      $('#widgets_fix').css('position', 'static');
    }
  });
});

function showlike(sid) {
  var hotarr = [[0, 10], [10, 20]];
  var mylike = $('#like dd');
  for (var i = 0; i < 20; i++) {
    mylike[i].className = 'no';
  }
  for (var i = hotarr[sid][0]; i < hotarr[sid][1]; i++) {
    mylike[i].className = '';
  }
}

//返回顶部
function UiMarker() {
  this.init();
}

UiMarker.prototype = {
  constructor: UiMarker,
  init: function() {
    this._initBackTop();
  },
  _initBackTop: function() {
    var $backTop = this.$backTop = $('<div class="totop">' + '<a class="cweixin cbbtn"">' + '<span class="weixin-icon"></span><div></div>' + '</a>' + '<a class="gotop cbbtn">' + '<span class="up-icon"></span>' + '</a>' + '</div>');
    $('body').append($backTop);

    $backTop.click(function() {
      $("html, body").animate({
        scrollTop: 0
      },
      500);
    });

    var timmer = null;
    $(window).bind("scroll",
    function() {
      var d = $(document).scrollTop(),
      e = $(window).height();
      0 < d ? $backTop.css("bottom", "100px") : $backTop.css("bottom", "-300px");
      clearTimeout(timmer);
      timmer = setTimeout(function() {
        clearTimeout(timmer)
      },
      100);
    });
  }
}
var uiMarker = new UiMarker();

//VIEWS
function views(id) {
  $.ajax({
    type: "GET",
    url: "\/view.php",
    data: {
      views_id: id,
      action: "v"
    }
  });
}

//mzt_square
!(function() {
  if ($("#like")[0]) {
    $("#like").before('<div style="padding:10px;margin-bottom:10px;font-size:0"><a target="_blank" style="display: block;" href="https://mmzztt.com/"><img alt="美之图" src="https://wxt.sinaimg.cn/large/9d52c073gy1gnzx04pavfj20k00dcgo8.jpg" width="240" height="160"></a></div>')
    }
})();

if (top != self) {
    top.location = self.location;
}
