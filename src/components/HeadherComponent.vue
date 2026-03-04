<script setup>
const emit = defineEmits(['filter']);

function filtrar(categoria) {
    emit('filter', categoria);
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