<template>
    <v-container>
        <v-btn
            class="mb-4 ml-3"
            color="success"
            @click="addTask">
                Добавить задачу
        </v-btn>
        <v-dialog
            v-model="dialogAddTask"
            width="800">
            <v-form>
                <v-card>
                    <v-card-title>
                        Добавление задачи
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <v-text-field
                                label="Задача"
                                outlined>
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-select
                                label="Ответственный"
                                :items="getWorkers"
                                outlined>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-btn
                            color="success">
                            Добавить
                        </v-btn>
                        <v-btn
                            color="error"
                            class="ml-4">
                            Отмена
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-form>
        </v-dialog>
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
                    class="ml-2"
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
                dialogAddTask: false,
                choseWorker: null
                // localinfoItem: {
                //     item: '',
                //     worker: ''
                // }
            }
        },
        methods: {
            delIcon(index, i) {
                this.worker[index].taskArray.splice(i, 1)
            },
            addTask() {
                this.dialogAddTask = true
            }
        },
        computed: {
            getWorkers() {
                let workerList = []
                for (let i = 0; i <= this.worker.length - 1; i++) {
                    workerList.push(this.worker[i].lastName + ' ' + this.worker[i].firstName)
                }
                console.log(this.worker)
                return workerList
            }
        }
    }


</script>
