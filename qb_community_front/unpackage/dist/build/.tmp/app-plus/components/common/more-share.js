(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/more-share"],{"1d6b":function(e,t,n){"use strict";n.r(t);var r=n("a2ab"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=o.a},"2f77":function(e,t,n){},"4cb8":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},"80c8":function(e,t,n){"use strict";n.r(t);var r=n("4cb8"),o=n("1d6b");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("8bf3");var s=n("2877"),i=Object(s["a"])(o["default"],r["a"],r["b"],!1,null,"6795778b",null);t["default"]=i.exports},"8bf3":function(e,t,n){"use strict";var r=n("2f77"),o=n.n(r);o.a},a2ab:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return u(e)||c(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done);r=!0)if(n.push(s.value),t&&n.length===t)break}catch(c){o=!0,a=c}finally{try{r||null==i["return"]||i["return"]()}finally{if(o)throw a}}return n}function u(e){if(Array.isArray(e))return e}function h(e,t,n,r,o,a,s){try{var i=e[a](s),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function s(e){h(a,r,o,s,i,"next",e)}function i(e){h(a,r,o,s,i,"throw",e)}s(void 0)})}}var p={props:{shareShow:Boolean,shareDate:Object,shares:Object},data:function(){return{title:"",shareText:"",href:"https://uniapp.dcloud.io",image:"",shareType:0,providerList:[]}},watch:{shareDate:function(e,t){this.title=e.title,this.shareText=e.content,this.href=e.url,this.image=e.titlepic,this.shareType=e.shareType}},onReady:function(){var t=this;e.getProvider({service:"share",success:function(e){for(var n=[],r=0;r<e.provider.length;r++)switch(e.provider[r]){case"weixin":n.push({name:"微信好友",id:"weixin",shareIcon:"weixin1",sort:0}),n.push({name:"朋友圈",id:"weixin",type:"WXSenceTimeline",shareIcon:"pengyouquan",sort:1});break;case"sinaweibo":n.push({name:"新浪微博",id:"sinaweibo",shareIcon:"weibo",sort:2});break;case"qq":n.push({name:"QQ好友",id:"qq",shareIcon:"qq1",sort:3});break;default:break}t.providerList=n.sort(function(e,t){return e.sort-t.sort})},fail:function(t){console.log(r("获取分享通道失败",t," at components\\common\\more-share.vue:95")),e.showModal({content:"获取分享通道失败",showCancel:!1})}})},methods:{toggleShare:function(){this.$emit("toggleShare")},updateShareNum:function(){var e=l(o.default.mark(function e(){var t,n;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.shares.sharenum++,e.next=3,this.$http.post("handle/share",{post_id:this.shares.post_id,sharenum:this.shares.sharenum});case 3:t=e.sent,n=s(t,2),n[0],n[1],this.$emit("updateShare",this.shares.sharenum);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),share:function(){var t=l(o.default.mark(function t(n){var a,s=this;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(r("分享通道:"+n.id+"； 分享类型:"+this.shareType," at components\\common\\more-share.vue:118")),this.shareText||1!==this.shareType&&0!==this.shareType){t.next=4;break}return e.showModal({content:"分享内容不能为空",showCancel:!1}),t.abrupt("return");case 4:if(this.image||2!==this.shareType&&0!==this.shareType){t.next=7;break}return e.showModal({content:"分享图片不能为空",showCancel:!1}),t.abrupt("return");case 7:a={provider:n.id,scene:n.type&&"WXSenceTimeline"===n.type?"WXSenceTimeline":"WXSceneSession",type:this.shareType,success:function(t){console.log(r("success",t," at components\\common\\more-share.vue:140")),s.updateShareNum(),e.showModal({content:"分享成功",showCancel:!1})},fail:function(t){console.log(r("fail",t," at components\\common\\more-share.vue:148")),e.showModal({content:t.errMsg,showCancel:!1})},complete:function(){console.log(r("分享操作结束!"," at components\\common\\more-share.vue:155"))}},t.t0=this.shareType,t.next=0===t.t0?11:1===t.t0?16:2===t.t0?18:5===t.t0?20:24;break;case 11:return a.summary=this.shareText,a.imageUrl=this.image,a.title=this.title,a.href=this.href,t.abrupt("break",25);case 16:return a.summary=this.shareText,t.abrupt("break",25);case 18:return a.imageUrl=this.image,t.abrupt("break",25);case 20:return a.imageUrl=this.image?this.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png",a.title=this.title,a.miniProgram={id:"gh_33446d7f7a26",path:"/pages/tabBar/component/component",webUrl:"https://uniapp.dcloud.io",type:0},t.abrupt("break",25);case 24:return t.abrupt("break",25);case 25:if(0!==a.type||"iOS"!==plus.os.name){t.next=29;break}return t.next=28,this.compress();case 28:a.imageUrl=t.sent;case 29:"sinaweibo"===a.provider&&(a.type=1,a.imageUrl=""),"qq"===a.provider&&(a.type=1,a.href=this.href,a.title=this.title),e.share(a);case 32:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}(),compress:function(){console.log(r("开始压缩"," at components\\common\\more-share.vue:204"));var t=this.image;return new Promise(function(n){var o=plus.io.convertAbsoluteFileSystem(t.replace("file://",""));console.log(r("after"+o," at components\\common\\more-share.vue:208")),plus.io.resolveLocalFileSystemURL(o,function(o){o.file(function(o){console.log(r("getFile:"+JSON.stringify(o)," at components\\common\\more-share.vue:212")),o.size>20480&&plus.zip.compressImage({src:t,dst:t.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},function(e){console.log(r("success zip****"+e.size," at components\\common\\more-share.vue:222"));var o=t.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");n(o)},function(t){e.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})},function(t){console.log(r("Resolve file URL failed: "+t.message," at components\\common\\more-share.vue:234")),e.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})}}};t.default=p}).call(this,n("6e42")["default"],n("0de9")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/more-share-create-component',
    {
        'components/common/more-share-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("80c8"))
        })
    },
    [['components/common/more-share-create-component']]
]);                
