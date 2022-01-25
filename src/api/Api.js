import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
      api_key: '0d803c403a4d7d46435be6f347ecd3f2'
    }    
})

export default Api