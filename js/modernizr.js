!function(f,d,u){function m(e,t){return typeof e===t}function y(e){return"function"!=typeof d.createElement?d.createElement(e):_?d.createElementNS.call(d,"http://www.w3.org/2000/svg",e):d.createElement.apply(d,arguments)}function g(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function v(e,t,n,o){var r,s,a,i,l="modernizr",c=y("div");(i=d.body)||((i=y(_?"svg":"body")).fake=!0);if(parseInt(n,10))for(;n--;)(s=y("div")).id=o?o[n]:l+(n+1),c.appendChild(s);return(r=y("style")).type="text/css",r.id="s"+l,(i.fake?i:c).appendChild(r),i.appendChild(c),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(d.createTextNode(e)),c.id=l,i.fake&&(i.style.background="",i.style.overflow="hidden",a=P.style.overflow,P.style.overflow="hidden",P.appendChild(i)),r=t(c,e),i.fake?(i.parentNode.removeChild(i),P.style.overflow=a,P.offsetHeight):c.parentNode.removeChild(c),!!r}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function x(e,t,n,o){function r(){a&&(delete L.style,delete L.modElem)}if(o=void 0!==o&&o,void 0!==n){var s=function(e,t){var n=e.length;if("CSS"in f&&"supports"in f.CSS){for(;n--;)if(f.CSS.supports(h(e[n]),t))return!0;return!1}if("CSSSupportsRule"in f){for(var o=[];n--;)o.push("("+h(e[n])+":"+t+")");return v("@supports ("+(o=o.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return u}(e,n);if(void 0!==s)return s}for(var a,i,l,c,d,p=["modernizr","tspan","samp"];!L.style&&p.length;)a=!0,L.modElem=y(p.shift()),L.style=L.modElem.style;for(l=e.length,i=0;i<l;i++)if(c=e[i],d=L.style[c],~(""+c).indexOf("-")&&(c=g(c)),L.style[c]!==u){if(o||void 0===n)return r(),"pfx"!=t||c;try{L.style[c]=n}catch(e){}if(L.style[c]!=d)return r(),"pfx"!=t||c}return r(),!1}function o(e,t,n,o,r){var s,a,i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+j.join(i+" ")+i).split(" ");if(m(t,"string")||void 0===t)return x(l,t,o,r);var c=l=(e+" "+N.join(i+" ")+i).split(" "),d=t,p=n;for(a in c)if(c[a]in d)if(!1===p)return c[a];else{s=d[c[a]];if(m(s,"function")){var f=s;var u=p||d;return function(){return f.apply(u,arguments)};return}else return s}return!1}function r(e,t,n){return o(e,u,u,t,n)}function s(e){var t,n=E.length,o=f.CSSRule;if(void 0===o)return u;if(e){if((t=(e=e.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in o)return"@"+e;for(var r=0;r<n;r++){var s=E[r];if(s.toUpperCase()+"_"+t in o)return"@-"+s.toLowerCase()+"-"+e}}return!1}var e,t,n,a,i,l,c,p,T,w=[],b=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},S=function(){},P=(S.prototype=C,(S=new S).addTest("svg",!!d.createElementNS&&!!d.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),d.documentElement),_="svg"===P.nodeName.toLowerCase(),E=(S.addTest("audio",function(){var e=y("audio"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return t}),S.addTest("canvas",function(){var e=y("canvas");return!(!e.getContext||!e.getContext("2d"))}),S.addTest("cssremunit",function(){var e=y("a").style;try{e.fontSize="3rem"}catch(e){}return/rem/.test(e.fontSize)}),C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""]),z=(C._prefixes=E,S.addTest("csscalc",function(){var e=y("a");return e.style.cssText="width:"+E.join("calc(10px);width:"),!!e.style.length}),S.addTest("cssgradients",function(){for(var e="background-image:",t="",n=0,o=E.length-1;n<o;n++)t+=e+E[n]+"linear-gradient("+(0===n?"to ":"")+"left top, #9f9, white);";S._config.usePrefixes&&(t+=e+"-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");var r=y("a").style;return r.cssText=t,-1<(""+r.backgroundImage).indexOf("gradient")}),"CSS"in f&&"supports"in f.CSS),k="supportsCSS"in f,$=(S.addTest("supports",z||k),C.testStyles=v),z=(S.addTest("touchevents",function(){var t,e;return"ontouchstart"in f||f.DocumentTouch&&d instanceof DocumentTouch?t=!0:(e=["@media (",E.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join(""),$(e,function(e){t=9===e.offsetTop})),t}),"Moz O ms Webkit"),j=C._config.usePrefixes?z.split(" "):[],N=(C._cssomPrefixes=j,C.atRule=s,C._config.usePrefixes?z.toLowerCase().split(" "):[]),A=(C._domPrefixes=N,{elem:y("modernizr")}),L=(S._q.push(function(){delete A.elem}),{style:A.elem.style}),k=(S._q.unshift(function(){delete L.style}),S.addTest("video",function(){var e=y("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t}),C.testAllProps=o,C.testAllProps=r,S.addTest("cssanimations",r("animationName","a",!0)),S.addTest("cssfilters",function(){var e;return S.supports?r("filter","blur(2px)"):((e=y("a")).style.cssText=E.join("filter:blur(2px); "),!!e.style.length&&(d.documentMode===u||9<d.documentMode))}),S.addTest("flexbox",r("flexBasis","1px",!0)),S.addTest("flexboxlegacy",r("boxDirection","reverse",!0)),S.addTest("flexboxtweener",r("flexAlign","end",!0)),S.addTest("flexwrap",r("flexWrap","wrap",!0)),S.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&r("transform","scale(1)",!0)}),S.addTest("csstransforms3d",function(){var e,t=!!r("perspective","1px",!0),n=S._config.usePrefixes;return t&&(!n||"webkitPerspective"in P.style)&&(S.supports?e="@supports (perspective: 1px)":(e="@media (transform-3d)",n&&(e+=",(-webkit-transform-3d)")),$("#modernizr{width:0;height:0}"+(e+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),function(e){t=7===e.offsetWidth&&18===e.offsetHeight})),t}),S.addTest("csstransitions",r("transition","all",!0)),C.prefixed=function(e,t,n){return 0===e.indexOf("@")?s(e):(-1!=e.indexOf("-")&&(e=g(e)),t?o(e,t,n):o(e,"pfx"))});for(c in S.addTest("backgroundblendmode",k("backgroundBlendMode","text")),b)if(b.hasOwnProperty(c)){if(e=[],(t=b[c]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=m(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(l=e[i].split(".")).length?S[l[0]]=a:(!S[l[0]]||S[l[0]]instanceof Boolean||(S[l[0]]=new Boolean(S[l[0]])),S[l[0]][l[1]]=a),w.push((a?"":"no-")+l.join("-"))}z=w,k=P.className,T=S._config.classPrefix||"",_&&(k=k.baseVal),S._config.enableJSClass&&(p=new RegExp("(^|\\s)"+T+"no-js(\\s|$)"),k=k.replace(p,"$1"+T+"js$2")),S._config.enableClasses&&(k+=" "+T+z.join(" "+T),_?P.className.baseVal=k:P.className=k),delete C.addTest,delete C.addAsyncTest;for(var O=0;O<S._q.length;O++)S._q[O]();f.Modernizr=S}(window,document);