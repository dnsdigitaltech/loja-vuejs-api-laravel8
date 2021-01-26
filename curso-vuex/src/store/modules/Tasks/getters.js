const getters = {
    sortedTasks(state) {
        let sorted = state.tasks
        return sorted.sort((a,b) => {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
            return 0            
        })
    },
    tasksNotCompleted(state) {
        let tasks = state.tasks

        let tasksNotCompleted = tasks.filter((task) => {
            return task.completed
        })
        return tasksNotCompleted
    }
}

export default getters