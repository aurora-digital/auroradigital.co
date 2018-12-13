import React, { Component } from "react";

export default WrappedComponent => {
  class withWindowDimensions extends Component {
    state = {
      width: null,
      height: null,
    };

    componentDidMount = () => {
      this.updateDimensions();

      window.addEventListener("resize", this.updateDimensions);
    };

    componentWillUnmount = () => {
      window.removeEventListener("resize", this.updateDimensions);
    };

    updateDimensions = () => {
      this.setState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };

    render() {
      const { width, height } = this.state;

      return <WrappedComponent {...this.props} width={width} height={height} />;
    }
  }

  return withWindowDimensions;
};
