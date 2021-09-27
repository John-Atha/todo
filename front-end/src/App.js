import React, { useState, useEffect } from 'react';
import './App.css';
import TasksList from './Components/TasksList';
import TaskPopUp from './Components/TaskPopUp';
import OutsideClickHandler from 'react-outside-click-handler';

function App() {
  const [task, setTask] = useState(null);
  const [updateFlag, setUpdateFlag] = useState(0);

  const update = () => {
    setUpdateFlag(updateFlag+1);
  }

  return (
    <div className="App">
      <h2>/* TODO ... */</h2>
      <div style={{'marginTop': '10px'}} />
      {task &&
        <OutsideClickHandler
            onOutsideClick={()=>{setTask(null)}}>
          <TaskPopUp task={task} update={update}/>
        </OutsideClickHandler>
      }
      <div className='lanes-container'>
        {['Todo', 'Running', 'Done'].map((value, index) => {
          return(
            <TasksList kind={value} key={index} setter={setTask} updateFlag={updateFlag} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
