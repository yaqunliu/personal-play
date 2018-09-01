const TODO_LIST_STOR = "to_do_list"

export default {
    fetch () {
        return JSON.parse(window.localStorage.getItem(TODO_LIST_STOR) || '[]')
    },
    save (items) {
      return window.localStorage.setItem(TODO_LIST_STOR, JSON.stringify(items))
    }
}