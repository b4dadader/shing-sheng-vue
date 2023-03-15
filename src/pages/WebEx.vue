<template>
    <!--資訊-->
<div>
    <div id="introduction" class="row">
        <h2 class="col-12">展覽簡介</h2>
        <p class="col-12">
            將聲音回歸純粹，透過代表聲音的振幅，讓體驗者自由聆聽各種聲音帶來的悸動。分為網路及展場規劃，在網路上建立網頁，讓眾人都能自由投稿回憶中令人印象深刻的聲音；展場則透過觸碰牆面上的振幅圖案，且每次觸碰聲音會隨機出現，讓觀眾可以自在的徜徉在空間中，聆聽大家所投稿的聲音。
        </p>
    </div>

    <div id="map" class="row">
        <h2 class="col-12">校內審查</h2>
        <p class="col-12">日期：2021/04/21 ~ 2021/04/23<br>
            時間：10:00 - 18:00<br>
            地址：元智大學 320桃園市中壢區遠東路135號</p>
        <!--map-->
    </div>

    <div id="map" class="row">
        <h2 class="col-12">校外展覽</h2>
        <p class="col-12">日期：2021/05/14 ~ 2021/05/17<br>
            時間：09:00 - 18:00<br>
            地址：松山文創園區 110台北市信義區光復南路133號</p>
        <!--map-->
    </div>
</div>
</template>

<script>
export default {
    name:'WebEx'

}
</script>

<style scoped>
#exhibitionbutton{
    background-color: rgb(202, 202, 202);
    color: rgb(89,87,87);
}

/*資訊*/
#introduction{
    margin: 100px 10%;
    font-size: 20px;
    line-height: 35px;
}

#map{
    margin: 50px 10%;
    font-size: 20px;
    line-height: 35px;
}

#googlemap{
    width: 100%;
}

@media screen and (max-width: 800px){
    #googlemap{
    	height: 300px;
    }
}
</style>