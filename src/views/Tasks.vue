 <template>
    <div v-if="tasks.length">
      <h3 class="text-white">Всего активных задач: {{ activeTasksCounter }}</h3>
      <div :id="idx" class="card" v-for="(task, idx) of tasks" :key="idx">
        <h2 class="card-title">
          {{ task.title }}
          <AppStatus :type="task.status"/>
        </h2>
        <p>
          <strong>
            <small>
              {{new Date(task.date).toLocaleDateString()}}
            </small>
          </strong>
        </p>
        <button class="btn primary" @click="openTask(task.id)">Посмотреть</button>
      </div>
   </div>
   <h1 class="text-white center" v-else>Задач пока нет</h1>
  </template>


<script>
import AppStatus from '../components/AppStatus'
import { computed } from 'vue'
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const tasks = computed(() => {
        return store.getters.tasks
    })
    const activeTasksCounter = computed( () => {
      return store.getters.activeTasksCounter
    })
    function openTask(id){
      router.push(`/task/${id}`)
    }

    return {
      tasks,
      openTask,
      activeTasksCounter
    }

  },
  components: {AppStatus}
}
</script>
