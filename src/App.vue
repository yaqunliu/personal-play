<template>
    <div id="app">
        <div class="back_mask">hfjakfhjak奋斗奋斗</div>
        <Header></Header>
        <my-learn-plan></my-learn-plan>
        <Footer></Footer>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import Header from './components/MyLearn/Header'
    import Footer from './components/MyLearn/Footer'
    import MyLearnPlan from './components/MyLearn/MyLearnPlan'

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
            HelloWorld,
            Header,
            Footer,
            MyLearnPlan
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
@import "style/_common.scss";
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.back_mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #999999;
    opacity: .9;
    z-index: -1;
}
</style>
