import React, {useState} from 'react';
import './App.css';
import Task from "./Task/Task";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import { nanoid } from 'nanoid';



const App = () => {
    const [tasks, setTask] = useState([
        {text: 'Do homework', id: '1'},
        {text: 'Cook eat', id: '2'},
        {text: 'Go to bed', id: '3'},
    ]);

    const [newTask, setNewTask] = useState([
        {text: '', id: ''}
    ]);

    const changeTask = (event) => {
        const newTaskCopy = [...newTask];
        const newText = {...newTaskCopy[0]};
        newText.text = event.target.value;
        newText.id = nanoid();
        newTaskCopy[0] = newText;
        setNewTask(newTaskCopy);
    };

    const removeTask = id => {
        const index = tasks.findIndex(p => p.id === id);
        const tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        setTask(tasksCopy);
    };

    const addTask = () => {
        const tasksList = [...tasks];
        const newTaskCopy = {...newTask};
        const currentTask = {...newTaskCopy[0]};
        tasksList.push(currentTask);
        setTask(tasksList);
    }

    let peopleTask = tasks.map((tasks, index) => {
            return (
                <Task
                    key={index}
                    text={tasks.text}
                    remove={() => removeTask(tasks.id)}>
                    </Task>
            )
        }
);
    return (
        <div className="App">
            <AddTaskForm text={tasks.text}
                         onTextChange = {event => changeTask(event)}
                         addTask = {() => addTask()} >
            </AddTaskForm>
            <div className='tasksBlock'>
                {peopleTask}
            </div>
        </div>
    );
};

export default App;
