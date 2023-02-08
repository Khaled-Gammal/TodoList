import React from "react";
import './Todoitem.css';

const TodoItems=(props)=>{
    const {items,deleteItems}=props;
    let Length = items.length;
    const ListItems = Length ? (

        items.map(item =>{
            return(

                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="country">{item.country}</span>
                    <span className="action icon" onClick={()=> deleteItems(item.id)}> &times; </span>
                </div>
            )
        })
    ) : (
        <p>There is no item to show</p>
    )
    
    return(
        <div className="ListItems">
            <div>
                <span className="name">Name</span>
                <span className="age">Age</span>
                <span className="country">Country</span>
                <span className="action icon">Action</span>
            </div>
            {ListItems}
        </div>
    )
}
export default TodoItems;