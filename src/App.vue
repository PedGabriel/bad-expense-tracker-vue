<script setup>
import HeaderComponent from './components/HeadherComponent.vue';
</script>

<template>
    <div class="app">
        
        <HeaderComponent
        />

        <div class="layout">
            <RouterView />
        </div>
    </div>
</template>

