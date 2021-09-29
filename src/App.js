
import './App.css';
import React from "react";
import header from './components/Header';
import Counter from './components/Counter';
import { PropertyListingsConsumer } from './components/Propertylistings';

  
  export class PropertyListingsProvider extends React.Component {
    state = DefaultState
  
    componentDidMount() {
      fetch('/server/listings.json')
        .then(res => res.json())
        .then(res => {
          this.setState({ propertyListings: res })
        })

  
    render() {
      



class App extends Component {
  state = {
    
  handleEdit = () => {
    const counters = this.state.counters.map((item) => {
      item.value = 0;
      return item;
    });

    this.setState({ counters });
  

  handleAdd = (counter) => {
    
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters})

  };

  handleRemove = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    console.log(counters[index]);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters})
  }

  handleDelete = (id) => {
      console.log("Delete Event Called" ,id);
      console.log(this.state.counters);
      const counters = this.state.counters.filter((obj) => obj.id !== id);
      console.log(counters);
      this.setState({counters});
  }

  render() {
    return (
      const { children } = this.props
      const { propertyListings } = this.state
    (
        <PropertyListingsContext.Provider
          value={{
            propertyListings
          }}
        >
          {children}
          <PropertyListingsConsumer>
  {({ propertyListings }) => (
    <ul>
      {propertyListings.map(listing => (
        <li>{listing.title}</li>
      ))}
    </ul>
  )}
</PropertyListingsConsumer>
        </PropertyListingsContext.Provider>
      )
    }
      
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container mt-2">
          <Counters
            counters={this.state.counters}
            onReset={this.handleEdit}
            onIncrement={this.handleAdd}
            onDecrement={this.handleRemove}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }

export default App;
