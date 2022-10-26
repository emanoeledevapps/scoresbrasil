import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        height: 70,
        paddingHorizontal:15,
        paddingVertical: 10,
        alignItems: 'center'
    },
    logo:{
        width: 45,
        height: 45,
        marginRight: 15,
        resizeMode: 'contain'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
        color: 'green'
    }
});