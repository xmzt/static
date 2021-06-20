$(function() {
    var ua = navigator.userAgent.toLowerCase(),
        isAndroid = /(android|adr)/i.test(ua),
        n = Math.floor(Math.random()*8)+1,
        m = n == 8 ? 1 : n+1,
        cdn = 'https://cdn.jsdelivr.net/gh/xmzt/static/gif/',
        app = ['妹子图官方APP','下载妹子图APP','https://m.mzitu.com/app/',cdn+n+'.gif'],
        mzt = ['宅男圣地,美女出没','美之图','https://mmzztt.com/',cdn+m+'.gif'];
    if ($("#post-tag")[0]) {
        $("#post-tag").after('<div style="margin:2%;margin-top:1.4em"><h3 class="block-line"><span>'+mzt[0]+'</span></h3><a href="'+mzt[2]+'" target="_blank"><img style="width:100%;display:block;" src="'+mzt[3]+'" alt="'+mzt[1]+'"></a></div>');
        if (isAndroid) {
            $("head").after('<style>#box,#box img{display:block;width:100%;}</style>');
            $(".hot ul li:eq(2)").after('<li id="box"><a href="'+app[2]+'" target="_blank"><img style="width:100%;display:block;" src="'+app[3]+'" alt="'+app[1]+'"></a></li>');
        }
        return;
    }
    var bn = isAndroid ? app : mzt;
    if ($("#pagebtn")[0]) {
        if ($("article:eq(0)")[0]) {
            $("article:eq(0)").after('<div style="margin:2%;padding:2%;border-radius:3px;background:#fff;"><span style="display:block;color:#ff88af;font-size:14px;font-weight:bold;margin-bottom:2%;">'+bn[0]+'</span><a href="'+bn[2]+'" target="_blank"><img style="width:100%;display:block;" src="'+app[3]+'" alt="'+bn[1]+'"></a></div>');
        }
        if ($("article:eq(1)")[0] && isAndroid) {
            $("article:eq(1)").after('<div style="margin:2%;padding:2%;border-radius:3px;background:#fff;"><span style="display:block;color:#ff88af;font-size:14px;font-weight:bold;margin-bottom:2%;">'+mzt[0]+'</span><a href="'+mzt[2]+'" target="_blank"><img style="width:100%;display:block;" src="'+mzt[3]+'" alt="'+mzt[1]+'"></a></div>');
        }
        return;
    }
    if ($("#comments")[0]) {
        if ($("ul#comments li.comment:eq(0)")[0]) {
            $("ul#comments li.comment:eq(0)").after('<div style="margin-top:10px;padding-bottom:2%"><span style="display:block;color:#ff88af;font-size:12px;margin-bottom:2%;">'+bn[0]+'</span><a href="'+bn[2]+'" target="_blank"><img style="width:100%;display:block;" src="'+app[3]+'" alt="'+bn[1]+'"></a></div>');
        }
        if ($("ul#comments li.comment:eq(1)")[0] && isAndroid) {
            $("ul#comments li.comment:eq(1)").after('<div style="margin-top:10px;padding-bottom:2%"><span style="display:block;color:#ff88af;font-size:12px;margin-bottom:2%;">'+mzt[0]+'</span><a href="'+mzt[2]+'" target="_blank"><img style="width:100%;display:block;" src="'+mzt[3]+'" alt="'+mzt[1]+'"></a></div>');
        }
        return;
    }
});
