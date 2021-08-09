import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List';

class App extends Component{
  state = {
    listOfVegetable: null,
    listOfFruits: null,
  }

  componentDidMount = () => {
    axios.get('https://marketlist-a0e37-default-rtdb.europe-west1.firebasedatabase.app/fruits.json')
      .then(response => {
        const fruitsArray = Object.entries(response.data);
        this.setState({listOfFruits : fruitsArray});
      }).catch(error => {console.log(error)});
    axios.get('https://marketlist-a0e37-default-rtdb.europe-west1.firebasedatabase.app/vegetable.json')
      .then(response => {
        const vegetableArray = Object.entries(response.data);
        this.setState({listOfVegetable : vegetableArray});
      }).catch(error => {console.log(error)});   
  }

  render(){
    return (
      <div className="App">
       <h1>List of market</h1>
       {this.state.listOfFruits &&
          <h2>Fruits</h2>
       }
       {this.state.listOfFruits &&
          <List marketlist={this.state.listOfFruits} />
       }
       {this.state.listOfVegetable &&
          <h2>Vegetables</h2>
       }
       {this.state.listOfVegetable &&
          <List marketlist={this.state.listOfVegetable} />
       }
      </div>
    );
  }  
}

export default App;
