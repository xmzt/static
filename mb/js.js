﻿(function(window){function classReg(className){return new RegExp("(^|\\s+)"+className+"(\\s+|$)")}var hasClass,addClass,removeClass;if("classList"in document.documentElement){hasClass=function(elem,c){return elem.classList.contains(c)};addClass=function(elem,c){elem.classList.add(c)};removeClass=function(elem,c){elem.classList.remove(c)}}else{hasClass=function(elem,c){return classReg(c).test(elem.className)};addClass=function(elem,c){if(!hasClass(elem,c)){elem.className=elem.className+" "+c}};removeClass=function(elem,c){elem.className=elem.className.replace(classReg(c)," ")}}function toggleClass(elem,c){var fn=hasClass(elem,c)?removeClass:addClass;fn(elem,c)}var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};if(typeof define==="function"&&define.amd){define(classie)}else{window.classie=classie}})(window);var SidebarMenuEffects=(function(){function hasParentClass(e,classname){if(e===document){return false}if(classie.has(e,classname)){return true}return e.parentNode&&hasParentClass(e.parentNode,classname)}function init(){var container=document.getElementById("st-container"),buttons=Array.prototype.slice.call(document.querySelectorAll("#nav-menu-switcher > button")),eventtype="touchstart",resetMenu=function(){classie.remove(container,"st-menu-open")},bodyClickFn=function(evt){if(!hasParentClass(evt.target,"st-menu")){resetMenu();document.removeEventListener(eventtype,bodyClickFn)}};buttons.forEach(function(el,i){var effect=el.getAttribute("data-effect");el.addEventListener(eventtype,function(ev){ev.stopPropagation();ev.preventDefault();container.className="st-container";classie.add(container,effect);setTimeout(function(){classie.add(container,"st-menu-open")},25);document.addEventListener(eventtype,bodyClickFn)})})}init()})();var searchtemplate=document.getElementById("search-template"),Displaysearch=function(){classie.toggle(searchtemplate,"visible")};!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible")){if(a.abovethetop(this,j)||a.leftofbegin(this,j)){}else{if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit){return!1}}else{c.trigger("appear"),b=0}}}})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);$(function(){$("img.lazy").lazyload({threshold:150,})});$(window).scroll(function(){if($(this).scrollTop()>100){$("#totop").fadeIn(200)}else{$("#totop").fadeOut(200)}});$("#totop").click(function(event){event.preventDefault();$("body,html").animate({scrollTop:0},500)});var $de=function(id){return document.getElementById(id)};var morepic=$de("content").getElementsByTagName("article");var morenum=morepic.length;var nPosition,mp,np,mpage=1;if(morenum<=6&&$de("pagebtn")){$de("pagebtn").className="prev-next";$de("morebtn").style.display="none"}function showmore(){if(morenum>6){mp=mpage*6;np=mp+6;if(np>=morenum){np=morenum;$de("pagebtn").className="prev-next";$de("morebtn").style.display="none"}for(var i=mp;i<np;i++){morepic[i].className="placeholder"}mpage++;nPosition=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;nPosition+=1;window.scrollTo(0,nPosition)}}if(window.top!==window.self){document.write="";window.top.location.href=window.self.location.href;setTimeout(function(){document.body.innerHTML=""},0)};
