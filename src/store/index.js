import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]').map(task => {
      if (new Date(task.date) < new Date()){
        task.status = 'outdated'
      }
      return task
    })
  },
  getters: {
    tasks: s => s.tasks,
    taskByID: s => id => s.tasks.find(t => t.id === id),
    activeTasksCounter(state){
      return state.tasks.filter(t => t.status === 'active').length
    }
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    changeTask(state, task) {
      const idx = state.tasks.findIndex(t => t.id === task.id)
      state.tasks[idx] = task
      localStorage.setItem('task', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task){
      commit('createTask', task)
    },
    changeTask({commit}, task){
      commit('changeTask', task)
    }
  },
  modules: {
  }
})
