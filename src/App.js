import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';
import NavBar from './components/NavBar';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {  
    doctors: [],
    currentDoctor: {},
    patients: [],
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ] 
  } 

  componentDidMount() {
    axios.get('http://localhost:3002/doctors').then( res => {
      console.log('res', res);
      this.setState( { doctors: res.data} ); 
      this.setState( { currentDoctor: res.data[0] } ); 
    } )
  }

  handleDelete = (id) => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState( { counters } );
 }

 handleIncrement = (c) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(c);
    counters[index].value++;
    this.setState( { counters } );
 }
 handleDecrement = (c) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(c);
    
    if (counters[index].value > 0) {
        counters[index].value--;
        this.setState( { counters } );
    }
 }
 handleAdd = () => {
    const counters = [...this.state.counters];
    const id = counters[counters.length - 1].id + 1;
    counters.push( { id, value: 0 });
    this.setState({ counters });
 }
 
 handleReset = () => {
    const counters = this.state.counters.map( c => {
        c.value = 0;
        return c;
    } );
    this.setState({ counters })
 }



  render() { 
    return (
      <div className="container">
        <p>Current doctor: { this.state.currentDoctor.name }</p>


      <NavBar totalCounters={this.state.counters.filter( c => c.value > 0).length}></NavBar>
      <Counters 
        counters={this.state.counters}
        onReset={this.handleReset}
        onAdd={this.handleAdd}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      ></Counters>
    </div>
    );
  }
}
 
export default App;
