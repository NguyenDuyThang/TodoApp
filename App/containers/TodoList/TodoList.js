import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/TodoActions';
import { View, FlatList } from 'react-native';
import TodoItem from '../../containers/TodoItem/TodoItem';
import styles from './TodoListStyle';

class TodoListContainer extends React.Component {

    _renderItem = ({item, index}) => {
        alert(JSON.stringify(item));
        return(
            <TodoItem
                item = {item}
            />
        );
    }

    render(){
        return(
            <View
                style = {styles.container}
            >
                <FlatList
                    data = {this.props.todoList}
                    renderItem = {this._renderItem}
                    showsVerticalScrollIndicator = {false}
                    keyExtractor = {(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    todoList: state.TodoReducer.todoList
});

const mapDispatchToProps = (dispatch, props) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
