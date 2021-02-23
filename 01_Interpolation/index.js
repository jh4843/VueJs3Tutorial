const AttributeBinding = {
    data() {
      return {
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    }
  }
  
Vue.createApp(AttributeBinding).mount('#bind-attribute')