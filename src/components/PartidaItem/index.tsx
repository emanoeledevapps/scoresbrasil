import { View, Text} from 'react-native';
import { PartidaProps } from '../../interfaces';
import Image from 'react-native-remote-svg';

import { styles } from './styles';

interface Props{
    partida: PartidaProps;
}

export function PartidaItem({partida}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.textData}>
                {partida.data_realizacao}, {partida.hora_realizacao} - {partida.estadio.nome_popular}
            </Text>
            <View style={styles.viewConfronto}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        source={{uri: partida.time_mandante.escudo}}
                        style={[styles.logoTime, {marginRight: 10}]}
                    />
                    <Text style={styles.slugPlacar}>{partida.placar_mandante === null ? '' : partida.placar_mandante}</Text>
                </View>
                <Text>
                    <Text style={styles.slugTime}>{partida.time_mandante.nome_popular} </Text>
                    <Text> X </Text>
                    
                    <Text style={styles.slugTime}> {partida.time_visitante.nome_popular}</Text>
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[styles.slugPlacar, {marginRight: 10}]}>{partida.placar_visitante === null ? '' : partida.placar_visitante}</Text>
                    <Image
                        source={{uri: partida.time_visitante.escudo}}
                        style={styles.logoTime}
                    />
                </View>
            </View>
        </View>
    );
}