import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './ButtonCreateStyle';
import Images from '../../themes/Images';

const ButtonCreate = (props) => {
    return(
        <TouchableOpacity
            style = {styles.buttonCreateWrapper}
            onPress = {props.executeTask}
        >
            <Image
                source = {Images.create}
                style = {styles.icon}
            />
        </TouchableOpacity>
    );
}

export default ButtonCreate;