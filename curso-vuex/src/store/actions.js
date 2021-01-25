let actions = {
    ddTask(context, task) {
        // ...ajax
        context.commit('ADD_TASK', task)
    }
}

export default actions