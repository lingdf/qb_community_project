(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-set-userinfo/user-set-userinfo"],{"37a7":function(e,t,n){"use strict";var i=n("d033"),r=n.n(i);r.a},"85d2":function(e,t,n){"use strict";(function(e){n("78d4"),n("921b");i(n("66fd"));var t=i(n("92d8"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"92d8":function(e,t,n){"use strict";n.r(t);var i=n("effb"),r=n("c7b2");for(var s in r)"default"!==s&&function(e){n.d(t,e,function(){return r[e]})}(s);n("37a7");var a=n("2877"),o=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=o.exports},c7b2:function(e,t,n){"use strict";n.r(t);var i=n("cab7"),r=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=r.a},cab7:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n("a34a")),r=s(n("1bce"));function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return c(e)||u(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done);i=!0)if(n.push(a.value),t&&n.length===t)break}catch(u){r=!0,s=u}finally{try{i||null==o["return"]||o["return"]()}finally{if(r)throw s}}return n}function c(e){if(Array.isArray(e))return e}function f(e,t,n,i,r,s,a){try{var o=e[s](a),u=o.value}catch(c){return void n(c)}o.done?t(u):Promise.resolve(u).then(i,r)}function h(e){return function(){var t=this,n=arguments;return new Promise(function(i,r){var s=e.apply(t,n);function a(e){f(s,i,r,a,o,"next",e)}function o(e){f(s,i,r,a,o,"throw",e)}a(void 0)})}}var d=["男","女","不限"],l=["单身贵族","恋爱","已婚"],m=["秘密","IT","金融","管理"],p=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-citypicker/mpvueCityPicker")]).then(n.bind(null,"053f"))},b={components:{mpvueCityPicker:p},data:function(){return{userimg:"",username:"",sex:"不限",emon:"未设置",job:"未设置",birthday:"未设置",home:"未知",cityPickerValueDefault:[0,0,1]}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onLoad:function(e){if(e.userinfo){var t=JSON.parse(e.userinfo);this.userimg=t.userpic||"https://ceshi2.dishait.cn//uploads/20190614/ea9a848e1db826bcc9a0fd9367867cc1.png",this.username=t.username||"未设置",this.sex=d[t.userinfo.sex]||"未设置",this.emon=l[t.userinfo.qg]||"未设置",this.job=m[t.userinfo.job]||"未设置",this.birthday=t.userinfo.birthday||"未设置",this.home=t.userinfo.path||"未知"}else this.userimg="https://ceshi2.dishait.cn//uploads/20190614/ea9a848e1db826bcc9a0fd9367867cc1.png",this.username="未设置",this.sex="未设置",this.emon="未设置",this.job="未设置",this.birthday="未设置",this.home="未知"},methods:{submit:function(){var t=h(i.default.mark(function t(){var n,s,o,u,c,f;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.showLoading({title:"修改中"}),t.next=3,this.$http.post("user/editUserInfo",{user_id:this.User.userinfo.id,user_name:this.username,sex:d.indexOf(this.sex),qg:l.indexOf(this.emon),job:m.indexOf(this.job),birthday:this.birthday,path:this.home,age:r.default.gettime.getAgeByBirthday(this.birthday)});case 3:n=t.sent,s=a(n,2),o=s[0],u=s[1],o?e.showToast({title:"修改失败",icon:"none"}):(e.hideLoading(),c=u.data,200==c.code?(f=c.data,this.User.userinfo=f,this.User.token=f.id,e.setStorageSync("userinfo",this.userinfo),e.setStorageSync("token",this.token),e.showToast({title:"修改完成"}),e.navigateBack({delta:1})):e.showToast({title:"信息修改失败~"}));case 8:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),changeUserImg:function(){var t=h(i.default.mark(function t(){var n=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.chooseImage({count:1,sizeType:["compressed"],success:function(t){var i=t.tempFilePaths[0];e.uploadFile({url:n.config.baseURL+"user/editUserImg",filePath:i,name:"file",formData:{user_id:n.User.userinfo.id},success:function(e){var t=JSON.parse(e.data);n.userimg=t.url}})}});case 1:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),changeUserOne:function(t){var n=this,i=[];switch(t){case"sex":i=d;break;case"emon":i=l;break;case"job":i=m;break}e.showActionSheet({itemList:i,success:function(e){switch(t){case"sex":n.sex=i[e.tapIndex];break;case"emon":n.emon=i[e.tapIndex];break;case"job":n.job=i[e.tapIndex];break}}})},bindDateChange:function(e){this.birthday=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},onConfirm:function(e){this.home=e.label},showMulLinkageThreePicker:function(){this.$refs.mpvueCityPicker.show()},onBackPress:function(){if(this.$refs.mpvueCityPicker.showPicker)return this.$refs.mpvueCityPicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvueCityPicker.showPicker&&this.$refs.mpvueCityPicker.pickerCancel()}}};t.default=b}).call(this,n("6e42")["default"])},d033:function(e,t,n){},effb:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r})}},[["85d2","common/runtime","common/vendor"]]]);