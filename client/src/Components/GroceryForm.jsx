import React from 'react';

class GroceryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item:'',
      quantity:''
    }
    this.handleItem = this.handleItem.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleItem(e) {
    this.setState({ // update item whe user types
      item: e.target.value
    })
  };

  handleQuantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  // ES6



  handleClick(e){
    e.preventDefault();
    //console.log('curr state', this.state);
    this.props.addGroceries(this.state);
    //this.props.addToGroceryList(this.state);

    // clears out text
    this.setState({
      item:'',
      quantity:''
    });
  }

  render() {
    return (
      <form>
        <label> Item
          <input name="item" value={this.state.item} onChange={this.handleItem}/>
        </label>
        <label> Quantity
          <input name="quantity" value={this.state.quantity} onChange={this.handleQuantity}/>
        </label>
        <button onClick={this.handleClick}>Add Grocery</button>
      </form>
    )
  }
}

export default GroceryForm;