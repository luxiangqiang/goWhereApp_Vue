<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon"  v-for="item of page" :key="item.id">
                    <div class="icon-image">
                        <img class="icon-img-content" :src="item.imgURL" alt="">
                    </div>
                    <p class="icon-desc">{{item.des}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    data () {
        return {
            iconList: [{
                id: '0001',
                imgURL: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                des: '景点门票'
            },{
                id: '0002',
                imgURL: 'https://imgs.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
                des: '长岛'
            },{
                id: '0003',
                imgURL: 'https://imgs.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
                des: '蓬莱阁'
            },{
                id: '0004',
                imgURL: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                des: '一日游'
            },{
                id: '0005',
                imgURL: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                des: '烟台必游'
            },{
                id: '0006',
                imgURL: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png',
                des: '威海野生动物园'
            },{
                id: '0007',
                imgURL: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/14d4b8a11f6b5f42db1b832fde4278e4.png',
                des: '蓬莱极地'
            },{
                id: '0008',
                imgURL: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png',
                des: '龙口南山'
            },{
                id: '0009',
                imgURL: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png',
                des: '威海野生动物园大减价'
            },]
        }
    },
    computed : {
        pages () {
            const pages = []
            this.iconList.forEach((item, index) => {
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
        /* background: red; */
        position: relative;
    }

    .icon-image{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
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
</style>
