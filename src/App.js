import React, { Component } from 'react';
import './App.css';
import Child from './parentToChild/child'

class App extends Component {
    state ={
        status:'On',
        isOn:true
    }
    switch = () => {
        const newStatus = this.state.isOn ? 'Off' : 'On';
        this.setState({status:newStatus, isOn:!this.state.isOn});
    }
    render(){
     return (
        <div className="App">
            <Child changeStatus={this.switch.bind(this)} status={this.state.status}/>
        </div>
     );
    }
}
export default App;