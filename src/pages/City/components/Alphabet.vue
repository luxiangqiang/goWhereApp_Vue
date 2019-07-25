<template>  
    <div>
        <ul class="Alist">
            <li v-for="(item, key) of alphabet" :key="key">
                {{key}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        alphabet: Object
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
