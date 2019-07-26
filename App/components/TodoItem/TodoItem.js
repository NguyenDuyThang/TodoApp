import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './TodoItemStyle';
import Images from '../../themes/Images';

const ToDoItem = (props) => {
    return(
        <View
            style = {styles.container}
        >
            <View
                style = {styles.item}
            >
                <Text
                    style = {styles.title}
                >
                    {props.name}
                </Text>
                <Text
                    style = {
                        [
                            styles.priorityText, 
                            {color: props.backgroundColor}
                        ]
                    }
                >
                    {props.priority}
                </Text>
            </View>
            <View
                style = {styles.time}
            >
                <View
                    style = {styles.dueTime}
                >
                    <Image
                        source = {Images.calendar}
                        style = {styles.icon}
                    />
                    <Text
                        style = {styles.dueTimeText}
                    >
                        {props.dueTime}
                    </Text>
                </View>
                <Image
                    source = {props.statusIndicator}
                    style = {styles.icon2}
                />
            </View>
        </View>
    );
};

export default ToDoItem;