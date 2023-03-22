<template>
    <!--資訊-->
<div>
    <div class="row introduction">
        <h2 class="col-12">展覽簡介</h2>
        <p class="col-12">
            將聲音回歸純粹，透過代表聲音的振幅，讓體驗者自由聆聽各種聲音帶來的悸動。分為網路及展場規劃，在網路上建立網頁，讓眾人都能自由投稿回憶中令人印象深刻的聲音；展場則透過觸碰牆面上的振幅圖案，且每次觸碰聲音會隨機出現，讓觀眾可以自在的徜徉在空間中，聆聽大家所投稿的聲音。
        </p>
    </div>

    <div class="row map">
        <h2 class="col-12">校內審查</h2>
        <p class="col-12">日期：2021/04/21 ~ 2021/04/23<br>
            時間：10:00 - 18:00<br>
            地址：元智大學 320桃園市中壢區遠東路135號</p>
        <!--map-->
        <iframe class="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28929.598508018207!2d121.28955173159787!3d24.993325495832103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681f5490d43fcd%3A0x186eb5a7e52b332b!2z5YWD5pm65aSn5a24!5e0!3m2!1szh-TW!2stw!4v1679504527703!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="row map">
        <h2 class="col-12">校外展覽</h2>
        <p class="col-12">日期：2021/05/14 ~ 2021/05/17<br>
            時間：09:00 - 18:00<br>
            地址：松山文創園區 110台北市信義區光復南路133號</p>
        <!--map-->
        <iframe class="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7021210781672!2d121.5582884511532!3d25.04418114395728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abbf23ce4b3b%3A0xc82b0f87ff7df9dc!2z5p2-5bGx5paH5Ym15ZyS5Y2A!5e0!3m2!1szh-TW!2stw!4v1679504803790!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
</template>

<script>
export default {
    name:'WebEx'

}
</script>

<style scoped>
/*資訊*/
.introduction{
    margin: 100px 10%;
    font-size: 20px;
    line-height: 35px;
}

.map{
    margin: 50px 10%;
    font-size: 20px;
    line-height: 35px;
}

.googlemap{
    width: 100%;
}

@media screen and (max-width: 800px){
    .googlemap{
    	height: 300px;
    }
}
</style>