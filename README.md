# shinsheng

## modal
    -如果要控制開啟與關閉, 操作:style="display:block"

## input file
    -input標籤為file時, 如果要取得檔案, 使用v-on並傳$event給methods
    <input type="file" accept=".mp3,.wav,.m4a,.mp4,.mov" @change="getSoundFile($event)">
    ...
    methods:{
        getSoundFile(e){
            this.soundFile=e.target.files[0]
        }
    }
    