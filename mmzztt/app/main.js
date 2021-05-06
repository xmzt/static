$(function(){
    var dom = document.querySelector('#scr1');
    var dom2 = document.querySelector('#scr2');
    var dom3 = document.querySelector('#scr3');
    var _h=Math.round(document.getElementById("picItem").offsetHeight)

    roll(dom)
    roll(dom2)
    roll(dom3)
    function roll(dom) {
        var h_i = 0;
        var animation = function () {
            requestAnimationFrame(function () {
                h_i = h_i - 0.5;
                if (h_i % _h === 0) {
                    dom.appendChild(dom.firstElementChild);
                    h_i = 0;
                }
                dom.style.transform = 'translateY(' + h_i + 'px)';
                animation(dom)
            })
        };
        animation(dom)
    }
    function getSysType() {
        var us = navigator.userAgent.toLowerCase();
        if ((us.indexOf('android') > -1 || us.indexOf('linux') > -1) || navigator.platform.toLowerCase().indexOf('linux') != -1) {
            return 'android';
        } else if (us.indexOf('iphone') > -1 || us.indexOf('ipad') > -1) {
            return 'ios';
        }
    }
    function postchannel(){
        var req,data;
        req = new XMLHttpRequest();
        req.onreadystatechange=state_Change;
        req.open('post','https://mmspd.mm211.com:8079/tongji/postchannel', true);	
        data = '{"channel":"GW_APP","internalip":"'+getIP()+'","appid":"mm131"}';
        req.send(data);
        function state_Change(){						
            if (req.readyState==4 && req.status==200 ){			
                window.location.href='https://apps.apple.com/cn/app/id1478395030';
            }
        }		
    }   
    function getIP(){
        var _ip = window.localStorage.getItem('internalip');
        if(_ip == null){
            var arry = []
            for(var i = 0; i<4; i++){
            arry = arry+Math.floor(Math.random()*256)+(i==3?"":".")
            }
            return arry
        }else{
            return _ip
        }
    }
    if(getSysType()=='ios'){
        var clipboard = new Clipboard('.copyCode');
            clipboard.on('success', function(e) {					
                console.log('复制成功！')
            });
    }
    var downHtml = '<div class="mask"></div><div id="downBox" class="layer_fadeInDown"><div class="close"></div><div class="qcode"><img src="https://h5.qiusai8.net/mm131/images/qcode.png"/></div><p>扫描二维码下载MM131	App</p></div>';
    $('#btnDown').click(function(){
        if(getSysType()=='android'){
            window.location.href='http://s2.tfzixun.com/mm/2.0.6/mmpic_v2.0.6_1_APP_1.apk';
        }else if(getSysType()=='ios'){
            postchannel();
        }else{
            $('body').append(downHtml);
            $('.mask,#downBox').show()
        }
    });
    $(document).on('click','.close',function(){
		$('.mask,#downBox').remove();
	})	
})