!function(t,e,i,s){function o(e,i){this.element=e,this.options=t.extend({},r,i),this._defaults=r,this._name=n,this.init()}var n="stellar",r={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(t){t.hide()},showElement:function(t){t.show()}},a={scroll:{getLeft:function(t){return t.scrollLeft()},setLeft:function(t,e){t.scrollLeft(e)},getTop:function(t){return t.scrollTop()},setTop:function(t,e){t.scrollTop(e)}},position:{getLeft:function(t){return-1*parseInt(t.css("left"),10)},getTop:function(t){return-1*parseInt(t.css("top"),10)}},margin:{getLeft:function(t){return-1*parseInt(t.css("margin-left"),10)},getTop:function(t){return-1*parseInt(t.css("margin-top"),10)}},transform:{getLeft:function(t){var e=getComputedStyle(t[0])[f];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(t){var e=getComputedStyle(t[0])[f];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[5],10):0}}},l={position:{setLeft:function(t,e){t.css("left",e)},setTop:function(t,e){t.css("top",e)}},transform:{setPosition:function(t,e,i,s,o){t[0].style[f]="translate3d("+(e-i)+"px, "+(s-o)+"px, 0)"}}},f=function(){var e,i=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,s=t("script")[0].style,o="";for(e in s)if(i.test(e)){o=e.match(i)[0];break}return"WebkitOpacity"in s&&(o="Webkit"),"KhtmlOpacity"in s&&(o="Khtml"),function(t){return o+(o.length>0?t.charAt(0).toUpperCase()+t.slice(1):t)}}()("transform"),c=t("<div />",{style:"background:#fff"}).css("background-position-x")!==s,h=c?function(t,e,i){t.css({"background-position-x":e,"background-position-y":i})}:function(t,e,i){t.css("background-position",e+" "+i)},p=c?function(t){return[t.css("background-position-x"),t.css("background-position-y")]}:function(t){return t.css("background-position").split(" ")},d=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};o.prototype={init:function(){this.options.name=n+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===i.body&&(this.element=e),this.$scrollElement=t(this.element),this.$element=this.element===e?t("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==s?t(this.options.viewportElement):this.$scrollElement[0]===e||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var t=this,e=a[t.options.scrollProperty];this._getScrollLeft=function(){return e.getLeft(t.$scrollElement)},this._getScrollTop=function(){return e.getTop(t.$scrollElement)}},_defineSetters:function(){var e=this,i=a[e.options.scrollProperty],s=l[e.options.positionProperty],o=i.setLeft,n=i.setTop;this._setScrollLeft="function"==typeof o?function(t){o(e.$scrollElement,t)}:t.noop,this._setScrollTop="function"==typeof n?function(t){n(e.$scrollElement,t)}:t.noop,this._setPosition=s.setPosition||function(t,i,o,n,r){e.options.horizontalScrolling&&s.setLeft(t,i,o),e.options.verticalScrolling&&s.setTop(t,n,r)}},_handleWindowLoadAndResize:function(){var i=this,s=t(e);i.options.responsive&&s.bind("load."+this.name,(function(){i.refresh()})),s.bind("resize."+this.name,(function(){i._detectViewport(),i.options.responsive&&i.refresh()}))},refresh:function(i){var s=this,o=s._getScrollLeft(),n=s._getScrollTop();i&&i.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),i&&i.firstLoad&&/WebKit/.test(navigator.userAgent)&&t(e).load((function(){var t=s._getScrollLeft(),e=s._getScrollTop();s._setScrollLeft(t+1),s._setScrollTop(e+1),s._setScrollLeft(t),s._setScrollTop(e)})),this._setScrollLeft(o),this._setScrollTop(n)},_detectViewport:function(){var t=this.$viewportElement.offset(),e=null!==t&&t!==s;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=e?t.top:0,this.viewportOffsetLeft=e?t.left:0},_findParticles:function(){var e=this;if(this._getScrollLeft(),this._getScrollTop(),this.particles!==s)for(var i=this.particles.length-1;i>=0;i--)this.particles[i].$element.data("stellar-elementIsActive",s);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each((function(){var i,o,n,r,a,l,f,c,h,p=t(this),d=0,u=0,g=0,m=0;if(p.data("stellar-elementIsActive")){if(p.data("stellar-elementIsActive")!==this)return}else p.data("stellar-elementIsActive",this);e.options.showElement(p),p.data("stellar-startingLeft")?(p.css("left",p.data("stellar-startingLeft")),p.css("top",p.data("stellar-startingTop"))):(p.data("stellar-startingLeft",p.css("left")),p.data("stellar-startingTop",p.css("top"))),n=p.position().left,r=p.position().top,a="auto"===p.css("margin-left")?0:parseInt(p.css("margin-left"),10),l="auto"===p.css("margin-top")?0:parseInt(p.css("margin-top"),10),c=p.offset().left-a,h=p.offset().top-l,p.parents().each((function(){var e=t(this);return!0===e.data("stellar-offset-parent")?(d=g,u=m,f=e,!1):(g+=e.position().left,void(m+=e.position().top))})),i=p.data("stellar-horizontal-offset")!==s?p.data("stellar-horizontal-offset"):f!==s&&f.data("stellar-horizontal-offset")!==s?f.data("stellar-horizontal-offset"):e.horizontalOffset,o=p.data("stellar-vertical-offset")!==s?p.data("stellar-vertical-offset"):f!==s&&f.data("stellar-vertical-offset")!==s?f.data("stellar-vertical-offset"):e.verticalOffset,e.particles.push({$element:p,$offsetParent:f,isFixed:"fixed"===p.css("position"),horizontalOffset:i,verticalOffset:o,startingPositionLeft:n,startingPositionTop:r,startingOffsetLeft:c,startingOffsetTop:h,parentOffsetLeft:d,parentOffsetTop:u,stellarRatio:p.data("stellar-ratio")!==s?p.data("stellar-ratio"):1,width:p.outerWidth(!0),height:p.outerHeight(!0),isHidden:!1})}))},_findBackgrounds:function(){var e,i=this,o=this._getScrollLeft(),n=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(e=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(e=e.add(this.$element)),e.each((function(){var e,r,a,l,f,c,d,u=t(this),g=p(u),m=0,v=0,L=0,_=0;if(u.data("stellar-backgroundIsActive")){if(u.data("stellar-backgroundIsActive")!==this)return}else u.data("stellar-backgroundIsActive",this);u.data("stellar-backgroundStartingLeft")?h(u,u.data("stellar-backgroundStartingLeft"),u.data("stellar-backgroundStartingTop")):(u.data("stellar-backgroundStartingLeft",g[0]),u.data("stellar-backgroundStartingTop",g[1])),a="auto"===u.css("margin-left")?0:parseInt(u.css("margin-left"),10),l="auto"===u.css("margin-top")?0:parseInt(u.css("margin-top"),10),f=u.offset().left-a-o,c=u.offset().top-l-n,u.parents().each((function(){var e=t(this);return!0===e.data("stellar-offset-parent")?(m=L,v=_,d=e,!1):(L+=e.position().left,void(_+=e.position().top))})),e=u.data("stellar-horizontal-offset")!==s?u.data("stellar-horizontal-offset"):d!==s&&d.data("stellar-horizontal-offset")!==s?d.data("stellar-horizontal-offset"):i.horizontalOffset,r=u.data("stellar-vertical-offset")!==s?u.data("stellar-vertical-offset"):d!==s&&d.data("stellar-vertical-offset")!==s?d.data("stellar-vertical-offset"):i.verticalOffset,i.backgrounds.push({$element:u,$offsetParent:d,isFixed:"fixed"===u.css("background-attachment"),horizontalOffset:e,verticalOffset:r,startingValueLeft:g[0],startingValueTop:g[1],startingBackgroundPositionLeft:isNaN(parseInt(g[0],10))?0:parseInt(g[0],10),startingBackgroundPositionTop:isNaN(parseInt(g[1],10))?0:parseInt(g[1],10),startingPositionLeft:u.position().left,startingPositionTop:u.position().top,startingOffsetLeft:f,startingOffsetTop:c,parentOffsetLeft:m,parentOffsetTop:v,stellarRatio:u.data("stellar-background-ratio")===s?1:u.data("stellar-background-ratio")})})))},_reset:function(){var t,e,i,s,o;for(o=this.particles.length-1;o>=0;o--)e=(t=this.particles[o]).$element.data("stellar-startingLeft"),i=t.$element.data("stellar-startingTop"),this._setPosition(t.$element,e,e,i,i),this.options.showElement(t.$element),t.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(o=this.backgrounds.length-1;o>=0;o--)(s=this.backgrounds[o]).$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),h(s.$element,s.startingValueLeft,s.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=t.noop,t(e).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var i=this,s=t(e);s.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),s.bind("resize.horizontal-"+this.name,(function(){i.horizontalOffset=i.options.horizontalOffset()}))):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),s.bind("resize.vertical-"+this.name,(function(){i.verticalOffset=i.options.verticalOffset()}))):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var t,e,i,s,o,n,r,a,l=this._getScrollLeft(),f=this._getScrollTop(),c=!0,p=!0;if(this.currentScrollLeft!==l||this.currentScrollTop!==f||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=l,this.currentScrollTop=f,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,a=this.particles.length-1;a>=0;a--)e=(t=this.particles[a]).isFixed?1:0,this.options.horizontalScrolling?n=(s=(l+t.horizontalOffset+this.viewportOffsetLeft+t.startingPositionLeft-t.startingOffsetLeft+t.parentOffsetLeft)*-(t.stellarRatio+e-1)+t.startingPositionLeft)-t.startingPositionLeft+t.startingOffsetLeft:(s=t.startingPositionLeft,n=t.startingOffsetLeft),this.options.verticalScrolling?r=(o=(f+t.verticalOffset+this.viewportOffsetTop+t.startingPositionTop-t.startingOffsetTop+t.parentOffsetTop)*-(t.stellarRatio+e-1)+t.startingPositionTop)-t.startingPositionTop+t.startingOffsetTop:(o=t.startingPositionTop,r=t.startingOffsetTop),this.options.hideDistantElements&&(p=!this.options.horizontalScrolling||n+t.width>(t.isFixed?0:l)&&n<(t.isFixed?0:l)+this.viewportWidth+this.viewportOffsetLeft,c=!this.options.verticalScrolling||r+t.height>(t.isFixed?0:f)&&r<(t.isFixed?0:f)+this.viewportHeight+this.viewportOffsetTop),p&&c?(t.isHidden&&(this.options.showElement(t.$element),t.isHidden=!1),this._setPosition(t.$element,s,t.startingPositionLeft,o,t.startingPositionTop)):t.isHidden||(this.options.hideElement(t.$element),t.isHidden=!0);for(a=this.backgrounds.length-1;a>=0;a--)e=(i=this.backgrounds[a]).isFixed?0:1,h(i.$element,this.options.horizontalScrolling?(l+i.horizontalOffset-this.viewportOffsetLeft-i.startingOffsetLeft+i.parentOffsetLeft-i.startingBackgroundPositionLeft)*(e-i.stellarRatio)+"px":i.startingValueLeft,this.options.verticalScrolling?(f+i.verticalOffset-this.viewportOffsetTop-i.startingOffsetTop+i.parentOffsetTop-i.startingBackgroundPositionTop)*(e-i.stellarRatio)+"px":i.startingValueTop)}},_handleScrollEvent:function(){var t=this,e=!1,i=function(){t._repositionElements(),e=!1},s=function(){e||(d(i),e=!0)};this.$scrollElement.bind("scroll."+this.name,s),s()},_startAnimationLoop:function(){var t=this;this._animationLoop=function(){d(t._animationLoop),t._repositionElements()},this._animationLoop()}},t.fn[n]=function(e){var i=arguments;return e===s||"object"==typeof e?this.each((function(){t.data(this,"plugin_"+n)||t.data(this,"plugin_"+n,new o(this,e))})):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each((function(){var s=t.data(this,"plugin_"+n);s instanceof o&&"function"==typeof s[e]&&s[e].apply(s,Array.prototype.slice.call(i,1)),"destroy"===e&&t.data(this,"plugin_"+n,null)})):void 0},t[n]=function(){var i=t(e);return i.stellar.apply(i,Array.prototype.slice.call(arguments,0))},t[n].scrollProperty=a,t[n].positionProperty=l,e.Stellar=o}(jQuery,this,document);