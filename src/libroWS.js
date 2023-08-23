import axios from 'axios';
export default {
    listar:function() {
        return axios({
            method: 'get',
            url: 'https://www.seg.cl/api/laravel/public/api/libro',
            data: {},
            headers: { 
                'Content-Type': 'application/json'
              },            
          })
    },
    leer:function(id) {
        return axios({
            method: 'get',
            url: 'https://www.seg.cl/api/laravel/public/api/libro/get/'+id,
            data: {},
            headers: { 
                'Content-Type': 'application/json'
              },            
          })
    },
    insertar:function(libro) {
        return axios({
            method: 'post',
            url: 'https://www.seg.cl/api/laravel/public/api/libro/insert',
            data: libro,
            headers: { 
                'Content-Type': 'application/json'
              },                
          })
    },
    actualizar:function(libro) {
        return axios({
            method: 'post',
            url: 'https://www.seg.cl/api/laravel/public/api/libro/update',
            data: libro,
            headers: { 
                'Content-Type': 'application/json'
              },                
          })
    }    
}