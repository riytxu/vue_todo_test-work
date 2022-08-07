<template>
    <v-card>
        <v-card-title class="text-h5">
            Удаление карточки работника
        </v-card-title>
        <v-card-text class="text-h6">
            Вы уверены что хотите удалить карточку 
            <strong>{{infoItem.lastName + ' ' + infoItem.firstName + ' ' + infoItem.patronymic}}</strong> ?
        </v-card-text>
        <v-btn
            @click="cancelBtn"
            color="error"
            class="mb-4 ml-4">
            Отменить
        </v-btn>
        <v-btn
            @click="delItem(infoItem.id)"
            color="success"
            class="mb-4 ml-4">
            Да, удалить
        </v-btn>
    </v-card>



</template>


<script>
export default {
    data() {
        return {
            localDialogDel: this.dialogDel
        }
    },
    props: {
        infoItem: {
            type: Object,
            required: true
        },
        dialogDel: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        cancelBtn() {
            this.localDialogDel = false
            this.$emit('del-cancel-btn', this.localDialogDel)
        },
        delItem(id) {
            this.$emit('del-item', id)
            this.cancelBtn()
        }
    }
}




</script>
