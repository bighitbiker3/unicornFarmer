import React from 'react'
import './Unicorn.css'

export default class Unicorn extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
    // this.moveUnicorn = this.props.moveUnicorn.bind(this)
  } 


  render() {
    return (
      <div className="unicorn">
        <h1>Unicorn Name: {this.props.name}</h1>
        <h3>Favorite Food: {this.props.favFood}</h3>
        <h3>Color: {this.props.color}</h3>
        <h3>Current Location: {this.props.location}</h3>
        <button onClick={() => this.props.moveUnicorn(this.props.id, 'pasture')}>Pasture</button>
        <button onClick={() => this.props.moveUnicorn(this.props.id, 'barn')}>Barn</button>
        <button onClick={() => this.props.moveUnicorn(this.props.id, 'corral')}>Corral</button>
      </div>
    )
  }
}