<template>
    <v-form
        v-model="valid"
        lazy-validation
        ref="form">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Добавление работника</span>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col
                            cols="3"
                            sm="3"
                            md="4"
                        >
                            <v-text-field
                                v-model="localinfoItem.lastName"
                                :rules="stringRules"
                                label="Фамилия"
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="3"
                            sm="3"
                            md="4"
                        >
                            <v-text-field
                                v-model="localinfoItem.firstName"
                                :rules="stringRules"
                                label="Имя"
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="3"
                            sm="3"
                            md="4"
                        >
                            <v-text-field
                                v-model="localinfoItem.patronymic"
                                :rules="stringRules"
                                label="Отчество"
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="3"
                            sm="3"
                            md="4"
                        >
                            <v-text-field
                                v-model="localinfoItem.position"
                                :rules="stringRules"
                                label="Должность"
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="4"
                            sm="3"
                            md="4"
                        >
                            <v-checkbox
                                v-model="localinfoItem.wokrList"
                                label="Трудовая книжка сдана"
                            >
                            </v-checkbox>
                        </v-col>
                        <v-col
                            cols="3"
                            sm="3"
                            md="4"
                        >
                            <v-text-field
                                v-model="localinfoItem.salary"
                                :rules="numRules"
                                prefix="₽"
                                label="Оклад"
                                outlined
                            >
                            </v-text-field>
                        </v-col>      
                        <v-col
                            cols="3"
                            sm="3"
                            md="4"
                        >
                            <v-select
                                v-model="localinfoItem.rate"
                                label="Ставка"
                                :items="['Полная', 'Половина']"
                                outlined
                            >
                            </v-select>
                        </v-col>
                        <v-col
                            cols="3"
                            sm="3"
                            md="4"
                        >
                            <v-text-field
                                v-model="localinfoItem.dataOfWork"
                                label="Дата выхода"
                                type="date"
                                outlined
                            >
                            </v-text-field>
                        </v-col> 
                    </v-row>
                    <v-btn 
                        @click="cancelBtn"
                        color="error">
                        Отменить
                    </v-btn>
                    <v-btn
                        color="success"
                        class="ml-4"
                        @click="saveBtn"
                        :disabled="!valid">
                        Сохранить
                    </v-btn>
                </v-card-text>
            </v-card>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            valid: true,
            localdialogAdd: this.dialogAdd,
            localinfoItem: this.infoItem,
            stringRules: [
                v => !!v || 'Обязательно к заполнению',
                v => /^[а-яё]*$/i.test(v) || 'Используйте кириллицу без пробелов'
            ],
            numRules: [
                v => !!v || 'Обязательно к заполнению',
                v => /^[0-9]*$/i.test(v) || 'Используйте цифры без пробелов'
            ]
        }
    },
    props: {
        dialogAdd: {
            type: Boolean,
            required: true
        }, 
        infoItem: {
            type: Object,
            reuired: false,
            default: { 
                id: '',
                firstName: '',
                lastName: '',
                patronymic: '',
                position: '',
                wokrList: false,
                salary: '',
                rate: 'Полная',
                dataOfWork: new Date().toJSON().split('T').slice(0,1).join(),
                taskArray:[]
            }
        }
    },
    methods: {
        cancelBtn() {
            this.localinfoItem = Object.assign({}, this.infoItem)
            this.localdialogAdd = false
            this.$emit('add-cancel-bnt', this.localdialogAdd)

        },
        saveBtn() {
            if(this.$refs.form.validate()) {
                this.$emit('add-new-item', this.localinfoItem)
                this.cancelBtn()
            } else { return }
        }
    }
}

</script>
