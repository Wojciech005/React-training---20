import React, {Component} from 'react'

import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {

  counter = 8

  state = {
    tasks: [
//       {
//         id: 0,
//         text: 'zagrac w wiedzimina 3',
//         date: '2020-11-22',
//         important: true,
//         active: true,
//         finishDate: null
//       },
//       {
//         id: 1,
//         text: 'umyc okno',
//         date: '2020-12-01',
//         important: true,
//         active: true,
//         finishDate: null,
//       },
//       {
//         id: 2,
//         text: 'zrobic ciasto',
//         date: '2020-11-22',
//         important: true,
//         active: true,
//         finishDate: null
//       },
//       {
//       id: 3,
//       text: 'podloge umyc',
//       date: '2020-11-22',
//       important: false,
//       active: true,
//       finishDate: null
//     },
//     {
//     id: 4,
//     text: 'przeczytac ksiazke',
//     date: '2020-11-22',
//     important: true,
//     active: true,
//     finishDate: null
//   },
// {
//   id: 5,
//   text: 'zrobic herbate',
//   date: '2020-11-22',
//   important: false,
//   active: true,
//   finishDate: null
// },
// // {
// // id: 6,
// // text: 'zrobic pompki',
// // date: '2020-11-22',
// // important: true,
// // active: true,
// // finishDate: null
// // },
      
    ]
  }

  deleteTask = (id) => {
    console.log("usun komponent o id" +  id );
    
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index,1);

    this.setState({
      tasks: tasks
    })

    // let tasks = [...this.state.tasks];
    // tasks = tasks.filter(task => task.id !== id)
    
    // this.setState({
    //   tasks
    // })

  }

  changeStateStatus = (id) => {
    console.log("zmien status w komponencie o id" + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
        
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    // console.log('dodany obiekt')
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    } 
    this.counter++
    console.log(task)
    console.log(this.counter)

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

      return true
    
  }

  

  render() {
    return(
      <div className="App">
        <h1>to do app</h1>
        <AddTask add= {this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeStateStatus}/>
      </div>
    )
  }
}

export default App;
