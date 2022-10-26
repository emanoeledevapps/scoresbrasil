import { View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { CampeonatoProps } from '../../interfaces';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';

interface Props{
    data: CampeonatoProps
}

export function CampeonatoItem({data}: Props) {
    const navigation = useNavigation();

    function handleScreenCampeonato(campeonato: CampeonatoProps){
        navigation.navigate('campeonato', {campeonato: campeonato})
    }

    if(data.campeonato_id == '10' || data.campeonato_id == '14' || data.campeonato_id == '2'){
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => {
                if(data.campeonato_id == '2'){
                    ToastAndroid.show('Disponível em breve...!', ToastAndroid.LONG)
                    return;
                }
                handleScreenCampeonato(data)
            }}
        >
            <Image
                source={{uri: data.logo}}
                style={styles.logo}
            />
            <Text style={styles.title}>{data.nome}</Text>
        </TouchableOpacity>
    );
    }

    return(
        <View/>
    )
}