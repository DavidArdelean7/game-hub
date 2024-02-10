import axios from "axios"

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2d7e4ffcea3c4760aa0e9e43173d3bf5'
    }
})