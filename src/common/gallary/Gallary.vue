<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in imgs" 
                :key="index"
                >
                    <img class="swiper-image" :src="item" alt="">
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
    </div>
</template>

<script>
export default {
    name:'CommonGallary',
    props: {
        imgs: {
            type:Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            swiperOption: {
                pagination : '.swiper-pagination',
                paginationType : 'fraction',
                observer:true,
                observeParents:true,
            }
        }
    },
    methods: {
        handleGallaryClick () {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
    .container >>> .swiper-container{
        overflow:inherit;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #000;
        z-index: 99;
    }

    /* 图片区域 */
    .wrapper{
        /* overflow: hidden; */
        height: 0;
        width: 100%;
        padding-bottom: 100%;
        /* background: #fff; */
    }

    .swiper-image{
        width: 100%;
    }

    .swiper-pagination{
        color: #fff;
        bottom: -1rem;
    }
</style>
