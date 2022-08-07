<template>
    <v-container>
        <div>
            <v-btn
                class="mb-9"
                color="success"
                @click="addItem">
                    Добавить работника
            </v-btn>
            <v-toolbar
                floating
                dense
                class="ml-2">
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Поиск"
                    hide-details
                ></v-text-field>
            </v-toolbar>
        </div>
        
        <v-data-table
            :headers="headers"
            :items="worker"
            :search="search"
            sort-by="lastName"
            class="elevation-1"
            hide-default-footer
        >
            <template #[`item.actions`]="{ item }">
                <v-icon
                    size="2em"
                    class="mr-2"
                    @click="editIcon(item)"
                    default
                    >
                        mdi-pencil
                </v-icon>
                <v-icon
                    size="2em"
                    @click="delIcon(item)"
                    >
                        mdi-delete
                </v-icon>
                <v-icon
                    size="2em"
                    class="ml-2"
                    @click="infoIcon(item)"
                    >
                        mdi-alert-circle
                </v-icon>
            </template>

        </v-data-table>

        <v-dialog 
            v-model="dialogInfo">
            <DialogInfo 
                :infoItem="infoItem"></DialogInfo>
        </v-dialog>

        <v-dialog 
            v-model="dialogDel"
            width="500">
            <DialogDel 
                :infoItem="infoItem"
                :dialogDel="dialogDel"
                @del-item="delItem"
                @del-cancel-btn="delCancelBtn"></DialogDel>
        </v-dialog>

        <v-dialog
            v-model="dialogEdit">
            <DialogEdit
                :infoItem="infoItem"
                :dialogEdit="dialogEdit"
                @edit-cancel-bnt="editCancelBtn"
                @edit-approved="editApproved"></DialogEdit>
        </v-dialog>

        <v-dialog
            v-model="dialogAdd"
            persistent>
            <DialogAdd
                :dialogAdd="dialogAdd"
                :infoItem="infoItem"
                @add-cancel-bnt="addCancelBtn"
                @add-new-item="addNewItem"></DialogAdd>
        </v-dialog>

    </v-container>
</template>

<script>
import DialogInfo from "./DialogInfo.vue";
import DialogDel from "./DialogDel.vue";
import DialogEdit from "./DialogEdit.vue";
import DialogAdd from "./DialogAdd.vue";
export default {
    inject: ['worker'],
    data() {
        return {
            search: '',
            dialogInfo: false,
            dialogDel: false,
            dialogEdit: false,
            dialogAdd: false,
            infoItem: {
                id: '',
                firstName: '',
                lastName: '',
                patronymic: '',
                position: '',
                wokrList: false,
                salary: '',
                rate: 'Полная',
                dataOfWork: '',
                taskArray:[]
            }
        }
    },
    methods: {
        editIcon(item) {
            this.dialogEdit = true
            this.infoItem = Object.assign({}, item)
        },
        delIcon(item) {
            this.dialogDel = true
            this.infoItem = Object.assign({}, item)
        },
        infoIcon(item) {
            this.dialogInfo = true
            this.infoItem = Object.assign({}, item)
        },
        addItem() {
            this.dialogAdd = true
            this.infoItem.id = this.worker.length
        },
        delItem(id) {
            let delNumber = this.worker.find(item => item.id == id)
            this.worker.splice(this.worker.indexOf(delNumber), 1)
        },
        delCancelBtn(status) {
            this.dialogDel = status
        },
        editCancelBtn(status) {
            this.dialogEdit = status
        },
        editApproved(localItem) {
            let findItem = this.worker.find(item => item.id == localItem.id)
            this.worker.splice(this.worker.indexOf(findItem), 1, localItem)
        },
        addCancelBtn(status) {
            this.dialogAdd = status
        },
        addNewItem(item) {
            this.worker.push(item)
            console.log(this.worker.length)
        }
    },
    computed: {
        headers() {
            return [
                {
                    text: 'Фамилия',
                    value: 'lastName'
                },
                {
                    text: 'Имя',
                    value: 'firstName'
                },
                {
                    text: 'Отчество',
                    value: 'patronymic'
                },
                {
                    text: 'Должность',
                    value: 'position'
                },
                {
                    text: 'Действия',
                    value: 'actions',
                    sortable: false
                }
            ]
        }
    },
    components: {
    DialogInfo,
    DialogDel,
    DialogEdit,
    DialogAdd
    }
}
</script>
