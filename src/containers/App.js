import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { robots } from '../components/robots'



class App extends Component{
	constructor() {
		super();
		this.state = {
			robots: [],
			Searchfield: ''
		}
	}

	componentDidMount(){
		this.setState({ robots: robots});
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then(response=> response.json())
		// 	.then(user=> this.setState({ robots: user}));
	}

	onSearchChange = (event) => {
		this.setState({Searchfield: event.target.value})
	}

	render() {
		const filteredrobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
		})

		return (
			<div className='tc'>
				<h1 className = 'f1'>RoboFriends</h1>
				<SearchBox SearchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredrobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;