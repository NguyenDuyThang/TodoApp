import React from 'react';
import { StyleSheet } from 'react-native';
import Metrics from '../../themes/Metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerLeft: {
        marginLeft: Metrics.screenWidth * 0.03,
        backgroundColor: '#2C7BBD'
    },
    headerRight: {
        width: Metrics.screenWidth * 0.1013
    },
    bottomDeco: {
        position: 'absolute',
        bottom: 0,
        width: Metrics.screenWidth,
        height: Metrics.screenHeight * 0.04,
        backgroundColor: '#2C7BBD'
    },
    footer: {
        backgroundColor: 'white',
        height: 30,
        width: Metrics.screenWidth
    },
    emptyText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    },
    refreshing: {
        flex: 1
    }
});

export default styles;