import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addTodo
} from './actions/TodoActions';

class TodoList extends Component {

    // constructor(props) {
    //     super(props);

    // }

    state = {
        newTodoText: ''
    };

    addNewTodo = () => {

        this.props.addTodo(this.state.newTodoText);
        this.setState({ newTodoText: '' });
    };

    render() {

        return(
            <div>
                <ul>
                    <li>{this.props.teste}</li>
                </ul>


                <input
                    type="text"
                    value={this.state.newTodoText}
                    onChange={ e => {
                        this.setState({ newTodoText: e.target.value })
                    }}
                />
                <button onClick={this.addNewTodo}>Novo Todo</button>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        teste: state.TodoReducer.teste
    };
};

export default connect(mapStateToProps, {
    addTodo
})(TodoList);
