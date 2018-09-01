<template>
  <div class="Hello">
    <div v-text="msg"></div>
    <input v-model="newItem" @keyup.enter="addNewItem"/>
    <ul>
      <li v-for="item in items" :class="['default_class', {other_color: item.isFinished}]" @click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <button @click="callFather">click me</button>
  </div>
</template>

<script>
import store from  '../common/store'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'this is a todo list',
      items: store.fetch(),
      newItem: ''
    }
  },
  events: {
      'my-child' : function (msg) {
          console.log(msg)
      }
  },
  methods: {
      toggleFinish (item) {
          item.isFinished = !item.isFinished
      },
      addNewItem () {
          this.items.push({
              label: this.newItem,
              isFinished: false
          })
          this.newItem = ''
      },
      callFather () {
         this.$emit('child-call-me', 'are you ok??')
      }
  },
  watch: {
      items : {
          handler (items) {
              store.save(items)
          },
          deep: true
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .default_class {
    cursor: pointer;
  }
  .other_color {
    color: #3180dd;
  }
</style>
