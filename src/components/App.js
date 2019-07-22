import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsList from './HogsList';
import Filter from './Filter';

class App extends Component {
  state = {
    hogs: hogs,
    greasedOnly: false
  }

  greasedCheckbox = event => {
    console.log(event)
    this.setState({
      greasedOnly: !this.state.greasedOnly
    })
  }

  onSelect = event => {
    // While this works, we could also rewrite it with switch-case statements
    // Note that sort is destructive, which is why we spread it
    let sorted;
    if (event.target.value === "name") {
      sorted = [...hogs].sort((a,b) => a.name.localeCompare(b.name))
    } else if (event.target.value === "") {
      sorted = hogs
    } else if (event.target.value === "weight") {
      const longJoke = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      sorted = [...hogs].sort((a,b) => a[longJoke] - b[longJoke])
    }
    this.setState({
      hogs: sorted
    })
  }

  // This sets the hogs in state to be sorted by name
  // It will be given to the Filter component
  sortAscend = () => {
    const sortedByName = this.state.hogs.sort((a,b) => a.name.localeCompare(b.name))
    this.setState({
      hogs: sortedByName
    })
  }

  // This is the function for filtering for greased-hogs that we wrote
  // in the beginning. I'll leave it here for reference
  clickedButton = event => {
    if (event.target.className === "greased-hogs") {
      const filteredHogs = hogs.filter(hog => hog.greased === true)
      console.log(filteredHogs)
      this.setState({
        hogs: filteredHogs
      })
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <Filter
          greasedOnly={this.state.greasedOnly}
          greasedCheckbox={this.greasedCheckbox}
          onSelect={this.onSelect}
          sortAscend={this.sortAscend}
          clickedButton={this.clickedButton}/>

          <HogsList
          greasedOnly={this.state.greasedOnly}
          hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
