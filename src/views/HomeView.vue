<script setup>
import { computed, watch } from 'vue';
import { UseExpanse } from '../composable/UseExpanse';
const { total, filter, removeExpense, expenses } = UseExpanse();
    
    const filtered = computed(() => {
        console.log(`filtro final yeah:   ${filter.value}`)
        if (filter.value === 'all') {
            return expenses.value;
        }
        return expenses.value.filter((item) => item.category === filter.value);
    });

</script>
<template>
    <div class="panel">
                <h2>Lista do dia</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Descricao</th>
                            <th>Categoria</th>
                            <th>Valor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in filtered" :key="item.id">
                            <td>{{ item.title }}</td>
                            <td>{{ item.category }}</td>
                            <td>{{ item.value }}</td>
                            <td>
                                <button class="small-btn" @click="removeExpense(item.id)">X</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="summary">
                    Total do dia: {{ total }}
                </div>
                <div class="botaoAdicionar">
                    <router-link to="/despesas">
                        <button class="small-btn">Adicionar</button>
                    </router-link>
                </div>
            </div>
</template>