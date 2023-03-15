<template>
    <div class="container">
        <!--按鍵-->
        <div class="row nav-row">
            <div class="col-lg col text-center">
                <router-link to="/upload"><button class="nav-button">上 傳<br>聲 音</button></router-link>
            </div>
            <div class="col-lg col text-center">
                <router-link to="/listen"><button class="nav-button">聆 聽<br>聲 音</button></router-link>
            </div>
            <div class="col-lg col text-center">    
                <router-link to="/exhibition"><button class="nav-button">展 場<br>資 訊</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'WebHeader',
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
/*主頁按鍵*/
.nav-row{
    margin-top: 150px;
    margin-bottom: 150px;
}

.nav-button{
    height: 300px;
    width: 300px;
    background-color: rgb(89,87,87);
    border: none;
    color: white;
    padding: 10%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 50%;
    font-size: 50px;
    -webkit-transition-duration:0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
}

.nav-button:hover,.nav-button-small:hover{
    background-color: rgb(255, 240, 127);
}

/*按鍵*/
.nav-row-small{
    margin-top: 50px;
    padding: 0 10%;
}

.nav-button-small{
    height: 200px;
    width: 200px;
    background-color: rgb(89,87,87);
    border: none;
    color: white;
    padding: 10%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 50%;
    font-size: 35px;
    -webkit-transition-duration:0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
}

@media screen and (max-width: 1200px){
    .nav-button{
        height: 200px;
        width: 200px;
        font-size: 30px;
    }
    .nav-button-small{
        height: 130px;
        width: 130px;
        font-size: 20px;
    }
}

@media screen and (max-width: 800px){
    .nav-button{
        height: 150px;
        width: 150px;
        font-size: 20px;
    } 
    .nav-button-small{
        height: 100px;
        width: 100px;
        font-size: 20px;
    }

    p{
        font-size: 15px;
    }
}

@media screen and (max-width: 560px){
    .nav-button{
        height: 100px;
        width: 100px;
        font-size: 20px;
    }
    .nav-button-small{
        height: 75px;
        width: 75px;
        font-size: 15px;
    }
    .row h2{
        font-size: 20px;
        font-weight: bold;
    } 
}

@media screen and (max-width: 400px){
    .nav-button{
        height: 75px;
        width: 75px;
        font-size: 15px;
    } 
    .nav-button-small{
        height: 60px;
        width: 60px;
        font-size: 15px;
    }
}
</style>