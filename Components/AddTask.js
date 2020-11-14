// const { createContext } = require("react")

import React, {Component} from 'react'
import './AddTask.css';



class AddTask extends Component {

    minDate = new Date().toISOString().slice(0,10)

    state = {  
        text: '',
        checked: false,
        date: this.minDate
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    handleClick = () => {
        console.log('dodaj')
        
        const {text, checked, date} = this.state;
        if(text.length>2) {
      const add =   this.props.add(text, date, checked)
      if(add) {
          this.setState({
              text: '',
              checked: false,
              date: this.minDate
          })
      }
    } else {
        alert('short name of task')
    }
    }
    render() {

        let  maxDate = this.minDate.slice(0,4) * 1 + 1;
        console.log(maxDate)
        maxDate = maxDate + "-12-31";
        
        return (
            <div className="form">
            <input className="add" type="text" placeholder="add task" value= {this.state.text} onChange={this.handleText}/>
           
            <input className="checked" type="checkbox" checked = {this.state.checked} onChange={this.handleCheckbox} id="important"/>
            <label className="priority"  htmlFor="important">priority</label> <br />
            {/* <label htmlFor="date">Do kiedy zrobic</label> */}
            <input type="date" value={this.state.date} min = {this.minDate} max = {this.maxDate} onChange = {this.handleDate}/>
            <button className='main' onClick = {this.handleClick} >Add!</button>
            </div>
        );
    }
}

export default AddTask;