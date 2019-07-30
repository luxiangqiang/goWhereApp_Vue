<template>  
    <div>
        <CityHead></CityHead>
        <CitySearch :cities="allCities"></CitySearch>
        <CityList 
        :host="hostCities" 
        :allCities="allCities"
        :letter="letter"
        ></CityList>
        <City-alphabet
         :alphabet="alphabet"
         @change="handleLetterChange"
         ></City-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHead from '@/pages/City/components/Header'
import CitySearch from '@/pages/City/components/Search'
import CityList from '@/pages/City/components/List'
import CityAlphabet from '@/pages/City/components/Alphabet'
export default {
    name: 'city',
    data () {
        return {
            hostCities:[],
            allCities:{},
            letter:'',
            alphabet:{
                "A": 1,
                "B": 2,
                "C": 3,
                "D": 4,
                "E": 5,
                "F": 6,
                "G": 7,
                "H": 8,
                "I": 9,
                "G": 10,
                "K": 11,
                "L": 12,
                "M": 13,
                "N": 14,
                "O": 15,
                "P": 16,
                "Q": 17,
                "R": 18,
                "S": 19,
                "T": 20,
                "U": 21,
                "V": 22,
                "W": 23,
                "X": 24,
                "Y": 25,
                "Z": 26,
            }
        }
    },
    components: {
        CityHead,
        CitySearch,
        CityList,
        CityAlphabet
    },
    mounted () {
        this.getCitiesInfo();
    },
    methods: {
        getCitiesInfo() {
            axios.get('static/mock/city.json')
            .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            console.log(res.data.data.hotCities)
            this.hostCities = res.data.data.hotCities;
            this.allCities = res.data.data.allCities;
        },
        handleLetterChange (letter) {
            this.letter = letter;
        }
    }
}
</script>


<style>

</style>
