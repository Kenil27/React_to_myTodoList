import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    imgfile : null,
    image : '',
    name : '',
  }

  onFileChanged = (event) => {
    this.setState({
      imgfile: event.target.files[0]
    })
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0])
      });
    }
  }

  inputName = (event) => {
    this.setState({
      name : event.target.value
    })
  }

  onFormSubmit = (event) => {
    alert('Form was submitted by : ' + this.state.name)
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="imgfile">Choose an image to upload</label>
        <div>
          <input type="file" id="imgfile" name="imgfile"
          onChange={this.onFileChanged}></input>
        </div>
        <div>
         <img id="target" src={this.state.image} alt=""/>
         </div>
         <div>
           <label htmlFor="name">Name : 
           <input type="text" value={this.state.name} onChange={this.inputName}></input>
           </label>
         </div>
         <input type="submit" value ="Submit"></input>
         </form>
        </div>
    );
  }
}

export default App;