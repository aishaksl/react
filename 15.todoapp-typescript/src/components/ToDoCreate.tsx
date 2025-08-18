import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { TodoType } from '../types/Types';
import { createTodo } from '../redux/todoSlice';

function ToDoCreate() {

    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>("")

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Please enter a new todo")
            return;
        }
        const payload: TodoType = {
            id: Math.floor(Math.random() * 999999999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        setNewTodo('')
    }

    return (

        <div className="flex flex-col justify-center items-center  space-y-8">
            <input
                type="text"
                placeholder="Plese add a Todo"
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                className="text-sm p-2 focus:outline-none focus:border-blue-950 border w-xl rounded-md"
            />
            <button
                className="bg-black text-white px-8 py-3 rounded-md cursor-pointer hover:bg-white hover:text-black"
                onClick={handleCreateTodo}
            >
                Add ToDo
            </button>
        </div>


    )
}

export default ToDoCreate