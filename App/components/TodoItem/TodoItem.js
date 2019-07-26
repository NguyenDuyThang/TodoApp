import React from 'react';
import { View, Text } from 'react-native';
import styles from './TodoItemStyle';

const ToDoItem = (props) => {
    return(
        <View
            style = {styles.container}
        >
            <Text>{props.name}</Text>
            <Text>{props.priority}</Text>
            <Text>{props.dueTime}</Text>
        </View>
    );
};

export default ToDoItem;