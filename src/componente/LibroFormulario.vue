<script setup>
import { ref, onMounted } from 'vue';
import autorWS from '../autorWS';
import generoWS from '../generoWS';

const props = defineProps(['libro'])
console.log(props.libro);
let generos = ref([]);
let autores = ref([]);
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

</script>
<template>
    
    <span>Titulo:</span><input type="text" v-model="props.libro.titulo" /><br />
    <span>Cantidad:</span><input type="text" v-model="props.libro.cantidad" /><br />
    <span>Precio:</span><input type="text" v-model="props.libro.precio" /><br />
    <span>Genero:</span><select v-model="props.libro.idgenero">
        <option v-for="genero in generos" :value="genero.id">{{ genero.nombre }}</option>
    </select>
    <br />
<span>autor:</span><select v-model="props.libro.idautor">
        <option v-for="autor in autores" :value="autor.id">{{ autor.nombre }} {{ autor.apellido }}</option>
    </select>
    <br />
</template>
<style>
span {
    display: inline-block;
    width: 100px;
}
</style>