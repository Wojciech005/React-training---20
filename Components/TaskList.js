import React from 'react';
import Task from './Task'
import './TaskList.css';
import './Task.css';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active)

    const done = props.tasks.filter(task => !task.active);

if(done.length > 2) {

done.sort((a,b) => b.finishDate - a.finishDate)

}

if(active.length >= 2) {

    active.sort((a,b) => {

        a = a.text.toLowerCase();
        b = b.text.toLowerCase()

        if(a < b) return -1;
        if(a > b) return 1;
        return 0
    })
}
    
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

    return(
        <div className="wrap">
        <div className='active'>
        <h1>Task to do:</h1>
        {activeTasks.length > 0 ? activeTasks : <p>No tasks to do! keep them coming !</p>}
        </div>

        <hr />

        <div className="done">
        <h3>Performed tasks: <em>{done.length}</em></h3>
        {done.length > 5 && <span className='spanText'>visible only 5 last tasks</span>}
            {doneTasks.slice(0, 5)}
        </div>
        </div> 
    );
}

export default TaskList;