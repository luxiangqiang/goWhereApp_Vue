<template>  
    <div>
        <CityHead></CityHead>
        <CitySearch></CitySearch>
        <CityList></CityList>
    </div>
</template>

<script>
import CityHead from '@/pages/City/components/Header'
import CitySearch from '@/pages/City/components/Search'
import CityList from '@/pages/City/components/List'
export default {
    name: 'city',
    components: {
        CityHead,
        CitySearch,
        CityList
    }
}
</script>


<style>


</style>
