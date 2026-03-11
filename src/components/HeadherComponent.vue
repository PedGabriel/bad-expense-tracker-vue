<script setup>
import { UseExpanse } from '../composable/UseExpanse';
const {setFilter} = UseExpanse();

function filtrar(categoria) {
    setFilter(categoria);
}
</script>

<template>
    <div class="header">
           
            <div>
                <a class="small-btn" @click=" filtrar('all')">Tudo</a>
                <a class="small-btn" @click=" filtrar('food')">Comida</a>
                <a class="small-btn" @click=" filtrar('transport')">Transporte</a>
                <a class="small-btn" @click=" filtrar('other')">Outros</a>
            </div>
        </div>
</template>
<style scoped> 
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #003C80;
  padding: 30px 10px;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #EBF4FF;
}
div.header div {
    display: flex;
    justify-content: space-between;
}
a{
    font-weight: 700;
    cursor: pointer;
    font-size: 1.1rem;
}
a:active{
    transform: scale(0.92);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
    }
</style>