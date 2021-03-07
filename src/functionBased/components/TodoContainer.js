import React, { useState,useEffect } from "react";
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from "uuid";


const TodoContainer = () => {
    const [todos, setTodos] = useState([])

    const handleChange = id => {
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        )
    };

    const deleteToDo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            }),
        ]);
    }
    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }

    useEffect(()=>{
        console.log('test run');
    })


    return (
        <div className="container">
            <div className="inner">
                <Header />
                <InputTodo addTodoProps={addTodoItem} />
                <TodosList
                    todos={todos}
                    handleChangeProps={handleChange}
                    deleteTodoProps={deleteToDo}
                    setUpdate={setUpdate}
                />
            </div>
        </div>
    )
}


export default TodoContainer