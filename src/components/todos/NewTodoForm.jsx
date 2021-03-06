import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';
import './NewTodoForm.css';

const mapStateToProps = state => ({
    todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input className="new-todo-input" placeholder="Type your new to-do here" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button className="new-todo-button" onClick={() => {
                const isDuplicateText = todos.some(todo => todo.text === inputValue);
                if (!isDuplicateText) {
                    onCreatePressed(inputValue);
                    setInputValue('');
                };
            }}>Create To-Do</button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);