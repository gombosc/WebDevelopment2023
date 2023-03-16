import React, {Component} from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
// import {robots} from './robots';
import'./App.css';
import Scroll from "./Scroll";

// props are simply things that come out of state
//  State >> props

class App extends Component {
    constructor() {
    super()
    this.state = {
        robots: [],
        searchField: ''
    }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {this.setState({robots:users})});
        // fetching users from API
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})
    }
    
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())})
            
        if(this.state.robots.lenght === 0){
            return <h1>Loading</h1>;
        }
        else {
        return (
        <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
            <CardList robots={filteredRobots}/>
        </Scroll>
        </div>
    )
  };
}}

export default App;