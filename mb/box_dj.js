!(function() {
    var urls = ['https://s.u7u9.com/js/tdp/t6.js?siteid=10008','https://i.hao61.net/d.js?cid=31737'],
    box1style = '<style></style>';
    if ($("#post-tag")[0]) {
        var style="<style>#box_0,#box_2{transform:scale(0.96);-webkit-transform:scale(0.96);}#box_1{width:100%;margin:2% 0 4% 0;}#box_2{padding-bottom:2%}</style>";
        $("head").after(style);
        $("#post-tag").after('<div id="box_0"></div>');
        $(".hot ul li:eq(2)").after('<li id="box_1"></li>');
        bdappend(urls);
        return;
    }
    if ($("#pagebtn")[0] && $("article:eq(0)")[0]) {
        var style="<style>#box_0 iframe,#box_2{transform:scale(0.96);-webkit-transform:scale(0.96);}#box_0 iframe{border-radius:3px}#box_1{margin:0 2%;background:#fff;}#box_2{margin-bottom:2%;background:#fff}</style>";
        $("head").after(style);
        $("article:eq(0)").after('<div id="box_0"></div>');
        $(".text-center").before('<div id="box_1"></div>');
        bdappend(urls);
        return;
    }
    if ($("#comments")[0]) {
        var style="<style>#box_0 {padding-bottom:2%}#box_0 iframe{transform:scale(0.96) translateX(-4%);-webkit-transform:scale(0.96) translateX(-4%);}#box_1{margin:0 2%;background:#fff;}#box_2{transform:scale(0.96);-webkit-transform:scale(0.96);margin-bottom:2%;background:#fff;}</style>";
        $("head").after(style);
        $("ul#comments li.comment:eq(0)").after('<li id="box_0"></li>');
        $(".text-center").before('<div id="box_1"></div>');
        bdappend(urls);
        return;
    }
})();

function bdappend(urls) {
    urls.forEach(function (url,i) {
        var box = document.getElementById("box_"+i);
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = urls[i];
        box.appendChild(s);
    })
}
