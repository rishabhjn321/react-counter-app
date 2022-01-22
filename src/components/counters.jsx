import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    // state = { 
    //     counters: [
    //         {id: 1, value: 0},
    //         {id: 2, value: 0},
    //         {id: 3, value: 0},
    //         {id: 4, value: 0}

    //     ]
    //  };
    //  handleIncrement = counter => {
    //      const counters = [...this.state.counters];  
    //      const index = counters.indexOf(counter);
    //      counters[index] = {...counter};
    //      counters[index].value++;
    //      this.setState({ counters });  
          

    //  };
    //  handleReset = () => {
    //      const counter = this.state.counter.map(c => {
    //             c.value = 0;
    //             return c;
    //         });
    //         this.setState({Counters});
          
    //  };
    //  handleDelete = counterId => {
    //      const counters = this.state.counters.filter(c => c.id !== counterId);
    //      this.setState({counters : counters}); //overriding counters property with counters constant


    //  };
    render() { 
        const { onReset, counters, onDelete, onIncrement} = this.props;
        return (<div>
            onClick={onReset}
            <button className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter =>(
                 <Counter
                  key={counter.id} //key is used internally by react so we wont able to acess it by counter component
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                  counter={counter}
                    // id={counter.id} thats why we pass id as prop
                    />
                    ))}  

        </div>);
    }
}
 
export default Counters;