import React, { Component } from 'react';
import Hog from './Hog';

class HogsList extends Component {
  createHogs = () => {

    if (this.props.greasedOnly === true) {
      const filteredHogs = this.props.hogs.filter(hog => hog.greased === true)
      return filteredHogs.map((hog, index) => {
        return <Hog hog={hog} key={index}/>
      })
    } else {
      return this.props.hogs.map((hog, index) => {
        return <Hog hog={hog} key={index}/>
      })
    }

  }

  render() {
    return (
      <div>
      {this.createHogs()}
      </div>
    );
  }

}

export default HogsList;
