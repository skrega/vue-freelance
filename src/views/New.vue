<template>
  <form class="card" @submit.prevent="submitHundler">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description" ></textarea>
    </div>

    <button class="btn primary" :disabled="isDisabled">Создать</button>
  </form>
</template>


<script>
import {computed, ref} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default  {
  setup() {

    const store = useStore()
    const router = useRouter()

    const title = ref('')
    const date = ref('')
    const description = ref('')

    const isDisabled = computed( () => {
      if( title.value !== '' && date.value !== '' && description.value !== ''){
        return false
      }
      return true
    })

    function submitHundler() {
      const task = {
        title: title.value,
        description: description.value,
        date: date.value,
        status: 'active'
      }
      store.dispatch('createTask', task)
      router.push('/')

    }

    return {
      title, date,
      description,
      isDisabled,
      submitHundler
    }
  }

}

</script>
