function reward(id,page) {
  var views = getCookie('views')||0;
  views++;
  var img = $('.main-image img');
  if (page < 11 || views<11 || getCookie(id) =='unlock') {
    img.removeClass("blur");
    setCookie('views', views, 1);
  }else{
    $('head').append('<style>.blur{filter: url(/static/pc/blur.svg#blur);-webkit-filter: blur(5px);-moz-filter: blur(5px);-ms-filter: blur(5px);filter: blur(5px);filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=5, MakeShadow=false);}</style>');
    //提示
    setTimeout(function() {
      var msg = "解锁全套高清原图\n\n只需完整看完一段10秒左右的视频";
      if (confirm(msg)==true){
        var RewardedVideoAd = REWARD_VIDEO_AD.createRewardedVideoAd({
          adUnitId: 'PjUl3e'
        });
        RewardedVideoAd.onLoad(function() {
          SetCSS(0);
          RewardedVideoAd.show2();
        });
        RewardedVideoAd.onClose(function(res) {
          SetCSS(3);
          if (res && res.isEnded) {
            img.removeClass("blur");
            setCookie(id, 'unlock', 1);
          }
        });
        RewardedVideoAd.onError(function(err) {
          SetCSS(3);
          img.removeClass("blur");
          setCookie(id, 'unlock', 1);
        });
      }
    }, 800);
  }
}

function SetCSS(i){
  var els = ['.header','.totop'];
  els.forEach(function(el){
    $(el).css('z-index',i);
  });
}

function setCookie(name, value, expiretime) {
  var exdate = new Date();
  exdate.setTime(exdate.getTime() + expiretime * 60 * 60 * 1000);
  var cookie = name + "=" + escape(value) + ";path=/" + ((expiretime == null) ? "": ";expires=" + exdate.toGMTString());
  document.cookie = cookie;
}

function getCookie(Name) {
  var strCookie = document.cookie;
  var arrCookie = strCookie.split("; ");
  for(var i = 0; i < arrCookie.length; i++){
    var arr = arrCookie[i].split("=");
    if(Name == arr[0]){
      return arr[1];
    }
  }
  return false;
}
