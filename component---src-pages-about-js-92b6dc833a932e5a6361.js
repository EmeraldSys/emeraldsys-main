(self.webpackChunkemerald_sys_about=self.webpackChunkemerald_sys_about||[]).push([[682],{6218:function(t,n,e){e(5743);var r=function(){if("object"==typeof self&&self)return self;if("object"==typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};t.exports=function(){if(this)return this;if("object"==typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(t){return r()}try{return __global__||r()}finally{delete Object.prototype.__global__}}()},2960:function(t,n,e){var r;if(e(5743),"object"==typeof globalThis)r=globalThis;else try{r=e(6218)}catch(c){}finally{if(r||"undefined"==typeof window||(r=window),!r)throw new Error("Could not determine global this")}var o=r.WebSocket||r.MozWebSocket,i=e(7284);function a(t,n){return n?new o(t,n):new o(t)}o&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(t){Object.defineProperty(a,t,{get:function(){return o[t]}})})),t.exports={w3cwebsocket:o?a:null,version:i}},7284:function(t,n,e){t.exports=e(9794).version},9662:function(t,n,e){var r=e(614),o=e(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},9670:function(t,n,e){var r=e(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,n,e){var r=e(5656),o=e(1400),i=e(6244),a=function(t){return function(n,e,a){var c,u=r(n),f=i(u),s=o(a,f);if(t&&e!=e){for(;f>s;)if((c=u[s++])!=c)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},4326:function(t,n,e){var r=e(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},9920:function(t,n,e){var r=e(2597),o=e(3887),i=e(1236),a=e(3070);t.exports=function(t,n,e){for(var c=o(n),u=a.f,f=i.f,s=0;s<c.length;s++){var l=c[s];r(t,l)||e&&r(e,l)||u(t,l,f(n,l))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},8052:function(t,n,e){var r=e(614),o=e(3070),i=e(6339),a=e(3072);t.exports=function(t,n,e,c){c||(c={});var u=c.enumerable,f=void 0!==c.name?c.name:n;if(r(e)&&i(e,f,c),c.global)u?t[n]=e:a(n,e);else{try{c.unsafe?t[n]&&(u=!0):delete t[n]}catch(s){}u?t[n]=e:o.f(t,n,{value:e,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},3072:function(t,n,e){var r=e(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),a=e(8113),c=i.process,u=i.Deno,f=c&&c.versions||u&&u.version,s=f&&f.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),a=e(8052),c=e(3072),u=e(9920),f=e(4705);t.exports=function(t,n){var e,s,l,p,v,b=t.target,d=t.global,m=t.stat;if(e=d?r:m?r[b]||c(b,{}):(r[b]||{}).prototype)for(s in n){if(p=n[s],l=t.dontCallGetSet?(v=o(e,s))&&v.value:e[s],!f(d?s:b+(m?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(e,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},4374:function(t,n,e){var r=e(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,n,e){var r=e(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,n,e){var r=e(9781),o=e(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,f=c&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:f}},1702:function(t,n,e){var r=e(4374),o=Function.prototype,i=o.bind,a=o.call,c=r&&i.bind(a,a);t.exports=r?function(t){return t&&c(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},5005:function(t,n,e){var r=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t]):r[t]&&r[t][n]}},8173:function(t,n,e){var r=e(9662);t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:function(t,n,e){var r=e(1702),o=e(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(1702),o=e(7293),i=e(4326),a=Object,c=r("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):a(t)}:a},2788:function(t,n,e){var r=e(1702),o=e(614),i=e(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:function(t,n,e){var r,o,i,a=e(8536),c=e(7854),u=e(1702),f=e(111),s=e(8880),l=e(2597),p=e(5465),v=e(6200),b=e(3501),d="Object already initialized",m=c.TypeError,y=c.WeakMap;if(a||p.state){var g=p.state||(p.state=new y),h=u(g.get),w=u(g.has),x=u(g.set);r=function(t,n){if(w(g,t))throw new m(d);return n.facade=t,x(g,t,n),n},o=function(t){return h(g,t)||{}},i=function(t){return w(g,t)}}else{var E=v("state");b[E]=!0,r=function(t,n){if(l(t,E))throw new m(d);return n.facade=t,s(t,E,n),n},o=function(t){return l(t,E)?t[E]:{}},i=function(t){return l(t,E)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw m("Incompatible receiver, "+t+" required");return e}}}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,n,e){var r=e(7293),o=e(614),i=/#|\.prototype\./,a=function(t,n){var e=u[c(t)];return e==s||e!=f&&(o(n)?r(n):!!n)},c=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=a.data={},f=a.NATIVE="N",s=a.POLYFILL="P";t.exports=a},111:function(t,n,e){var r=e(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,n,e){var r=e(5005),o=e(614),i=e(7976),a=e(3307),c=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var n=r("Symbol");return o(n)&&i(n.prototype,c(t))}},6244:function(t,n,e){var r=e(7466);t.exports=function(t){return r(t.length)}},6339:function(t,n,e){var r=e(7293),o=e(614),i=e(2597),a=e(9781),c=e(6530).CONFIGURABLE,u=e(2788),f=e(9909),s=f.enforce,l=f.get,p=Object.defineProperty,v=a&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),d=t.exports=function(t,n,e){"Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(n="get "+n),e&&e.setter&&(n="set "+n),(!i(t,"name")||c&&t.name!==n)&&(a?p(t,"name",{value:n,configurable:!0}):t.name=n),v&&e&&i(e,"arity")&&t.length!==e.arity&&p(t,"length",{value:e.arity});try{e&&i(e,"constructor")&&e.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=s(t);return i(r,"source")||(r.source=b.join("string"==typeof n?n:"")),t};Function.prototype.toString=d((function(){return o(this)&&l(this).source||u(this)}),"toString")},4758:function(t){var n=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?e:n)(r)}},133:function(t,n,e){var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,n,e){var r=e(7854),o=e(614),i=e(2788),a=r.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},3070:function(t,n,e){var r=e(9781),o=e(4664),i=e(3353),a=e(9670),c=e(4948),u=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";n.f=r?i?function(t,n,e){if(a(t),n=c(n),a(e),"function"==typeof t&&"prototype"===n&&"value"in e&&v in e&&!e.writable){var r=s(t,n);r&&r.writable&&(t[n]=e.value,e={configurable:p in e?e.configurable:r.configurable,enumerable:l in e?e.enumerable:r.enumerable,writable:!1})}return f(t,n,e)}:f:function(t,n,e){if(a(t),n=c(n),a(e),o)try{return f(t,n,e)}catch(r){}if("get"in e||"set"in e)throw u("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(6916),i=e(5296),a=e(9114),c=e(5656),u=e(4948),f=e(2597),s=e(4664),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=c(t),n=u(n),s)try{return l(t,n)}catch(e){}if(f(t,n))return a(!o(i.f,t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},7976:function(t,n,e){var r=e(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,n,e){var r=e(1702),o=e(2597),i=e(5656),a=e(1318).indexOf,c=e(3501),u=r([].push);t.exports=function(t,n){var e,r=i(t),f=0,s=[];for(e in r)!o(c,e)&&o(r,e)&&u(s,e);for(;n.length>f;)o(r,e=n[f++])&&(~a(s,e)||u(s,e));return s}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},2140:function(t,n,e){var r=e(6916),o=e(614),i=e(111),a=TypeError;t.exports=function(t,n){var e,c;if("string"===n&&o(e=t.toString)&&!i(c=r(e,t)))return c;if(o(e=t.valueOf)&&!i(c=r(e,t)))return c;if("string"!==n&&o(e=t.toString)&&!i(c=r(e,t)))return c;throw a("Can't convert object to primitive value")}},3887:function(t,n,e){var r=e(5005),o=e(1702),i=e(8006),a=e(5181),c=e(9670),u=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(c(t)),e=a.f;return e?u(n,e(t)):n}},4488:function(t){var n=TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3072),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.24.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,n,e){var r=e(9303),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9303:function(t,n,e){var r=e(4758);t.exports=function(t){var n=+t;return n!=n||0===n?0:r(n)}},7466:function(t,n,e){var r=e(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,n,e){var r=e(6916),o=e(111),i=e(2190),a=e(8173),c=e(2140),u=e(5112),f=TypeError,s=u("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var e,u=a(t,s);if(u){if(void 0===n&&(n="default"),e=r(u,t,n),!o(e)||i(e))return e;throw f("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},4948:function(t,n,e){var r=e(7593),o=e(2190);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},6330:function(t){var n=String;t.exports=function(t){try{return n(t)}catch(e){return"Object"}}},9711:function(t,n,e){var r=e(1702),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,n,e){var r=e(9781),o=e(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(2597),a=e(9711),c=e(133),u=e(3307),f=o("wks"),s=r.Symbol,l=s&&s.for,p=u?s:s&&s.withoutSetter||a;t.exports=function(t){if(!i(f,t)||!c&&"string"!=typeof f[t]){var n="Symbol."+t;c&&i(s,t)?f[t]=s[t]:f[t]=u&&l?l(n):p(n)}return f[t]}},5837:function(t,n,e){e(2109)({global:!0},{globalThis:e(7854)})},5743:function(t,n,e){e(5837)},8285:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return _}});var r,o,i,a,c,u,f,s,l,p,v,b,d,m,y,g,h,w,x,E=e(1880),P=e(7294),I=e(5414),j=e(297),A=e(3494),S=(e(2960),A.ZP.div(r||(r=(0,E.Z)(['\n    background: #222;\n    box-shadow: 3px 3px #333;\n    width: 550px;\n    padding: 20px;\n    border-radius: 5px;\n    margin: 25% auto;\n    color: #fff;\n    font-family: "Ubuntu", monospace, sans-serif;\n'])))),Z=A.ZP.div(o||(o=(0,E.Z)(["\n    font-weight: 700;\n    font-size: 35px;\n"]))),O=A.ZP.div(i||(i=(0,E.Z)(["\n    margin-top: 15px;\n    font-size: 18px;\n"]))),M=A.ZP.img(a||(a=(0,E.Z)(["\n    float: left;\n    border-radius: 5px;\n    margin-right: 10px;\n"]))),k=A.ZP.div(c||(c=(0,E.Z)(["\n    display: flex;\n    flex-direction: row;\n    margin-top: 15px;\n    min-height: 45px;\n"]))),R=A.ZP.div(u||(u=(0,E.Z)(["\n    padding: 5px;\n"]))),C=A.ZP.div(f||(f=(0,E.Z)([""]))),G=A.ZP.img(s||(s=(0,E.Z)(["\n    float: left;\n    height: 48px;\n    border-radius: 5px;\n"]))),D=A.ZP.span(l||(l=(0,E.Z)(["\n    position: relative;\n    margin-left: 10px;\n"]))),Y=A.ZP.div(p||(p=(0,E.Z)(["\n    position: relative;\n    display: block;\n"]))),B=A.ZP.span(v||(v=(0,E.Z)(["\n    color: ",";\n    margin-left: 10px;\n"])),(function(t){return t.statusColor})),z=A.ZP.div(b||(b=(0,E.Z)(["\n    padding: 5px;\n"]))),L=A.ZP.div(d||(d=(0,E.Z)(["\n    position: relative;\n    display: inline;\n"]))),N=A.ZP.img(m||(m=(0,E.Z)(["\n    height: 48px;\n    border-radius: 5px;\n"]))),J=A.ZP.img(y||(y=(0,E.Z)(["\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    height: 14px;\n"]))),T=A.ZP.div(g||(g=(0,E.Z)(["\n    float: right;\n"]))),U=A.ZP.span(h||(h=(0,E.Z)(["\n    position: relative;\n    margin-left: 10px;\n"]))),F=A.ZP.div(w||(w=(0,E.Z)(["\n    position: relative;\n    display: block;\n"]))),W=A.ZP.span(x||(x=(0,E.Z)(["\n    position: relative;\n    margin-left: 10px;\n"]))),_=function(){var t=P.useState({spotify:{track_id:"2I4omGCso5PnqRmjfbJWcM",timestamps:{start:1659909668992,end:1659909847251},song:"Bittersweet Melody - Marcus James Remix",artist:"Said The Sky; FRND; Marcus James",album_art_url:"https://i.scdn.co/image/ab67616d0000b2739a7ffcb5154d11fe92c8cfc2",album:"Sentiment (The Remixes)"},listening_to_spotify:!0,kv:{website:"https://www.emeraldsys.xyz",pronouns:"he/him",birthday:"07/06/2004"},discord_user:{username:"ryand",public_flags:256,id:"660292639412846621",discriminator:"4175",bot:!1,avatar:"2643fb9c7d17ca57223563669b074a70"},discord_status:"online",activities:[{type:2,timestamps:{start:1659909668992,end:1659909847251},sync_id:"2I4omGCso5PnqRmjfbJWcM",state:"Said The Sky; FRND; Marcus James",session_id:"956edc76061c94ba01ef3bd68893b9c1",party:{id:"spotify:660292639412846621"},name:"Spotify",id:"spotify:1",flags:48,details:"Bittersweet Melody - Marcus James Remix",created_at:1659909669011,assets:{large_text:"Sentiment (The Remixes)",large_image:"spotify:ab67616d0000b2739a7ffcb5154d11fe92c8cfc2"}}],active_on_discord_web:!1,active_on_discord_mobile:!1,active_on_discord_desktop:!0}),n=t[0];t[1];return P.createElement(P.Fragment,null,P.createElement(I.q,null,P.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),P.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),P.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap",rel:"stylesheet"}),P.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),P.createElement("title",null,"EmeraldSys | About")),P.createElement(j.Z,null),P.createElement(S,null,P.createElement(M,{src:"data:image/gif;base64,R0lGODlhLAAsAPcAAEFBQfn//uylqr29vf3u8+yzuv/8/pmZmdHR0URERPqVove8wjk5Od3d3fj4+P+ZngsLCz4+Pk1NTfb29sXFxfLy8q2trbm5uc3NzfOkq/OYno2NjbGxsaGhobW1taioqPyaoKSkpImJif3j5P/6/Xp6ev3Y3PrM056envGrtDExMWxsbHFxcf/5+v+aozQ0NOyts//8/IWFhZWVlerq6v2coYCAgPz//PLEy319fSkpKf719VFRUejo6PrT2P7d4iUlJfDX1vLa3WJiYvT09C4uLlZWVgEBAR0dHeLi4u/v7/Dw8P6cnv///0pKSiEhIezEyGhoaMrKyuXl5ebm5hgYGGVlZf6VnvrFyl5eXhQUFOzs7NTU1HZ2dvmYn/759v/3+PLDxuDg4PTq7/zJzO69we/M1Pudofbd4Pjk6sDAwPujqviZotjY2NbW1u2eo/O5vv6apfvBxEhISBAQEPqWnfLU05GRkf78+vzy7v7++sPDw/aVncfHx/qts/Tj4/Kip1lZWfTg6f+XoPLIzvuepf7u7/zQ1fTU2/ubotvb2wYGBvaZoPHj3/q1v/ycqP/w8fStu/+Yo/r1+vecovv6//q4u/O2v/rx9/iapQICAv/p6vqqr/v++v71/P2Smvz8/v2bo/uytPTp5v/q7u+Znvft7v78+P708ffp7ujE0fn29f/z9PCfpf+anP2Wm++pr/Kan/GcovLPz/v8+fv0/PafpPicn/iVm/aWoPv27/rp6/avtfuXnv39+fegpveYnP+TnPmTm/jv8vWnr/7+/v39/f/+//z8/P6bofv7+/7///r6+v3//////v/+/v+aof///f/+/f7+//z////+/P///P3//v7//v7//f+bov3+//+ZoP6boP+bn/7+/f3//P3+/v6aoP7+/Pz9/fz+/vz+//z//fv9/P6aof38/f79+/3++PnU5PqWlvr7+fjz+fr8/N/f3/yjtf38/PKbqPyRofuYovzv7PufsP//+P/n6vqWp/v4+/z4+QAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQ0Y0MDJGRUJBM0QxMUU4OUUwQ0RBRkIyODMyNDNDRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQ0Y0MDJGRkJBM0QxMUU4OUUwQ0RBRkIyODMyNDNDRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFDRjQwMkZDQkEzRDExRTg5RTBDREFGQjI4MzI0M0NEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFDRjQwMkZEQkEzRDExRTg5RTBDREFGQjI4MzI0M0NEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkECRQA/wAsAAAAACwALAAACP8A/wkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyYGLTg6EEEGLykUJpsyAcDImMiIraIpcxLIBsp9TXoSEgMSKhSk/kw74CAHIhi1Jo/70qGWFT6lSOS56MQCrV4oQwhKEkAWpV6wTIRiR0aUITS0biJz9GhHChj8jkE2RgMTC3LMSgWw5cWIElgYRrv7NGlECPnw7fpDZYWHGYqwpH0KwgkUOJ0dJ5UbdkmWFaKw5JAAJmzkhhBXIdqxZs+OshUVauMwlMmXABiNIxB7c/POQiblcIljZgiGHXt3IZ2R5EXyshMtSEUcAkoDI6bNbuIRvWBEhOIQiDb5fnoIBg4QERqBfJtLAQo4XRRJ08aAY+5YBFKiHHW8DyCDBCxGsEAIXAmLnoFRbUCBdBMrNgAFUD2aIFREYjBfBC0ZsMIBZGpZ4U31dJPBCAjnw16CJixFoIIIKwghjhNLZqOOOOgYEACH5BAUUAP8ALAAAAAAsACwAAAj/AP8JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmBi04OhBBBi8pFCabMgHAyJjIiK2iKXMSyAbKfU16EhIDEioUpP5MO+AgByIYtSaP+9KhlhU+pUjkuejEAq1eJEHQWhJAFqVesECFIkCEjCxCxWjYQOfv1YQQhJ5CZsLOhyCIkFuiehZgDH5Ydjkwg4/Iih+DBD2eMGHHiUFIuRq4+jiqWoRU5JziFGpF0i+afW7KsmOs1h4S3EFImLIL0hJ80gi0s0sKFLpEpAzYYQRL2IAQKP3c85hLByhYMjqf0pstlRpYXxAl22Yy1QYQIQBIQdmFNdwuXECsiINECZMAU8tynYMAgIYGR6ZuJNLCQI0GRBF14cNpmWwxAAXzc3VSgDBK8EMEKIXCBYIIURrUFBdZ9Z8UMGEBV4YdREYEBehG8YMQG7oGo4k37dZHACwnkIOCEKz722wAMOghhjSpeaB2PQAapYkAAOw=="}),P.createElement(Z,null,"Howdy!"),P.createElement(O,null,"I am a freelance developer, learning and working on many projects and also contributing to some. I founded EmeraldSys back in 2018 to build a structure that will support my ongoing projects."),n&&P.createElement(k,null,P.createElement(R,null,P.createElement(C,null,P.createElement(G,{src:"https://cdn.discordapp.com/avatars/"+n.discord_user.id+"/"+n.discord_user.avatar+".png"}),P.createElement(D,null,n.discord_user.username,"#",n.discord_user.discriminator),P.createElement(Y,null,P.createElement(B,{statusColor:"var(--presence-"+n.discord_status+")"},n.discord_status)))),n.listening_to_spotify&&P.createElement(z,null,P.createElement(L,null,P.createElement(N,{src:n.spotify.album_art_url}),P.createElement(J,{src:"https://cdn-icons-png.flaticon.com/512/174/174872.png"})),P.createElement(T,null,P.createElement(U,null,n.spotify.song),P.createElement(F,null,P.createElement(W,null,"by ",n.spotify.artist)),P.createElement(F,null,P.createElement(W,null,"on ",n.spotify.album)))))))}},9794:function(t){"use strict";t.exports={version:"1.0.34"}}}]);
//# sourceMappingURL=component---src-pages-about-js-92b6dc833a932e5a6361.js.map