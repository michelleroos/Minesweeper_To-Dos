import React from 'react';
import ReactDOM from 'react-dom';
import {receiveTodo, receiveTodos} from './actions/todo_actions'


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    const test = <h1>This is our test</h1>
    ReactDOM.render(test, root)
    // window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
})
