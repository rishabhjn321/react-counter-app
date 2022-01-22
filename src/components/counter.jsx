import react from 'react';
import React, { Component } from 'react';


class Counter extends Component {
    componentDidUpdate(prevProps,prevState){
        if (prevProps.counter.value !== this.props.counter.value){
            // ajax call  and new data  from the server
        }
    }
    // state = {
    //     value: this.props.counter.value
        // imgUrl: 'http://picsum.photos/200'
        // tags: ["tag1", "tag2", "tag3"]
    // };

    // handleIncrement = () => {  //product = argument
    // this.setState({value: this.state.value + 1});
    // };
    render() { 
        return(
         <div>
             {/* <img src="{this.state.imgUrl}" alt="" /> */}
            <span className={this.getBadgeClass()}>{this.formatcount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)}
             className="btn btn-secondary btm-sm m-2">Increment</button>

            <button onClick={() => this.props.onDelete(this.props.counter.  id)}
             className="btn btn-danger btn-sm m-2">Delete</button>
                {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
            </div>
        
         );
        }
    getBadgeClass(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };
    formatcount() {
        const { value } = this.props.counter; //object destructuring
        return value === 0 ? "zero" : value;
    };
    }


export default Counter;
