import React, {Component} from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import {robots} from './robots';

// props are simply things that come out of state
//  State >> props

class App extends Component {
    constructor() {
    super()
    this.state = {
        robots: {robots},
        searchField: ''
    }
    }

    onSearchChange(event){
        console.log(event);
    }
    
    render(){
    return (
        <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <CardList robots={this.state.robots}/>
        </div>
    )
  };
}

export default App;