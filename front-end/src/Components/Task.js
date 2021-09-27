import React, { useState, useEffect } from 'react';

function Task(props) { 
    const [task, setTask] = useState(props.task);

    useEffect(() => {
        setTask(props.task);
    }, [props.task])

    return (
        <div 
            className={`task-container margin ${task ? task.state : ''}-task`}
            onClick={()=>props.setter(task)}
        >
                <h4 className="task-title">
                    {task.state==='Done' &&
                        <strike>{task.title}</strike>
                    }
                    {task.state!=='Done' &&
                        task.title
                    }
                </h4>

            <div className="task-date">
                {task.state==='Done' &&
                    <strike>From: {task.date ? task.date.slice(0, 10) : ''}</strike>
                }
                {task.state!=='Done' &&
                    `From:  ${task.date ? task.date.slice(0, 10) : ''}`
                }
            </div>
        </div>
    )
}

export default Task;