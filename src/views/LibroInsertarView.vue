<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import LibroFormulario from '../componente/LibroFormulario.vue';
import libroWS from '../libroWS';

let libro = ref({ titulo: "", cantidad: 0, precio: 0, idgenero: 0, idautor: 0 });

let errorEncontrado = ref('');
const router = useRouter();
const route = useRoute();



function insertar() {


    libroWS.insertar(libro.value)
        .then(function (resultado) {
            console.log(resultado);
            router.push('/');
        })
        .catch(function (error) {
            errorEncontrado.value = 'error al insertar';
            console.log("error");
            console.log(error);
        });
}

</script>
<template>
    <LibroFormulario :libro="libro" /><br>

    <button type="button" v-on:click="insertar">Insertar</button><br>
    <div style="color:red; background-color: yellow;" v-if="errorEncontrado != ''">
        Error:<br>{{ errorEncontrado }}
    </div>
</template>