<template>  
    <div class="header">
        城市选择
        <router-link :to="{name:'Home'}">
            <div class="header_left">
                <span class="iconfont">&#xe624;</span>
            </div>
        </router-link>
    </div>
</template>


<script>
export default {
    name: 'CityHead'
}
</script>


<style>
    .header{
        position: relative;
        overflow: hidden;
        height:.86rem;
        line-height: .86rem;
        text-align: center;
        color: #fff;
        background: #00bcd4;
        font-size: .32rem;
    }

    .header_left{
        position:absolute;
        left: 0;
        top: 0;
        width: .64rem;
        text-align: center;
        font-size: .4rem;
        color: #fff;
    }
</style>
