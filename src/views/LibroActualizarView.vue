<script setup>
import LibroFormulario from '../componente/LibroFormulario.vue';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import libroWS from '../libroWS';

const router = useRouter();
const route = useRoute();

//console.log(route.params.id); 
let visible = ref(false);
let libro = ref({ titulo: "", cantidad: 0, precio: 0, idgenero: 0, idautor: 0 });

let errorEncontrado = ref('');


libroWS.leer(route.params.id)
    .then((resultado) => { libro.value = resultado.data; visible.value = true })
    .catch((error) => console.log(error));



function actualizar() {
    libroWS.actualizar(libro.value)
        .then((resultado) => { router.push('/'); })
        .catch((error) => console.log(error));
}

</script>
<template>
    <div v-if="visible">
        <LibroFormulario :libro="libro" /><br>
        <button type="button" v-on:click="actualizar">actualizar</button><br>
        <div style="color:red; background-color: yellow;" v-if="errorEncontrado != ''">
            Error:<br>{{ errorEncontrado }}
        </div>
    </div>
    <div v-else>
        cargando....
    </div>
</template>