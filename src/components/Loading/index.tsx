import { View, Modal, ActivityIndicator } from 'react-native';

//import { styles } from './styles';

export function Loading() {
    return (
        <Modal 
            visible={true}
            animationType='fade'
            transparent
            statusBarTranslucent
        >   
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{width: 200, height: 150, backgroundColor: 'rgba(0,0,0,0.4)',borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size={60} color='green' />
                </View>
            </View>
        </Modal>
    );
}