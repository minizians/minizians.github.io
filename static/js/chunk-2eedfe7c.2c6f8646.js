(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2eedfe7c"],{"0698":function(e,t,a){"use strict";a("7753")},4604:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container",staticStyle:{width:"90%",height:"90%"}},[e._m(0),a("div",[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",staticStyle:{"padding-top":"2%"},attrs:{model:e.queryParams,inline:!0,"label-width":"68px;"}},[a("el-form-item",{attrs:{label:"软件名称",prop:"resourceName"}},[a("el-input",{attrs:{placeholder:"请输入软件名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.resourceName,callback:function(t){e.$set(e.queryParams,"resourceName",t)},expression:"queryParams.resourceName"}})],1),a("el-form-item",{attrs:{label:"系统类型",prop:"systemType"}},[a("el-select",{staticStyle:{width:"auto"},attrs:{placeholder:"系统类型",clearable:"",size:"small"},model:{value:e.queryParams.systemType,callback:function(t){e.$set(e.queryParams,"systemType",t)},expression:"queryParams.systemType"}},e._l(e.dict.type.sys_type,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"存储类型",prop:"diskType"}},[a("el-select",{staticStyle:{width:"auto"},attrs:{placeholder:"存储类型",clearable:"",size:"small"},model:{value:e.queryParams.diskType,callback:function(t){e.$set(e.queryParams,"diskType",t)},expression:"queryParams.diskType"}},e._l(e.dict.type.disk_type,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-top":"10px"},attrs:{data:e.shareList,border:""}},[a("el-table-column",{attrs:{width:"300",label:"资源名称",align:"left","show-overflow-tooltip":!0,prop:"resourceName"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{staticClass:"buttonText",attrs:{href:t.row.url,target:"_blank"}},[e._v(e._s(t.row.resourceName))])]}}])}),a("el-table-column",{attrs:{label:"网盘类型",align:"center",prop:"diskType",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.disk_type,value:t.row.diskType}})]}}])}),a("el-table-column",{attrs:{label:"提取码",align:"center",prop:"vcode"}}),a("el-table-column",{attrs:{label:"系统类型",align:"center",prop:"systemType"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.sys_type,value:t.row.systemType}})]}}])}),a("el-table-column",{attrs:{label:"有效期",align:"center",prop:"valid"},scopedSlots:e._u([{key:"default",fn:function(t){return[999==t.row.valid?a("span",[e._v("永久有效")]):a("span",{staticStyle:{color:"#bb3131"}},[e._v(e._s(t.row.valid-e.formatDateMethod(new Date,t.row.gmtCreate)>0?t.row.valid-e.formatDateMethod(new Date,t.row.gmtCreate)+"天后过期":"已过期"))])]}}])}),a("el-table-column",{attrs:{label:"解压密码",align:"center",prop:"unzipCode",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.unzipCodeUrl?a("span",[a("a",{staticClass:"buttonText",attrs:{href:t.row.unzipCodeUrl,target:"_blank"}},[e._v(e._s(t.row.unzipCode))])]):a("span",[e._v(e._s(t.row.unzipCode))])]}}])}),a("el-table-column",{attrs:{label:"解压教程",align:"center",prop:"unzipUrl"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.unzipUrl?a("span",[a("a",{staticClass:"buttonText",attrs:{href:t.row.unzipUrl,target:"_blank"}},[e._v(e._s(t.row.unzipDesc))])]):a("span",[e._v(e._s(t.row.unzipDesc))])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],staticStyle:{"margin-left":"30%"},attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{attrs:{id:"%E2%9D%A4%E6%B8%A9%E9%A6%A8%E6%8F%90%E7%A4%BA%E5%8F%8A%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9%EF%BC%88%E5%A6%82%E6%9C%89%E9%97%AE%E9%A2%98%EF%BC%8C%E7%82%B9%E5%BC%80%E7%9C%8B%E5%AE%8C%E5%90%8E%E5%86%8D%E6%89%BE%E6%88%91%E3%80%82%E5%90%A6%E5%88%99%E4%B8%8D%E4%BA%88%E5%9B%9E%E5%A4%8D%EF%BC%89",tabindex:"-1"}},[a("a",{attrs:{href:"https://106.52.18.84/zians/tips",target:"_blank"}},[e._v("❤温馨提示及注意事项（如有问题，点开看完后再找我。否则不予回复）")])]),a("h2",{staticStyle:{"padding-top":"10px"},attrs:{id:"%E2%9D%A4photoshop-windows%E7%89%88%E9%80%9A%E7%94%A8%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B",tabindex:"-1"}},[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1Kt4y187t8/",target:"_blank"}},[e._v("❤Photoshop Windows版通用安装教程")])])])}],s=a("5530"),l=(a("d81d"),a("b775")),i="/api/data/resource";function o(e){return Object(l["a"])({url:"".concat(i,"/share/list"),method:"get",params:e})}function u(e){return Object(l["a"])({url:"".concat(i,"/share/").concat(e),method:"get"})}function c(e){return Object(l["a"])({url:"".concat(i,"/share/add"),method:"post",data:e})}function d(e){return Object(l["a"])({url:"".concat(i,"/share/edit"),method:"post",data:e})}function p(e){return Object(l["a"])({url:"".concat(i,"/share/del/").concat(e),method:"get"})}var m=a("ca00"),h={name:"GSoftShare",dicts:["sys_type","disk_type","res_status"],data:function(){return{formatDateMethod:m["a"],loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,shareList:[],title:"",open:!1,view:!1,systemType:[{label:"Windows",value:"Windows"},{label:"Mac",value:"Mac"}],queryParams:{pageNum:1,pageSize:10,resourceName:null,diskType:null,systemType:null,url:null,vcode:null,valid:null,isValid:null,unzipDesc:null,unzipUrl:null,unzipCode:null,unzipCodeUrl:null,gmtCreate:null,gmtUpdate:null,ord:null},form:{},rules:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,o(this.queryParams).then((function(t){e.shareList=t.data.rows,e.total=t.data.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={resourceId:null,resourceName:null,diskType:null,systemType:null,url:null,vcode:null,valid:null,isValid:null,gmtCreate:null,gmtUpdate:null,createBy:null,remark:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.resourceId})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加"},handleUpdate:function(e){var t=this;this.open=!this.open,this.reset();var a=e.resourceId||this.ids;u(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改"}))},handleView:function(e){var t=this,a=e.resourceId||this.ids;u(a).then((function(e){t.form=e.data,t.view=!t.view,t.title="查看"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.resourceId?d(e.form).then((function(){e.$message({message:"修改成功",type:"success"}),e.open=!1,e.getList()})):c(e.form).then((function(){e.$message({message:"新增成功",type:"success"}),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,a=e.resourceId||this.ids;this.$modal.confirm('是否确认删除编号为"'+a+'"的数据项？').then((function(){return p(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("system/share/export",Object(s["a"])({},this.queryParams),"share_".concat((new Date).getTime(),".xlsx"))}}},f=h,y=(a("0698"),a("2877")),g=Object(y["a"])(f,r,n,!1,null,"36bb489b",null);t["default"]=g.exports},7753:function(e,t,a){}}]);
