<template>  
    <div>
        <ul class="Alist">
            <li 
                v-for="item of letters" 
                :key="item" 
                :ref="item"
                @click="handleLetterClick"
                @touchstart="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
            >
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        alphabet: Object
    },
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated () {
        // this.startY = this.$refs['A'][0].offsetTop
        // console.log(this.startY)
    },
    computed: {
        letters() {
            const letters = []
            for(let i in this.alphabet){
                letters.push(i)
            }
            return letters;
        }
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart() {
            this.touchStatus = true;
        },
        handleTouchMove(e) {
            console.log('move')
            if(this.touchStatus){
                // 函数滚动节流
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    const touchY = e.touches[0].clientY - 79
                    const startY = this.$refs['A'][0].offsetTop
                    const index = Math.floor((touchY - startY) / 20)
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change', this.letters[index])
                    }
                },16)
            }
        },
        handleTouchEnd() {
            this.touchStatus = false;
        }
    }
}
</script>

<style scoped>
    .Alist{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 1.78rem;
        right: 0;
        bottom: 0;
        width: .4rem;
    }

    li{
        line-height: .35rem;
        text-align: center;
        color: #00bcd4;
    }

</style>
