import React , {Component} from 'react';

class Form extends Component {
    state = {
      imgfile: null,
      image: "",
      name: ""
    };
  
    onFileChanged = event => {
      this.setState({
        imgfile: event.target.files[0]
      });
      if (event.target.files && event.target.files[0]) {
        this.setState({
          image: URL.createObjectURL(event.target.files[0])
        });
      }
    };
  
    inputName = event => {
      this.setState({
        name: event.target.value
      });
    };
  
    onFormSubmit = event => {
      alert("Form was submitted by : " + this.state.name);
  
    };
  
    render() {
      return (
          <div>
            <br></br>
            <form onSubmit={this.onFormSubmit}>
              <label htmlFor="imgfile">Choose an image to upload</label>
              <div>
                <br></br>
                <input
                  type="file"
                  id="imgfile"
                  name="imgfile"
                  onChange={this.onFileChanged}
                />
              </div>
              <div>
                <img id="target" src={this.state.image} alt="" />
              </div>
              <div>
                <label htmlFor="name">
                  Name : &nbsp;
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.inputName}
                  />
                </label>
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
      );
    }
  }
  
  export default Form;