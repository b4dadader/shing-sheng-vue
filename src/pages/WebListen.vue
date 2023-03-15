<template>
    <!--聲音-->
    <div id="page_listen">
        <div class="row">
            <div class="col-lg-4 col-12">
                <h2>聲音分類：</h2>
            </div>
            <div class="col-lg col-12 align-self-center">
                <select id="soundtype">
                    <option value="">全部</option>
                    <option value="音樂">音樂</option>
                    <option value="日常">日常</option>
                    <option value="人聲">人聲</option>
                    <option value="動物">動物</option>
                    <option value="自然">自然</option>
                </select>
            </div>
        </div>
        <div class="row justify-content-center" id="answer">
            <audio id="playsound" preload="none" volume="max"></audio>
        </div>
    </div>
</template>

<script>
export default {
    name:'WebListen'

}
</script>

<style scoped>
#listenbutton{
    background-color: rgb(202, 202, 202);
    color: rgb(89,87,87);
}

/*聲音*/
#page_listen{
    margin-top: 50px;
    padding: 0 20%;
}

#post{
	padding: 50px 0;
}


select{
	width: 100%;
}

.row h5{
	font-weight: bold;
}
@media screen and (max-width: 400px){
	.row h5{
		font-size: 15px;
	}
}
</style>