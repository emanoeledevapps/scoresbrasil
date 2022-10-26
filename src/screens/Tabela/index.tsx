import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { View, Text, FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './styles';
import axios from 'axios';
import { TabelaProps } from '../../interfaces';
import {TabelaItem} from '../../components/TabelaItem';
import {Loading} from '../../components/Loading';

interface RouteProps{
    campeonato_id: string
}

export function Tabela() {
    const route = useRoute();
    const campeonato = route.params as RouteProps;
    const [tabelaData, setTabelaData] = useState<TabelaProps[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTabela();
    }, []);

    function getTabela(){
        setLoading(true);
        axios.get(`https://api.api-futebol.com.br/v1/campeonatos/${campeonato.campeonato_id}/tabela`, {
            headers:{
                "Authorization": "TOKEN API"
            }
        })
        .then(response => {
            setTabelaData(response.data);
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title='Classificação' type='subroute'/>
            <View style={styles.topTable}>
                <View style={[styles.divisors, {width: '10%'}]}>
                    <Text style={styles.txtDivisors}>POS</Text>
                </View>
                <View style={[styles.divisors, {width: '40%'}]}>
                    <Text style={styles.txtDivisors}>EQUIPE</Text>
                </View>
                <View style={[styles.divisors, {width: '10%', alignItems: 'center'}]}>
                    <Text style={styles.txtDivisors}>P</Text>
                </View>
                <View style={[styles.divisors, {width: '10%', alignItems: 'center'}]}>
                    <Text style={styles.txtDivisors}>J</Text>
                </View>
                <View style={[styles.divisors, {width: '10%', alignItems: 'center'}]}>
                    <Text style={styles.txtDivisors}>SG</Text>
                </View>
                <View style={[styles.divisors, {width: '10%', alignItems: 'center'}]}>
                    <Text style={styles.txtDivisors}>V</Text>
                </View>
                <View style={[styles.divisors, {width: '10%', alignItems: 'center'}]}>
                    <Text style={styles.txtDivisors}>D</Text>
                </View>
            </View>
            <FlatList
                data={tabelaData}
                keyExtractor={item => item.posicao}
                renderItem={({item}) => <TabelaItem data={item}/>}
            />
            {loading && <Loading/>}
        </SafeAreaView>
    );
}