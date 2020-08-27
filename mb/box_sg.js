!(function() {
    if (b) {
        return;
    }
    if ($("#post-tag")[0]) {
        s_single();
        return;
    }
    if ($("#pagebtn")[0]) {
        s_index();
        return;
    }
    if ($("#comments")[0]) {
        s_pai();
        return;
    }
})();

function s_index(){
    //style
    $("body").prepend('<style type="text/css">.box{background: #fff; margin:2%;border-radius: 3px;padding: 2%;}.box a{font-size: 0;display: block;}.box img{width: 100%;height: auto;}.box div,.box iframe{max-width:100%}</style>');
    //360
    if (window.location.pathname == '/') {
        $("article:eq(1)").after('<div class="box"><a target="_blank" href="https://www.360kuai.com/mob/subject/400?sign=360_6aa05217"><img alt="新型肺炎实时疫情追踪" src="https://wxt.sinaimg.cn/mw1024/9d52c073gy1gbi73cipwyj20k006zn2o.jpg" width="100%" height="auto"></a></div>');
    }
    //
    var ids = ["1097885","1097886"];
    ids.forEach(function(id, index) {
        var i = index*2,el = "article:eq("+i+")";
        if ($(el)[0]) {
            //CreateElement
            $(el).after('<div id="s_'+index+'" class="box"></div>');
            //CreateArg
            var s_div = document.getElementById("s_"+index);
            var arg = index ? {id: id,ele:s_div,w:20,h:6} : {id: id,ele:s_div}
            window.sogou_un = window.sogou_un || [];
            window.sogou_un.push(arg);
            //CreateScriptElement
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://theta.sogoucdn.com/wap/js/aw.js';
            s_div.appendChild(s);
        }
    })
}

function s_single(){
    //CreateElement
    $("body").prepend('<style type="text/css">#box{width:100%;background: #fff;}</style>');
    //CreateArg
    $(".hot ul li:eq(2)").after('<li id="box"></li>');
    var s_div = document.getElementById("box");
    window.sogou_un = window.sogou_un || [];
    window.sogou_un.push({id: "1097920",ele:s_div});
    //CreateScriptElement
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://theta.sogoucdn.com/wap/js/aw.js';
    s_div.appendChild(s);
}

function s_pai(){
    $("body").prepend('<style type="text/css">.box{background: #fff;padding-bottom:2%;}.box div,.box iframe{max-width:100%}</style>');
    var ids = ["1097885","1097886"];
    ids.forEach(function(id, index) {
        var i = index*2,el = "ul#comments li.comment:eq("+i+")";
        if ($(el)[0]) {
            //CreateElement
            $(el).after('<li id="s_'+index+'" class="box"></div>');
            //CreateArg
            var s_div = document.getElementById("s_"+index);
            var arg = index ? {id: id,ele:s_div,w:20,h:6} : {id: id,ele:s_div}
            window.sogou_un = window.sogou_un || [];
            window.sogou_un.push(arg);
            //CreateScriptElement
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://theta.sogoucdn.com/wap/js/aw.js';
            s_div.appendChild(s);
        }
    })
}
function addfeed() {
    return;
};
