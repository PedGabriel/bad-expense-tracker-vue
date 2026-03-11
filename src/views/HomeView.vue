<script setup>
import { computed, ref, watch } from 'vue';
import { UseExpanse } from '../composable/UseExpanse';
const { total, filter, removeExpense, expenses, addExpense, clearAll, title, value, category } = UseExpanse();
    
    const filtered = computed(() => {
        console.log(`filtro final yeah:   ${filter.value}`)
        if (filter.value === 'all') {
            return expenses.value;
        }
        return expenses.value.filter((item) => item.category === filter.value);
    });

    const ligar = ref(false);

    function ligarAdicionar() {
        ligar.value = !ligar.value;
    }
</script>
<template>
    <div class="panel" v-if="ligar == false">
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
            </div>
            <div v-else>
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
            </div>
            <div class="botaoTrocar">
                    <button @click="ligarAdicionar()" v-if="ligar == false">
                        Adicionar nova despesa
                    </button>
                    <button @click="ligarAdicionar()" v-else>
                        Voltar para lista
                    </button>
                </div>
</template>