import React, { Component } from "react";

export default function (WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHover: false,
      };
    }

    onMouseEnter = () => {
      this.setState({
        isHover: true,
      });
    };

    onMouseLeave = () => {
      this.setState({
        isHover: false,
      });
    };

    render() {
      return (
        <div
          style={{
            opacity: this.state.isHover ? 0.5 : 1,
            width: "300px",
            height: "200px",
          }}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}

