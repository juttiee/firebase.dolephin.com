import React, { Component } from "react";
import _ from "lodash";

export default class About extends Component {
  render() {
    var rand = (min: number, max: number) => {
      return _.random(min, max);
    };
    return (
      <div>
        <p>
          <img src="./images/CI_256.png" alt="CI" />
        </p>
        <p>
          <h2>Dolephin.com</h2>
        </p>
        <p>
          <a href="https://log.dolephin.com">[Blog] 일상의 기록 그리고 여행</a>
        </p>
        <div>{rand(1, 10)}</div>
      </div>
    );
  }
}
