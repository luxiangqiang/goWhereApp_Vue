<template>  
   <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="btn-list">
                    <div class="btn-wrap">
                        <div class="btn">北京</div>
                    </div>
                </div>
            </div>
        
            <div class="area">
                    <div class="title">热门城市</div>
                    <div class="btn-list">
                    <div class="btn-wrap" v-for="item of host" :key="item.id">
                        <div class="btn">{{item.city}}</div>
                    </div>
                </div>
            </div>
            <div 
                class="area" 
                v-for="(item, key) of allCities" 
                :key="key"
                :ref="key"
            >
                <div class="title">{{key}}</div>
                <ul class="item-list" v-for="innerItem of item" :key="innerItem.id">
                    <li>{{innerItem.city}}</li>
                </ul>
            </div>
        </div>
   </div>
</template>


<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CityList',
    props:{
        host: Array,
        allCities: Object,
        letter: String
    },
    // 页面挂载完毕后使用
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    // 监听器
    watch: {
        letter() {
           if(this.letter){
               const ele = this.$refs[this.letter][0]
            //    console.log(ele)]
               this.scroll.scrollToElement(ele)
           }
        }
    }
}
</script>


<style scoped>
    .list{
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 1.68rem;
        right: 0;
        bottom: 0;
    }

    .title{
        height: .4rem;
        line-height: .4rem;
        color: #212121;
        padding: .1rem .3rem;
        font-size: .24rem;
        background: #eee;
    }

    .btn-list{
        overflow: hidden;
        padding: .1rem .6rem .1rem .1rem;
    }

    .btn-wrap{
        float: left;
        width: 33.33%;
    }

    .btn{
        padding: .2rem;
        margin: .1rem;
        text-align: center;
        border: .02rem #ccc solid;
    }

    .item-list{
        overflow: hidden;
    }

    .item-list li{
        line-height: .76rem;
        color: #666;
        padding-left: .2rem;
        border-bottom: 1px #ccc solid;
    }

</style>
