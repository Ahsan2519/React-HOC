import React, { Component } from "react";
import WithCounter from "./WithCounter";
export class Hover extends Component {
  // here to stop the code repeat we will use HOC.
  // constructor(){
  //     super()
  //     this.state = {
  //          count : 0
  //     }
  // }
  // clickHnadler = ()=>{
  //     this.setState({count: this.state.count+2})
  // }
  render() {
    return (
      <>
        <button onMouseOver={this.props.clickHnadler}>
          The button is hovered {this.props.count} times
        </button>
      </>
    );
  }
}

export default WithCounter(Hover);
