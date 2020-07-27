(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32b039d0"],{"0418":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("el-col",{attrs:{span:8}},[o("div",{staticStyle:{display:"flex"}},[o("img",{staticClass:"pointer",staticStyle:{width:"2rem"},attrs:{src:this.$store.state.user.userImg,alt:""},on:{click:function(e){return t.newWindow()}}}),o("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","margin-left":".5rem"}},[o("span",[t._v("Hi, "),o("span",{staticClass:"pointer",staticStyle:{"font-weight":"bold"}},[t._v(t._s(this.$store.state.user.userName)+"!")])])])])]),o("el-col",{attrs:{span:8}},[o("div",[o("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(e){return t.toHome()}}})],1)]),o("el-col",{attrs:{span:8}},[o("div",[o("el-tooltip",{attrs:{effect:"dark",content:"Sign out",placement:"left"}},[o("svg-icon",{staticClass:"pointer",attrs:{id:"svg_loginOut","icon-class":"loginOut"},on:{click:function(e){return t.loginOut()}}})],1)],1)])],1)},s=[],a={name:"Header",computed:{},data:function(){return{}},created:function(){},methods:{toHome:function(){this.$router.push("/home")},loginOut:function(){this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},n=a,r=(o("5d19"),o("2877")),l=Object(r["a"])(n,i,s,!1,null,"1d41f76a",null);e["a"]=l.exports},1460:function(t,e,o){"use strict";var i=o("cf23"),s=o.n(i);s.a},"16b5":function(t,e,o){"use strict";var i=o("d62f"),s=o.n(i);s.a},"5d19":function(t,e,o){"use strict";var i=o("a573"),s=o.n(i);s.a},"615a":function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var i=function(){return window.innerHeight}},a573:function(t,e,o){},b0c0:function(t,e,o){var i=o("83ab"),s=o("9bf2").f,a=Function.prototype,n=a.toString,r=/^\s*function ([^ (]*)/,l="name";i&&!(l in a)&&s(a,l,{configurable:!0,get:function(){try{return n.call(this).match(r)[1]}catch(t){return""}}})},bb51:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:t.home,attrs:{id:"home"}},[o("Header"),o("el-col",{attrs:{offset:4,span:16,id:"section"}},[o("div",{attrs:{id:"configBtDiv"}},[t.showConfigForm?t._e():o("el-button",{staticClass:"configBt",attrs:{type:"primary"},on:{click:function(e){return t.configCla()}}},[t._v(" Configure CLA ")])],1),o("el-row",[t.showConfigForm?o("el-row",[o("div",{staticStyle:{"padding-bottom":"1.5rem","font-size":"1.3rem"}},[t._v("Configure CLA")]),o("el-row",[o("el-col",{attrs:{span:10}},[o("div",{staticStyle:{"background-color":"white"}},[o("div",{staticStyle:{"text-align":"right",padding:"1rem"}},[o("svg-icon",{attrs:{"icon-class":"close"},on:{click:function(e){return t.closeConfigForm()}}})],1),o("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[t._v(" ① Choose a repository "),t.user.isAuthorize?t._e():o("span",{staticStyle:{"font-size":".8rem","text-decoration":"underline",cursor:"pointer"},on:{click:function(e){return t.authorize()}}},[t._v("(want to link an org?)")])]),o("div",{staticStyle:{padding:"0 2rem"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"select",size:"medium"},on:{change:t.changeRepository},model:{value:t.repositoryValue,callback:function(e){t.repositoryValue=e},expression:"repositoryValue"}},t._l(t.repositoryOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[t._v(" ② Choose a CLA ")]),o("div",{staticStyle:{"font-size":"1rem",padding:"0 2rem .5rem 2rem"}},[t._v(" Select from Gist "),o("span",{staticStyle:{"font-size":".8rem","text-decoration":"underline",cursor:"pointer"},on:{click:function(e){return t.createCLA()}}},[t._v("(don't have one?)")])]),o("div",{staticStyle:{padding:"0 2rem"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"select",size:"medium"},on:{change:t.changeCla},model:{value:t.claValue,callback:function(e){t.claValue=e},expression:"claValue"}},t._l(t.claOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[t._v(" ③ Choose a Metadata ")]),o("div",{staticStyle:{"font-size":"1rem",padding:"0 2rem .5rem 2rem"}},[t._v(" Select from Gist "),o("span",{staticStyle:{"font-size":".8rem","text-decoration":"underline",cursor:"pointer"},on:{click:function(e){return t.createMetadata()}}},[t._v("(don't have one?)")])]),o("div",{staticStyle:{padding:"0 2rem"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"select",size:"medium"},on:{change:t.changeMetadata},model:{value:t.metadataValue,callback:function(e){t.metadataValue=e},expression:"metadataValue"}},t._l(t.metadataOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("div",{staticStyle:{"font-size":"1.2rem",padding:".5rem"}},[t._v(" ④ Email ")]),o("div",{staticStyle:{padding:"0 2rem"}},[o("el-input",{attrs:{size:"medium",placeholder:"Input you email"},on:{input:t.verifyEmail},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),o("div",{class:{"linkBt pointer":t.claChoose&&t.repositoryChoose&&t.isEmail,disableClass:!(t.claChoose&&t.repositoryChoose&&t.isEmail)},on:{click:function(e){return t.openLinkDialog()}}},[o("div",[o("svg-icon",{attrs:{"icon-class":"link"}}),t._v(" LINK ")],1)])])]),o("el-col",{attrs:{span:12,offset:2}},[o("el-input",{staticStyle:{"white-space":"pre-wrap"},attrs:{rows:"16",readonly:"",type:"textarea"},model:{value:t.previewText,callback:function(e){t.previewText=e},expression:"previewText"}})],1)],1)],1):t._e()],1),o("div",[o("el-tabs",{on:{"tab-click":t.tabsHandleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-tab-pane",{staticStyle:{"margin-top":"1rem"},attrs:{label:"Linked Repositories",name:"first"}}),o("el-tab-pane",{staticStyle:{"margin-top":"1rem"},attrs:{label:"Signed Repositories",name:"second"}})],1),o("router-view")],1)],1),o("Footer",{attrs:{id:"footer"}}),o("el-dialog",{attrs:{top:"5vh",title:"",visible:t.authorizeDialogVisible,width:"35%"},on:{"update:visible":function(e){t.authorizeDialogVisible=e}}},[o("div",{staticStyle:{"text-align":"left"}},[o("p",{staticClass:"dialogDesc"},[t._v("Why link organizations?")]),o("p",[t._v("If you link an organization with your CLA, CLA assistant sets a web hook on your organization and listens to Pull Requests of all repositories in the organization. That means that your CLA becomes active for each existing and future repositories of your organization.")]),o("p",{staticClass:"dialogDesc"},[t._v("How can I link an organization?")]),o("p",[t._v("CLA assistant needs an additional authorization from you to be able to create web hooks for organizations. To grant CLA assistant appropriate rights just click on the button below. For more information on Authorization scopes see github documentation")]),o("div",{staticClass:"linkBt pointer",staticStyle:{"font-size":"1.1rem"},on:{click:function(e){return t.getOrgPermission()}}},[t._v(" Yes,let's go for it ")])])]),o("el-dialog",{attrs:{top:"5vh",title:"",visible:t.createCLADialogVisible,width:"35%"},on:{"update:visible":function(e){t.createCLADialogVisible=e}}},[o("div",{staticStyle:{"text-align":"left"}},[o("p",{staticClass:"dialogDesc"},[t._v("How can I create a CLA Gist?")]),o("p",[t._v("To "),o("span",{staticStyle:{cursor:"pointer","text-decoration":"underline",color:"blue"},on:{click:function(e){return t.toCreateCLA()}}},[t._v("createCLA")]),t._v(" enter a file name and paste the content of your CLA.")]),o("p",{staticClass:"dialogDesc"},[t._v("What happens if I edit the Gist file?")]),o("p",[t._v("CLA assistant will always show you the current version of your Gist file. Users who accept your CLA sign the current version. If you change the content of your CLA, each contributor has to accept the new version when they create a new pull request.")])]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})]),o("el-dialog",{attrs:{top:"5vh",title:"",visible:t.createMetadataDialogVisible,width:"35%"},on:{"update:visible":function(e){t.createMetadataDialogVisible=e}}},[o("div",{staticStyle:{"text-align":"left"}},[o("p",{staticClass:"dialogDesc"},[t._v("How can I create a Metadata Gist?")]),o("p",[t._v("To "),o("span",{staticStyle:{cursor:"pointer","text-decoration":"underline",color:"blue"},on:{click:function(e){return t.toCreateMetadata()}}},[t._v("createMetadata")]),t._v(" enter a file name and paste the content of your Metadata.")]),o("p",{staticClass:"dialogDesc"},[t._v("What happens if I edit the Gist file?")]),o("p",[t._v("CLA assistant will always show you the current version of your Gist file. Users who accept your Metadata sign the current version. If you change the content of your Metadata, each contributor has to accept the new version when they create a new pull request.")])]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})]),o("el-dialog",{attrs:{top:"5vh",title:"",visible:t.shareDialogVisible,width:"35%"},on:{"update:visible":function(e){t.shareDialogVisible=e}}},[o("div",{staticStyle:{"text-align":"left"}},[o("p",{staticClass:"dialogDesc"},[t._v("What happens if I choose to share the gist with multiple repos or orgs?")]),o("p",[t._v("Contributors will simply need to sign only once for any of the repos or orgs linked with the same shared gist.")]),o("p",{staticClass:"dialogDesc"},[t._v("Are previous CLA signatures still valid after I choose to share the gist with multiple repos or orgs?")]),o("p",[t._v("Yes, but the scope of the previous signatures are still limited to the previous repo or org.")]),o("p",{staticClass:"dialogDesc"},[t._v("What happens if I uncheck the box and choose NOT to share the gist any more?")]),o("p",[t._v("Previous contributors that have signed the shared gist will have to sign again.")])]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})]),o("el-dialog",{attrs:{top:"5vh",title:"",visible:t.linkDialogVisible,width:"35%"},on:{"update:visible":function(e){t.linkDialogVisible=e}}},[o("div",[o("p",{staticClass:"dialogDesc"},[t._v("Would you like to link this CLA to your repository?")]),o("div",[o("el-row",[o("svg-icon",{staticStyle:{width:"100%",height:"100%"},attrs:{"icon-class":"popup_link"}})],1),o("el-row",[t.claChoose?o("el-col",{attrs:{offset:6,span:5}},[t._v(" "+t._s(t.claOptions[t.claValue].label)+" ")]):t._e(),t.repositoryChoose?o("el-col",{attrs:{offset:2,span:5}},[t._v(" "+t._s(t.repositoryOptions[t.repositoryValue].label)+" ")]):t._e()],1)],1),o("div",{staticStyle:{padding:"0 3rem",color:"#409EFF"}}),o("div",{staticStyle:{padding:"2rem 6rem","text-align":"left","font-size":"1.3rem"}},[o("p",{staticStyle:{"text-align":"center"}},[t._v("CLA assistant will...")]),o("ul",[o("li",[t._v("Create a webhook in your repository and listen for pull requests")]),o("li",[t._v("Set a pull request CLA status")]),o("li",[t._v("Comment on pull requests")])])]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.linkDialogVisible=!1}}},[t._v("Cancel")]),o("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.linkLoading,expression:"linkLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:function(e){return t.linkRepository()}}},[t._v("Yes,Let's do this!")])],1)])])],1)},s=[],a=(o("99af"),o("4160"),o("b0c0"),o("ac1f"),o("1276"),o("159b"),o("5530")),n=o("221d"),r=o("615a"),l=o("0418"),c=o("fd2d"),u=o("2f62");window.onresize=function(){r["a"]()>document.getElementById("home").offsetHeight&&(document.getElementById("home").style.height=r["a"]()+"px")};var h={name:"Home",components:{Header:l["a"],Footer:c["a"]},computed:{},watch:{$route:function(t,e){var o=t.path;"/linkedRepo"===o||"/home"===o?this.activeName="first":"/signedRepo"!==o&&"/signedRepoLogin"!==o||(this.activeName="second")}},data:function(){return{createMetadataDialogVisible:!1,linkLoading:!1,platform:this.$store.state.platform,isVerify:!1,activeName:"",previewShow:!1,previewText:"previewCla",loginType:this.$store.state.loginType,tableType:1,tableShow:!0,listCurrentPage:1,dropdownTitle:"Linked Repositories",isEmail:!1,email:"",code:"",gitee_client_id:this.$store.state.gitee_client_id,gitee_client_secret:this.$store.state.gitee_client_secret,gitee_redirect_uri:this.$store.state.gitee_redirect_uri,github_client_id:this.$store.state.github_client_id,github_client_secret:this.$store.state.github_client_secret,github_redirect_uri:this.$store.state.github_redirect_uri,access_token:this.$store.state.access_token,refresh_token:this.$store.state.refresh_token,listDialogVisible:!1,checkClaDialogVisible:!1,unLinkDialogVisible:!1,editDialogVisible:!1,menuVisible:!1,claName:"test",repositoryName:"ooo/test",shareGistChecked:!1,claOptions:[],claValue:"",metadataOptions:[{value:0,label:"",id:"",text:"",language:""}],metadataValue:"",claChoose:!1,metadataChoose:!1,linkDialogVisible:!1,shareDialogVisible:!1,createCLADialogVisible:!1,authorizeDialogVisible:!1,fileNumber:"",lineNumber:"",gistUrl:"",orgOptions:[{value:"0",label:"test"}],orgValue:"",repositoryOptions:[{value:"0",label:"test"}],repositoryValue:"",repositoryChoose:"",showConfigForm:!1,home:{height:""},user:{userName:this.$store.state.user.userName,userId:this.$store.state.user.userId,isAuthorize:!1}}},methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["setLoginUserAct","setTokenAct","getLinkedRepoListAct"])),{},{getPath:function(){var t=this.$route.path;"/linkedRepo"===t||"/home"===t?this.activeName="first":"/signedRepo"!==t&&"/signedRepoLogin"!==t||(this.activeName="second")},tabsHandleClick:function(t,e){console.log(t,e),"0"===t.index?this.$router.push("/linkedRepo"):this.$router.push("/signedRepoLogin")},getOrgPermission:function(){"0"===this.loginType&&(window.location.href="https://github.com/login/oauth/authorize?client_id=d86f4915398dad23bffc&redirect_url=http://localhost:8080/home&scope=repo")},listChangePage:function(t){console.log(t)},getPersonalSigned:function(){var t=this;console.log("getPersonalRepositories");var e={userName:this.user.userName};this.$axios({url:n["j"],methods:"post",data:e,headers:{access_token:this.$store.state.access_token,refresh_token:this.refresh_token}}).then((function(e){console.log(e),200===e.data.code&&(t.tableData=e.data.data)})).catch((function(t){console.log(t)}))},getCompanyRepositories:function(){var t=this;console.log("getCompanyRepositories");var e={userName:this.user.userName};this.$axios({url:n["f"],methods:"post",data:e,headers:{access_token:this.$store.state.access_token,refresh_token:this.refresh_token}}).then((function(e){console.log(e),200===e.data.code&&(t.tableData=e.data.data)})).catch((function(t){console.log(t)}))},getCompanyPersonRepositories:function(){var t=this;console.log("getCompanyPersonRepositories");var e={userName:this.user.userName};this.$axios({url:n["e"],methods:"post",data:e,headers:{access_token:this.$store.state.access_token,refresh_token:this.refresh_token}}).then((function(e){console.log(e),200===e.data.code&&(t.tableData=e.data.data)})).catch((function(t){console.log(t)}))},newWindow:function(){window.open("https://github.com/ouchengle")},openLinkDialog:function(){this.repositoryChoose&&this.claChoose&&this.isEmail&&(this.linkDialogVisible=!0)},verifyEmail:function(){var t=this.email,e=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(!e.test(t))return this.isEmail=!1,!1;this.isEmail=!0},linkRepository:function(){var t=this;this.linkLoading=!0;var e={repo_id:"".concat(this.repositoryOptions[this.repositoryValue].repoName),cla_id:this.claOptions[this.claValue].id,org_email:this.email,platform:this.platform,org_id:"".concat(this.repositoryOptions[this.repositoryValue].org),cla_language:this.claOptions[this.claValue].language,submitter:"".concat(this.platform,"/").concat(this.$store.state.user.userName),metadata_id:""};console.log(e),this.$axios({url:"/api"+n["l"],method:"post",data:e,headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(e){t.linkLoading=!1,t.$message.success("success"),console.log(e),t.claValue="",t.repositoryValue="",t.claChoose=!1,t.repositoryChoose=!1,t.email="",t.linkDialogVisible=!1;var o={access_token:t.$store.state.access_token,refresh_token:t.$store.state.refresh_token,userName:t.$store.state.user.userName,platform:t.platform};t.getLinkedRepoListAct(o)})).catch((function(e){console.log(e),t.linkLoading=!1,t.$message.error("failed")}))},checkCla:function(){console.log("checkCla"),this.$router.push("/checkCla")},editHandleClick:function(t){console.log(t),this.editDialogVisible=!0},toCreateCLA:function(){this.$router.push("/createCLA")},toCreateMetadata:function(){this.$router.push("/createMetadata")},changeCla:function(t){this.claChoose=!0,this.previewText=this.claOptions[t].text},changeMetadata:function(t){this.metadataChoose=!0,this.previewText=this.metadataOptions[t].text},createCLA:function(){this.createCLADialogVisible=!0},createMetadata:function(){this.createMetadataDialogVisible=!0},authorize:function(){console.log("authorize"),this.authorizeDialogVisible=!0},changeRepository:function(t){console.log(this.repositoryValue),this.repositoryChoose=!0},getRepositoriesOfOrg:function(t,e){var o=this,i={access_token:this.$store.state.access_token,org:t,page:1,per_page:10};console.log("getRepositoriesOfOrg",i),this.$axios({url:"https://gitee.com/api/v5/orgs/".concat(t,"/repos"),params:i}).then((function(i){console.log(i),200===i.status&&(o.repositoryOptions=[],i.data.forEach((function(i,s){o.repositoryOptions.push({value:s,org:t,org_id:e,repoName:i.name,label:"".concat(t,"/").concat(i.name),id:i.id})})))})).catch((function(t){console.log(t)}))},getOrgsInfo:function(){var t=this,e={access_token:this.$store.state.access_token,admin:!0,page:1,per_page:10};console.log("getOrgsInfo",e),this.$axios({url:n["i"],methods:"get",params:e}).then((function(e){console.log(e),200===e.status&&(t.orgOptions=[],e.data.forEach((function(e,o){t.orgOptions.push({value:o,label:e.login,id:e.id}),t.getRepositoriesOfOrg(e.login,e.id)})))})).catch((function(t){console.log(t)}))},getCLA:function(){var t=this;console.log("getCLA"),this.$axios({url:"/api"+n["d"],headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(e){console.log(e),e.data.length&&(t.claOptions=[],e.data.forEach((function(e,o){t.claOptions.push({value:o,label:e.name,id:e.id,text:e.text,language:e.language})})))})).catch((function(t){console.log(t)}))},closeConfigForm:function(){this.showConfigForm=!1,this.setClientHeight()},configCla:function(){this.showConfigForm=!0,this.home.height="auto",this.getCLA(),this.getOrgsInfo()},setClientHeight:function(){var t=this;this.$nextTick((function(){r["a"]()>document.getElementById("home").offsetHeight?t.home.height=r["a"]()+"px":t.home.height=document.getElementById("home").offsetHeight}))},change:function(t){console.log(t),this.value=t},openFullScreen:function(){var t=this,e=this.$loading({lock:!0,background:"rgba(255, 255, 255, 0.8)"});setInterval((function(){t.$store.state.user.userName&&t.$store.state.ready&&e.close()}),500)},getCookieData:function(){if(console.log("getCookieData"),""!==document.cookie){var t,e=document.cookie.split("; "),o="";e.forEach((function(e,i){var s=e.split("=");"access_token"===s[0]?t=s[1]:o="refresh_token"===s[0]?s[1]:""}));var i={access_token:t,refresh_token:o};this.setTokenAct(i),this.getUserInfo(t,o)}},getUserInfo:function(t,e){var o=this,i={access_token:t};console.log(i),this.$axios({url:n["k"],params:i}).then((function(i){console.log(i);var s={userId:i.data.id,userName:i.data.login,userImg:i.data.avatar_url,userEmail:i.data.email};o.setLoginUserAct(s);var a={access_token:t,refresh_token:e,userName:i.data.login,platform:o.platform};o.getLinkedRepoListAct(a)})).catch((function(t){console.log(t)}))}}),created:function(){this.getPath(),this.openFullScreen(),this.getCookieData()},mounted:function(){this.setClientHeight()}},d=h,g=(o("16b5"),o("2877")),p=Object(g["a"])(d,i,s,!1,null,"db79f588",null);e["default"]=p.exports},cf23:function(t,e,o){},d62f:function(t,e,o){},fd2d:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",{staticClass:"footer"},[o("el-col",{staticClass:"left",attrs:{span:8}},[o("span",[t._v("© 2020 HUAWEI SE")])]),o("el-col",{staticClass:"center",attrs:{span:8}},[o("span",[t._v("Made with "),o("svg-icon",{attrs:{"icon-class":"heart"}}),t._v(" from the GitHub team at HUAWEI ")],1)]),o("el-col",{staticClass:"right",attrs:{span:8}},[o("div",[o("span",{staticClass:"pointer"},[t._v("Terms of Service & Privacy Policy")]),o("span",{staticClass:"pointer"},[o("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),t._v("Open an issue")],1)])])],1)},s=[],a={name:"Footer"},n=a,r=(o("1460"),o("2877")),l=Object(r["a"])(n,i,s,!1,null,"bc0631b2",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-32b039d0.c30460ab.js.map