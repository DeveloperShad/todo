import React, { useState,useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Navbar from './Navbar'
import './todo.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'



const Todo = () => {


    function GetLocalStorageData(){
        return JSON.parse(localStorage.getItem('todo')) || []
    }
   
    const [Input, setInput] = useState('')
    const [TodoList, setTodoList] = useState(GetLocalStorageData())
    const [EditToggle, setEditToggle] = useState(false)
    const [EditId, setEditId] = useState('')
    const [ShowAll, setShowAll] = useState(false)
    const [ShowFinished, setShowFinished] = useState(false)
    const [ShowUnfinished, setShowUnfinished] = useState(false)


    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        if(!Input){
            alert('Please fill the input')
        }
        else if(Input && EditToggle){
            
            const arr =     TodoList.map(el =>{
                    if(EditId === el.id){
                       return {...el,title:Input}
                    }
                    return el
                    
                })
            setTodoList(arr)
            setInput('')
            setEditToggle(false)
            setEditId('')
        }
        else{
            const payload = {
                title: Input,
                id: uuid(),
                status: false
            }
          setTodoList([...TodoList,payload])
          localStorage.setItem('todo',JSON.stringify(TodoList)) 
            setInput('')
        }
        
    }


    const handleEdit = (id)=>{
       const edit = TodoList.find((el)=>{
        return id ===el.id
        })
        console.log(edit)
        
        setInput(edit.title)
        setEditId(edit.id)
        
        setEditToggle(true)
    }
    
   


    const handleDelete = (x) => {
        const updatedTodoList = TodoList.filter(el => {
            return x !== el.id
        })
        setTodoList(updatedTodoList)
    }

    const handleToggle = (y) => {
        //    console.log(y)
        const z = TodoList.map(el => (y === el.id ? { ...el, status: !el.status } : el))
        setTodoList(z)
    }

    const handleShowAll = (x)=>{
        setShowAll(!x)
        if(TodoList.length === 0){
            alert('No Task Present In The Array')
        }
    }

    const handleTask = (x)=>{
      setShowAll(!x)
      setShowFinished(!x)
      setShowUnfinished(!x)
    }

    useEffect(() => {
        localStorage.setItem('todo',JSON.stringify(TodoList))
         // return () => {
         //     cleanup
         // }
     }, [TodoList])




    return (
        <>
        <header>
            <nav>
                <button onClick={()=>handleTask(ShowAll)}>Show All</button>
                <button onClick={()=>handleTask(ShowFinished)}>Show Finished</button>
                <button onClick={()=>handleTask(ShowUnfinished)}>Show Unfinished</button>
            </nav>
        </header>
        <div className='container'>
            <div className='input-container'>
                <TodoInput handleChange = {handleChange} handleClick = {handleClick} Input={Input}/>
            </div>
            <div className='todo-container'>
                {
                    TodoList.filter(el=> ShowAll? el: ShowFinished? el.status:!el.status).map(el =>  {
                        return  (
                            <div className='todo-card' key={el.id}>
                                <TodoItem el = {el} handleEdit = {handleEdit} handleToggle = {handleToggle} handleDelete = {handleDelete}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className='remove-all-btn'>
                <button onClick={()=>handleShowAll(ShowAll)}>{ShowAll? 'Show Finished':'Show All'}</button>
                <button onClick={()=>setTodoList([])}>Remove All</button>
            </div>
        </div>
        </>
    )
}

export default Todo
// 