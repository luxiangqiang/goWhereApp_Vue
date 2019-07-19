<template>
    <div class="">
        <div class="weeked-title">周末去那儿</div>
        <dir  v-for="item of list" :key="item.id">
            <div class="weeked-img-content">
                <img class="weeked-img" :src="item.imgUrl" alt="">
            </div>
            <div class="weeked-text">
                <p class="title">{{item.title}}</p>
                <p class="desc">{{item.desc}}</p>
            </div>
        </dir>
    </div>
</template>

<script>
export default {
    name: 'HomeWeeked',
    props: {
        list: Array
    },
    data () {
        return {
            
        }
    }
}
</script>

<style>
    .weeked-title{
        height: .8rem;
        line-height: .8rem;
        padding-left: .26rem;
        color: #212121;
        background: #eee;
    }

    dir{
        display: inline;
        padding: 0;
    }

    .weeked-img-content{
        overflow: hidden;
        height: 0;
        padding-bottom: 37.4375%;
    }

    .weeked-item{
        overflow: hidden;
        margin-bottom: .1rem;
    }

    .weeked-img{
        width: 100%;
    }

    .weeked-text{
        padding: .14rem .2rem .2rem .2rem;
    }

    .title{
        overflow: hidden;
        font-size: .28rem;
        color: #212121;
        line-height:.48rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .desc{
        overflow: hidden;
        font-size: .24rem;
        color: #616161;
        line-height:.42rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>


