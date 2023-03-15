<template>
    <!--回答-->
    <div id="answer">
        <!--上傳聲音-->
        <div class="row align-items-center">
            <div class="col-lg-4 col-12">
                <h2>聲音檔案：</h2>
            </div>

            <div class="col-lg col-12 align-self-center">
                <input type="file" id="soundButton" accept=".mp3,.wav,.m4a,.mp4,.mov">
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
export default {
    name:'WebUpload',
    data() {
        return {
            soundTitle:'',
            soundType:'',
            user:'',
            story:'',
            progress:''
        }
    },
    methods: {
        upload(){

        }
    },
}
</script>

<style scoped>
#uploadbutton{
    background-color: rgb(202, 202, 202);
    color: rgb(89,87,87);
}

/*回答*/
#answer{
    margin-top: 50px;
    padding: 0 10%;
}
#answer .row{
    margin-top: 20px;
}
input,select,textarea{
    width: 100%;
}
@media screen and (max-width: 560px){
    .modal p{
        font-size: 12px;
    }
    #btn_close{
    	font-size: 12px;
    }  
}
</style>