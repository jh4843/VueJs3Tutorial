const app = {
    data() {
      return {
        message: "Hello World",
        counter: 0
      }
    },

    mounted() {
      setInterval(() => {
        this.$data.counter++
      }, 1000)
    },

  }

Vue.createApp(app).mount("#myapp");