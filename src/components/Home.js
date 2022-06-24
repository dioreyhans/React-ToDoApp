import React from 'react'
import {Header} from './Header'
import {TodoList} from './TodoList'
export const Home = () => {
    return (
        <div className="container mt-3">
            <Header />
            <TodoList />
        </div>
    )
}
