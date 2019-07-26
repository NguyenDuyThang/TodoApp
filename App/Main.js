//Import screens to navigation
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TodoList from './containers/TodoList/TodoList';

const MainStack = createStackNavigator(
    {
        TodoList: {
            screen: TodoList 
        }
    },
    {
        initialRouteName: 'TodoList'
    }
);

export default createAppContainer(MainStack);