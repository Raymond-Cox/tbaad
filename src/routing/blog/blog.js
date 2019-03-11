import React, { Component } from "react";
export default class Blog extends Component {
  render() {
        console.log(this.props);
        const { params } = this.props.match;
    return (
      <div>
        <h1>Blog</h1>
        <p>{params.id}</p>
      </div>
    );
  }
}
