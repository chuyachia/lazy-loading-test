import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {error:false};
  }
  static getDerivedStateFromError(error) {
    return {error:true};
  }
  componentDidCatch(error,info) {
    this.props.handleError();
    if (error) console.log("Error : "+ error);
  }
  render() {
    if(this.state.error) {
      return  null;
    } else {
      return this.props.children;
    }
  }
}

