import React from 'react';

const Task = (props) => {

    const style = {
        color: 'orange',
    }

    const { text, date,id, active, important, finishDate } = props.task

    if(active === true){

  

    return(
       <div>
           <p>
    <strong style={important ? style : null}>{text}</strong> - must be done <span>{date} </span>
    <button onClick={() => props.change(id)}>Done</button>
           <button onClick={() => props.delete(id)}>x</button>
           </p>
          
       </div>
    );   } else {
        const finish = new Date(finishDate).toLocaleString()
        return(
            <div>
                <p>
        <strong>{text}</strong> <em>(Perform to {date})</em><br />
        - confirmation, it is done! <span>   {finish}   </span>
    <button className="delete" onClick={() => props.change(id)}> <span>  done</span></button> 
           <button className="Delete" onClick={() => props.delete(id)}>x</button>
           </p>
            </div>
        )
    }
}

export default Task;