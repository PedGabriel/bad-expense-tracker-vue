<script setup>
import HeaderComponent from './components/HeadherComponent.vue';
import { Usefiltro } from './composable/UseFiltro';
import { UseExpanse } from './composable/UseExpanse';

const {setFilter} = UseExpanse();


function filtrar(categoria) {
    setFilter(categoria);
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

