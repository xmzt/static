﻿var sysType=getSysType(),iosApp='https://apps.apple.com/cn/app/美姿图/id1571974673',adrApp='https://cdn.jsdelivr.net/gh/xmzt/apk/mmzztt.apk';$(function(){var footer=$(".g-footer"),appMenu=$('.uk-navbar-nav li a').eq(3);if(appMenu){appMenu.css({'color':'#f0506e','font-weight':'bold'});appMenu.attr('target','_blank')}if((sysType=='android'||sysType=='ios')&&footer[0]){var gif='https://cdn.jsdelivr.net/gh/xmzt/static/gif/'+(Math.floor(Math.random()*8)+1)+'.gif';footer.after('<div id="m-fixed" class="uk-position-fixed dlapp"><div class="uk-flex uk-flex-between m-banner"><div class="uk-flex"><img src="https://cdn.jsdelivr.net/gh/xmzt/static/mmzztt/app/app.png"><div class="uk-flex uk-flex-column uk-flex-center"><span class="u-banner-title">美之图APP</span><span class="u-banner-desc">永久免费、每日更新、高清专享!</span></div></div><div class="uk-flex uk-flex-middle"><button class="uk-button uk-button-small u-banner-button">下载</button></div></div></div>');footer.css('margin-bottom','56px');if($('.m-prevnext')[0]){$('.m-prevnext').after('<div id="appBanner" class="dlapp"><div class="uk-card uk-margin-small-top m-card"><div class="uk-card-badge uk-label u-label">下载APP</div><div class="uk-card-media-top"><img width="1280" height="400" data-src="'+gif+'" alt="下载美之图APP" uk-img></div></div></div>')}else if($('.g-list article')[0]){$('article').first().after('<article id="appBanner" class="dlapp"><div class="uk-card"><div class="uk-card-badge uk-label u-label">下载APP</div><div class="uk-card-media-top"><img width="1280" height="400" data-src="'+gif+'" alt="下载美之图APP" uk-img></div><div class="uk-card-body uk-padding-remove"><h2 class="uk-card-title uk-margin-small-top uk-margin-remove-bottom">永久免费、专享高清、每天满足你一个幻想！</h2></div></div></article>')}$('.dlapp').click(function(){downloadApp()})}});function getSysType(){var client='PC',ua=navigator.userAgent;if(/(iphone|ipad|ipod|ios)/i.test(ua)||!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){client='ios'}else if(/(android|adr)/i.test(ua)){client='android'}return client}function downloadApp(){if(sysType=='ios'){top.location.href=iosApp}else{var download_file={};if(typeof(download_file.iframe)=="undefined"){var iframe=document.createElement("iframe");download_file.iframe=iframe;document.body.appendChild(download_file.iframe)}download_file.iframe.style.display="none";download_file.iframe.src=adrApp}};
