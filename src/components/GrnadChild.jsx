import React, { Component } from "react";
import { UseerConsumer } from "./userContext";

export class GrnadChild extends Component {
  render() {
    return (
      <UseerConsumer>
        {(username) => {
          return (
            <div className="child">hi im using context api hooks from {username}</div>
          );
        }}
      </UseerConsumer>
    );
  }
}

export default GrnadChild;
