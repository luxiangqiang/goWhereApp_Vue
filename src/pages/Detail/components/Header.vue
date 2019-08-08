<template>
    <div>
        <router-link tag="div" to="/" class="header-abs">
            <span class="iconfont">&#xe624;</span>
        </router-link>
        <div
            class="header-fixed"
            v-show="showAbs"
            :style="opacityStyle"
            >
            <router-link to="/">
                <span class="iconfont header-fixed-back">&#xe624;</span>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs:false,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {
            console.log('scroll')
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 140;
                opacity = opacity > 1 ? 1 : opacity;
                this.opacityStyle = {
                    opacity:opacity
                }
                this.showAbs = true;
            }else{
                this.showAbs = false;
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    // 页面销毁要解除绑定
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    }

}
</script>

<style scoped>
    .header-abs{
        position: absolute;
        left: .2rem;
        top: .2rem;
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        border-radius: .4rem;
        text-align: center;
        background: rgba(0,0,0,.8);
    }

    .iconfont{
        font-size: .4rem;
        color: #fff;
    }

   .header-fixed{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height:.86rem;
        line-height: .86rem;
        text-align: center;
        color: #fff;
        background: #00bcd4;
        font-size: .32rem;
    }

    .header-fixed-back{
        position:absolute;
        left: 0;
        top: 0;
        width: .64rem;
        text-align: center;
        font-size: .4rem;
        color: #fff;
    }
</style>
