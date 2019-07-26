import { StyleSheet } from 'react-native';
import Metrics from '../../themes/Metrics';

const styles = StyleSheet.create({
    buttonCreateWrapper: {
        position: 'absolute',
        bottom: 0,
        width: 40,
        height: 40,
        padding: 30,
        backgroundColor: '#2C7BBD',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,
        alignSelf: 'center'
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch'
    }
});

export default styles;