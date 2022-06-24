import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    lists: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer, initialState);
    
    
    const createList = (input)=>{
        dispatch({
            tipe:"CREATE_LIST",
            muatan:input
        })
    }
    const updateList = (input)=>{
        dispatch({
            tipe:"UPDATE_LIST",
            muatan:input
        })
    }
    const deleteList = (id)=>{
        dispatch({
            tipe:"DELETE_LIST",
            muatan:id
        })
    }

    return(
        <GlobalContext.Provider value={{ 
            lists:state.lists,
            deleteList,
            createList,
            updateList
            }}>
            {children}
        </GlobalContext.Provider>
    )
}