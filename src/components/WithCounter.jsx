import React from "react";

const WithCounter = (Wrappedcomponent) => {
  class WithCounter extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    clickHnadler = () => {
      this.setState({ count: this.state.count + 2 });
    };
    render() {
      return (
        <Wrappedcomponent
          count={this.state.count}
          clickHnadler={this.clickHnadler}
        />
      );
    }
  }
  return WithCounter;
};

export default WithCounter;
