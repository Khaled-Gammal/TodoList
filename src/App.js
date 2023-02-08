import React ,{Component} from 'react';
import TodoItems from './Components/Todoitem/Todoitem';
import AddItem from './Components/Additem/Additem';
class App extends Component{
  state={
    item:[
      {id:1,name:"Khaled Gammal",age:26,country:"Egypt"},
      {id:2,name:"Mohamed Gammal",age:30,country:"Egypt"},
      {id:3,name:"Abdelrahman Mohamed",age:26,country:"Egypt"},
  ]
  }
  deleteItem = (id) => {
    //let items = this.state.item.filter(it =>{
      //return it.id !== id
    //});
    let items=this.state.item;
    let i=items.findIndex(item => item.id ===id)
    items.splice(i,1)
    this.setState({items})
  }

  addItem = (item)=> {
    item.id=Math.random();
    let items=this.state.item;
    items.push(item);
    this.setState({items})
  }
  render(){

    return (

      <div className="App container">
       <h1 className='text-center'>Todo List</h1>
       <TodoItems items={this.state.item} deleteItems={this.deleteItem}/>
       <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
