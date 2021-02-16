const Counter = {
    data() {
      return {
        counter: 3,
        aaa: 2,
        bv: false,

        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    },

    mounted() {
      setInterval(() => {
        this.counter++
      }, 1000)
    }
  }
  
  Vue.createApp(Counter).mount('#counter')