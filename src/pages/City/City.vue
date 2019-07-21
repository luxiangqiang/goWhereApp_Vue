<template>  
    <div>
        <CityHead></CityHead>
        <CitySearch></CitySearch>
    </div>
</template>

<script>
import CityHead from '@/pages/City/components/Header'
import CitySearch from '@/pages/City/components/Search'
export default {
    name: 'city',
    components: {
        CityHead,
        CitySearch
    }
}
</script>


<style>


</style>
