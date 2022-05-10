<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="changeStatus('inWork')">Взять в работу</button>
      <button class="btn primary" @click="changeStatus('done')">Завершить</button>
      <button class="btn danger" @click="changeStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {computed} from "vue";

import {useStore} from "vuex";
import { useRouter, useRoute } from "vue-router"

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const id = +route.params.id

    const task = computed( () => {
      return store.getters.taskByID(id)
    })


    const changeStatus = status => {
      const updateStatus = {...task.value, status}
      store.dispatch('changeTask', updateStatus)
      router.push('/')
    }

    return {
      task,
      id,
      changeStatus
    }
  },
  components: {AppStatus}
}
</script>

<style scoped>

</style>
