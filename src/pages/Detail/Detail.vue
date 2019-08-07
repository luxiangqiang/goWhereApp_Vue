<template>
    <div>
        <DetailBanner></DetailBanner>
        <DetailHeader></DetailHeader>
        <div class="container"></div>
    </div>
</template>


<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
    name: 'Detail',
    components:{
        DetailBanner,
        DetailHeader
    }
}
</script>


<style scoped>
    .container{
        height:50rem;
    }
</style>
