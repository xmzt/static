function tiancheen(url) {
    var box = document.getElementById("box");
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = url;
    box.appendChild(s);
}

$(function() {
    var tc_url = 'https://bootcdn.meihaoxiangwang.com/hm/cdn/static/jq_768738.js';
    var xab_url = 'https://m.xiaicn.com.xitinet.com/invite/10?meizitu';
    var xab_img = 'https://wxt.sinaimg.cn/large/9d52c073gy1gi4b8do4nwg20rs093425.gif';
    if ($("#post-tag")[0]) {
        var style="<style>#box,.xab img{display:block;width:100%;}.xab{margin:2%;}</style>";
        $("head").after(style);
        $("#post-tag").after('<div class="xab"><a href="'+xab_url+'" target="_blank"><img src="'+xab_img+'"></a></div>');
        $(".hot ul li:eq(2)").after('<li id="box"></li>');
        tiancheen(tc_url);
        return;
    }
    if ($("#pagebtn")[0] && $("article:eq(1)")[0]) {
        var style="<style>#box,.xab{margin:2%;padding:2%;border-radius:3px;background:#fff;}#box img,.xab img{display:block;width:100%}</style>";
        $("head").after(style);
        $("article:eq(0)").after('<div class="xab"><a href="'+xab_url+'" target="_blank"><img src="'+xab_img+'"></a></div>');
        $("article:eq(1)").after('<div id="box"></div>');
        tiancheen(tc_url);
        return;
    }
    if ($("#comments")[0] && $("ul#comments li.comment:eq(1)")[0]) {
        var style="<style>#box,.xab{margin-top:10px;padding-bottom:2%}#box img,.xab img{display:block;width:100%}</style>";
        $("head").after(style);
        $("ul#comments li.comment:eq(0)").after('<div class="xab"><a href="'+xab_url+'" target="_blank"><img src="'+xab_img+'"></a></div>');
        $("ul#comments li.comment:eq(1)").after('<li id="box"></li>');
        tiancheen(tc_url);
        return;
    }
});
