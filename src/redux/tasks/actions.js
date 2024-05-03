import taskActionTypes from "./action-types"

export const addTask = (payload) => ({
    type: taskActionTypes.ADD,
    payload
})

export const removeTask = (payload) => ({
    type: taskActionTypes.DELETE,
    payload
})