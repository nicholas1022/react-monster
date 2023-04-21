import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import CardList  from './components/card-list/card-list-component'
import SearchBox  from './components/search-box/search-box-component'

class App extends Component{
  constructor() {
    super();
    this.state = {
      mons: [
      ],
      searchFieldValue: '',
      index: 0
    }
  }

  onSearchChange = (event) => {
    const searchFieldValue = event.target.value.toUpperCase();
    console.log('Inut Search Value: ' + searchFieldValue);
    this.setState(() => {
      return {searchFieldValue}
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    // .then((users) => console.log(users))
    .then((users) => this.setState({mons:users}))
  }
  render() {
    const {mons, searchFieldValue } = this.state;
    const { onSearchChange } = this;
    const filteredMons = mons.filter(mon => {
      return mon.name.toUpperCase().includes(searchFieldValue);
    })

    return (
      <div className="App">
        <SearchBox className={'search-box'} placeHolder={'search monsters'} onSearchChangeHandler={onSearchChange} />
        
        <CardList mons={filteredMons}/>
      </div>
    );
  }
}

export default App;
