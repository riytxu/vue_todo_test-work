<template>

  <v-app>
    <Header></Header>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </v-app>
 
</template>

<script>
import Header from './components/Header.vue';
// import Listworker from './components/Listworker.vue'
export default {
  data() {
    return {
      worker: [
        {
          id: 0,
          firstName: 'Иван',
          lastName: 'Петров',
          patronymic: 'Сидорович',
          position: 'Сварщик',
          wokrList: true,
          salary: 20000,
          rate: 'Половина',
          dataOfWork: '2021-03-01',
          taskArray:['Петров0', 'Петров1']
        },
        {
          id: 1,
          firstName: 'Николай',
          lastName: 'Бондаренок',
          patronymic: 'Иванович',
          position: 'Слесарь',
          wokrList: false,
          salary: 24000,
          rate: 'Полная',
          dataOfWork: '2020-03-06',
          taskArray:['Бондаренок0', 'Бондаренок1']

        },
        {
          id: 2,
          firstName: 'Алексей',
          lastName: 'Бондар',
          patronymic: 'Иванович',
          position: 'Водитель',
          wokrList: false,
          salary: 23300,
          rate: 'Полная',
          dataOfWork: '2020-03-06',
          taskArray:['Бондар0', 'Бондар1']

        },
        {
          id: 3,
          firstName: 'Петр',
          lastName: 'Алексеев',
          patronymic: 'Иванович',
          position: 'Грузчик',
          wokrList: false,
          salary: 23100,
          rate: 'Полная',
          dataOfWork: '2020-03-06',
          taskArray:['Алексеев0', 'Алексеев1']

        },
      ]
    }
  },
  provide() {
    return {
      worker: this.worker
    }
  },
  components: {
    Header,
    // Listworker
  }
};

</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>