import React, { Component } from 'react';
import an from './animals.json';

class App extends Component {
  render() {
    const items = an.Item.map((item, index) => {
      const colors = item.colors.map( (color) => {
        return (
          color + ","
        );
      });
      return (
        <ol key={index}>
          <h3> {index}. {item.name} </h3>
          <ul>
            <li> <b>종류</b>: {item.species} </li>
            <li> <b>성별</b>: {item.sex} </li>
            <li> <b>생일</b>: {item.birth} </li>
            <li> <b>성격</b>: {item.personality} </li>
            <li> <b>색상</b>: {colors} </li>
            <li> <b>순위</b>: {item.rank}위 </li>
            <li> <b>링크</b>: <a href={item.link} target = "self"> {item.link}</a> </li>
          </ul>
        </ol>
      );
    });
    return (
      items
    );
  }
}
export default App;
