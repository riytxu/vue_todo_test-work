<template>
    <v-container>
        <v-expansion-panels>
            <v-expansion-panel
                v-for="(item,index) in worker"
                :key="index"
        >
            <v-expansion-panel-header>
                {{ worker[index].lastName + ' ' + worker[index].firstName }}
            </v-expansion-panel-header>
            <v-expansion-panel-content
                v-for="(item,i) in worker[index].taskArray"
                :key="i">
                {{ i + 1 + ':' + ' ' + item }}
                <v-icon
                    size="2em"
                    @click="delIcon(index, i)"
                    >
                        mdi-delete
                </v-icon>
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
    export default {
        inject: ['worker'],
        data() {
            return {
                dialogAdd: false,
                localinfoItem: {
                    item: '',
                    worker: ''
                }
            }
        },
        methods: {
            delIcon(index, i) {
                this.worker[index].taskArray.splice(i, 1)
            },
            addItem() {
                this.dialogAdd = true
            }
        }
    }


</script>
