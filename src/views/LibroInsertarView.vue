<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import libroWS from '../libroWS';
import autorWS from '../autorWS';
import generoWS from '../generoWS';
let libro = ref({ titulo: "", cantidad: 0, precio: 0, idgenero: 0, idautor: 0 });
let generos = ref([]);
let autores = ref([]);
let errorEncontrado=ref('');
const router = useRouter();
const route = useRoute();

autorWS.listar()
    .then((resultado) => {
        autores.value = resultado.data;
    })
    .catch((error) => {
        errorEncontrado.value='error al listar autores';
        console.log(error);
    });
generoWS.listar()
    .then((resultado) => {
        generos.value = resultado.data;
    })
    .catch((error) => {
        errorEncontrado.value='error al listar generos';
        console.log(error);
    });

function insertar() {


    libroWS.insertar(libro.value)
        .then(function (resultado) {
            console.log(resultado);
            router.push('/');
        })
        .catch(function (error) {
            errorEncontrado.value='error al insertar';
            console.log("error");
            console.log(error);
        });
}

</script>
<template>
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
    <button type="button" v-on:click="insertar">Insertar</button><br>
    <div style="color:red; background-color: yellow;" v-if="errorEncontrado!=''">
        Error:<br>{{ errorEncontrado }}
    </div>



</template>