import React from 'react';
import { StyleSheet } from 'react-native';
import Metrics from '../../themes/Metrics';

const styles = StyleSheet.create({
    container: {
        marginTop: Metrics.screenHeight * 0.02,
        marginBottom: Metrics.screenHeight * 0.02,
        marginHorizontal: Metrics.screenWidth * 0.03,
        padding: Metrics.screenWidth * 0.03,
        borderRadius: 10,
        elevation: 3
    }
});

export default styles;