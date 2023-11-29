import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
            <React.Fragment>
                Title #<span>{ this.props.counter.id }</span> &nbsp; &nbsp; 
                <span>{ this.props.counter.value }</span>  &nbsp; &nbsp; 
                <button className='btn btn-outline-success'
                    onClick={ () => this.props.onIncrement(this.props.counter) }
                >+</button>
                <button className='btn btn-outline-success'
                    onClick={ () => this.props.onDecrement(this.props.counter) }
                    disabled={this.props.counter.value === 0}
                >-</button>
                <button className='btn btn-outline-success'
                    onClick={ () => this.props.onDelete(this.props.counter.id) }
                >Delete</button>
                <br />
            </React.Fragment>
        );
    }
}
 
export default Counter;