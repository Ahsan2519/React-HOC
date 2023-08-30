import React, { Component } from "react";
import WithCounter from "./WithCounter";

export class Counter extends Component {
  // here to stop the code repeat we will use HOC.
  // constructor(){
  //     super()
  //     this.state = {
  //          count : 0
  //     }
  // }
  // clickHnadler = ()=>{
  //     this.setState({count: this.state.count+5})
  // }
  render() {
    return (
      <>
        <button onClick={this.props.clickHnadler}>
          The button is clicked {this.props.count} times
        </button>
      </>
    );
  }
}

export default WithCounter(Counter);
