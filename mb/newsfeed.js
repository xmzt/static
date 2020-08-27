﻿var addEventListenerFn=(window.document.addEventListener?function(element,type,fn){element.addEventListener(type,fn,false)}:function(element,type,fn){element.attachEvent("on"+type,fn)});var removeEventListenerFn=(window.document.removeEventListener?function(element,type,fn){element.removeEventListener(type,fn,false)}:function(element,type,fn){element.detachEvent("on"+type,fn)});(function(global){var _globals=global;function namespace(ns){var a=ns.split("."),p=_globals,i;for(i=0;i<a.length;i++){p[a[i]]=p=p[a[i]]||{}}return p}var mediav=namespace("mediavnewsfeed"),_=namespace("mediavnewsfeed.lang"),$mvUtil=namespace("mediavnewsfeed.util"),$sio=namespace("mediavnewsfeed.sio");var $j=namespace("mediavnewsfeed.jqlite");_globals.NewsFeed=NewsFeed;function NewsFeed(){var newfeed=this;this.ads=[];this.options={countForDisplay:1,offsetExposeHeight:0.1};this.defaultProducts=[{"slot":1,"type":1,"img":"https://s3m.mediav.com/galileo/2c3373ac5364199733adc173ffeec53d.jpg","desc":"订阅英孚【每日英语】，全年免费，每天不同主题，上下班路上，坐地铁，随时随地，利用碎片时间迅速提高自己的英语水平。 ","title":"玩手机不如学一会儿英语","src":"英孚英语广告","curl":"https://ssxd.mediav.com/s?type=2&r=20&pinfo=&mv_ref=www%2Ebtime%2Ecom&enup=CAABZeed4QgAAuGd52UA&mvid=NzAxMTkwODA0Mzk1NzE3MTAwMTAwMTc&bid=1131240636fcef37&price=AAAAAFi3gBkAAAAAAABKDp0Pzqfto+TocS3HEg==&finfo=DAABCAABAAAGnQgAAgAAANgEAAM/epA8DhNemAAIAAIAAAADCgADgKPfu662wGgIAAQAAAEFBgAGItAIAAgBAlTQCgAJAAAAAAAGABgGAAoAAAA&ugi=FczbDhWOnkBMFQIVsgQVABUAABXWrLruBBYEAA&uai=Ff6IvwElAhUCFqnUxJOX15Tc/gEV7gglrK6B3wQA&ubi=FZqrHRXcwasBFeanhg0VwOP0QhUGFRwW+qGCjBQWqdSvrI2RkNz+ATQCFrCAMCUGFfiEvc0LFawBAA&clickid=0&csign=33e727210eca5616&url=http%3A%2F%2Fwww%2Eef%2Ecom%2Ecn%2Fonline%2Flp%2FPPCET%2FSM%2FBSG%2FECEE%2D5minnosub%2Easpx%3Fctr%3Dcn%26ptn%3Dcnbd%26etag%3DEFCN%5FPPC%5F%2D7a4d9972727b4b76a176905aed79be1a%2DCNPPC%2DShanghai%2DBtime%2Dfb1%2D","imptk":["https://ssxd.mediav.com/s?type=1&r=20&tid=MzE1MjE3NjE2MDYzNTE0MTkwODAwMTY&finfo=DAABCAABAAAAqggAAgAAANoEAAM/Q4BvxYW5bwAIAAIAAAADCgADSSHNdQoKwK8IAAQAAAEeBgAGK4UIAAgAGfCgCgAJAAAAAAAAAAgGAAoAAAA&mvid=MzE1MjE3NjE2MDYzNTE0MTkwODAwMTY&mv_ref=btime%2Ecom&enup=CAABZed3JggAAiZ352UA&bidid=1096c03e24ec9f38&ugi=FczbDhWOnkBMFQIVsgQVABUAABWM593NBwA&uai=FfyhjwElAhUCFvrg0+adl+KhkgEV7ggA&ubi=FfSBHhW4r7UBFfro/AwV/suzQhUGFRwWpKbtmhQW+uDozafd5qGSATQCFhAW+uDozQcVBgA&price=AAAAAFfX0fgAAAAAAAhJUJ8cgNleqs5qgtYaCQ==","https://max-l.mediav.com/rtb?type=2&d=100&b=1096c03e24ec9f38&p=1173630&l=120550&s=1&w=AAAAAFfX0fgAAAAAAAhJhAd6SMhKNl8a1161Ng==&k=VSc4GQAAAAA=&i=gPunJBMUs9JX&v=31521761606351419080016"],"clktk":["https://max-l.mediav.com/rtb?type=3&d=100&b=1096c03e24ec9f38&p=1173630&l=120550&s=1&k=VSc4GQAAAAA=&i=gPunJBMUs9JX&v=31521761606351419080016&turl="]},{"slot":2,"type":2,"desc":"订阅英孚【每日英语】，全年免费，每天不同主题，上下班路上，坐地铁，随时随地，利用碎片时间迅速提高自己的英语水平。 ","title":"玩手机不如学一会儿英语","src":"英孚英语广告","curl":"https://ssxd.mediav.com/s?type=2&r=20&pinfo=&mv_ref=www%2Ebtime%2Ecom&enup=CAABZeed4QgAAuGd52UA&mvid=NzAxMTkwODA0Mzk1NzE3MTAwMTAwMTc&bid=1131240636fcef37&price=AAAAAFi3gBkAAAAAAABKDp0Pzqfto+TocS3HEg==&finfo=DAABCAABAAAGnQgAAgAAANgEAAM/epA8DhNemAAIAAIAAAADCgADgKPfu662wGgIAAQAAAEFBgAGItAIAAgBAlTQCgAJAAAAAAAGABgGAAoAAAA&ugi=FczbDhWOnkBMFQIVsgQVABUAABXWrLruBBYEAA&uai=Ff6IvwElAhUCFqnUxJOX15Tc/gEV7gglrK6B3wQA&ubi=FZqrHRXcwasBFeanhg0VwOP0QhUGFRwW+qGCjBQWqdSvrI2RkNz+ATQCFrCAMCUGFfiEvc0LFawBAA&clickid=0&csign=33e727210eca5616&url=http%3A%2F%2Fwww%2Eef%2Ecom%2Ecn%2Fonline%2Flp%2FPPCET%2FSM%2FBSG%2FECEE%2D5minnosub%2Easpx%3Fctr%3Dcn%26ptn%3Dcnbd%26etag%3DEFCN%5FPPC%5F%2D7a4d9972727b4b76a176905aed79be1a%2DCNPPC%2DShanghai%2DBtime%2Dfb1%2D","imptk":["https://ssxd.mediav.com/s?type=1&r=20&tid=MzE1MjE3NjE2MDYzNTE0MTkwODAwMTY&finfo=DAABCAABAAAAqggAAgAAANoEAAM/Q4BvxYW5bwAIAAIAAAADCgADSSHNdQoKwK8IAAQAAAEeBgAGK4UIAAgAGfCgCgAJAAAAAAAAAAgGAAoAAAA&mvid=MzE1MjE3NjE2MDYzNTE0MTkwODAwMTY&mv_ref=btime%2Ecom&enup=CAABZed3JggAAiZ352UA&bidid=1096c03e24ec9f38&ugi=FczbDhWOnkBMFQIVsgQVABUAABWM593NBwA&uai=FfyhjwElAhUCFvrg0+adl+KhkgEV7ggA&ubi=FfSBHhW4r7UBFfro/AwV/suzQhUGFRwWpKbtmhQW+uDozafd5qGSATQCFhAW+uDozQcVBgA&price=AAAAAFfX0fgAAAAAAAhJUJ8cgNleqs5qgtYaCQ==","https://max-l.mediav.com/rtb?type=2&d=100&b=1096c03e24ec9f38&p=1173630&l=120550&s=1&w=AAAAAFfX0fgAAAAAAAhJhAd6SMhKNl8a1161Ng==&k=VSc4GQAAAAA=&i=gPunJBMUs9JX&v=31521761606351419080016"],"clktk":["https://max-l.mediav.com/rtb?type=3&d=100&b=1096c03e24ec9f38&p=1173630&l=120550&s=1&k=VSc4GQAAAAA=&i=gPunJBMUs9JX&v=31521761606351419080016&turl="],"assets":[{"img":"https://s3m.mediav.com/galileo/2c3373ac5364199733adc173ffeec53d.jpg","curl":"https://ssxd.mediav.com/s?type=2&r=20&pinfo=&mv_ref=www%2Ebtime%2Ecom&enup=CAABZeed4QgAAuGd52UA&mvid=NzAxMTkwODA0Mzk1NzE3MTAwMTAwMTc&bid=1131240636fcef37&price=AAAAAFi3gBkAAAAAAABKDp0Pzqfto+TocS3HEg==&finfo=DAABCAABAAAGnQgAAgAAANgEAAM/epA8DhNemAAIAAIAAAADCgADgKPfu662wGgIAAQAAAEFBgAGItAIAAgBAlTQCgAJAAAAAAAGABgGAAoAAAA&ugi=FczbDhWOnkBMFQIVsgQVABUAABXWrLruBBYEAA&uai=Ff6IvwElAhUCFqnUxJOX15Tc/gEV7gglrK6B3wQA&ubi=FZqrHRXcwasBFeanhg0VwOP0QhUGFRwW+qGCjBQWqdSvrI2RkNz+ATQCFrCAMCUGFfiEvc0LFawBAA&clickid=0&csign=33e727210eca5616&url=http%3A%2F%2Fwww%2Eef%2Ecom%2Ecn%2Fonline%2Flp%2FPPCET%2FSM%2FBSG%2FECEE%2D5minnosub%2Easpx%3Fctr%3Dcn%26ptn%3Dcnbd%26etag%3DEFCN%5FPPC%5F%2D7a4d9972727b4b76a176905aed79be1a%2DCNPPC%2DShanghai%2DBtime%2Dfb1%2D"},{"img":"https://s3m.mediav.com/galileo/2c3373ac5364199733adc173ffeec53d.jpg","curl":"https://ssxd.mediav.com/s?type=2&r=20&pinfo=&mv_ref=www%2Ebtime%2Ecom&enup=CAABZeed4QgAAuGd52UA&mvid=NzAxMTkwODA0Mzk1NzE3MTAwMTAwMTc&bid=1131240636fcef37&price=AAAAAFi3gBkAAAAAAABKDp0Pzqfto+TocS3HEg==&finfo=DAABCAABAAAGnQgAAgAAANgEAAM/epA8DhNemAAIAAIAAAADCgADgKPfu662wGgIAAQAAAEFBgAGItAIAAgBAlTQCgAJAAAAAAAGABgGAAoAAAA&ugi=FczbDhWOnkBMFQIVsgQVABUAABXWrLruBBYEAA&uai=Ff6IvwElAhUCFqnUxJOX15Tc/gEV7gglrK6B3wQA&ubi=FZqrHRXcwasBFeanhg0VwOP0QhUGFRwW+qGCjBQWqdSvrI2RkNz+ATQCFrCAMCUGFfiEvc0LFawBAA&clickid=0&csign=33e727210eca5616&url=http%3A%2F%2Fwww%2Eef%2Ecom%2Ecn%2Fonline%2Flp%2FPPCET%2FSM%2FBSG%2FECEE%2D5minnosub%2Easpx%3Fctr%3Dcn%26ptn%3Dcnbd%26etag%3DEFCN%5FPPC%5F%2D7a4d9972727b4b76a176905aed79be1a%2DCNPPC%2DShanghai%2DBtime%2Dfb1%2D"},{"img":"https://s3m.mediav.com/galileo/2c3373ac5364199733adc173ffeec53d.jpg","curl":"https://ssxd.mediav.com/s?type=2&r=20&pinfo=&mv_ref=www%2Ebtime%2Ecom&enup=CAABZeed4QgAAuGd52UA&mvid=NzAxMTkwODA0Mzk1NzE3MTAwMTAwMTc&bid=1131240636fcef37&price=AAAAAFi3gBkAAAAAAABKDp0Pzqfto+TocS3HEg==&finfo=DAABCAABAAAGnQgAAgAAANgEAAM/epA8DhNemAAIAAIAAAADCgADgKPfu662wGgIAAQAAAEFBgAGItAIAAgBAlTQCgAJAAAAAAAGABgGAAoAAAA&ugi=FczbDhWOnkBMFQIVsgQVABUAABXWrLruBBYEAA&uai=Ff6IvwElAhUCFqnUxJOX15Tc/gEV7gglrK6B3wQA&ubi=FZqrHRXcwasBFeanhg0VwOP0QhUGFRwW+qGCjBQWqdSvrI2RkNz+ATQCFrCAMCUGFfiEvc0LFawBAA&clickid=0&csign=33e727210eca5616&url=http%3A%2F%2Fwww%2Eef%2Ecom%2Ecn%2Fonline%2Flp%2FPPCET%2FSM%2FBSG%2FECEE%2D5minnosub%2Easpx%3Fctr%3Dcn%26ptn%3Dcnbd%26etag%3DEFCN%5FPPC%5F%2D7a4d9972727b4b76a176905aed79be1a%2DCNPPC%2DShanghai%2DBtime%2Dfb1%2D"},{"img":"https://s3m.mediav.com/galileo/2c3373ac5364199733adc173ffeec53d.jpg","curl":"https://ssxd.mediav.com/s?type=2&r=20&pinfo=&mv_ref=www%2Ebtime%2Ecom&enup=CAABZeed4QgAAuGd52UA&mvid=NzAxMTkwODA0Mzk1NzE3MTAwMTAwMTc&bid=1131240636fcef37&price=AAAAAFi3gBkAAAAAAABKDp0Pzqfto+TocS3HEg==&finfo=DAABCAABAAAGnQgAAgAAANgEAAM/epA8DhNemAAIAAIAAAADCgADgKPfu662wGgIAAQAAAEFBgAGItAIAAgBAlTQCgAJAAAAAAAGABgGAAoAAAA&ugi=FczbDhWOnkBMFQIVsgQVABUAABXWrLruBBYEAA&uai=Ff6IvwElAhUCFqnUxJOX15Tc/gEV7gglrK6B3wQA&ubi=FZqrHRXcwasBFeanhg0VwOP0QhUGFRwW+qGCjBQWqdSvrI2RkNz+ATQCFrCAMCUGFfiEvc0LFawBAA&clickid=0&csign=33e727210eca5616&url=http%3A%2F%2Fwww%2Eef%2Ecom%2Ecn%2Fonline%2Flp%2FPPCET%2FSM%2FBSG%2FECEE%2D5minnosub%2Easpx%3Fctr%3Dcn%26ptn%3Dcnbd%26etag%3DEFCN%5FPPC%5F%2D7a4d9972727b4b76a176905aed79be1a%2DCNPPC%2DShanghai%2DBtime%2Dfb1%2D"}]}];
this.deposit=function(count){var depositObj={},depositAds=[].concat(this.defaultProducts);function assign(target,obj){if(!obj){return target}for(var key in obj){if(target===obj[key]){continue}target[key]=obj[key]}return target}if(depositAds.length<count){for(var i=0;i<(count-depositAds.length);i++){var newDepositAd=assign({},_.sample(this.defaultProducts,1)[0]);newDepositAd.solt=depositAds.length+(i+1);depositAds.push(newDepositAd)}}depositObj.ads=_.shuffle(depositAds);this.ads=this.ads.concat(this.renderDom(depositObj)).slice(0,count)};this.renderDom=function(data){var newsfeed=this;for(var i=0;i<data.ads.length;i++){var ad=data.ads[i];var addom,template;if(ad.type=="1"){template=$mvUtil.supplant('<div class="box">'+'<div class="box-title"><a href="{curl}" target="_blank">{title}</a></div>'+'<div class="box-content-wrap" >'+'<div  class="box-img-wrap"> <a href="{curl}" target="_blank"><img src = "{img}"/></a></div>'+'<div class="box-footer-bar">'+'<span class="box-ad-tag">广告</span>'+"</div>"+"</div>"+"</div>",ad);addom=$j.JQLite(template);addom.addClass("type-1")}else{if(ad.type=="3"){template=$mvUtil.supplant('<div class="box">'+'<div class="box-title"><a href="{curl}" target="_blank">{title}</a></div>'+'<div class="box-content-wrap" >'+'<div  class="box-img-wrap"> <a href="{curl}" target="_blank"><img src = "{img}"/></a></div>'+'<div class="box-footer-bar">'+'<span class="box-ad-tag">广告</span>'+"</div>"+"</div>"+"</div>",ad);addom=$j.JQLite(template);addom.addClass("type-3")}else{if(ad.type=="2"){var imagewraper=[];for(var j=0;j<ad.assets.length;j++){imagewraper.push('<div  class="box-img-wrap"> <a href="{assets.'+j+'.curl}" target="_blank"><img src = "{assets.'+j+'.img}"/></a></div>')}template=$mvUtil.supplant('<div class="box">'+'<div class="box-title"><a href="{curl}" target="_blank">{title}</a></div>'+'<div class="box-content-wrap" >'+imagewraper.join(" ")+'<div class="box-footer-bar">'+'<span class="box-ad-tag">广告</span>'+"</div>"+"</div>"+"</div>",ad);addom=$j.JQLite(template);addom.addClass("type-2")}}}var links=addom.find("a");for(var j=0;j<links.length;j++){$j.JQLite(links[j]).on("touchstart",(function(ad){return function(evt){ad.mouseDownTimestamp=new Date().valueOf()}})(ad)).on("touchend",(function(ad,addom){return function(evt){var wh=mediav.util.getPositionInDocument(addom);if(ad.hasOwnProperty("mouseDownTimestamp")&&ad.mouseDownTimestamp!=""){ad.coordinates=mediav.util.m_getCoordinates(evt,addom);ad.mouseUpTimestamp=new Date().valueOf();ad.w=wh.width;ad.h=wh.height;this.href=ad.curl.replace("__EVENT_TIME_START__",ad.mouseDownTimestamp).replace("__EVENT_TIME_END__",ad.mouseUpTimestamp).replace("__OFFSET_X__",ad.coordinates.x).replace("__OFFSET_Y__",ad.coordinates.y).replace("__ADSPACE_W__",ad.w).replace("__ADSPACE_H__",ad.h);newsfeed.trackClick(ad)}ad.mouseDownTimestamp=""}})(ad,addom[0]))}addom.data("data-imptk",ad.imptk);newfeed.ads.push(addom)}};this.take=function(count,takeSuccess,showid,takeRetryTimes){var newsfeed=this;if(_.isUndefined(takeRetryTimes)){takeRetryTimes=1}if(this.ads.length>=count){var addata=this.ads.splice(0,count);takeSuccess&&takeSuccess(addata)}else{this.requestAd(showid,count,innerTakeSuccess);function innerTakeSuccess(data){if(takeRetryTimes>2){newsfeed.deposit(count)}if(data.hasOwnProperty("ads")&&data.ads.length>0){newsfeed.renderDom(data)}newsfeed.take(count,takeSuccess,showid,++takeRetryTimes)}}};this.isInSightAndWaitExposure=function(containerDom){var newsfeed=this;_.forEach(containerDom,function(addom,i){var domRect=addom[0].getBoundingClientRect();if(!((domRect.top+(domRect.bottom-domRect.top)*newsfeed.options.offsetExposeHeight)>("innerHeight" in window?window.innerHeight:document.documentElement.clientHeight))&&!(domRect.bottom<0)){newsfeed.pv(addom)}else{addEventListenerFn(window,"scroll",scrollFnc)}function scrollFnc(e){var domRect=addom[0].getBoundingClientRect();if(!((domRect.top+(domRect.bottom-domRect.top)*newsfeed.options.offsetExposeHeight)>("innerHeight" in window?window.innerHeight:document.documentElement.clientHeight))&&!(domRect.bottom<0)){newsfeed.pv(addom);removeEventListenerFn(window,"scroll",scrollFnc)}}})}}NewsFeed.prototype.trackClick=function(ad){if(ad.hasOwnProperty("clktk")&&ad.clktk.length>0){var clktks=_.isArray(ad.clktk)?ad.clktk:ad.clktk.split(",");for(var i=0;i<clktks.length;i++){var clktk=clktks[i];if(ad.hasOwnProperty("mouseDownTimestamp")&&ad.mouseDownTimestamp!=""){clktk=clktk.replace("__EVENT_TIME_START__",ad.mouseDownTimestamp).replace("__EVENT_TIME_END__",ad.mouseUpTimestamp).replace("__OFFSET_X__",ad.coordinates.x).replace("__OFFSET_Y__",ad.coordinates.y).replace("__ADSPACE_W__",ad.w).replace("__ADSPACE_H__",ad.h)}$sio.log(clktk)}}};NewsFeed.prototype.pv=function(container){var imptk=container.data("data-imptk");if(imptk){imptk=_.isArray(imptk)?imptk:imptk.split(",");for(var i=0;i<imptk.length;i++){$sio.log(imptk[i])}}};var nextUniqueId=1;function nextUid(){return""+nextUniqueId++}NewsFeed.prototype.requestAd=function(showid,size,fn){var url="https://show-g.mediav.com/s";
mediav.sio.callByServer(url,fn,{timeOut:5000,queryField:{type:1,of:4,newf:1,showid:showid,uid:_.Uid(),reqtimes:nextUid(),impct:size,scheme:"https",refurl:encodeURIComponent(document.referrer)},onfailure:function(){fn&&fn(null)}})};mediav.util.m_getCoordinates=function(evt,rootElement){evt=evt||window.event;var point={};var rect=this.getPositionInDocument(rootElement);point.x=evt.changedTouches[0].pageX-rect.left;point.y=evt.changedTouches[0].pageY-rect.top;rect={x:Math.round(point.x),y:Math.round(point.y)};return rect}})(window);
