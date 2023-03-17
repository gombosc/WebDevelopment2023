import React, {Component} from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/Cardlist";
// import {robots} from './robots';
import'../container/App.css';
import Scroll from "../components/Scroll";
import "../container/SEGA.woff"

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
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robots =>{
        return robots.name.toLowerCase().includes(searchField.toLowerCase())})
        
        return !robots.lenght ?
        <h1>Loading</h1>:
        (
        <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
            <CardList robots={filteredRobots}/>
        </Scroll>
        </div>
    )
    }}

export default App;