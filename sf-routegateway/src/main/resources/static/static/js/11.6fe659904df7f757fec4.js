webpackJsonp([11],{111:function(e,t,o){o(390);var a=o(41)(o(526),o(359),null,null);e.exports=a.exports},131:function(e,t){var o=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=o)},132:function(e,t,o){var a=o(131),l=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return l.stringify.apply(l,arguments)}},135:function(e,t,o){e.exports={default:o(132),__esModule:!0}},311:function(e,t,o){t=e.exports=o(8)(),t.push([e.i,".el-input{position:relative;font-size:14px;display:inline-block;width:auto}",""])},359:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"table"},[o("el-row",[o("el-col",{attrs:{span:12}},[o("div",{staticClass:"crumbs"},[o("el-breadcrumb",{attrs:{separator:"/"}},[o("el-breadcrumb-item",[o("i",{staticClass:"el-icon-menu"}),e._v("灰度更新")]),e._v(" "),o("el-breadcrumb-item",[e._v("APP端")])],1)],1)]),e._v(" "),o("el-col",{attrs:{span:8}},[o("p",{staticStyle:{"line-height":"36px"}},[e._v("当前企业："+e._s(e.query.enterpriseName))])]),e._v(" "),o("el-col",{attrs:{span:4}},[o("el-button",{attrs:{icon:"edit"},on:{click:function(t){e.enterpriseDialog=!0}}},[e._v("切换企业")])],1)],1),e._v(" "),o("div",{staticClass:"crumbs"},[o("el-dialog",{attrs:{title:"新增",size:"tiny"},model:{value:e.dialogAddVisible,callback:function(t){e.dialogAddVisible=t},expression:"dialogAddVisible"}},[o("el-form",{attrs:{model:e.updateInfo}},[o("el-form-item",{attrs:{label:"用户E号","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.updateInfo.userNumber,callback:function(t){e.$set(e.updateInfo,"userNumber",t)},expression:"updateInfo.userNumber"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"手机号","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.updateInfo.mobileNumber,callback:function(t){e.$set(e.updateInfo,"mobileNumber",t)},expression:"updateInfo.mobileNumber"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"手机型号","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.updateInfo.mobileType,callback:function(t){e.$set(e.updateInfo,"mobileType",t)},expression:"updateInfo.mobileType"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"系统版本","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.updateInfo.osVersion,callback:function(t){e.$set(e.updateInfo,"osVersion",t)},expression:"updateInfo.osVersion"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"操作系统","label-width":e.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择操作系统"},on:{"visible-change":function(t){e.changeVersions(e.updateInfo.osType,t)}},model:{value:e.updateInfo.osType,callback:function(t){e.$set(e.updateInfo,"osType",t)},expression:"updateInfo.osType"}},[o("el-option",{attrs:{label:"android",value:"android"}}),e._v(" "),o("el-option",{attrs:{label:"ios",value:"ios"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"最低版本","label-width":e.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择最低版本"},on:{change:function(e){}},model:{value:e.updateInfo.minVersion,callback:function(t){e.$set(e.updateInfo,"minVersion",t)},expression:"updateInfo.minVersion"}},e._l(e.allVersions,function(e){return o("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"最高版本","label-width":e.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择最高版本"},model:{value:e.updateInfo.newVersion,callback:function(t){e.$set(e.updateInfo,"newVersion",t)},expression:"updateInfo.newVersion"}},e._l(e.allVersions,function(e){return o("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"更新模式","label-width":e.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择更新模式"},on:{change:function(e){}},model:{value:e.updateInfo.adviceModel,callback:function(t){e.$set(e.updateInfo,"adviceModel",t)},expression:"updateInfo.adviceModel"}},e._l(e.adviceModels,function(e){return o("el-option",{attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.handleAddCancel()}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleAddConfirm(e.updateInfo)}}},[e._v("确 定")])],1)],1),e._v(" "),o("el-button",{attrs:{size:"small",type:"success"},on:{click:function(t){e.handleAdd()}}},[e._v("新增策略")]),e._v(" "),o("el-button",{attrs:{size:"small",type:"success"},on:{click:function(t){e.gotoGrayDetail()}}},[e._v("查看版本")])],1),e._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.tableLoading,expression:"tableLoading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[o("el-table-column",{attrs:{prop:"userNumber",label:"用户E号"}}),e._v(" "),o("el-table-column",{attrs:{prop:"mobileNumber",label:"手机号"}}),e._v(" "),o("el-table-column",{attrs:{prop:"mobileType",label:"手机型号"}}),e._v(" "),o("el-table-column",{attrs:{prop:"osVersion",label:"系统版本"}}),e._v(" "),o("el-table-column",{attrs:{prop:"minVersion",label:"最低版本"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-popover",{attrs:{trigger:"hover",placement:"top"}},[o("p",[e._v("更新地址: "+e._s(t.row.minVersionUrl))]),e._v(" "),o("p",[e._v("更新信息: "+e._s(t.row.minVersionInfo))]),e._v(" "),o("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[o("el-tag",[e._v(e._s(t.row.minVersion))])],1)])]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"newVersion",label:"最高版本"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-popover",{attrs:{trigger:"hover",placement:"top"}},[o("p",[e._v("更新地址: "+e._s(t.row.newVersionUrl))]),e._v(" "),o("p",[e._v("更新信息: "+e._s(t.row.newVersionInfo))]),e._v(" "),o("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[o("el-tag",[e._v(e._s(t.row.newVersion))])],1)])]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"osType",label:"操作系统",filters:[{text:"ios",value:"ios"},{text:"android",value:"android"}],"filter-method":e.filterTag},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-tag",{attrs:{type:"ios"===t.row.osType?"primary":"success","close-transition":""}},[e._v("\n                "+e._s("ios"===t.row.osType?"ios":"android")+"\n                ")])]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"adviceModel",label:"更新模式",width:"100%"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s("1"===t.row.adviceModel?"发现更新(1)":"建议更新(2)")+"\n          ")]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-dialog",{attrs:{title:"编辑",size:"tiny"},on:{close:function(t){e.handleEditCancel()}},model:{value:e.dialogEditVisible,callback:function(t){e.dialogEditVisible=t},expression:"dialogEditVisible"}},[o("el-form",{attrs:{model:e.updateInfo}},[o("el-form-item",{attrs:{label:"用户E号","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.updateInfo.userNumber,callback:function(t){e.$set(e.updateInfo,"userNumber",t)},expression:"updateInfo.userNumber"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"手机号","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.updateInfo.mobileNumber,callback:function(t){e.$set(e.updateInfo,"mobileNumber",t)},expression:"updateInfo.mobileNumber"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"手机型号","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.updateInfo.mobileType,callback:function(t){e.$set(e.updateInfo,"mobileType",t)},expression:"updateInfo.mobileType"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"系统版本","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.updateInfo.osVersion,callback:function(t){e.$set(e.updateInfo,"osVersion",t)},expression:"updateInfo.osVersion"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"操作系统","label-width":e.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择操作系统"},on:{"visible-change":function(t){e.changeVersions(e.updateInfo.osType,t)}},model:{value:e.updateInfo.osType,callback:function(t){e.$set(e.updateInfo,"osType",t)},expression:"updateInfo.osType"}},[o("el-option",{attrs:{label:"android",value:"android"}}),e._v(" "),o("el-option",{attrs:{label:"ios",value:"ios"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"最低版本","label-width":e.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择最低版本"},model:{value:e.updateInfo.minVersion,callback:function(t){e.$set(e.updateInfo,"minVersion",t)},expression:"updateInfo.minVersion"}},e._l(e.allVersions,function(e){return o("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"最高版本","label-width":e.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择最高版本"},model:{value:e.updateInfo.newVersion,callback:function(t){e.$set(e.updateInfo,"newVersion",t)},expression:"updateInfo.newVersion"}},e._l(e.allVersions,function(e){return o("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"更新模式","label-width":e.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择更新模式"},model:{value:e.updateInfo.adviceModel,callback:function(t){e.$set(e.updateInfo,"adviceModel",t)},expression:"updateInfo.adviceModel"}},e._l(e.adviceModels,function(e){return o("el-option",{attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.handleEditCancel()}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleEditConfirm(e.updateInfo)}}},[e._v("确 定")])],1)],1),e._v(" "),o("el-button",{attrs:{size:"small",type:"info"},on:{click:function(o){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),o("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(o){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),o("div",{staticClass:"pagination"},[o("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),o("el-dialog",{attrs:{title:"请选择企业"},model:{value:e.enterpriseDialog,callback:function(t){e.enterpriseDialog=t},expression:"enterpriseDialog"}},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:16}},[e._v(" ")]),e._v(" "),o("el-col",{attrs:{span:8}},[o("el-input",{attrs:{placeholder:"请输入企业名称",icon:"search","on-icon-click":e.searchEnterprise},model:{value:e.query.enterpriseName,callback:function(t){e.$set(e.query,"enterpriseName",t)},expression:"query.enterpriseName"}})],1)],1),e._v(" "),o("el-table",{staticStyle:{margin:"15px 0 15px 0"},attrs:{data:e.enterprises,"highlight-current-row":""},on:{"current-change":e.enterpriseSelect}},[o("el-table-column",{attrs:{property:"enterpriseNumber",label:"企业E号",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{property:"enterpriseName",label:"企业名称"}})],1),e._v(" "),o("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next",total:e.page.total,"page-size":e.page.size,"current-page":e.page.current},on:{"current-change":e.searchEnterprise}}),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.enterpriseDialog=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.chooseEnterprise}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}},390:function(e,t,o){var a=o(311);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(40)("7377e354",a,!0)},526:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(135),l=o.n(a);t.default={data:function(){return{total:30,pageSize:10,currentPage:1,allVersions:[],adviceModels:[{label:"发现更新(1)",value:1},{label:"建议更新(2)",value:2}],tableData:[],updateInfo:{},dialogEditVisible:!1,dialogAddVisible:!1,formLabelWidth:"120px",tableLoading:!1,query:{enterpriseName:""},enterpriseDialog:!0,enterprises:[{enterpriseNumber:10120,enterpriseName:"newly"},{enterpriseNumber:10120,enterpriseName:"newly"}],page:{total:0,current:0,size:1},selectedEnterpriseNumber:-1}},mounted:function(){this.getTotal()},methods:{handleCurrentChange:function(e){this.currentPage=e,this.getAllUpdateInfoes(),console.log("当前页: "+e)},deleteUpdateInfoById:function(e){this.$http.delete("/v1/GrayReleased/updateInfoes/"+e).then(function(e){this.result(e.body.response_param,"删除")},function(){this.$message.error("删除失败！")})},changeVersions:function(e,t){0==t&&(this.getAllVsersionsByOsType(e),this.updateInfo.minVersion="",this.updateInfo.newVersion=""),console.debug(t)},getAllUpdateInfoes:function(){this.$http.get("/v1/GrayReleased/updateInfoes?pageNum="+this.currentPage+"&pageSize="+this.pageSize).then(function(e){this.tableData=e.body.response_param},function(){console.log("请求失败处理")})},editUpdateInfoById:function(e){this.$http.put("/v1/GrayReleased/updateInfoes/"+e.xwId,{userNumber:e.userNumber,mobileNumber:e.mobileNumber,mobileType:e.mobileType,osVersion:e.osVersion,osType:e.osType,minVersion:e.minVersion,newVersion:e.newVersion,adviceModel:e.adviceModel}).then(function(e){this.result(e.body.response_param,"编辑")},function(){this.$message.error("编辑失败！")})},getAllVsersionsByOsType:function(e){this.$http.get("/v1/GrayReleased/versions/"+e).then(function(e){this.allVersions=e.body.response_param},function(){console.log("请求失败处理")})},filterTag:function(e,t){return t.osType===e},handleEdit:function(e,t){this.updateInfo=t,this.getAllVsersionsByOsType(this.updateInfo.osType),this.dialogEditVisible=!0},handleEditCancel:function(){this.getAllUpdateInfoes(),this.dialogEditVisible=!1},handleEditConfirm:function(e){var t=this;this.editUpdateInfoById(e),this.tableLoading=!0,setTimeout(function(){t.tableLoading=!1,t.getAllUpdateInfoes()},500),this.dialogEditVisible=!1},handleDelete:function(e,t){var o=this;this.$confirm("此操作将【删除】此更新策略","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.deleteUpdateInfoById(t.xwId),o.tableLoading=!0,setTimeout(function(){o.tableLoading=!1,o.getAllUpdateInfoes()},500)}).catch(function(){o.$message({type:"info",message:"已取消删除"})})},gotoGrayDetail:function(){this.$router.push("/appgrayreleaeddetail")},handleAdd:function(){this.updateInfo={},this.dialogAddVisible=!0},handleAddCancel:function(){this.dialogAddVisible=!1},handleAddConfirm:function(e){var t=this;this.addUpdateInfo(e),this.tableLoading=!0,setTimeout(function(){t.tableLoading=!1,t.getAllUpdateInfoes()},500),this.dialogAddVisible=!1},addUpdateInfo:function(e){this.$http.post("/v1/GrayReleased/updateInfoes",{userNumber:e.userNumber,mobileNumber:e.mobileNumber,mobileType:e.mobileType,osVersion:e.osVersion,osType:e.osType,minVersion:e.minVersion,newVersion:e.newVersion,adviceModel:e.adviceModel}).then(function(e){this.result(e.body.response_param,"新增")},function(){this.$message.error("新增失败！")})},clickUpdate:function(){this.$message({type:"success",message:"已更新成功！"})},result:function(e,t){"true"==e?this.$message.success(t+"成功！"):this.$message.error(t+"失败！")},enterpriseSelect:function(e){var t=this;t.query.enterpriseName=e.enterpriseName,t.selectedEnterpriseNumber=e.enterpriseNumber},searchEnterprise:function(e){var t=this,o=JSON.parse(l()(t.query));o.pageNum=e,t.$http.get("/v1/enterprise/listEnterprises",{params:o}).then(function(e){t.enterprises=e.body.response_param},function(e){t.errorFunc(e.response.data.error_msg)})},getTotal:function(){var e=this;e.page.current=0;var t=JSON.parse(l()(e.query));console.log(t),e.$http.get("/v1/enterprise/getTotal",{params:t}).then(function(t){e.page.total=t.body.response_param.total,e.page.size=t.body.response_param.pageSize,e.page.current=1},function(t){e.errorFunc(t.body.error_msg)})},chooseEnterprise:function(){var e=this,t={enterpriseNumber:e.selectedEnterpriseNumber};e.$http.put("/v1/enterprise/chooseEnterprise",t).then(function(t){e.successFunc("企业选择成功！"),e.enterpriseDialog=!1,e.getAllUpdateInfoes()},function(t){e.errorFunc(t.body.error_msg)})},listWorkFlows:function(){var e=this,t={roleVisit:-7};e.$http.get("/v1/workflowTask/workflowTasks",{params:t}).then(function(t){e.tableData=t.body.response_param},function(t){e.errorFunc(t.body.error_msg)})},warnFunc:function(e){this.$message({message:e,type:"warning"})},errorFunc:function(e){var t=this;console.log(e),t.$message.error(e)},successFunc:function(e){this.$message({message:e,type:"success"})}}}}});