import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import type { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/todoSlice';


interface TodoPropsType {
    todoProps: TodoType
}

function ToDo({ todoProps }: TodoPropsType) {

    const dispatch = useDispatch()

    const { id, content } = todoProps

    const [edit, setEdit] = useState<boolean>(false)

    const [newTodo, setNewTodo] = useState<string>(content)

    const handleUpdate = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload))
        setEdit(false)
    }

    return (

        <div className='flex flex-row justify-between w-full border text-sm p-2 rounded-md'>
            {edit ? <input type="text" value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} className='text-sm w-full focus:outline-none' /> : <div className='text-sm w-full' > {content}</div>}
            <div className='flex flex-row items-center space-x-3'>
                <CiCircleRemove onClick={() => dispatch(removeTodo(id))} className="text-xl cursor-pointer" />

                {edit ? <CiCircleCheck className="text-xl cursor-pointer" onClick={handleUpdate} />
                    : <FaRegEdit onClick={() => setEdit(true)} className='text-lg cursor-pointer' />}

            </div>
        </div>
    )
}

export default ToDo