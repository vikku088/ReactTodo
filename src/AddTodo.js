import React,{Component} from 'react';

class AddTodo extends Component{
    state = {
        content : ''
    }
    // Handle change text
    handlerChange = (e)=>{
        this.setState({
            content: e.target.value
        });
    }
    // Handle submit data
    handlerSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodos(this.state);
        this.inputTitle.value = "";
    }
    render(){
        return (
            <div>
                <form onSubmit= {this.handlerSubmit}>
                    <input placeholder = "Enter You Text" type = "text" onChange = {this.handlerChange} ref={el => this.inputTitle = el}/>
                </form>
            </div>
        )
    }
}
export default AddTodo;