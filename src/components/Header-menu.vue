<template lang="pug">
<div class="w-12/12 bg-slate-900 h-14 text-white font-semibold">
    <div>
        <router-link to="/" >
            <img class="w-12 px-2 pt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" src="../resources/logo.png">
        </router-link>
        <div class="w-5/6 md:w-2/6 absolute top-0 right-0 px-4 py-2">
            <ul class="flex flex-row flex-end justify-between">
                <li v-for="item in items" class="text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-white hover:text-slate-900 hover:scale-110 duration-200 rounded-lg p-1">
                    <router-link :to="item.route">{{ item.name }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                // {id: 1, name: "Accueil", route: "/"},
                {id: 2, name: "Qui sommes-nous ?", route: "/about"},
                {id: 3, name: "Tarifs", route: "/prices"},
                {id: 4, name: "Passer commande", route: "/command"},
                {id: 5, name: "Nous contacter", route: "/contact"},
            ]
        }
    }
}
</script>