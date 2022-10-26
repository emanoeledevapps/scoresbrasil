import { View, Text, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps{
    title: string;
    type: string;
}

export function Header(props: HeaderProps) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {props.type === 'subroute' && (
                <TouchableOpacity
                    style={styles.btnBack}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name='left' color='#fff' size={25}/>
                </TouchableOpacity>
            )}
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
        </View>
    );
}