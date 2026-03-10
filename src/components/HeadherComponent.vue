<script setup>
import { UseExpanse } from '../composable/UseExpanse';
const {setFilter} = UseExpanse();

function filtrar(categoria) {
    setFilter(categoria);
}
</script>

<template>
    <div class="header">
            <h1>Controle de Gastos Rapido</h1>
            <div>
                <button class="small-btn" @click=" filtrar('all')">Tudo</button>
                <button class="small-btn" @click=" filtrar('food')">Comida</button>
                <button class="small-btn" @click=" filtrar('transport')">Transporte</button>
                <button class="small-btn" @click=" filtrar('other')">Outros</button>
            </div>
        </div>
</template>
<style>

</style>