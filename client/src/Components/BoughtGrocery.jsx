import React from 'react';

class BoughtGrocery extends React.Component {
  constructor(props){
    super(props);

    this.state={
      item: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      item: e.target.value
    });
  }

  handleClick(e){
    e.preventDefault();
    console.log('button clicked');
  }

  render() {
    return (
      <form>
        <label> Item
          <input name="item" value={this.state.item} onChange={this.handleChange}/>
        </label>
        <button onClick={this.handleClick.bind(this)}>Bought Grocery</button>
      </form>
    )
  }
}

export default BoughtGrocery;
