import React, { Component } from "react";
import './style.css'
const initialNotes = [
  { title: "Learn JavaScript", checked: false },
  { title: "Make a To-do List", checked: true }
];
class todo extends Component {
  
  state = {
    pushItem : '',
    notes: [],
    today: new Date().toLocaleDateString()
  };
  componentDidMount(){
    console.log('componentDidMount')
    const isFirstVisitedJSON = localStorage.getItem("isFirstVisited");
    const isFirstVisited = JSON.parse(isFirstVisitedJSON);

    if (isFirstVisited) {
      const str = localStorage.getItem("myTodo");
      var parsedArr = JSON.parse(str);
      this.setState({
        notes : parsedArr
      })
      
    } else {
      this.setState({
        notes : initialNotes
      })
      localStorage.setItem("isFirstVisited", "true");
    }
  }
  onKeyPress = event => {
    if (event.key === "Enter") {
      this.state.notes.push({ title: event.target.value , checked: false });
      this.setState({
          pushItem : ''
      })
      this.saveNotesToStorage();
      event.target.value = "";
    }
  };
  toggleNote = (todo,event) => {
    todo.checked = event.target.checked;
    this.saveNotesToStorage();
  }
  removeItem = (index, e) => {
      this.state.notes.splice(index, 1);
      this.setState({notes: this.state.notes})
      this.saveNotesToStorage();
  }
  saveNotesToStorage() {
    localStorage.setItem("myTodo", JSON.stringify(this.state.notes));
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="header">My Todo List</h1>
        <div className="todo">
          <input
            type="text"
            placeholder="+  Add a to-do..."
            className="list"
            onKeyPress={this.onKeyPress}
          />
        
        <h4>Data Stored in localStorage</h4>
        
        <div className="all-todos">
          
            {this.state.notes.map((todo, index) => {
              return (
                <label className="list-item">
                  <input type="checkbox" onChange={this.toggleNote.bind(this, todo)} value={todo.checked}/>
                  <span className="checkmark"></span>
                  {todo.title}
                  <a onClick={this.removeItem.bind(this,index)} className="close">x</a>
                  <br></br>
                  <span className="date">{this.state.today}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default todo;
