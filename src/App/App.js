import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import unicornArray from '../unicorns'
import Unicorn from '../Unicorn'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      unicornArray
    }
    this.moveUnicorn = this.moveUnicorn.bind(this)
  }

  moveUnicorn(id, location){
    this.setState({
      unicornArray: unicornArray.map(unicorn => {
         return unicorn.id === id ? Object.assign(unicorn, { location }) : unicorn
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Unicorn Farmer</h2>
        </div>
        <div className="unicornList">
          {this.state.unicornArray.map(unicorn => {
            return (<Unicorn
              moveUnicorn={this.moveUnicorn} 
              key={unicorn.id}
              id={unicorn.id}
              name={unicorn.name}
              color={unicorn.color}
              favFood={unicorn.favFood}
              location={unicorn.location}>
              </Unicorn>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
