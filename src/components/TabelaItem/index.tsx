import { View, Text, TouchableOpacity, ImageProps  } from 'react-native';
import { TabelaProps } from '../../interfaces';
import { styles } from './styles';
import Image from 'react-native-remote-svg';

interface Props {
    data: TabelaProps;
}

export function TabelaItem({data} : Props) {
  return (
    <TouchableOpacity style={[styles.container, {
        backgroundColor: data.posicao === '17' || data.posicao === '18' || data.posicao === '19' || data.posicao === '20' ? 'red' : '#fff'
    }]}>
        <View style={[styles.divisors, {width: '10%'}]}>
            <Text style={styles.txtDivisors}>{data.posicao}</Text>
        </View>
        <View style={[styles.divisors, {width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}]}>
            <Image
                source={{uri: data.time.escudo}}
                style={{width: 30, height: 30, resizeMode: 'contain', marginRight: 10}}
            />
            <Text style={styles.txtDivisors}>{data.time.nome_popular}</Text>
        </View>
        <View style={[styles.divisors, {width: '10%', alignItems: 'center'}]}>
            <Text style={styles.txtDivisors}>{data.pontos}</Text>
        </View>
        <View style={[styles.divisors, {width: '10%', alignItems: 'center'}]}>
            <Text style={styles.txtDivisors}>{data.jogos}</Text>
        </View>
        <View style={[styles.divisors, {width: '10%', alignItems: 'center'}]}>
            <Text style={styles.txtDivisors}>{data.saldo_gols}</Text>
        </View>
        <View style={[styles.divisors, {width: '10%', alignItems: 'center'}]}>
            <Text style={styles.txtDivisors}>{data.vitorias}</Text>
        </View>
        <View style={[styles.divisors, {width: '10%', alignItems: 'center'}]}>
            <Text style={styles.txtDivisors}>{data.derrotas}</Text>
        </View>
    </TouchableOpacity>
  );
}