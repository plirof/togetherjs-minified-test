!function(e){var o={};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)n.d(t,r,function(o){return e[o]}.bind(null,r));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=1)}([function(e,o){function n(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=0},function(e,o,n){!function(){var e={dontShowClicks:!1,cloneClicks:!1,enableAnalytics:!1,analyticsCode:"UA-35433268-28",hubBase:null,getUserName:null,getUserColor:null,getUserAvatar:null,siteName:null,useMinimizedCode:void 0,on:{},hub_on:{},enableShortcut:!1,toolName:null,findRoom:null,autoStart:!1,suppressJoinConfirmation:!1,suppressInvite:!1,inviteFromRoom:null,storagePrefix:"togetherjs",includeHashInUrl:!1,disableWebRTC:!1,youtube:!0,ignoreMessages:["cursor-update","keydown","scroll-update"],ignoreForms:[":password"]},o="https://togetherjs.com";"__baseUrl__"==o&&(o="");var t=!0,r=localStorage.getItem("togetherjs.baseUrlOverride");if(r){try{r=JSON.parse(r)}catch(e){r=null}if(!r||r.expiresAt<Date.now())localStorage.removeItem("togetherjs.baseUrlOverride");else{o=r.baseUrl;var i=console.warn||console.log;i.call(console,"Using TogetherJS baseUrlOverride:",o),i.call(console,"To undo run: localStorage.removeItem('togetherjs.baseUrlOverride')")}}var s=localStorage.getItem("togetherjs.configOverride");if(s){try{s=JSON.parse(s)}catch(e){s=null}if(!s||s.expiresAt<Date.now())localStorage.removeItem("togetherjs.configOverride");else{for(var a in s)"expiresAt"!=a&&s.hasOwnProperty(a)&&(console.warn("Using TogetherJS configOverride"),console.warn("To undo run: localStorage.removeItem('togetherjs.configOverride')"),window["TogetherJSConfig_"+a]=s[a],console.log("Config override:",a,"=",s[a]))}}var l="unknown",c="";if(c&&""!=c?l=c:c=Date.now()+"","undefined"==typeof console&&(console={}),console.log||(console.log=function(){}),["debug","info","warn","error"].forEach((function(e){console[e]||(console[e]=console.log)})),!o)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var g=u[f].src;if(g&&-1!==g.search(/togetherjs.js(\?.*)?$/)){o=g.replace(/\/*togetherjs.js(\?.*)?$/,""),console.warn("Detected baseUrl as",o);break}if(g&&-1!==g.search(/togetherjs-min.js(\?.*)?$/)){o=g.replace(/\/*togetherjs-min.js(\?.*)?$/,""),console.warn("Detected baseUrl as",o);break}}function h(){if(!document.getElementById("togetherjs-stylesheet")){var e=document.createElement("link");e.id="togetherjs-stylesheet",e.setAttribute("rel","stylesheet"),e.href=o+"/togetherjs/togetherjs.css?bust="+c,document.head.appendChild(e)}}function d(e){var n=document.createElement("script");n.src=o+e+"?bust="+c,document.head.appendChild(n)}o||console.warn("Could not determine TogetherJS's baseUrl (looked for a <script> with togetherjs.js and togetherjs-min.js)");var w=window.TogetherJS=function e(o){if(e.running){(c=e.require("session")).close()}else{e.startup.button=null;try{o&&"object"==typeof o&&(o.target?e.startup.button=o.target:1==o.nodeType?e.startup.button=o:o[0]&&1==o[0].nodeType&&(e.startup.button=o[0]))}catch(e){console.warn("Error determining starting button:",e)}var r,i;window.TowTruckConfig&&(console.warn("TowTruckConfig is deprecated; please use TogetherJSConfig"),window.TogetherJSConfig?console.warn("Ignoring TowTruckConfig in favor of TogetherJSConfig"):window.TogetherJSConfig=TowTruckConfig),window.TogetherJSConfig&&!window.TogetherJSConfig.loaded&&(e.config(window.TogetherJSConfig),window.TogetherJSConfig.loaded=!0);var s={};for(r in window)0===r.indexOf("TogetherJSConfig_on_")?s[i=r.substr("TogetherJSConfig_on_".length)]=window[r]:0===r.indexOf("TogetherJSConfig_")?(i=r.substr("TogetherJSConfig_".length),e.config(i,window[r])):0===r.indexOf("TowTruckConfig_on_")?(i=r.substr("TowTruckConfig_on_".length),console.warn("TowTruckConfig_* is deprecated, please rename",r,"to TogetherJSConfig_on_"+i),s[i]=window[r]):0===r.indexOf("TowTruckConfig_")&&(i=r.substr("TowTruckConfig_".length),console.warn("TowTruckConfig_* is deprecated, please rename",r,"to TogetherJSConfig_"+i),e.config(i,window[r]));var a=e.config.get("on");for(r in s)s.hasOwnProperty(r)&&(a[r]=s[r]);for(r in e.config("on",a),a)e.on(r,a[r]);var l=e.config.get("hub_on");if(l)for(r in l)l.hasOwnProperty(r)&&e.hub.on(r,l[r]);if(e.startup.reason||(e.startup.reason="started"),e._loaded){var c=e.require("session");return h(),void c.start()}e.startup._launch=!0,h();var u=e.config.get("useMinimizedCode");e.config.close("useMinimizedCode"),void 0!==u&&(t=!!u);var f=e._extend(e.requireConfig),g=["session","jquery"];if(!t){if(!n(0).config)throw console.warn("The global require (",n(0),") is not requirejs; please use togetherjs-min.js"),new Error("Conflict with window.require");e.require=void 0}"function"==typeof e.require?e.require(g,w):(f.deps=g,f.callback=w,t||(window.require=f)),d(t?"/togetherjs/togetherjsPackage.js":"/togetherjs/libs/require.js")}function w(o,r){e._loaded=!0,t||(e.require=void 0,e._requireObject=n(0))}};w.pageLoaded=Date.now(),w._extend=function(e,o){for(var n in o||(o=e,e={}),o)o.hasOwnProperty(n)&&(e[n]=o[n]);return e},w._startupInit={button:null,reason:null,continued:!1,_joinShareId:null,_launch:!1},w.startup=w._extend(w._startupInit),w.running=!1,w.requireConfig={context:"togetherjs",baseUrl:o+"/togetherjs",urlArgs:"bust="+c,paths:{jquery:"libs/jquery-1.8.3.min",walkabout:"libs/walkabout/walkabout",esprima:"libs/walkabout/lib/esprima",falafel:"libs/walkabout/lib/falafel",tinycolor:"libs/tinycolor",whrandom:"libs/whrandom/random"}},w._mixinEvents=function(e){return e.on=function(e,o){if("function"!=typeof o)throw console.warn("Bad callback for",this,".once(",e,", ",o,")"),"Error: .once() called with non-callback";if(-1==e.search(" ")){if(this._knownEvents&&-1==this._knownEvents.indexOf(e)){var n=""+this;n.length>20&&(n=n.substr(0,20)+"..."),console.warn(n+".on('"+e+"', ...): unknown event"),console.trace&&console.trace()}this._listeners||(this._listeners={}),this._listeners[e]||(this._listeners[e]=[]),-1==this._listeners[e].indexOf(o)&&this._listeners[e].push(o)}else{e.split(/ +/g).forEach((function(e){this.on(e,o)}),this)}},e.once=function(e,o){if("function"!=typeof o)throw console.warn("Bad callback for",this,".once(",e,", ",o,")"),"Error: .once() called with non-callback";var n="onceCallback_"+e;o[n]||(o[n]=function t(){o.apply(this,arguments),this.off(e,t),delete o[n]}),this.on(e,o[n])},e.off=e.removeListener=function(e,o){if(this._listenerOffs)this._listenerOffs.push([e,o]);else if(-1==e.search(" ")){if(this._listeners&&this._listeners[e])for(var n=this._listeners[e],t=n.length,r=0;r<t;r++)if(n[r]==o){n.splice(r,1);break}}else e.split(/ +/g).forEach((function(e){this.off(e,o)}),this)},e.emit=function(e){var o=this._listenerOffs=[];if(this._listeners&&this._listeners[e]){var n=Array.prototype.slice.call(arguments,1),t=this._listeners[e];t.forEach((function(e){e.apply(this,n)}),this),delete this._listenerOffs,o.length&&o.forEach((function(e){this.off(e[0],e[1])}),this)}},e},w._teardown=function(){var e=w._requireObject||window.require;e.s&&e.s.contexts&&delete e.s.contexts.togetherjs,w._loaded=!1,w.startup=w._extend(w._startupInit),w.running=!1},w._mixinEvents(w),w._knownEvents=["ready","close"],w.toString=function(){return"TogetherJS"};var p="https://hub.togetherjs.com";"__hubUrl__"==p&&(p="https://hub.togetherjs.mozillalabs.com"),e.hubBase=p,w._configuration={},w._defaultConfiguration=e,w._configTrackers={},w._configClosed={},w.config=function(e,o){var n,t;if(1==arguments.length){if("object"!=typeof e)throw new Error("TogetherJS.config(value) must have an object value (not: "+e+")");n=e}else(n={})[e]=o;for(var r in n)if(n.hasOwnProperty(r)&&w._configClosed[r]&&w.running)throw new Error("The configuration "+r+" is finalized and cannot be changed");for(var r in n)if(n.hasOwnProperty(r)&&"loaded"!=r&&"callToStart"!=r){w._defaultConfiguration.hasOwnProperty(r)||console.warn("Unknown configuration value passed to TogetherJS.config():",r);var i=w._configuration[r],s=n[r];w._configuration[r]=s;var a=w._configTrackers[e]||[],l=!1;for(t=0;t<a.length;t++)try{(0,a[t])(s,i)}catch(o){console.warn("Error setting configuration",e,"to",s,":",o,"; reverting to",i),l=!0;break}if(l)for(w._configuration[r]=i,t=0;t<a.length;t++)try{(0,a[t])(s)}catch(o){console.warn("Error REsetting configuration",e,"to",i,":",o,"(ignoring)")}}},w.config.get=function(e){var o=w._configuration[e];return void 0===o&&(w._defaultConfiguration.hasOwnProperty(e)||console.error("Tried to load unknown configuration value:",e),o=w._defaultConfiguration[e]),o},w.config.track=function(e,o){if(!w._defaultConfiguration.hasOwnProperty(e))throw new Error("Configuration is unknown: "+e);return o(w.config.get(e)),w._configTrackers[e]||(w._configTrackers[e]=[]),w._configTrackers[e].push(o),o},w.config.close=function(e){if(!w._defaultConfiguration.hasOwnProperty(e))throw new Error("Configuration is unknown: "+e);w._configClosed[e]=!0},w.reinitialize=function(){w.running&&"function"==typeof w.require&&w.require(["session"],(function(e){e.emit("reinitialize")}))},w.refreshUserData=function(){w.running&&"function"==typeof w.require&&w.require(["session"],(function(e){e.emit("refresh-user-data")}))},w.version=l,w.baseUrl=o,w.hub=w._mixinEvents({}),w._onmessage=function(e){var o=e.type;o=0===o.search(/^app\./)?o.substr("app.".length):"togetherjs."+o,e.type=o,w.hub.emit(e.type,e)},w.send=function(e){if(!w.require)throw"You cannot use TogetherJS.send() when TogetherJS is not running";w.require("session").appSend(e)},w.shareUrl=function(){return w.require?w.require("session").shareUrl():null};var _=null;w.listenForShortcut=function(){console.warn("Listening for alt-T alt-T to start TogetherJS"),w.removeShortcut(),_=function e(o){84==o.which&&o.altKey?e.pressed?w():e.pressed=!0:e.pressed=!1},w.once("ready",w.removeShortcut),document.addEventListener("keyup",_,!1)},w.removeShortcut=function(){_&&(document.addEventListener("keyup",_,!1),_=null)},w.config.track("enableShortcut",(function(e,o){e?w.listenForShortcut():o&&w.removeShortcut()})),w.checkForUsersOnChannel=function(e,o){0===e.search(/^https?:/i)&&(e=e.replace(/^http/i,"ws"));var n=new WebSocket(e),t=!1;n.onmessage=function(e){var r=JSON.parse(e.data);if("init-connection"==r.type){if(t)return console.warn("Somehow received two responses from channel; ignoring second"),void n.close();t=!0,n.close(),o(r.peerCount)}else console.warn("Got unexpected first message (should be init-connection):",r)},n.onclose=n.onerror=function(){t||(console.warn("Socket was closed without receiving answer"),t=!0,o(void 0))}};var v=location.hash.replace(/^#/,""),T=/&?togetherjs=([^&]*)/.exec(v);if(T){w.startup._joinShareId=T[1],w.startup.reason="joined";var b=v.substr(0,T.index)+v.substr(T.index+T[0].length);location.hash=b}function S(){if(w.startup._joinShareId)w();else if(window._TogetherJSBookmarklet)delete window._TogetherJSBookmarklet,w();else{var e=sessionStorage.getItem("togetherjs-session.status");e?(e=JSON.parse(e))&&e.running&&(w.startup.continued=!0,w.startup.reason=e.startupReason,w()):(window.TogetherJSConfig_autoStart||window.TogetherJSConfig&&window.TogetherJSConfig.autoStart)&&(w.startup.reason="joined",w())}}window._TogetherJSShareId&&(w.startup._joinShareId=window._TogetherJSShareId,delete window._TogetherJSShareId),function(){if(!window.TogetherJSConfig_noAutoStart){var e=window.TogetherJSConfig_callToStart;!e&&window.TowTruckConfig_callToStart&&(e=window.TowTruckConfig_callToStart,console.warn("Please rename TowTruckConfig_callToStart to TogetherJSConfig_callToStart")),window.TogetherJSConfig&&window.TogetherJSConfig.callToStart&&(e=window.TogetherJSConfig.callToStart),e?e(S):S()}}(),window.TogetherJSConfig_enableShortcut&&w.listenForShortcut(),window.TowTruck=w}()}]);