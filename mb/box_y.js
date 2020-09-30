function tiancheen(url) {
    var box = document.getElementById("box");
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = url;
    box.appendChild(s);
}

$(function() {
    var tc_url = 'https://wx.uc.downcdn.top/hm/cdn/static/jq_768738.js';
    if ($("#post-tag")[0]) {
        var style="<style>#box,#box img{display:block;width:100%;}</style>";
        $("head").after(style);
        $(".hot ul li:eq(2)").after('<li id="box"></li>');
        tiancheen(tc_url);
        return;
    }
    if ($("#pagebtn")[0] && $("article:eq(1)")[0]) {
        var style="<style>#box{margin:2%;padding:2%;border-radius:3px;background:#fff;}#box img{display:block;width:100%}</style>";
        $("head").after(style);
        $("article:eq(1)").after('<div id="box"></div>');
        tiancheen(tc_url);
        return;
    }
    if ($("#comments")[0] && $("ul#comments li.comment:eq(1)")[0]) {
        var style="<style>#box{margin-top:10px;padding-bottom:2%}#box img{display:block;width:100%}</style>";
        $("head").after(style);
        $("ul#comments li.comment:eq(1)").after('<li id="box"></li>');
        tiancheen(tc_url);
        return;
    }
});
