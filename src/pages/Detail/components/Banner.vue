<template>
    <div class="banner">
        <img class="banner-img" src="https://imgs.qunarzz.com/sight/p0/1604/40/409ad6cc05e7d84d90.img.jpg_200x200_4fac5044.jpg" alt="https://imgs.qunarzz.com/sight/p0/1604/40/409ad6cc05e7d84d90.img.jpg_200x200_4fac5044.jpg">
        <div class="banner-info">
            <div class="banner-title">
                大连圣亚海洋世界(AAAA景区)
            </div>
            <div class="banner-number">
                <span class="iconfont"></span>
                39
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .banner{
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
    }
    .banner-img{
        width: 100%;
    }
    .banner-info{
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: .6rem;
        color: #fff;
        background-image: linear-gradient(top, rgba(0, 0, 0, 0),rgba(0,0,0,0.8))
    }
    .banner-title{
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
    }
    .banner-number{
        line-height: .32rem;
        height: .32rem;
        border-radius: .2rem;
        background: rgba(0,0,0,.8);
        font-size: .32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
    }

</style>
