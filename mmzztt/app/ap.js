var sysType = getSysType();
var iosapp = 'https://apps.apple.com/cn/app/美姿图/id1571974673';

$(function(){
    var footer = $(".g-footer"),appLink = $('.uk-navbar-nav li a').eq(3);
    if (appLink) {
        appLink.css('color', '#f0506e');appLink.attr('target', '_blank');
    }
    if ((sysType=='android' || sysType=='ios') && footer[0]) {
        footer.after('<div id="m-fixed" class="uk-position-fixed"><div class="uk-flex uk-flex-between m-banner"><div class="uk-flex"><img src="https://cdn.jsdelivr.net/gh/xmzt/static/mmzztt/app/app.png"><div class="uk-flex uk-flex-column uk-flex-center"><span class="u-banner-title">美之图APP</span><span class="u-banner-desc">永久免费、每日更新、高清专享!</span></div></div><div class="uk-flex uk-flex-middle"><button class="uk-button uk-button-small u-banner-button">下载</button></div></div></div>');
        footer.css('margin-bottom','56px');
        $('#m-fixed').click(function(){
            downloadApp();
        });
    }
});


function getSysType() {
    var client='PC',us = navigator.userAgent.toLowerCase();
    if (/(iphone|ipad|ipod|ios)/i.test(us)) {
      client = 'ios';
    } else if (/(android|adr)/i.test(us)) {
      client = 'android';
    }
    return client;
}

function downloadApp() {
    if (sysType=='ios') {
        top.location.href = iosapp;
    }else{
        var download_file = {},
        url = 'https://cdn.jsdelivr.net/gh/xmzt/apk/mmzztt.apk';
        if (typeof(download_file.iframe) == "undefined") {
            var iframe = document.createElement("iframe");
            download_file.iframe = iframe;
            document.body.appendChild(download_file.iframe)
        }
        download_file.iframe.style.display = "none";
        download_file.iframe.src = url;
    }
};
