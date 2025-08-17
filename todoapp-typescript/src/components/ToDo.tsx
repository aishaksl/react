import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import type { TodoType } from '../types/Types';

interface TodoPropsType {
    todoProps: TodoType
}

function ToDo({ todoProps }: TodoPropsType) {

    const { id, content } = todoProps

    return (

        <div className='flex flex-row justify-between w-full border text-sm p-2 rounded-md'>
            <div className='text-sm w-full' > {content}</div>
            <div className='flex flex-row items-center space-x-3'>
                <CiCircleRemove className="text-xl cursor-pointer" />
                <CiCircleCheck className="text-xl cursor-pointer" />
                <FaRegEdit className='text-lg cursor-pointer' />
            </div>
        </div>
    )
}

export default ToDo