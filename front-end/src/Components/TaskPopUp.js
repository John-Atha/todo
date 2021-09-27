import React, { useState , useEffect } from "react";
import './styles.css';
import Button from 'react-bootstrap/esm/Button';
import { updateTask } from '../api/api';
import { createNotification } from '../createNotification';

function TaskPopUp(props) { 
    const [task, setTask] = useState(props.task);
    const [kind, setKind] = useState(props.task.state);

    useEffect(() => {
        setTask(props.task);
        setKind(props.task.state);
    }, [props.task])

    const upd = () => {
        const newTask = { ...task };
        newTask['state'] = kind;
        updateTask(newTask)
        .then(response => {
            console.log(response);
            setTask(response.data);
            createNotification('success', 'Hello', 'Task updated successfully.');
            props.update();
        })
        .catch(err => {
            setTask(task);
            createNotification('danger', 'Sorry', 'We could not update your task');
        })
    }

    return (
        <div className='task-pop-up'>
            <h3>{task.title}</h3>
            <hr />
            <div style={{'marginTop': '20px'}} />
            <div className='flex-layout'>
                <label htmlFor='state-select' className='margin'>State:</label>
                <select className='state-select' name='state-select' value={kind} onChange={(event)=>setKind(event.target.value)} >
                    {['Todo', 'Running', 'Done'].map((value, index) => {
                        return (
                            <option value={value} key={index}>{value}</option>
                        )
                    })}
                </select>
                {task.state!==kind &&
                    <Button variant='primary' className='margin' onClick={upd}>Save change</Button>
                }
            </div>
            <div style={{'marginTop': '20px'}} />
            <div className='task-text'>{task.text}</div>
        </div>
    )
}

export default TaskPopUp;