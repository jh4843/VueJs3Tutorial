const ListRendering = {
    data() {
      return {
        groceryList: [
          {id: 'a', text: 'Learn JavaScript' },
          {id: 'b', text: 'Learn Vue' },
          {id: 'c', text: 'Build something awesome' }
        ]
      }
    },
}

const app = Vue.createApp(ListRendering)

app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{todo.id}} - {{ todo.text }}</li>`
})

app.component('app-view', {

})

app.mount('#component-rendering')