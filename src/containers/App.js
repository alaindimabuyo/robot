import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';




class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{return response.json();
        })
        .then(users=>{
            this.setState({ robots: users });
        })
        
    }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
        
    render(){
        const { robots, searchfield} = this.state;
        const filterRobot = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return(
        <div className ='tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                <CardList robots={filterRobot}/>
                </ErrorBoundary>
            </Scroll>
        </div>
        );
    }
}

export default App;