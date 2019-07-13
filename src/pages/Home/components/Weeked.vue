<template>
    <div class="">
        <div class="weeked-title">周末去那儿</div>
        <dir  v-for="item of weekedList" :key="item.id">
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
    data () {
        return {
            weekedList: [{
                id: '0001',
                imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/a2/30280c415152a1.jpg_r_640x214_ce337d5d.jpg',
                title: '烟台打卡',
                desc: '来烟台玩，你的行程里必少不了这几个地'
            },{
                id: '0002',
                imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/66/b34be5051e3376.jpg_r_640x214_dc4857d8.jpg',
                title: '海滨日光浴',
                desc: '浪柔沙细，轻波亲吻着海岸'
            },{
                id: '0003',
                imgUrl: 'https://imgs.qunarzz.com/sight/source/1512/42/2650adfc626066.jpg_r_640x214_4053783f.jpg',
                title: '仙境蓬莱周末游',
                desc: '蓬莱，道教传说中著名的神仙住所和人间仙境，我国四大名楼之一，八仙过海的神话故事源于这里 '
            },{
                id: '0004',
                imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/c6/8ae64cddfb6a43.jpg_r_640x214_9f3e5d2b.jpg',
                title: '户外森呼吸',
                desc: '空气差？那就去山东各大森林公园玩耍吧！这里是春夏秋冬旅游度假的绝佳之选'
            }]
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
        width: 100%;
        height: 100%;
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


