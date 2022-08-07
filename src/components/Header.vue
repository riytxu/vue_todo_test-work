<template>

    <v-container fluid>
        <v-app-bar
            color="green"
            elevation="5"
            rounded
        >
            <v-btn
                class="ml-2">
                <router-link to="/">
                    Список работников
                </router-link>
            </v-btn>
            <v-btn
                class="ml-2">
                <router-link to="/todo">
                    Список Задач
                </router-link>
            </v-btn>
        </v-app-bar>
    </v-container>

</template>

<script>
export default {

}




</script>