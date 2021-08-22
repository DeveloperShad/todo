
import React from 'react'

const TodoItem = ({ el,handleEdit,handleDelete,handleToggle }) => {
    // if(el.status===true){
    //     var res = 'line-through'
    // }
    // else{
    //     res = 'none'
    // }
    return (
        <>
            <div className='task-title'>
                <p style={{textDecoration: el.status? 'line-through':'none'}}>{el.title}</p>
            </div>
            <div className='btn-container'>
                <button onClick={() => handleEdit(el.id)}><i className="fas fa-edit"></i></button>
                <button onClick={() => handleToggle(el.id)}>{el.status ? 'True' : 'False'}</button>
                <button onClick={() => handleDelete(el.id)}><i className="fas fa-trash"></i></button>
            </div>
        </>
    )
}

export default TodoItem
