(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f18ca348"],{"03f0":function(t,e,s){"use strict";s("0513")},"0513":function(t,e,s){},"210b":function(t,e,s){t.exports=s.p+"img/paypal-mini.4a147115.png"},5778:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"data-list-container",attrs:{id:"list-history-withdrawal"}},[n("vs-prompt",{staticClass:"export-options",attrs:{title:"Export To Excel","accept-text":"Export",active:t.activePrompt},on:{cancle:t.clearFields,accept:t.exportToExcel,close:t.clearFields,"update:active":function(e){t.activePrompt=e}}},[n("vs-input",{staticClass:"w-full",attrs:{placeholder:"Enter File Name.."},model:{value:t.fileName,callback:function(e){t.fileName=e},expression:"fileName"}}),n("v-select",{staticClass:"my-4",attrs:{options:t.formats},model:{value:t.selectedFormat,callback:function(e){t.selectedFormat=e},expression:"selectedFormat"}}),n("div",{staticClass:"flex"},[n("span",{staticClass:"mr-4"},[t._v("Cell Auto Width:")]),n("vs-switch",{model:{value:t.cellAutoWidth,callback:function(e){t.cellAutoWidth=e},expression:"cellAutoWidth"}},[t._v("Cell Auto Width")])],1)],1),n("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading-corners"}},[n("div",{staticClass:"mb-2"},[n("p",[n("span",{staticClass:"mr-4",staticStyle:{color:"#ffb0b0"}},[t._v("Tổng tiền rút: "),n("b",[t._v(t._s(t.formatPrice(t.dtUSD,2))+" USDT")])]),n("span",{staticClass:"mr-4",staticStyle:{color:"#00ffad"}},[t._v("Tổng tiền BNB rút: "),n("b",[t._v(t._s(t.formatPrice(t.dtBNB,10))+" BNB")])]),n("span",{staticClass:"mr-4",staticStyle:{color:"#ffa500"}},[t._v("Phí: "),n("b",[t._v(t._s(t.formatPrice(t.feeBNB,10))+" BNB")])])])]),n("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":t.itemsPerPage,search:"",data:t.products},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return[n("tbody",t._l(a,(function(e,a){return n("vs-tr",{key:a,attrs:{data:e}},[n("vs-td",[n("p",{staticClass:"de-name font-medium truncate"},[t._v("\n                "+t._s(e.from_u)),n("br"),t._v("Mô tả: "+t._s(e.type)+"\n              ")])]),n("vs-td",[n("p",{staticClass:"de-name font-medium truncate"},[n("span",[null==e.paypal?n("IconCrypto",{staticStyle:{width:"20px"},attrs:{coinname:t.getIconType(e.currency),color:"color",format:"svg"}}):n("img",{attrs:{width:"20",src:s("210b")}}),t._v("\n\n                  "+t._s("BTC"!=e.currency.toUpperCase()&&"ETH"!=e.currency.toUpperCase()&&"USDT"!=e.currency.toUpperCase()?"Hệ thống":e.currency.toUpperCase())+"\n                ")],1)])]),n("vs-td",[n("p",{staticClass:"de-amount"},[t._v("\n                "+t._s(t.getAmountDecimal(e.currency,e.amount))),n("br")])]),n("vs-td",[n("p",{staticClass:"de-note"},[t._v(t._s(e.note))])]),n("vs-td",[n("vs-chip",{staticClass:"de-status",attrs:{color:t.getOrderStatusColor(e.status)}},[t._v(t._s(t._f("title")(t.getOrderStatusColorText(e.status))))])],1),n("vs-td",[n("p",{staticClass:"de-create"},[t._v(t._s(t.formatDate(e.created_at)))])]),n("vs-td",{staticClass:"whitespace-no-wrap text-center"},[0==e.status&&"bep20"==e.network||0==e.status&&"erc20"==e.network?n("vx-tooltip",{staticStyle:{float:"left"},attrs:{color:"warning",text:"Duyệt"}},[n("vs-button",{attrs:{disabled:t.clickDone,color:"dark",type:"line","icon-pack":"feather",icon:"icon-check"},on:{click:function(s){return s.stopPropagation(),t.doneWithdra(e.id,a,1,e.to_u,e.amount,e.network)}}},[t._v("Duyệt")])],1):t._e(),0==e.status&&"bep20"==e.network||0==e.status&&"erc20"==e.network?n("vx-tooltip",{staticStyle:{float:"left"},attrs:{color:"danger",text:"Từ chối"}},[n("vs-button",{attrs:{disabled:t.clickRefuseDone,color:"red",type:"line","icon-pack":"feather",icon:"icon-check"},on:{click:function(s){return s.stopPropagation(),t.doneRefuseWithdra(e.id,a,e.amount,e.email,e.fee_withdraw)}}},[t._v("Từ chối")])],1):1==e.status?n("span",{staticStyle:{color:"#00ff37"}},[t._v("Đã duyệt")]):n("span",{staticStyle:{color:"#ff6f6f"}},[t._v("Từ chối")])],1)],1)})),1)]}}]),model:{value:t.selectedUser,callback:function(e){t.selectedUser=e},expression:"selectedUser"}},[n("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"flex flex-wrap-reverse items-center data-list-btn-container"},[n("vs-dropdown",{staticClass:"dd-actions cursor-pointer mr-4 mb-4",attrs:{"vs-trigger-click":""}},[n("div",{staticClass:"p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full"},[n("span",{staticClass:"mr-2"},[t._v("Tác vụ")]),n("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),n("vs-dropdown-menu",[n("vs-dropdown-item",[t.showDeleteMultiBt?n("span",{staticClass:"flex items-center",on:{click:t.deleteMultiple}},[n("feather-icon",{staticClass:"mr-2",attrs:{icon:"TrashIcon",svgClasses:"h-4 w-4"}}),n("span",[t._v("Xóa")])],1):t._e()]),n("vs-dropdown-item",[n("span",{staticClass:"flex items-center",on:{click:function(e){t.activePrompt=!0}}},[n("feather-icon",{staticClass:"mr-2",attrs:{icon:"FileIcon",svgClasses:"h-4 w-4"}}),n("span",[t._v("In")])],1)])],1)],1)],1),n("vs-dropdown",{staticClass:"cursor-pointer mb-4 mr-4 items-per-page-handler",attrs:{"vs-trigger-click":""}},[n("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[n("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.itemsPerPage-(t.itemsPerPage-1))+" -\n              "+t._s(t.products.length-t.currentPage*t.itemsPerPage>0?t.currentPage*t.itemsPerPage:t.products.length)+"\n              of "+t._s(t.queriedItems))]),n("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),n("vs-dropdown-menu",[n("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=4}}},[n("span",[t._v("4")])]),n("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=10}}},[n("span",[t._v("10")])]),n("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=15}}},[n("span",[t._v("15")])]),n("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=20}}},[n("span",[t._v("20")])])],1)],1)],1),n("template",{slot:"thead"},[n("vs-th",{attrs:{"sort-key":"account"}},[t._v("Tài khoản")]),n("vs-th",{attrs:{"sort-key":"type"}},[t._v("Loại tiền")]),n("vs-th",{attrs:{"sort-key":"amount"}},[t._v("Số tiền")]),n("vs-th",{attrs:{"sort-key":"note"}},[t._v("Ghi chú")]),n("vs-th",{attrs:{"sort-key":"status"}},[t._v("Trạng thái")]),n("vs-th",{attrs:{"sort-key":"datecreate"}},[t._v("Thời gian")]),n("vs-th",[t._v("Tác vụ")])],1)],2)],1)],1)},a=[],r=s("4a7a"),i=s.n(r),o=s("c5b9"),c=s("c1df"),u=s.n(c),l=s("2b0e"),d={components:{vSelect:i.a},data:function(){return{clickDone:!1,clickRefuseDone:!1,showDeleteMultiBt:!0,activePrompt:!1,selectedUser:[],fileName:"",formats:["xlsx","csv","txt"],cellAutoWidth:!0,selectedFormat:"xlsx",headerTitle:["Tài khoản","Loại","Số Tiền","Trạng Thái","Ngày Nạp"],headerVal:["account","type","amount","status","datecreate"],productsFake:[{id:1,from_u:"123",to_u:"5344",type_key:"nt",type:"Nạp tiền (Nội bộ)",currency:"sys",amount:100,note:"",status:1,created_at:"00:00:00 02-04-2021"},{id:2,from_u:"123",to_u:"5344",type_key:"nt",type:"Nạp tiền (Nội bộ)",currency:"BTC",amount:100,note:"ok nha",status:1,created_at:"00:00:00 02-04-2021"},{id:3,from_u:"123",to_u:"5344",type_key:"nt",type:"Nạp tiền (Nội bộ)",currency:"ETH",amount:100,note:"",status:1,created_at:"00:00:00 02-04-2021"},{id:5,from_u:"123",to_u:"5344",type_key:"nt",type:"Nạp tiền (Nội bộ)",currency:"USDT",amount:100,note:"",status:1,created_at:"00:00:00 02-04-2021"}],itemsPerPage:10,isMounted:!1,dtUSD:0,dtBNB:0,feeBNB:0}},computed:{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0},products:function(){return this.productsFake},queriedItems:function(){return this.$refs.table?this.$refs.table.queriedResults.length:this.productsFake.length}},methods:{deleteMultiple:function(){var t=this,e=localStorage.getItem("token");if(this.$store.dispatch("setToken",e),0==this.selectedUser.length)return this.$vs.notify({text:"Hãy chọn đối tượng cần xóa",color:"warning",iconPack:"feather",icon:"icon-check"});for(var s=this.selectedUser.length-1;s>=0;s--){var n=this.selectedUser[s]["id"],a={id:n,val:1};o["a"].deleteTrashByID(a).then((function(e){e.data.success||(localStorage.removeItem("token"),t.$router.push("/pages/login").catch((function(){})))})),l["default"].delete(this.productsFake,s)}return this.selectedUser=[],this.$vs.notify({text:"Đã xóa thành công",color:"success",iconPack:"feather",icon:"icon-check"})},doneRefuseWithdra:function(t,e,s,n,a){var r=this,i={id:t,amount:s,email:n,fee:a};o["a"].doneRefuseWithDrawalByID(i).then((function(t){var s=t.data;if(1==s.success)return r.productsFake[e].status=2,r.$vs.notify({text:"Đã hoàn trả lại số tiền",color:"success",iconPack:"feather",icon:"icon-check"})}))},doneWithdra:function(t,e,s,n,a,r){var i=this,c={id:t,val:s,amount:a,address:n,network:r};this.$vs.notify({text:"Đang thực hiện yêu cầu!",color:"warning",iconPack:"feather",icon:"icon-check"}),o["a"].doneWithDrawalByID(c).then((function(t){var s=t.data;if(s.success){var n=s.data;return 1==n.success?(i.productsFake[e].status=1,i.$vs.notify({text:"Đã quy đổi thành số tiền là: "+n.price_trans,color:"success",iconPack:"feather",icon:"icon-check"}),i.reloadList(),i.$vs.notify({text:"Thao tác thành công",color:"success",iconPack:"feather",icon:"icon-check"})):(i.reloadList(),i.$vs.notify({text:"Thao tác thành công",color:"danger",iconPack:"feather",icon:"icon-check"}))}localStorage.removeItem("token"),i.$router.push("/pages/login").catch((function(){}))}))},deleteWithdra:function(t,e,s){var n=this,a=localStorage.getItem("token");this.$store.dispatch("setToken",a);var r={id:t,val:s};o["a"].deleteTrashByID(r).then((function(t){if(t.data.success)return l["default"].delete(n.productsFake,e),n.popupDeleteActive=!1,n.$vs.notify({text:"Đã xóa thành công",color:"success",iconPack:"feather",icon:"icon-check"});localStorage.removeItem("token"),n.$router.push("/pages/login").catch((function(){}))}))},trashDataDeposit:function(){var t=this;this.showDeleteMultiBt=!1;var e=localStorage.getItem("token");this.$store.dispatch("setToken",e),o["a"].getDepositAllTrash().then((function(e){e.data.success?t.productsFake=e.data.data:(localStorage.removeItem("token"),t.$router.push("/pages/login").catch((function(){})))}))},getOrderStatusColor:function(t){return 0==t?"warning":1==t?"success":3==t?"danger":"warning"},getOrderStatusColorText:function(t){return 0==t?"Đang xử lý":1==t||3==t?"Hoàn thành":"Đang xử lý"},getIconType:function(t){var e=t.toUpperCase();return e},formatDate:function(t){if(t)return u()(String(t)).format("MM/DD/YYYY hh:mm:ss")},formatPrice:function(t,e){void 0===t&&(t=0);var s=new Intl.NumberFormat("en-US",{minimumFractionDigits:e});return s.format(t)},getAmountDecimal:function(t,e){var s="$",n=t.toUpperCase(),a=2;"BTC"==n&&(a=6),"ETH"==n&&(a=4),"USDT"==n&&(a=2),"VN"==n&&(a=0);var r=new Intl.NumberFormat("en-US",{minimumFractionDigits:a});return s+r.format(e)},toggleDataSidebar:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.addNewDataSidebar=t},exportToExcel:function(){var t=this;if(0==this.selectedUser.length)return this.$vs.notify({title:"Xuất dữ liệu",text:"Vui lòng chọn nội dung để hoàn thành",color:"danger",iconPack:"feather",icon:"icon-heart"});Promise.all([s.e("chunk-2a72a530"),s.e("chunk-478e35a7")]).then(s.bind(null,"4bf8d")).then((function(e){var s=t.selectedUser,n=t.formatJson(t.headerVal,s);e.export_json_to_excel({header:t.headerTitle,data:n,filename:t.fileName,autoWidth:t.cellAutoWidth,bookType:t.selectedFormat}),t.clearFields()}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))},clearFields:function(){this.fileName="",this.cellAutoWidth=!0,this.selectedFormat="xlsx"},openLoadingInDiv:function(){this.$vs.loading({container:"#loading-corners",type:"corners",scale:.6})},reloadList:function(){var t=this;this.showDeleteMultiBt=!0;var e=localStorage.getItem("token");this.$store.dispatch("setToken",e),o["a"].getWithdrawalListHistory().then((function(e){t.$vs.loading.close("#loading-corners > .con-vs-loading"),4==e.data.success?(localStorage.removeItem("token"),t.$router.push("/pages/login").catch((function(){}))):t.productsFake=e.data.data}))},getDTRut:function(){var t=this;o["a"].getRevenueRut().then((function(e){var s=e.data;1==s.success&&(t.dtUSD=s.data.dtUSD,t.dtBNB=s.data.dtBNB,t.feeBNB=s.data.freeBNB)}))}},created:function(){this.reloadList(),this.getDTRut()},mounted:function(){this.isMounted=!0,this.openLoadingInDiv()}},p=d,f=(s("03f0"),s("2877")),h=Object(f["a"])(p,n,a,!1,null,null,null);e["default"]=h.exports},"8f8a":function(t){t.exports=JSON.parse('{"BASE_URL":"https://192.168.1.48/","BASE_URL_SOCKET":"wss://192.168.1.48:2096","BASE_URL_SOCKET_SYS":"wss://192.168.1.48:2087","BASE_URL_SOCKET_NAP":"wss://192.168.1.48:2083"}')},c5b9:function(t,e,s){"use strict";var n,a=s("bd86"),r=s("bc3a"),i=s.n(r),o=s("8f8a"),c=function(){return i.a.create({baseURL:"".concat(o.BASE_URL),headers:{Authorization:"Sky ".concat(localStorage.getItem("tokenUser"))}})},u=function(){return i.a.create({baseURL:"".concat(o.BASE_URL),headers:{Authorization:"Sky ".concat(localStorage.getItem("token"))}})};e["a"]=(n={loginUser:function(t){return c().post("api/users/login",t)},getTokenActive:function(t){return c().post("api/users/activeUser",t)},registerUser:function(t){return c().post("api/users/createAccount",t)},forgotPassUser:function(t){return c().post("api/users/forgot-password",t)},resendConfirUser:function(t){return c().post("api/users/resend-confirmation-email",t)},changePassword:function(t){return c().patch("api/users/change-password",t)},changePassword2:function(t){return c().patch("api/users/change-password-is",t)},getInfoUser:function(){return c().get("api/users/info")},updateXacMinhTK:function(t){return c().post("api/users/update-info",t)},activeGG2FA:function(t){return c().post("api/users/update-gg2fa",t)},unActiveGG2FA:function(t){return c().post("api/users/disable-gg2fa",t)},sendGG2FA:function(){return c().get("api/users/code-2fa")},createGG2FA:function(){return c().get("api/users/create-gg2fa")},loginGG2FA:function(t){return c().post("api/users/login-2fa",t)},reloadMoneyDemo:function(){return c().put("api/users/demo")},getListHitoryOrder:function(){return c().get("api/users/listbo")},sendMoneyLiveToUsdt:function(t){return c().post("api/users/live-to-usdt",t)},sendMoneyUsdtToLive:function(t){return c().post("api/users/usdt-to-live",t)},withdrawalUserNoiBo:function(t){return c().post("api/users/withdrawal",t)},withdrawalUsdtERC:function(t){return c().post("api/users/withdrawal-erc",t)},withdrawalUsdtBSC:function(t){return c().post("api/users/withdrawal-bsc",t)},withdrawalPaypalNoiBo:function(t){return c().post("api/users/paypal/withdrawal",t)},withdrawalPaypalAccount:function(t){return c().post("api/users/paypal/withdrawal-acc",t)},getBalanceWallet:function(){return c().get("api/users/balance-wallet")},depositWallet:function(t){return c().post("api/users/usdt-wallet",t)},depositRequest:function(t){return c().post("api/users/deposit",t)},UserBuyVip:function(){return c().post("api/users/buy-vip")},getNguoiGioiThieu:function(){return c().get("api/users/presenter")},getThongTinLoiNhuan:function(){return c().get("api/users/bo-statistics")},getListHisOrder:function(){return c().get("api/users/history-order")},getSeachListOrder:function(t){return c().post("api/users/history-order-date",t)},getListHisTradeWallet:function(){return c().get("api/users/history-wallet")},getListHisTradeWalletNumber:function(t){return c().get("api/users/history-wallet/"+t)},getListHisTradeWalletHH:function(){return c().get("api/users/history-wallet-co")},getListHisTradeWalletHHNumber:function(t){return c().get("api/users/history-wallet-co/"+t)},getListHisTradeWalletWGD:function(){return c().get("api/users/history-wallet-trade")},getListHisTradeWalletWGDNumber:function(t){return c().get("api/users/history-wallet-trade/"+t)},chiTietLoiNhuanHoaHong:function(){return c().get("api/users/commission-details")},chiTietLoiNhuanHoaHongPage:function(t){return c().get("api/users/commission-details/"+t)},getSeachListChiTietHH:function(t){return c().post("api/users/commission-details-date",t)},getSeachListLvAgency:function(t){return c().post("api/users/agency-search-lv",t)},getSeachListNameAgency:function(t){return c().post("api/users/agency-search-name",t)},depositPaypal:function(t){return c().get("api/paypal/pay?a="+t.a+"&n="+t.n)},getAddressCoin:function(t){return c().get("api/wallet/"+t+"/address")},transWallet:function(t){return c().post("api/exs/trans",t)},getSetupWallet:function(){return c().get("api/setup/wallet")},getExChangeUser:function(){return c().get("api/exs/hisUser")},getStatusServer:function(){return c().get("status")},checkGiaoDich:function(t){return c().post("api/user/balance/trans/check",t)},getListNotifi:function(t){return c().post("api/users/getListNotifi",t)},updateListNotifi:function(t){return c().post("api/users/updateListNotifi",t)},getRevenueNap:function(){return u().get("api/trades/getRevenueNap")},getRevenueRut:function(){return u().get("api/trades/getRevenueRut")},getRevenueTrans:function(){return u().get("api/trades/getRevenueTrans")},getShowDT:function(t){return u().post("api/trades/getShowDT",t)},changeAccMarketing:function(t){return u().post("api/users/changeAcc",t)},changePassAdmin:function(t){return u().post("api/users/changPassAd",t)},createUser:function(t){return u().post("api/users/create",t)},register:function(t){return u().post("api/users/register",t)},loginAdmin:function(t){return u().post("api/users/AdminSingIn",t)},checkEmail:function(t){return u().get("api/users/checkEmail/"+t)},getAllMember:function(){return u().get("api/users/getAllUser")},updateMember:function(t){return u().patch("api/users/updateUser",t)},updatePriceMember:function(t){return u().patch("api/users/updateMoney",t)},deleteMember:function(t){return u().delete("api/users/deleteUserById/"+t)},verifiedUser:function(t){return u().post("api/users/verifiedUser",t)},getListAgency:function(){return u().get("api/users/getAgency")},viewMemberAgency:function(t){return u().get("api/users/viewTotalMAgency/"+t)},addMoneyMember:function(t){return u().post("api/users/addMoneyMember",t)},getRateCommission:function(){return u().get("api/setup/getRateCommission")},saveRateCommission:function(t){return u().post("api/setup/saveRateCommission",t)}},Object(a["a"])(n,"saveRateCommission",(function(t){return u().post("api/setup/saveRateCommission",t)})),Object(a["a"])(n,"getAddMoneyListHistory",(function(){return u().get("api/trades/historyAllAddMoney")})),Object(a["a"])(n,"getTotalAddMoney",(function(){return u().get("api/trades/totalAddMoney")})),Object(a["a"])(n,"getTradeListHistory",(function(){return u().get("api/trades/historyAll")})),Object(a["a"])(n,"gethistoryAllTrash",(function(){return u().get("api/trades/historyAllTrash")})),Object(a["a"])(n,"deleteTrashByID",(function(t){return u().patch("api/trades/deleteTradeHisById",t)})),Object(a["a"])(n,"acceptDepositById",(function(t){return u().post("api/trades/accept-deposit",t)})),Object(a["a"])(n,"getDepositListHistory",(function(){return u().get("api/trades/hisDepositAll")})),Object(a["a"])(n,"getDepositAllTrash",(function(){return u().get("api/trades/hisDepositAllTrash")})),Object(a["a"])(n,"getWithdrawalListHistory",(function(){return u().get("api/trades/hisWithDrawalAll")})),Object(a["a"])(n,"doneWithDrawalByID",(function(t){return u().post("api/trades/doneWithdrawal",t)})),Object(a["a"])(n,"doneRefuseWithDrawalByID",(function(t){return u().post("api/trades/doneRefuseWithdrawal",t)})),Object(a["a"])(n,"getListF1F7",(function(t){return u().post("api/users/getListF1F7",t)})),Object(a["a"])(n,"getLisCommissionSearch",(function(t){return u().post("api/users/getListCmsHis",t)})),Object(a["a"])(n,"getAnalytics",(function(){return u().get("api/users/analytics")})),Object(a["a"])(n,"getBetsListHistory",(function(){return u().get("api/bets/historyBet")})),Object(a["a"])(n,"getBetsListHisTrash",(function(){return u().get("api/bets/hisBetTrash")})),Object(a["a"])(n,"deleteBetsTrash",(function(t){return u().patch("api/bets/deleteBet",t)})),Object(a["a"])(n,"getExListHistory",(function(){return u().get("api/exs/historyEx")})),Object(a["a"])(n,"getExListHisTrash",(function(){return u().get("api/exs/historyExTrash")})),Object(a["a"])(n,"deleteExTrash",(function(t){return u().patch("api/exs/deleteEx",t)})),Object(a["a"])(n,"uploadAvatar",(function(t){return c().post("api/auth/avatar",t)})),Object(a["a"])(n,"uploadPassportFront",(function(t){return c().post("api/auth/passport/front",t)})),Object(a["a"])(n,"uploadPassportBack",(function(t){return c().post("api/auth/passport/back",t)})),n)}}]);