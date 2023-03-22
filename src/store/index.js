import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {

}

const mutations = {
    dialogDisplaySet(state, value){
        state.dialogDisplay='display:'+value
    },
    dialogMsgSet(state, value){
        state.dialogMsg=value
    }
}

const state = {
    //dialog顯示與否
    dialogDisplay:'display:block',
    //dialog內容
    dialogMsg: '上傳前請詳讀本網站之注意事項：\
\n\n1.本網站及延伸之互動作品皆為非營利之學術項目，所有上傳資料僅會使用於本作品，敬請安心上傳。\
\n2.上傳之聲音及影像不得涉於暴力、血腥、18禁等危害風俗及擁有版權之內容，若違反上述規範者，本團隊得刪除上傳項目。\
\n3.所有項目一經上傳，即同意聲音及影像將會公開於網路（此網站、IG、FB粉絲專頁）及展場中，且影像會以加工形式於網路及展場呈現。\
\n\n●上傳音檔時請將時間控制在5～10秒內。\
\n點選 確定 即代表同意將聲音及影像使用權交於本網站及「形聲」互動藝術作品之中。'
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})