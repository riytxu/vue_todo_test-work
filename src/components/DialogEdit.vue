<template>
    <v-form
        v-model="valid"
        lazy-validation>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Редактирование информации</span>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col
                            cols="3"
                            sm="3"
                            md="4"
                        >
                            <v-text-field
                                v-model="infoItem.lastName"
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
                                v-model="infoItem.firstName"
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
                                v-model="infoItem.patronymic"
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
                                v-model="infoItem.position"
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
                                v-model="infoItem.wokrList"
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
                                v-model="infoItem.salary"
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
                                v-model="infoItem.rate"
                                label="Ставка"
                                :items="['Полная', 'Половина']"
                                outlined
                                persistent-hint
                            >
                            </v-select>
                        </v-col>
                        <v-col
                            cols="3"
                            sm="3"
                            md="4"
                        >
                            <v-text-field
                                v-model="infoItem.dataOfWork"
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
                        @click="saveBtn()"
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
            localdialogEdit: this.dialogEdit,
            valid: true,
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
        infoItem: {
            type: Object,
            required: true
        },
        dialogEdit: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        cancelBtn() {
            this.localdialogEdit = false
            this.$emit('edit-cancel-bnt', this.localdialogEdit)
        },
        saveBtn() {
            this.$emit('edit-approved', this.infoItem)
            this.cancelBtn()
        }
    }
}

</script>
