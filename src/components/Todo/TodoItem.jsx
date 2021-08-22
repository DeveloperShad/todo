
import React from 'react'

const TodoItem = ({ el,handleEdit,handleDelete,handleToggle }) => {
    return (
        <>
            <div>
                <p>{el.title}</p>
            </div>
            <div className='btn-container'>
                <button onClick={() => handleEdit(el.id)}><i className="fas fa-edit"></i></button>
                <button onClick={() => handleToggle(el.id)}>{el.status ? 'True' : 'False'}</button>
                <button onClick={() => handleDelete(el.id)}><i className="fas fa-minus"></i></button>
            </div>
        </>
    )
}

export default TodoItem
