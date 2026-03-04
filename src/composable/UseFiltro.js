import { ref } from "vue";

export function Usefiltro() {
const filter = ref('all');

function setFilter(newFilter) {
    filter.value = newFilter;
    console.log('chego ', newFilter)
}
    return {
        filter,
        setFilter,
}
}