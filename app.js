"use strict";function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(i=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,a=t}finally{try{i||null==c.return||c.return()}finally{if(r)throw a}}return n}function _arrayWithHoles(t){if(Array.isArray(t))return t}var $$=document,IP={get:function(t,e){return fetch(t,{method:"GET"}).then(function(t){return"text"===e?Promise.all([t.ok,t.status,t.text(),t.headers]):Promise.all([t.ok,t.status,t.json(),t.headers])}).then(function(t){var e=_slicedToArray(t,4),n=e[0],i=e[1],r=e[2],a=e[3];if(n)return{ok:n,status:i,data:r,headers:a};throw new Error(JSON.stringify(json.error))}).catch(function(t){throw t})},parseIPCz88:function(t,e){IP.get("https://api.ttt.sh/ip/qqwry/".concat(t),"json").then(function(t){$$.getElementById(e).innerHTML=t.data.address})},parseIPIpapi:function(t,e){IP.get("https://api.skk.moe/network/parseIp/v2/".concat(t),"json").then(function(t){$$.getElementById(e).innerHTML="".concat(t.data.country," ").concat(t.data.regionName," ").concat(t.data.city," ").concat(t.data.isp)})},getWebrtcIP:function(){window.RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;var n=new RTCPeerConnection({iceServers:[]}),i=function(){};n.createDataChannel(""),n.createOffer(n.setLocalDescription.bind(n),i),n.onicecandidate=function(t){if(t&&t.candidate&&t.candidate.candidate){var e=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(t.candidate.candidate)[1];$$.getElementById("ip-webrtc").innerHTML=e,IP.parseIPCz88(e,"ip-webrtc-cz88"),n.onicecandidate=i}else $$.getElementById("ip-webrtc").innerHTML="没有查询到 IP"}},getIpipnetIP:function(){IP.get("https://myip.ipip.net","text").then(function(t){return $$.getElementById("ip-ipipnet").innerHTML=t.data})},getTaobaoIP:function(t){$$.getElementById("ip-taobao").innerHTML=t.ip,IP.parseIPCz88(t.ip,"ip-taobao-cz88")},getIpsbIP:function(t){$$.getElementById("ip-ipsb").innerHTML=t.address,$$.getElementById("ip-ipsb-geo").innerHTML="".concat(t.country," ").concat(t.province," ").concat(t.city," ").concat(t.operator)},getIpifyIP:function(){IP.get("https://api.ipify.org/?format=json","json").then(function(t){return $$.getElementById("ip-ipify").innerHTML=t.data.ip,$$.getElementById("ip-ipify-1").innerHTML=t.data.ip,t.data.ip}).then(function(t){IP.parseIPCz88(t,"ip-ipify-cz88"),IP.parseIPIpapi(t,"ip-ipify-ipapi")})}};window.ipCallback=function(t){return IP.getTaobaoIP(t)},IP.getWebrtcIP(),IP.getIpipnetIP(),IP.getIpifyIP();