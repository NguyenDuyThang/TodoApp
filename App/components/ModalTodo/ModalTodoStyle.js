import { StyleSheet } from 'react-native';
import Metrics from '../../themes/Metrics';

const styles = StyleSheet.create({
    modal: {
        width: Metrics.screenWidth * 0.84,
        height: Metrics.screenHeight * 0.45,
        borderRadius: 15
    },
    title: {
        color: 'black',
        fontWeight: '500',
        fontSize: 18,
        marginTop: 14
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    buttonCloseModal: {
        position: 'absolute',
        right: Metrics.screenWidth * 0.03,
        top: Metrics.screenWidth * 0.03
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch'
    },
    input: {
        width: Metrics.screenWidth * 0.78,
        marginTop: Metrics.screenHeight * 0.03,
        borderColor: '#CCCDCE',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: Metrics.screenWidth * 0.03
    },
    dropdown: {
        width: Metrics.screenWidth * 0.78,
    },
    picker: {
        borderRadius: 10
    },
    dueTimeText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#6D6D6D',
        alignSelf: 'flex-start',
        marginLeft: Metrics.screenWidth * 0.03,
        marginTop: Metrics.screenWidth * 0.03,
        marginBottom: Metrics.screenWidth * 0.01
    },
    hour: {
        flex: 1,
        marginRight: Metrics.screenWidth * 0.03
    },  
    date: {
        flex: 2
    },
    buttonCreate: {
        position: 'absolute',
        bottom: Metrics.screenWidth * 0.03,
        borderRadius: 10,
        width: Metrics.screenWidth * 0.78,
        backgroundColor: '#2C7BBD',
        paddingVertical: Metrics.screenWidth * 0.03,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    },
    datePicker: {
        flexDirection: 'row',
        width: Metrics.screenWidth * 0.78
    }
});

export default styles;