<template>  
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
        </div>
        <div class="search-content" ref='search' v-show="keyword">
            <ul>
                <li class="search-item" v-for="item of list" :key="item.id">
                    {{item}}
                </li>
                <li class="search-item" v-show="hasList">没有找到匹配项</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list:[],
            timer:null
        }
    },
    computed: {
        hasList () {
            return !this.list.length;
        }
    },
    watch: {
        keyword () {
            if(this.timer) {
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list = []
                return
            }
            this.timer = setTimeout(()=>{
                const result = []
                for(let i in this.cities) {
                    this.cities[i].forEach(value => {
                        if(value.city.indexOf(this.keyword) > -1){
                            result.push(value.city)
                        }
                    });
                }
                this.list = result;
            }, 100)
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs['search'])
    }
}
</script>

<style>
    .search{
        height:.72rem;
        background: #00bcd4;
        padding: 0.1rem;
    }

    .search-input{
        box-sizing: border-box;
        width: 100%;
        height: .62rem;
        padding: 0.1rem;
        line-height: .62rem;
        text-align: center;
        border-radius: .06rem;
        color: #666;
    }

    .search-content{
        overflow: hidden;
        position: absolute;
        top: 1.68rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ccc;
        z-index: 1
    }

    .search-item{
        line-height: .62rem;
        padding-left: .2rem;
        color: #666;
        background: #fff;
        border-bottom: 1px solid #eee;
    }
</style>
