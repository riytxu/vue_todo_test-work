<template>
    <v-container fluid>
        <v-app-bar
            color="green"
            elevation="5"
            rounded
        >
            <v-btn
                class="ml-2"
                @click="$router.push('/')">
                    Список работников
            </v-btn>
            <v-btn
                class="ml-2"
                @click="$router.push('/todo')">
                    Список Задач
            </v-btn>
        </v-app-bar>
    </v-container>
</template>

<script>
export default {

}
</script>