<script setup>
import { ref, onMounted } from 'vue';
import libroWS from '../libroWS.js';
import { RouterLink, RouterView } from 'vue-router'

let libros = ref([]);
//console.log("llamando a axios..");
libroWS.listar()
    .then(function (response) {
        console.log(response)
        libros.value = response.data;
    })
    .catch(function (error) {
        console.log("error:");
        console.log(error);
    })
    .finally(function () { console.log("fin de axios") });

//console.log("fin.");

</script>
<template>
    <table border="1">
        <thead>
            <tr>
                <th>id</th>
                <th>titulo</th>
                <th>cantidad</th>
                <th>precio</th>
                <th>autor</th>
                <th>genero</th>
                <th>editar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="libro in libros">
                <td>{{ libro.id }}</td>
                <td>{{ libro.titulo }}</td>
                <td>{{ libro.cantidad }}</td>
                <td>{{ libro.precio }}</td>
                <td>{{ libro.autor.nombre }} {{ libro.autor.apellido }}</td>
                <td>{{ libro.genero.nombre }}</td>
                <td>
                    <RouterLink :to="'/libroactualizar/' + libro.id">LibroActualizar</RouterLink>
                </td>

            </tr>
        </tbody>
    </table>
</template>
