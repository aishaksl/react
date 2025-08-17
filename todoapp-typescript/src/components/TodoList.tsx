import React from 'react'
import ToDo from './ToDo'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import type { TodoType } from '../types/Types'

function TodoList() {

    const { todos } = useSelector((state: RootState) => state.todo)

    return (
        <div className='space-y-5'>
            {
                todos && todos.map((todo: TodoType) => (

                    <ToDo key={todo.id} todoProps={todo} />
                ))
            }
        </div>
    )
}

export default TodoList