<template>  
    <div>
        <CityHead></CityHead>
        <CitySearch></CitySearch>
        <CityList></CityList>
        <City-alphabet></City-alphabet>
    </div>
</template>

<script>
import CityHead from '@/pages/City/components/Header'
import CitySearch from '@/pages/City/components/Search'
import CityList from '@/pages/City/components/List'
import CityAlphabet from '@/pages/City/components/Alphabet'
export default {
    name: 'city',
    components: {
        CityHead,
        CitySearch,
        CityList,
        CityAlphabet
    }
}
</script>


<style>

</style>
