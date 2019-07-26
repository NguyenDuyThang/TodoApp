import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './TodoItemStyle';
import Images from '../../themes/Images';

const ToDoItem = (props) => {
    const time = typeof(props.dueTime) == 'string' ? new Date(props.dueTime) : props.dueTime;
    return(
        <TouchableOpacity
            style = {styles.container}
            onPress = {props._updateToDoItem}
        >
            <View
                style = {styles.item}
            >
                <Text
                    style = {styles.title}
                >
                    {props.name}
                </Text>
                <TouchableOpacity
                    style = {styles.close}
                    onPress = {() => {
                        props._confirmDelete(props.index);
                    }}
                >
                    <Image
                        source = {Images.close}
                        style = {styles.icon2}
                    />
                </TouchableOpacity>
            </View>
            <Text
                style = {
                    [
                        styles.priorityText, 
                        {color: props._choosePriorityBackground(props.priority)}
                    ]
                }
            >
                {props.priority}
            </Text>
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
                        {time.toLocaleTimeString() + ', ' + time.toDateString()}
                    </Text>
                </View>
                <Image
                    source = {props._chooseDueTimeIndicator(time)}
                    style = {styles.icon3}
                />
            </View>
        </TouchableOpacity>
    );
};

export default ToDoItem;