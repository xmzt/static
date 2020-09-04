$(function() {
    var isAndroid = /(android|adr)/i.test(ua);
    if (isAndroid) {
        var n = Math.floor(Math.random()*8)+1;
        var imgurl = 'https://cdn.jsdelivr.net/gh/xmzt/static/mb/appimg/'+n+'.gif';
        var appurl = 'https://m.mzitu.com/app/';
        if ($("#post-tag")[0]) {
            $("#post-tag").after('<div style="margin:2%;margin-top:1.4em"><h3 class="block-line"><span>妹子图官方APP</span></h3><a href="'+appurl+'" target="_blank"><img style="width:100%;display:block;" src="'+imgurl+'" alt="下载妹子图APP"></a></div>');
            return;
        }
        if ($("#pagebtn")[0] && $("article:eq(0)")[0]) {
            $("article:eq(0)").after('<div style="margin:2%;padding:2%;border-radius:3px;background:#fff;"><span style="display:block;color:#ff88af;font-size:14px;font-weight:bold;margin-bottom:2%;">妹子图官方APP</span><a href="'+appurl+'" target="_blank"><img style="width:100%;display:block;" src="'+imgurl+'" alt="下载妹子图APP"></a></div>');
            return;
        }
        if ($("#comments")[0]) {
            $("ul#comments li.comment:eq(0)").after('<div style="margin-top:10px;padding-bottom:2%"><span style="display:block;color:#ff88af;font-size:12px;margin-bottom:2%;">妹子图官方APP</span><a href="'+appurl+'" target="_blank"><img style="width:100%;display:block;" src="'+imgurl+'" alt="下载妹子图APP"></a></div>');
            return;
        }
    }
});
