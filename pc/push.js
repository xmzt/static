!(function() {
    var canonicalURL;
    var x = document.getElementsByTagName("link");
    if (x.length > 0) {
        for (i = 0; i < x.length; i++) {
            if (x[i].rel.toLowerCase() == 'canonical' && x[i].href) {
                canonicalURL = x[i].href;
                break;
            }
        }
    }
    if (!canonicalURL) return;
    !function() {
        var e = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi,
        r = canonicalURL,
        t = document.referrer;
        if (!e.test(t)) {
            var n = "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif";
            t ? (n += "?r=" + encodeURIComponent(document.referrer), r && (n += "&l=" + r)) : r && (n += "?l=" + r);
            var i = new Image;
            i.src = n
        }
    } ();
})();
