<script setup>
import HeaderComponent from './components/HeadherComponent.vue';
</script>

<template>
    <html>
    <div class="app">
        
        <HeaderComponent
        />

        <div class="layout">
            <RouterView />
        </div>
    </div>
    </html>
</template>
<style scoped>
.layout {
    margin-top: 30vw; 
    padding: 16px;
}

</style>

