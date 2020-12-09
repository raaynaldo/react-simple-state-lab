import React, { Component } from "react";
import Cell from "./Cell.js";

export default class Matrix extends Component {
  genRow = (vals) => {
    return vals.map((val, idx) => <Cell key={`cell-${idx}`} value={val}></Cell>); // replace me and render a cell component instead!
  };

  genMatrix = () => {
    return this.props.values.map((rowVals, idx) => (
      <div className="row" key={`row-${idx}`}>
        {this.genRow(rowVals)}
      </div>
    ));
  };

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}

Matrix.defaultProps = {
  values: (() => {
    const arr = [
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
      "#F00",
    ];
    return new Array(10).fill(arr);
  })(),
};
