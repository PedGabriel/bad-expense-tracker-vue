<script setup>
import HeaderComponent from './components/HeadherComponent.vue';
import { Usefiltro } from './composable/UseFiltro';

const {setFilter } = Usefiltro();


function filtrar(categoria) {
    setFilter(categoria);
    console.log('Filtrando por categoria:', categoria);
}
</script>

<template>
    <div class="app">
        
        <HeaderComponent
        @filter=" filtrar"

        />

        <div class="layout">
            <RouterView />
        </div>
    </div>
</template>

