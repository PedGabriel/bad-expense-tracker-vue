<script setup>
import { ref } from 'vue';
import { UseExpanse } from '../composable/UseExpanse';
const { addExpense, clearAll, title, value, category, expenses } = UseExpanse();

</script>
<template>
    <div class="panel">
            <h2>Nova despesa</h2>
            <input v-model="title" class="input" placeholder="Descricao" />
            <input v-model="value" class="input" placeholder="Valor" />
            <select name="categoria" id="categoria" v-model="category">
                <option value="food">Comida</option>
                <option value="transport">Transporte</option>
                <option value="other">Outros</option>
            </select>
            <div class="row">
                <button class="small-btn" @click="addExpense">Add</button>
                <button class="small-btn" @click="clearAll">Limpar tudo</button>
            </div>
            <div v-for="expense in expenses" :key="expense.id">
                <li>{{ expense.title }} - {{ expense.value }} - {{ expense.category }}</li>
            </div>
    </div>
</template>