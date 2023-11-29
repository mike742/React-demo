import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {


     render() { 
        console.log('props', this.props.counters);
        return (
            <React.Fragment>
                <button className='btn btn-outline-success' onClick={this.props.onAdd}>Add</button>
                <button className='btn btn-outline-success' onClick={this.props.onReset}>Reset</button>
                
                <hr />
                {
                    this.props.counters.map( c => 
                    <Counter key={c.id} 
                        counter={c}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                    >
                    </Counter>)
                }
            </React.Fragment>
        );
    }
}
 
export default Counters;