import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField, requestRobots} from '../actions'

const mapStatetoProps = state => {
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchtoProps = (dispatch) => {
   return { 
       onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots)
    }

}

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            
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


    
        
    render(){
        const { robots} = this.state;
        const { searchField, onSearchChange} = this.props;
        const filterRobot = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return(
        <div className ='tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange = {onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                <CardList robots={filterRobot}/>
                </ErrorBoundary>
            </Scroll>
        </div>
        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);