
import React from 'react'

const TodoInput = ({handleChange,handleClick,Input}) => {
    return (
        <>
            <input type="text" name="" id="" value={Input} onChange={handleChange} placeholder="Enter Your Task Name"/>
                <button onClick={handleClick}><i className="fas fa-plus"></i></button>
        </>
    )
}

export default TodoInput
