<template>  
   <ul class="Alist">
       <li>A</li>
       <li>B</li>
       <li>B</li>
       <li>B</li>
       <li>B</li>
       <li>B</li>
       <li>B</li>
       <li>B</li>
       <li>B</li>
   </ul>
</template>


<script>
export default {
    name: 'CityAlphabet',
    
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
        line-height: .44rem;
        text-align: center;
        color: #00bcd4;
    }

</style>
