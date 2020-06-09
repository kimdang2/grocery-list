import React from "react"
import GroceryItem from "./GroceryItem.jsx"

const GroceryList = ({groceries}) => {
  return (
    <ul className="groceries">
      { groceries.map((obj,index) => <GroceryItem grocery={obj} key={index}/>) }
    </ul>
  )
}

// const GroceryList = ({props}) => {
//   return (
//     <ul className="groceries">
//       { props.groceries.map((obj,index) => <GroceryItem grocery={obj} key={index}/>) }
//     </ul>
//   )
// }
// array

export default GroceryList;