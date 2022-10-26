import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topTable:{
        width: '100%',
        height: 40,
        backgroundColor: '#ddd',
        flexDirection: 'row'
    },
    divisors:{
        justifyContent: 'center',
        paddingHorizontal: 3,
        borderRightWidth: 1
    },
    txtDivisors:{
        color: 'green',
        fontWeight: 'bold'
    }
});