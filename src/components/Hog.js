import React, { Component } from 'react';

class Hog extends Component {
  state = {
    clicked: false
  }

  snakeCase = (s) => {
    return s.toLowerCase().split(" ").join("_")
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    console.log(this.props.hog);
    const { name, specialty } = this.props.hog
    const medal = this.props.hog["highest medal achieved"]
    const longJoke = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const weight = this.props.hog[longJoke]

    return (
      <div onClick={this.clickHandler}>
        <li>
          <h1>{name}</h1>
          <img src={`/hog-imgs/${this.snakeCase(name)}.jpg`} alt=""/>
          {
            this.state.clicked ?
            <div>
              <p>specialty: {specialty}</p>
              <p>Medal: {medal}</p>
              <p>Weight: {weight}</p>
              { this.props.hog.greased ?
                <h3>GREASED!! GREASEY PIGGO</h3>
                 : <h3>not greased...</h3>
               }
            </div>
            : null
          }

        </li>
      </div>
    );
  }

}

export default Hog;
