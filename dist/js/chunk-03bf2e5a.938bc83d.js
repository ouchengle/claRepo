(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03bf2e5a"],{3752:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"tableStyle"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,align:"center"}},[o("el-table-column",{attrs:{prop:"corporation_name",label:"CorporationName"}}),o("el-table-column",{attrs:{prop:"admin_name",label:"AdminName"}}),o("el-table-column",{attrs:{prop:"admin_email",label:"Email"}}),o("el-table-column",{attrs:{label:"PDF",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-popover",{attrs:{width:"80",trigger:"hover",placement:"right"}},[o("div",{staticClass:"menuBT"},[o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"",size:"mini"},on:{click:function(o){return e.uploadClaFile(t.row)}}},[e._v("upload ")]),o("el-button",{attrs:{type:"",size:"mini"},on:{click:function(o){return e.downloadClaFile(t.row)}}},[e._v("download")]),o("el-button",{attrs:{type:"",size:"mini"},on:{click:function(o){return e.previewClaFile(t.row)}}},[e._v("preview")])],1),o("svg-icon",{staticClass:"pointer",attrs:{slot:"reference","icon-class":"pdf"},on:{click:function(e){}},slot:"reference"})],1)]}}])}),o("el-table-column",{attrs:{align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{staticClass:"mySwitch",staticStyle:{display:"inline-block"}},[o("el-switch",{staticClass:"mySwitch",attrs:{disabled:t.row.enabled,width:"100","active-color":"#409EFF","active-text":"active","inactive-text":"inactive","inactive-color":"#EBEEF5"},on:{change:function(o){return e.changeActive(t.row.cla_org_id,t.row.corporation_name,t.row.admin_email,!0)}},model:{value:t.row.enabled,callback:function(o){e.$set(t.row,"enabled",o)},expression:"scope.row.enabled"}})],1),o("el-button",{staticStyle:{"margin-left":"1rem"},attrs:{disabled:t.row.administrator_enabled,type:"primary",size:"mini"},on:{click:function(o){return e.createRoot(t.row.cla_org_id,t.row.admin_email)}}},[e._v("Create Root ")])]}}])})],1)],1),o("el-dialog",{attrs:{title:"upload cla file",top:"5vh",visible:e.uploadDialogVisible,width:"35%"},on:{"update:visible":function(t){e.uploadDialogVisible=t}}},[o("div",[o("div",{staticClass:"left"},[o("el-form",{model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[o("el-form-item",{attrs:{label:"","label-width":"0"}},[o("el-upload",{ref:"uploadPdf",staticClass:"upload-demo",attrs:{action:"",headers:e.uploadHeaders,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-remove":e.beforeRemove,"auto-upload":!1,"http-request":e.uploadOk,"on-exceed":e.handleExceed,"file-list":e.fileList}},[o("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v(" 上传到服务器 ")])],1)],1)],1)],1)])]),o("el-dialog",{staticStyle:{"background-color":"#3C3C3C"},attrs:{title:"pdf-reader",top:"5vh","close-on-click-modal":!1,visible:e.previewDialogVisible,width:"50%"},on:{"update:visible":function(t){e.previewDialogVisible=t}}},[o("div",["pdf"===e.docInfo.type?o("pdfReader",{attrs:{doctype:e.docInfo.type,dochref:e.docInfo.href}}):e._e()],1)])],1)},i=[],s=(o("99af"),o("b0c0"),o("221d")),n=o("d89b"),l={name:"CorporationList",components:{pdfReader:n["a"]},data:function(){return{uploadHeaders:{Token:this.$store.state.access_token},uploadUrl:"/api".concat(s["G"]),access_token:this.$store.state.access_token,refresh_token:this.$store.state.refresh_token,platform:this.$store.state.platform,user:{userName:this.$store.state.user.userName,userId:this.$store.state.user.userId},msg:"Welcome to Your Vue.js App",docInfo:{type:"pdf",href:"/static/pdf/merge.pdf"},previewDialogVisible:!1,form:{file:""},fileList:[],uploadDialogVisible:!1,item:"",tableData:[{corporation_name:"ooo",admin_name:"ocl",admin_email:"666@qq.com",date:"2020-08-18"},{corporation_name:"oco",admin_name:"oll",email:"555@qq.com",date:"2020-08-19"}],currentPage:1,tableTotal:0}},beforeRouteEnter:function(e,t,o){"/"!==t.path&&sessionStorage.removeItem("item"),o()},created:function(){console.log(this.$route.query.item,"created",sessionStorage.getItem("item"),JSON.parse(sessionStorage.getItem("item"))),JSON.parse(sessionStorage.getItem("item"))?this.item=JSON.parse(sessionStorage.getItem("item")):(this.tableData=this.$route.query.item.corporationInfo,this.item=this.$route.query.item,sessionStorage.setItem("item",JSON.stringify(this.$route.query.item))),this.getCorporationInfo()},methods:{uploadOk:function(){for(var e=new FormData,t=0;t<this.fileList.length;t++)e.append("file",this.fileList[t],this.fileList[t].name);this.$axios({url:this.uploadUrl,data:{fd:e},headers:{Token:this.$store.state.access_token}}).then((function(e){console.log(e)}))},previewClaFile:function(e){this.previewDialogVisible=!0,console.log("previewClaFil",e)},downloadClaFile:function(e){console.log("downloadClaFile",e)},uploadClaFile:function(e){console.log("uploadClaFile",e),this.uploadDialogVisible=!0},submitUpload:function(){this.$refs.uploadPdf.submit()},handleSuccess:function(e,t){console.log(e,t)},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},getCorporationInfo:function(){var e=this;this.$axios({url:"/api".concat(s["f"]),params:{platform:this.item.platform,org_id:this.item.org_id,repo_id:this.item.repo_id,cla_language:this.item.cla_language},headers:{Token:this.$store.state.access_token,"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(t){console.log(t),e.tableData=t.data})).catch((function(e){console.log(e)}))},createRoot:function(e,t){var o=this,a={cla_org_id:e,email:t};this.$axios({url:"/api".concat(s["d"]),method:"post",data:a,headers:{Token:this.$store.state.access_token,"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(e){console.log(e),o.$message.closeAll(),o.$message.success("success"),o.getCorporationInfo()})).catch((function(e){console.log(e),o.$message.closeAll(),o.$message.error("failed")}))},changeActive:function(e,t,o,a){var i=this;console.log("changeActive",e,o);var n={cla_org_id:e,corporation_name:t,admin_email:o,enabled:a};this.$axios({url:"/api".concat(s["a"]),method:"put",data:n,headers:{Token:this.$store.state.access_token,"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(e){console.log(e),i.getCorporationInfo()})).catch((function(e){console.log(e)}))}}},r=l,c=(o("ac17"),o("2877")),d=Object(c["a"])(r,a,i,!1,null,null,null);t["default"]=d.exports},"6c9f":function(e,t,o){},ac17:function(e,t,o){"use strict";var a=o("6c9f"),i=o.n(a);i.a}}]);
//# sourceMappingURL=chunk-03bf2e5a.938bc83d.js.map