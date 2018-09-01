<template>
    <div :class="['item_wrap', toDoItem.complete ? 'item_status' : '']">
        <input type="checkbox" class="toggled" v-model="toDoItem.complete"/>
        <label v-text="toDoItem.content" class="item_text"></label>
        <button class="delete_item" @click="deleteItem">删除</button>
    </div>
</template>

<script>
 export default {
     props: {
         toDoItem: {
             type: Object,
             required: true
         }
     },
     methods: {
         deleteItem () {
             this.$emit('deleteComplete', this.toDoItem.id)
         }
     }
 }
</script>

<style scoped>
    .item_wrap {
        text-align: left;
        line-height: 50px;
    }
    .item_status {
        color: #3180dd;
    }
    .item_status .item_text {
        text-decoration: line-through;
    }
    .toggled {
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
    .item_text {
        display: inline-block;
        margin-left: 10px;
    }
    .delete_item {
        float: right;
        margin-top: 14px;
        color: #ff0000;
        cursor: pointer;
    }
</style>