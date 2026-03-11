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
     <h1>Controle de Gastos Rapido</h1>
    <div class="panel" v-if="ligar == false">
                <h2>Lista do dia:</h2>
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
                                <a class="small-btn" @click="removeExpense(item.id)">X </a>
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
                    <a @click="ligarAdicionar()" v-if="ligar == false">
                        Adicionar nova despesa
                    </a>
                    <a @click="ligarAdicionar()" v-else>
                        Voltar para lista
                    </a>
                </div>
</template>
<style scoped>
 h1 {
    text-align: center;
    color: #003C80;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 7vw;
 }
 h2{
      color: #003C80;
      text-align: center;
      font-size: 1.4rem;
      font-weight: 700;
 }
 table {
        width: 100%;
        border-collapse: separate; 
        border-spacing: 0 10px; 
    }
    
    th {
        padding: 15px; 
        text-align: center;   
    }
    
    td {
        padding: 15px; 
        text-align: center;   
    }
    tbody{
        background-color: #003C80;
        color: #EBF4FF;;
    }
    div.summary{
        margin-top: 3vw;
        text-align: center;
        font-size: 1.4rem ;
        color: #003C80;
        font-weight: 600;
        cursor: pointer;

    }
    div.botaoTrocar{
        margin-top: 4vw;
        text-align: center;
        font-weight: 700;
        font-size: 1.4rem;
        cursor: pointer;
    }
    td a {
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
    }
    td a:active{
        transform: scale(0.8);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
    }
</style>