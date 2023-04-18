const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello world of Vue!'
      }
    }
  }).mount('#app')