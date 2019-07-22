import React, { Component } from 'react';

class Filter extends Component {

  render() {
    return (
      <div>
      Hello from Filter
      <select onChange={this.props.onSelect}>
      <option value=''>Default</option>
        <option value='name'>Name</option>
        <option value='weight'>Weight</option>
      </select>

      <input
      checked={this.props.greasedOnly}
      type='checkbox'
      value={'greased'}
      onChange={this.props.greasedCheckbox}/> Greased?
      <br/>
      <button
      className='greased-hogs'
      onClick={this.props.clickedButton}
      >See Only Greased Hogs</button>
      <button
      className='name-sort'
      onClick={this.props.sortAscend}
      >Sort by Name (A-Z)</button>
      </div>
    );
  }

}

export default Filter;
