<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
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
    data () {
        return{
            swiperOption:{
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [{
                id: '0001',
                imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
            },{
                id: '0002',
                imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/b421363bbbb9184deacb4247eeea7485.jpg_750x200_12b42643.jpg'
            },{
                id: '0003',
                imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
            }]
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
