import React,{Component} from 'react'

export default class AddTodo extends Component{
    //create an object
    state ={
        
        content: ''
    }
    handleChange =(e)=>{
        if(e.target.value.length>0){
            this.setState({
                content: e.target.value
            })
        }
        
    }
    handleSubmit = (e) =>{
        e.preventDefault()
    
        //props mean properties/attribute
        //this.props = add (line 30 App.js), then pass parameter for add
        if(this.state.content!==''){
            this.props.add(this.state)
        }
        this.setState({
            content: ''
        })

    } 
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo: </label>
                    <input type="text" onChange={this.handleChange} placeholder="Add todo" value={this.state.content}/>
                </form>
            </div>
        )
    }

}