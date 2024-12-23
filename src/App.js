import React from 'react';
import './App.css';
import Person from './Components/Person'
import Button from 'react-bootstrap/Button';
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      show : false
    }
  }

  render(){
    return(
      <div>
        <div style={{display: 'flex', justifyContent:'center'}}>
        <Button  variant={this.state.show ? "outline-success" : "outline-dark"} onClick={()=> this.setState({show : !this.state.show})}>{this.state.show ? "Hide" : "Show"}</Button>
        </div>
        
        {
          this.state.show &&  <Person/>
        }
       
      </div>
    )
  }
}

export default App;
