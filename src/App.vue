<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div>child told me : {{message}}</div>
        <HelloWorld v-on:child-call-me="doSomething"></HelloWorld>
        <div id='example-3'>
            <input type="checkbox" id="jack" value="444" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br>
            <span>Checked names: {{ checkedNames }}</span>
        </div>
        <input v-model.number="age" type="number"><br>
        <transition name="fade" model="out-in">
            <div v-if="shows">我是div1</div>
        </transition>
        <button @click="shows=!shows">点我切换div</button>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld'

    export default {
        name: 'App',
        data() {
            return {
                message: 'rewrewrewrewr',
                checkedNames: [],
                age: '',
                items: [1,2,3,4,5,6,7,8,9],
                shows: true
            }
        },
        components: {
            HelloWorld
        },
        methods: {
            doSomething(msg) {
                this.message = msg
            },
            shuffle () {
                this.items = _.shuffle(this.items)
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .flip-list-move {
        transition: transform 1s;
    }
</style>
