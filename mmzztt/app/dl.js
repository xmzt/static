﻿$(function){
    var footer = $(".g-footer");
    if (getSysType()=='android' && footer[0]) {
        footer.after('<div id="m-fixed" class="uk-position-fixed"><div class="uk-flex uk-flex-between m-banner"><div class="uk-flex"><img src="https://cdn.jsdelivr.net/gh/xmzt/static/mmzztt/app/app.png"><div class="uk-flex uk-flex-column uk-flex-center"><span class="u-banner-title">美之图APP</span><span class="u-banner-desc">永久免费、每日更新、高清专享!</span></div></div><div class="uk-flex uk-flex-middle"><button class="uk-button uk-button-small u-banner-button">下载</button></div></div></div>');
        footer.css('margin-bottom','56px');
        $('#m-fixed').click(function(){
            download_app();
        });
    }
}

function getSysType() {
    var us = navigator.userAgent.toLowerCase();
    if ((us.indexOf('android') > -1 || us.indexOf('adr') > -1 || us.indexOf('linux') > -1 ) || navigator.platform.toLowerCase().indexOf('linux') != -1) {
        return 'android';
    } else if (us.indexOf('iphone') > -1 || us.indexOf('ipad') > -1) {
        return 'ios';
    }
}

function download_app() {
    var download_file = {},
        url = 'https://cdn.jsdelivr.net/gh/xmzt/apk/mmzztt.apk';
    if (typeof(download_file.iframe) == "undefined") {
        var iframe = document.createElement("iframe");
        download_file.iframe = iframe;
        document.body.appendChild(download_file.iframe)
    }
    download_file.iframe.style.display = "none";
    download_file.iframe.src = url
};