import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots'
import '../containers/App.css';
import "tachyons";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Clock from '../components/Clock';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''    
    }
  }

  componentDidMount() {
    //console.log('check');
    fetch('https://jsonplaceholder.typicode.com/users')
//      .then(response => {
//        return response.json();
//      })
//      .then(users => {
//        this.setState({ robots: users })
//      })
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    //console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if(!robots.length) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='App-header'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Clock />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={ filteredRobots } />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;