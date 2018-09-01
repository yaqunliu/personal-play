<template>
    <div class="learn_help">
        <span class="left"><span>{{unCompletedItem}}</span> items left</span>
        <span class="tabs">
            <span
               v-for="state in states"
               :key="state"
               :class="[state, filter === state ? 'actived' : '']"
               @click="toggleFilter(state)">
                {{state}}
            </span>
        </span>
        <span @click="clearComplete" class="clear_complete">clear complete</span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            states : ['all', 'active', 'completed']
        }
    },
    props: {
        filter: String,
        toDoItem: Array
    },
    methods: {
        clearComplete () {
            this.$emit('clearCompleted')
        },
        toggleFilter (state) {
            this.$emit('toggleFilter', state)
        }
    },
    computed: {
        unCompletedItem () {
            return this.toDoItem.filter(toDoItem => !toDoItem.complete).length
        }
    }
}
</script>
<style scoped>
    .learn_help {
        border-top: 1px solid #dcdcdc;
        line-height: 60px;
        text-align: left;
        font-size: 16px;
    }
    .tabs {
        margin-left: 60px;
    }
    .clear_complete {
        float: right;
        height: 40px;
        border: 1px solid #a0a0a0;
        line-height: 40px;
        padding: 0 8px;
        margin-top: 10px;
        border-radius: 4px;
        cursor: pointer;
    }
    .all,
    .completed,
    .active {
        border: 1px solid #a0a0a0;
        border-radius: 3px;
        padding: 6px;
        cursor: pointer;
    }
    .completed,
    .active {
        margin-left: 10px;
    }
    .all.actived,
    .completed.actived,
    .active.actived {
        border: 1px solid #42b983;
    }
</style>