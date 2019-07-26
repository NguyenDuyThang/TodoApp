import React from 'react';
import { View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import Modal from 'react-native-modalbox';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import Images from '../../themes/Images';
import styles from './ModalTodoStyle';

const ModalTodo = (props) => {
    return(
        <Modal
            style = {styles.modal}
            isOpen = {props.openModal}
            position = {'center'}
            backdropPressToClose = {false}
            onClosed = {props._resetTodoItem}
        >
            <View
                style = {styles.container}
            >
                <Text
                    style = {styles.title}
                >
                    Create a new to-do task
                </Text>
                <TextInput
                    style = {styles.input}
                    placeholder = {'Name the task you are going to do'}
                    value = {props.todoName}
                    onChangeText = {props._onChangeTextName}
                />
                <Dropdown
                    containerStyle = {styles.dropdown}
                    pickerStyle = {styles.picker}
                    label = {'Priority'}
                    data = {priorities}
                    itemColor = {'black'}
                    value = {props.todoPriority}
                    onChangeText = {props._onChangePriority}
                />
                <Text
                    style = {styles.dueTimeText}
                >
                    Due Time
                </Text>
                <View
                    style = {styles.datePicker}
                >
                    <DatePicker
                        style = {styles.hour}
                        mode = {'time'}
                        confirmBtnText = {'Confirm'}
                        cancelBtnText = {'Cancel'}
                        date = {props.todoDueHour}
                        onDateChange = {props._onChangeDueHour}
                        showIcon = {false}
                    />
                    <DatePicker
                        style = {styles.date}
                        confirmBtnText = {'Confirm'}
                        cancelBtnText = {'Cancel'}
                        date = {props.todoDueTime}
                        onDateChange = {props._onChangeDueTime}
                    />
                </View>
                <TouchableOpacity
                    style = {styles.buttonCreate}
                    onPress = {props._updateTodoList}
                >
                    <Text
                        style = {styles.createText}
                    >
                        Create
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.buttonCloseModal}
                    onPress = {props._openModalTodo}
                >
                    <Image
                        source = {Images.close}
                        style = {styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const priorities = [
    {
        label: 'HIGH',
        value: 'HIGH'
    },
    {
        label: 'MEDIUM',
        value: 'MEDIUM'
    },
    {
        label: 'LOW',
        value: 'LOW'
    }
];

export default ModalTodo;