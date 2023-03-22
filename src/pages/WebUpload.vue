<template>
    <!--回答-->
    <div id="answer">
        <ModalDialog />
        <!--上傳聲音-->
        <div class="row align-items-center">
            <div class="col-lg-4 col-12">
                <h2>聲音檔案：</h2>
            </div>

            <div class="col-lg col-12 align-self-center">
                <input type="file" accept=".mp3,.wav,.m4a" @change="getSoundFile($event)">
            </div>
        </div>

        <!--聲音名稱-->
        <div class="row align-items-center">
            <div class="col-lg-4 col-12">
                <h2>聲音標題：</h2>
            </div>

            <div class="col-lg col-12">
                <input type="text" id="soundtitle" maxlength="11" v-model="soundTitle">
            </div>
        </div>
        <!--分類-->
        <div class="row align-items-center">
            <div class="col-lg-4 col-12">
                <h2>聲音分類：</h2>
            </div>

            <div class="col-lg col-12">
                <select id="soundtype" v-model="soundType">
                    <option value="">請選擇聲音類別</option>
                    <option value="音樂">音樂</option>
                    <option value="日常">日常</option>
                    <option value="人聲">人聲</option>
                    <option value="動物">動物</option>
                    <option value="自然">自然</option>
                </select>
            </div>
        </div>
        <!--使用者名稱-->
        <div class="row align-items-center">
            <div class="col-lg-4 col-12">
                <h2>您的暱稱：</h2>
            </div>

            <div class="col-lg col-12">
                <input type="text" id="user" maxlength="6" v-model="user">
            </div>
        </div>
        <!--故事-->
        <div class="row">
            <div class="col-12">
                <h2>分享關於這個聲音的故事：</h2>
            </div>

            <div class="col-12">
                <textarea name="story" id="story" rows="5" maxlength="100" v-model="story"></textarea>
            </div>
        </div>
        <!--上傳-->
        <div class="row justify-content-center">
            <div class="col-lg-4 col-6">
                <input class="btn btn-secondary" type="button" id="send" @click="upload" value="送出">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col text-center">
                <p>{{ progress }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import ModalDialog from '@/components/ModalDialog'
export default {
    name: 'WebUpload',
    components: { ModalDialog },
    data() {
        return {
            soundFile: '',
            soundFileType: '',
            soundTitle: '',
            soundType: '',
            user: '',
            story: '',
            progress: ''
        }
    },
    methods: {
        ...mapMutations(['dialogDisplaySet', 'dialogMsgSet']),

        getSoundFile(e) {
            this.soundFile = e.target.files[0]
            this.soundFileType = this.soundFile.name.substring(this.soundFile.name.length - 4).toLowerCase();
            if (this.soundFile.size > 5 * 1024 * 1024) {
                this.soundFile = ''
                this.dialogMsgSet("聲音必須小於5MB")
                this.dialogDisplaySet("block")
            }
            else if (this.soundFileType !== ".mp3" && this.soundFileType != ".wav" && this.soundFileType != ".m4a") {
                this.soundFile = ''
                this.dialogMsgSet("聲音只接受 mp3 wav m4a\n你選取的檔案為" + this.soundFileType)
                this.dialogDisplaySet("block")
            }
        },
        setDateTime() {
            let today = new Date();
            let currentDateTime = today.getFullYear() + '_'
            //月
            if ((today.getMonth() + 1) < 10) {
                currentDateTime += '0' + (today.getMonth() + 1) + '_'
            }
            else {
                currentDateTime += (today.getMonth() + 1) + '_'
            }
            //日
            if (today.getDate() < 10) {
                currentDateTime += '0' + today.getDate() + '_'
            }
            else {
                currentDateTime += today.getDate() + '_'
            }
            //時
            if (today.getHours() < 10) {
                currentDateTime += '0' + today.getHours() + '_'
            }
            else {
                currentDateTime += today.getHours() + '_'
            }
            //分
            if (today.getMinutes() < 10) {
                currentDateTime += '0' + today.getMinutes() + '_'
            }
            else {
                currentDateTime += today.getMinutes() + '_'
            }
            //秒
            if (today.getSeconds() < 10) {
                currentDateTime += '0' + today.getSeconds()
            }
            else {
                currentDateTime += today.getSeconds()
            }

            return currentDateTime
        },
        upload() {
            if (this.soundFile === "") {
                this.dialogMsgSet("請選擇投稿音檔")
                this.dialogDisplaySet("block")
            }
            //聲音 < 5MB
            else if (this.soundFile.size > 5 * 1024 * 1024) {
                this.dialogMsgSet("請確認聲音檔案大小")
                this.dialogDisplaySet("block")
            }
            else if (this.soundFileType !== ".mp3" && this.soundFileType !== ".wav" && this.soundFileType !== ".m4a") {
                this.dialogMsgSet("不接受的聲音格式")
                this.dialogDisplaySet("block")
            }
            else if (this.soundTitle === "") {
                this.dialogMsgSet("請輸入標題")
                this.dialogDisplaySet("block")
            }
            else if (this.soundType === "") {
                this.dialogMsgSet("請選擇聲音的類別")
                this.dialogDisplaySet("block")
            }
            else if (this.user === "") {
                this.dialogMsgSet("請輸入投稿人暱稱")
                this.dialogDisplaySet("block")
            }
            else {
                let uploadFileName = this.setDateTime() + this.soundFileType
                this.dialogMsgSet("上傳成功！\
\n\n●請再次注意，上傳聲音完成後，即代表您同意將您的聲音及影像提供給「形聲」互動藝術作品。\
\n●若上傳聲音之後想將聲音檔案刪除，可現場告知工作人員，或寄信至tjsps60925@gmail.com，我們會立即為您處理。")
                this.dialogDisplaySet("block")

                console.log(this.soundFile)

                this.soundFile = ''
                this.soundTitle = ''
                this.soundType = ''
                this.user = ''
                this.story = ''
            }

        },
    },
}
</script>

<style scoped>
#uploadbutton {
    background-color: rgb(202, 202, 202);
    color: rgb(89, 87, 87);
}

/*回答*/
#answer {
    margin-top: 50px;
    padding: 0 10%;
}

#answer .row {
    margin-top: 20px;
}

input,
select,
textarea {
    width: 100%;
}

@media screen and (max-width: 560px) {
    .modal p {
        font-size: 12px;
    }

    #btn_close {
        font-size: 12px;
    }
}
</style>