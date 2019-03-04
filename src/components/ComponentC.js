import React from 'react';

export default class ComponentC extends React.Component {
  componentDidMount() {
    throw new Error("Some strange error");
  }
  render() {
    return null;
  }
}
