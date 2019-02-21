<template>
    <div>
      <p>服务启停</p>
      <p>{{ count }}</p>
      <p>
        <a-button type="primary" @click="increment">+</a-button>
        <a-button type="primary" @click="decrement">-</a-button>
      </p>
    </div>
</template>

<script>
import store from '../store'

export default {
  name: 'ServiceCtrlCmp',
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style scoped>

</style>
