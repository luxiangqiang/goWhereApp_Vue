<template>
    <div class="mg-top">
        <div class="recommed-title">热销推荐</div>
            <ul class="item-list">
                <router-link
                tag="li" 
                class="item" 
                v-for="item of list" 
                :key="item.id"
                :to="'/detail/' + item.id"  
                >
                    <div class="item-group">
                        <img class="item-img" :src="item.imgUrl" alt="">
                    </div>
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                        <button class="item-button">查看详情</button>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    },
    data () {
        return {
            
        }
    }
}
</script>

<style scode> 
    .mg-top{
        margin-top: .20rem;
    }
    
    .recommed-title{
        padding: .24rem .20rem .26rem;
        font-size: .32rem;
        background: #eee;
    }

    .item{
        overflow: hidden;
        display: flex;
        margin-top: .2rem;
    }

    .item-list{
        padding: .20rem 0;
        padding-left: .20rem;
    }

    .item-info{
        line-height: .54rem;
        padding-left: .2rem;
        min-width: 0;
    }

    .item-img{
        width: 1.7rem;
        height: 1.7rem;
    }

    .item-title{
        font-size: .32rem;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }

    .item-desc{
       color: #ccc;
       line-height: .4rem;
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
    }

    .item-button{
        background: #ff9300;
        padding: 0 .2rem;
        margin-top: .16rem;
        border-radius: .06rem;
        color:#fff;
        line-height: .44rem;
    }
</style>
