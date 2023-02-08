import React,{Component} from "react";
import './Additem.css';

class AddItem extends Component{
    state={
        name:'',
        age:'',
        country:'',
    }
    handleChange=(e)=>{
       this.setState({
        [e.target.id]:e.target.value
       })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            name:'',
            age:'',
            country:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Your Name..." id="name" onChange={this.handleChange} value={this.state.name}/>
                    <input type="number" placeholder="Enter Your Age..." id="age" onChange={this.handleChange} value={this.state.age} />
                    <input type="text" placeholder="Enter Your Country..." id="country" onChange={this.handleChange} value={this.state.country}/>
                    <input type="submit" value="Add"/>
                </form> 
            </div>
        )
    }
}
export default AddItem;