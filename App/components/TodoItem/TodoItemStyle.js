import React from 'react';
import { StyleSheet } from 'react-native';
import Metrics from '../../themes/Metrics';

const styles = StyleSheet.create({
    container: {
        marginTop: Metrics.screenHeight * 0.02,
        marginBottom: Metrics.screenHeight * 0.02,
        marginHorizontal: Metrics.screenWidth * 0.03,
        padding: Metrics.screenWidth * 0.03,
        borderRadius: 15,
        elevation: 5,
        backgroundColor: 'white'
    },
    title: {
        flex: 4,
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginRight: Metrics.screenWidth * 0.03
    },
    item: {
        marginBottom: Metrics.screenHeight * 0.03,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    dueTime: {
        flexDirection: 'row'
    },
    dueTimeText: {
        color: 'black'
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: Metrics.screenWidth * 0.03
    },
    icon2: {
        width: 25,
        height: 25,
        resizeMode: 'stretch'
    },
    priorityText: {
        flex: 1,
        textAlign: 'right',
        fontWeight: '500'
    }
});

export default styles;