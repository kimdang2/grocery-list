import React from "react";

const GroceryItem = ({grocery}) => {
 return(
  <li>
    <span>{grocery.item}</span>
    <span>{grocery.quantity}</span>
  </li>
 )
}

// const GroceryItem = (props) => {
//   console.log('hi')
//   console.log(props.grocery.item)
//  return(
//   <li>
//     <span>{props.grocery.item}</span>
//     <span>{props.grocery.quantity}</span>
//   </li>
//  )
// }


// object
export default GroceryItem;