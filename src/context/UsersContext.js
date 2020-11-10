import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const initialState = { users }
const UsersContext = createContext({}) // Objeto vazio para inicializar o contexto

const actions = {
    deleteUser(state, action) {
        const user = action.payload

        return {
            // ...state, // Só usar se tiver mais elementos no initialState
            users: state.users.filter(u => u.id !== user.id)
        }
    }
}

export const UsersProvider = props => {
    function reducer(state, action) {
        const fn = actions[action.type]

        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext