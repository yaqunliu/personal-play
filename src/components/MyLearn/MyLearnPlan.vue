<template>
    <section class="input_plan_wrap">
        <input
           class="input_plan"
           placeholder="enter my learn plan"
           type="text"
           @keyup.enter="addToDo"
           autofocus="autofocus"
        />
        <Item
            :toDoItem="item"
            v-for="item in filterToDos"
            :key="item.id"
            @deleteComplete="deleteCompleItem"
        />
        <Help :filter="filter" :toDoItem="toDoItem" @toggleFilter="toggleFilters"
              @clearCompleted="clearAllComplete"></Help>
    </section>
</template>

<script>
import Item from "./Item";
import Help from "./Help"

let id = 0
export default {
    data () {
        return {
            toDoItem: JSON.parse(localStorage.getItem('myPlan')) || [],
            filter : 'all'
        }
    },
    methods: {
        addToDo (e) {
            this.toDoItem.unshift({
                id: id++,
                content: e.target.value.trim(),
                complete: false
            })
            localStorage.setItem('myPlan', JSON.stringify(this.toDoItem))
            e.target.value = ''
        },
        deleteCompleItem (id) {
            this.toDoItem.splice(this.toDoItem.findIndex(toDoItem => toDoItem.id === id), 1)
            localStorage.setItem('myPlan', JSON.stringify(this.toDoItem))
        },
        toggleFilters (state) {
            this.filter = state
        },
        clearAllComplete () {
            this.toDoItem = this.toDoItem.filter(toDo => !toDo.complete)
            localStorage.setItem('myPlan', JSON.stringify(this.toDoItem))
        }
    },
    computed: {
        filterToDos () {
            if (this.filter === 'all') {
                return this.toDoItem
            }
            const completed = this.filter === 'completed'
            return this.toDoItem.filter(toDoItem => completed === toDoItem.complete)
        }
    },
    components: {
        Item,
        Help
    }
}
</script>

<style scoped>
    .input_plan_wrap {
        width: 600px;
        margin: 0 auto;
        box-shadow: 0 0 5px #666;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 40px;
    }
    .input_plan {
        position: relative;
        width: 100%;
        font-size: 20px;
        line-height: 36px;
        padding: 10px;
        border: none;
        box-sizing: border-box;
        box-shadow: inset 0 -1px 5px rgba(0, 0, 0, 0);
    }
</style>