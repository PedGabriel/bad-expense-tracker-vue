import { computed, ref } from 'vue';



export function UseExpanse(){
        const expenses = ref([
        { id: 1, title: 'Cafe', value: 6, category: 'food' },
        { id: 2, title: 'Onibus', value: 4.5, category: 'transport' },
        { id: 3, title: 'Lanche', value: 12, category: 'food' },
    ]);

    const filter = ref('all');

    function setFilter(newFilter) {
        filter.value =  newFilter;
        console.log('chego ', filter.value)
    }

    const filtered = computed(() => {
        console.log(`filtro final yeah:   ${filter.value}`)
        if (filter.value === 'all') {
            return expenses.value;
        }
        return expenses.value.filter((item) => item.category === filter.value);
    });

    const total = computed(() => {
        return expenses.value.reduce((sum, item) => sum + Number(item.value || 0), 0);
    });

    function addExpense() {
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
        filtered,
        filter,
        addExpense,
        removeExpense,
        clearAll,
        filter,
        setFilter,
    }
}