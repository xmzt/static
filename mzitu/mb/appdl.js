!(function() {
    var ua = navigator.userAgent.toLowerCase(),
    isAndroid = /(android|adr)/i.test(ua),
    year = new Date().getFullYear();
    if (!isAndroid) {
        $("footer p").html('&copy;&nbsp;' + year + '&nbsp;<a href="https://m.mzitu.com/">妹子图</a>');
        $("#menu-ease-mobile li:eq('1')").remove();
        return;
    }
    var y = "<style>*{margin: 0;padding: 0;}.page-banner {position: fixed;bottom: 0;left: 0;z-index: 300;width: 100%;height: 59px;background: #fff;opacity: 1;border-top: 1px solid #e0e0e0;}.page-banner_1 {pointer-events: auto;height: 59px;margin-left: 46px;}.page-banner_2 {border: none;height: 36px;width: 36px;position: absolute;bottom: 12px;left: 45px;background-repeat: no-repeat;background-size: 36px 36px;-webkit-background-size: 36px 36px;}.page-banner_3 {position: absolute;top: 9px;left: 89px;color: #000;font-family: 微软雅黑;text-align: left;}.page-banner_3 p:last-child {color: #555;font-size: 12px;line-height: 17px;}.page-banner_3 i {margin-left: -1px;font-size: 16px;line-height: 22px;color: #000;font-style: normal;font-weight: bold}.page-banner_3 img {height: 18px;}.page-banner_4,.page-banner_4:visited {display: inline-block;height: 28px;line-height: 26px;width: 57px;position: absolute;bottom: 16px;right: 17px;border: 1px solid #ff6b9c;border-radius: 2px;color: #ff6b9c;font-size: 13px;text-align: center;box-sizing: border-box;}.page-banner_5 {pointer-events: auto;position: absolute;height: 36px;width: 36px;margin-top: 12px;margin-bottom: 8px;margin-left: 9px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAWlBMVEUAAADIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjMzMzJyckp+DWuAAAAHHRSTlMAAeqVx9gsK84J+qWbaSEVA1nsNESxRe2GG7Ja/WGWnQAAAQ9JREFUOMuN1O2ugjAMBuAK4ziYG1/K0XPa+79N0XQreTWB/tqyJ+kGbWkbKQY/dd3kQ0z0NYbRibCGiBuHT3NtVBTXXIG0FyPGLu3W9E4NKNdvjKXClEW1zgwqlzPCfeBe+i4woN5vHBrdiWLYNcOKRt3d2lrMVPMsuhxX5FjR6VRLMT+UETuiVA7qlyrmXJWDRFEYFBiWSIEZlBmNQJ5RoWFPE4O6o+Ff6hgUoeEOUfUgugsDsnT6rkf5EpbOgzlXNSpPAY0IqkBRwDCDkkhJ0KCSZD9YZjWq/jJyViorml8mq/aWl6MWHdQZFt1++S4HG2G/pY41Z1FevhrfHx4YFsvn6Fn2h9j/AGBnHD4B8aRi2FatCHAAAAAASUVORK5CYII=) no-repeat;background-size: cover;background-size: 18px 18px;background-position-x: 8px;background-position-y: 9px;}</style>",
    A = '<div class="page-banner" id="appad"><div class="page-banner_5" id="left"></div><div class="page-banner_1" id="right"><div class="page-banner_2" style="background-image:url(https://cdn.jsdelivr.net/gh/xmzt/static/mzitu/mb/img/appicon.png);" ></div><div class="page-banner_3" ><i class="c-icon" >妹子图官方APP</i><p >永久免费，全高清，更精彩！</p></div><span class="page-banner_4" >打开</span></div></div>',
    B = '<div class="banner" id="banner"><div class="banner_1"><div class="banner_2"></div><div class="banner_3" ><i class="c-icon" >妹子图官方APP</i><p >美女福利图，满足你的所有幻想！</p></div><span class="banner_4" >免费下载</span></div></div>';
    $("#content").prepend(B);
    $("#banner").click(clickright);
    if (!getCookie("appad")) {
        $("body").append(y);
        $("body").append(A);
        $("body").css("margin-bottom", "60px");
        $("#left").click(clickleft);
        $("#right").click(clickright)
    }
    var views = getCookie('views')||0;views++;
    if (views < 10 || page < 10) {
        setCookie("views", views, 5);
    }else{
        var a_href = "https://m.mzitu.com/app/download/";
        $("figure p").find("a").attr("href", a_href);
        $(".next.button.radius").attr("href", a_href);
        $(".prev.button.radius").attr("href", a_href);
    }
})();
function clickleft() {
    setCookie("appad", "colsed", 1);
    var h = document.getElementById("appad");
    h.parentNode.removeChild(h);
    $("body").css("margin-bottom", "0")
}
function clickright() {
    var applink = "https://cdn.jsdelivr.net/gh/xmzt/apk/mmzztt.apk";
    download_app(applink)
}
function setCookie(c_name, value, expireSeconds) {
    var exdate = new Date();
    exdate.setTime(exdate.getTime() + expireSeconds * 60 * 1000);
    var cookie = c_name + "=" + escape(value) + ";path=/" + ((expireSeconds == null) ? "": ";expires=" + exdate.toGMTString());
    document.cookie = cookie
}
function getCookie(Name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (Name == arr[0]) {
            return arr[1]
        }
    }
    return false
}
function download_app(src) {
    var download_file = {};
    if (typeof(download_file.iframe) == "undefined") {
        var iframe = document.createElement("iframe");
        download_file.iframe = iframe;
        document.body.appendChild(download_file.iframe)
    }
    download_file.iframe.style.display = "none";
    download_file.iframe.src = src
};
