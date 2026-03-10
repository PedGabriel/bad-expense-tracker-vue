import { computed, ref, watch } from 'vue';

const expenses = ref([
        { id: 1, title: 'Cafe', value: 6, category: 'food' },
        { id: 2, title: 'Onibus', value: 4.5, category: 'transport' },
        { id: 3, title: 'Lanche', value: 12, category: 'food' },
    ]);

    const title = ref('');
    const value = ref('');
    const category = ref('');

    const filter = ref('all');

export function UseExpanse(){
        


    function setFilter(newFilter) {
        filter.value =  newFilter;
        console.log('chego ', filter.value)
    }

    const total = computed(() => {
        return expenses.value.reduce((sum, item) => sum + Number(item.value || 0), 0);
    });

    function addExpense(titulo, valor, categoria) {
        if (!title.value.trim() || !value.value.trim()) {
            alert('Preencha tudo');
            return;
        }
        expenses.value.push({
            id: Date.now(),
            title: title.value,
            value: value.value,
            category: category.value || 'other',
        });
        title.value = '';
        value.value = '';
        category.value = '';
    }

    function removeExpense(id) {
        expenses.value = expenses.value.filter((item) => item.id !== id);
    }

    function clearAll() {
        if (!confirm('Tem certeza?')) {
            return;
        }
        expenses.value = [];
    }

    return{
        total,
        filter,
        addExpense,
        removeExpense,
        clearAll,
        setFilter,
        expenses,
        title,
        value,
        category
    }
}