import React from "react"

// Types
type Action = { type: 'setEmail', payload: string } |
{ type: 'setPassword', payload: string } |
{ type: 'setLoggedIn', payload: boolean }
type Dispatch = (action: Action) => void
type State = {
    email: string
    password: string
    isLoggedIn: boolean
}
type AppProviderProps = { children: React.ReactNode }
// Context
const AppContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined)
// Reducer
function AppReducer(state: State, action: Action) {
    switch (action.type) {
        case 'setEmail': {
            return { ...state, email: action.payload }
        }
        case 'setLoggedIn': {
            return { ...state, isLoggedIn: action.payload }
        }
        case 'setPassword': {
            return { ...state, password: action.payload }
        }
    }
}
// Provider
function AppProvider({ children }: AppProviderProps) {
    const [state, dispatch] = React.useReducer(AppReducer, { email: '', password: '', isLoggedIn: false })
    const value = { state, dispatch }
    return (<AppContext.Provider value={value}> {children} </AppContext.Provider>)
}
// Optionally Create a Hook
function useAuth() {
    const context = React.useContext(AppContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within a AppProvider')
    }
    return context
}
export { AppProvider, useAuth }
