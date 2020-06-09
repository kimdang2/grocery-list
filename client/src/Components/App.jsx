import React from 'react';
import GroceryImage from './GroceryImage.jsx';
import GroceryForm from './GroceryForm.jsx';
import GroceryList from './GroceryList.jsx';
import BoughtGrocery from './BoughtGrocery.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [] // [{}, {}]
    }
    this.addToGroceryList = this.addToGroceryList.bind(this);
   this.getGroceries = this.getGroceries.bind(this);
   this.addGroceries = this.addGroceries.bind(this);
  }

  // To pass data from child component to parent component, pass down a function
  addToGroceryList(itemObj){
    var newGrocery = this.state.groceries;
    newGrocery.push(itemObj);
    this.setState({
      groceries: newGrocery
    })
  }


  // connect frontend to backend
  // whenever page re-renders, componentDidMount will run getGroceries
  componentDidMount(){
    this.getGroceries();
  }

  getGroceries() {
    console.log('requesting data from server ... ')
    $.ajax({
      url: ' http://localhost:3000/api/groceries',
      type: 'GET',
      success: (data) => { // expection: recieve grocery list from database
        this.setState({
         groceries:data })
        console.log('groceries', this.state.groceries)},
      error: (err) => console.log(err)
    });
  }

  addGroceries(itemObj) {
    $.ajax({
      type:'POST',
      url: '/api/groceries',
      data: itemObj,
      success: this.getGroceries, //if successful, rerender page
      error: err => console.log('error in App.jsx')
    })
  }

  // updateGroceries(){
  //   $.ajax({
  //     type:'POST',
  //     url: '/api/groceries',
  //     dataType: json,
  //     success: this.getGroceries, //if successful, rerender page
  //     error: err => console.log(err)
  //   })
  // }


  render() {
    return (
    <div>
      <GroceryImage />
      <h1>Grocery List</h1>
      <GroceryForm addToGroceryList={this.addToGroceryList} addGroceries={this.addGroceries}/>
      {/* <BoughtGrocery /> */}
      <GroceryList groceries={this.state.groceries}/>
    </div>
    )
  }
}

export default App;