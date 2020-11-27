$(function() {
    var isAndroid = /(android|adr)/i.test(ua),n = Math.floor(Math.random()*8)+1,imgurl = 'https://cdn.jsdelivr.net/gh/xmzt/static/gif/'+n+'.gif';
    var urls = isAndroid ? ['妹子图官方APP','下载妹子图APP','https://m.mzitu.com/app/']:['宅男圣地，美女出没','美之图','https://mmzztt.com/'];
    if ($("#post-tag")[0]) {
        $("#post-tag").after('<div style="margin:2%;margin-top:1.4em"><h3 class="block-line"><span>'+urls[0]+'</span></h3><a href="'+urls[2]+'" target="_blank"><img style="width:100%;display:block;" src="'+imgurl+'" alt="'+urls[1]+'"></a></div>');
        return;
    }
    if ($("#pagebtn")[0] && $("article:eq(0)")[0]) {
        $("article:eq(0)").after('<div style="margin:2%;padding:2%;border-radius:3px;background:#fff;"><span style="display:block;color:#ff88af;font-size:14px;font-weight:bold;margin-bottom:2%;">'+urls[0]+'</span><a href="'+urls[2]+'" target="_blank"><img style="width:100%;display:block;" src="'+imgurl+'" alt="'+urls[1]+'"></a></div>');
        return;
    }
    if ($("#comments")[0]) {
        $("ul#comments li.comment:eq(0)").after('<div style="margin-top:10px;padding-bottom:2%"><span style="display:block;color:#ff88af;font-size:12px;margin-bottom:2%;">'+urls[0]+'</span><a href="'+urls[2]+'" target="_blank"><img style="width:100%;display:block;" src="'+imgurl+'" alt="'+urls[1]+'"></a></div>');
        return;
    }
});
