import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/TodoActions';
import { View, FlatList, TouchableOpacity } from 'react-native';
import TodoItem from '../../containers/TodoItem/TodoItem';
import styles from './TodoListStyle';

class TodoListContainer extends React.Component {

    static navigationOptions = () => ({
        title: 'TO DO APP',
        headerStyle: {
            backgroundColor: '#2C7BBD',
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
                width: 0
            },
            shadowRadius: 0,
            elevation: 0
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontSize: 18,
            lineHeight: 20,
            fontWeight: 'bold'
        },
        headerLeft: (
            <View
                style={styles.headerLeft}
            />
        ),
        headerRight: (
            <View
                style={styles.headerRight}
            />
        )
    });

    _renderItem = ({item, index}) => {
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
