import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './LoadingStyle';

const Loading = () => {
    return (
        <View style = {styles.indicatorContainer}>
            <ActivityIndicator
                size = {30}
                color = {'#2C7BBA'}
            />
        </View>
    );
}

export default Loading;