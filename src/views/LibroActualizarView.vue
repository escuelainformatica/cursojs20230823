<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import libroWS from '../libroWS';
import autorWS from '../autorWS';
import generoWS from '../generoWS';
const router = useRouter();
const route = useRoute();

//console.log(route.params.id); 
let visible = ref(false);
let libro = ref({ titulo: "", cantidad: 0, precio: 0, idgenero: 0, idautor: 0 });
let generos = ref([]);
let autores = ref([]);
let errorEncontrado = ref('');


libroWS.leer(route.params.id)
    .then((resultado) => { libro.value = resultado.data; visible.value = true })
    .catch((error) => console.log(error));

autorWS.listar()
    .then((resultado) => {
        autores.value = resultado.data;
    })
    .catch((error) => {
        errorEncontrado.value = 'error al listar autores';
        console.log(error);
    });
generoWS.listar()
    .then((resultado) => {
        generos.value = resultado.data;
    })
    .catch((error) => {
        errorEncontrado.value = 'error al listar generos';
        console.log(error);
    });

function actualizar() {
    libroWS.actualizar(libro.value)
        .then((resultado)=>{router.push('/');})
        .catch((error)=>console.log(error));
}    

</script>
<template>
    <div v-if="visible">
        Titulo:<input type="text" v-model="libro.titulo" /><br />
        Cantidad:<input type="text" v-model="libro.cantidad" /><br />
        Precio:<input type="text" v-model="libro.precio" /><br />
        Genero:<select v-model="libro.idgenero">
            <option v-for="genero in generos" :value="genero.id">{{ genero.nombre }}</option>
        </select>
        <br />
        autor:<select v-model="libro.idautor">
            <option v-for="autor in autores" :value="autor.id">{{ autor.nombre }} {{ autor.apellido }}</option>
        </select>
        <br />
        <button type="button" v-on:click="actualizar">actualizar</button><br>
        <div style="color:red; background-color: yellow;" v-if="errorEncontrado != ''">
            Error:<br>{{ errorEncontrado }}
        </div>
    </div>
    <div v-else>
        cargando....
    </div>
</template>