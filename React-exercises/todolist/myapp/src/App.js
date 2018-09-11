import React, { Component } from 'react';
import './App.css';

// stateless functional component
const TodoItem = ({text}) => (
    <li>{text}</li>
);

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            todos:[],
            newTodo:''
        };
        this.handleForm = this.handleForm.bind(this);
    }

    handleForm(e){
        const todos = [...this.state.todos , this.state.newTodo ];
        this.setState({ todos, newTodo:''});
        document.getElementById("newItem").value = "";
    }

    render() {
        const {newTodo} = this.state;
        const todolist = this.state.todos.map((t,i) => (
            <TodoItem key={i} text={t} />
        ));

        return (

            <div className="App" >
                <h1>Todo List Using React</h1>
                <form

                    onSubmit={
                        (e) => {
                            e.preventDefault();
                            this.handleForm(e)
                        }}>
                    <input id="newItem"
                           name="newTodo"
                           autoComplete="off"
                           type="text"
                           onChange={
                               (e) => {
                                   this.setState({[e.target.name]: e.target.value})
                               }
                           }
                           placeholder="Add New Todo"
                    />
                    <button className="btn btn-success btn-block">Submit</button>

                </form>
                <div className="todoContent">
                    <ol>
                        {todolist}
                    </ol>
                </div>
            </div>
        );
    }

}

export default App;
