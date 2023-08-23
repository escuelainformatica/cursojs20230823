import axios from 'axios';
export default {
    listar:function() {
        return axios({
            method: 'get',
            url: 'https://www.seg.cl/api/laravel/public/api/genero',
            data: {}
          })
    }
}