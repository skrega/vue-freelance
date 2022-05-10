<template>
  <span :class="['badge', taskClass]">{{ typeText }}</span>
</template>
<script>
import { ref, watch } from 'vue'
export default {
  props: {
    type: {
      type: String,
      validator(value) {
        return ['active', 'done', 'cancelled', 'outdated', 'inWork'].includes(value)
      }
    }
  },
  setup(props) {
    const taskClasses = {
      active: 'primary',
      done: 'primary',
      cancelled: 'danger',
      outdated: 'warning',
      inWork: 'primary'
    }
    const typeTexts = {
      active: 'Активен',
      done: 'Завершен',
      cancelled: 'Отменент',
      outdated: 'Просрочен',
      inWork: 'В работе'
    }

    const taskClass = ref(taskClasses[props.type])
    const typeText = ref(typeTexts[props.type])

    watch(props, val => {
      taskClass.value = taskClasses[val.type]
      typeText.value = typeTexts[val.type]
    })
    return{ taskClass, typeText }
  }
}
</script>
