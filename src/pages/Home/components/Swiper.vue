<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-image" v-bind:src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- 显示分页内容 -->
            <div  class="swiper-pagination"  slot="pagination"></div>
            <!-- 控制左右箭头 -->
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- 滚动条 -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
    
</template>

<script>
export default {
    name:'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return{
            swiperOption:{
                pagination: '.swiper-pagination',
                loop: true
            },
        }
    },
    computed: {
        showSwiper () {
            return this.list.length
        }
    }
}
</script>

<style scoped>

    /* 样式穿透 */
    .wrapper >>> .swiper-pagination-bullet-active{
        background: #fff;
    }

    /* 布局抖动解决方案 */
    .wrapper{
        height: 0;
        overflow: hidden;
        padding-bottom: 26.6%;
        background-color: #ccc;
    }
    .swiper-image{
        width: 100%;
    }
    
</style>
