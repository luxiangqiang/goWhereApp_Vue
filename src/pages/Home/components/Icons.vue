<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon"  v-for="item of page" :key="item.id">
                    <div class="icon-image">
                        <img class="icon-img-content" :src="item.imgURL" alt="">
                    </div>
                    <p class="icon-desc">{{item.des}}</p>
                </div>
            </swiper-slide>
        </swiper>
        <div class="slot-content">
          <p  class="swiper-pagination slot-style"  slot="pagination"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data () {
        return {
             swiperOption:{
                autoplay: false
            },
        }
    },
    
    computed : {
        pages () {
            const pages = []
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]){
                    pages[page] = [] 
                }
                pages[page].push(item); 
            })
            return pages
        }
    }
}
</script>

<style>
    /* 宽高比为 2:1 */
    .icons .swiper-container{
        height: 0;
        padding-bottom: 50%;
    }

    .icon{
        overflow: hidden;
        width: 25%;
        float: left;
        height: 0;
        padding-bottom: 25%;
        position: relative;
    }

    .icon-image{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        padding-top: .1rem;
        /* background: blue; */
    }

    .icon-img-content{
        height: 100%;
        margin: 0 auto;
        display: block;
    }

    .icon-desc{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .44rem;
        text-align: center;
        line-height: .44rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .slot-style{
        padding: 6px;
        line-height: 20px;
    }

    .slot-content{
        height: 20px;
        display: flex;
        justify-content: center
    }

    .swiper-pagination-bullet{
        margin-left: 15px;
    }
</style>
