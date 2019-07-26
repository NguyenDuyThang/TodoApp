import React from 'react';
import { StyleSheet } from 'react-native';
import Metrics from '../../themes/Metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerLeft: {
        marginLeft: Metrics.screenWidth * 0.03,
        backgroundColor: '#2C7BBD'
    },
    headerRight: {
        width: Metrics.screenWidth * 0.1013
    }
});

export default styles;