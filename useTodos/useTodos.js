import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoREducer";

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        }, [todos])

    const handleNewTodo = (todo) => {

        const action = {
            type: '[TODO] Add todo',
            payload: todo,
        }

        dispatchTodo( action );
    }

    const handleDeleteTodo = (id) =>{

        dispatchTodo({
            type: '[TODO] Remove todo',
            payload: id,
        });
    }

    const handleToggleTodo = (id) =>{
        
        dispatchTodo({
            type: '[TODO] Toggle todo',
            payload: id,
        })
        
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodos: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        }
}