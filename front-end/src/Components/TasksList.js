import React, { useState, useEffect } from 'react';
import './styles.css';
import { getTasks } from '../api/api';
import Spinner from 'react-bootstrap/esm/Spinner';
import Error from './Error';
import Task from './Task';

function TasksList(props) {
    const [kind, setKind] = useState(props.kind || 'Todo');
    const [tasksList, setTasksList] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        setKind(props.kind);
    }, [props.kind])

    useEffect(() => {
        getTasks(kind)
        .then(response => {
            console.log(response.data);
            setTasksList(response.data);
            setError(!response.data.length);
        })
        .catch(err => {
            console.log(err);
            setTasksList([]);
            setError(true);
        })
    }, [kind, props.updateFlag])

    return (
        <div className={`tasks-container ${kind}-lane`}>
            <h3 className='task-state'>{kind}</h3>
            {!tasksList.length && !error && 
                <div className='center-content margin'>
                    <Spinner animation="border" role="status" variant='primary' />
                </div>
            }
            {error && 
                <Error message={`No more ${kind} tasks...`} />
            }
            {tasksList.length!==0 &&
                <div style={{'display': 'flex'}}>
                    {tasksList.map((value, index) => {
                        return(
                            <Task
                                task={value}
                                key={value._id}
                                setter={props.setter}
                            />
                        )
                    })}
                </div>
            }
        </div>
    )


}

export default TasksList;
