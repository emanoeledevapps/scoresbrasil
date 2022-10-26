import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ToastAndroid } from 'react-native';
import { Header } from '../../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { CampeonatoProps2, PartidaProps } from '../../interfaces';
import axios from 'axios';
import {FontAwesome5} from '@expo/vector-icons';
import { Loading } from '../../components/Loading';

import { styles } from './styles';
import { PartidaItem } from '../../components/PartidaItem';



export function Campeonato() {
    const navigation = useNavigation();
    const route = useRoute();
    const campeonato = route.params as CampeonatoProps2;
    const [rodadaSelect, setRodadaSelect] = useState<string>('atual');
    const [dataRodada, setDataRodada] = useState<PartidaProps[]>([]);
    const [slugRodada, setSlugRodada] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getRodada();
    }, [rodadaSelect]);

    function handleScreenTabela(){
        if(campeonato.campeonato.campeonato_id == '14'){
            ToastAndroid.show('Disponível em breve...!', ToastAndroid.LONG)
            return;
        }
        navigation.navigate('tabela', {campeonato_id: campeonato.campeonato.campeonato_id});
    }

    function getRodada(){
        setLoading(true)
        const rodada = rodadaSelect === 'atual' ? campeonato.campeonato.rodada_atual.rodada : campeonato.campeonato.rodada_atual.rodada - 1; 
        const campeonato_id = campeonato.campeonato.campeonato_id;
        axios.get(`https://api.api-futebol.com.br/v1/campeonatos/${campeonato_id}/rodadas/${rodada}`, {
            headers:{
                "Authorization": "TOKEN API"
            }
        })
        .then(response => {
            setSlugRodada(response.data.nome)
            setDataRodada(response.data.partidas)
            setLoading(false)
        })
    }

    return (
        <SafeAreaView style={{backgroundColor: '#fff'}}>
            <Header title={campeonato.campeonato.nome} type='subroute'/>
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Image
                        source={{uri: campeonato.campeonato.logo}}
                        style={styles.logo}
                    />

                    <View>
                        <Text style={styles.titles}>Temporada {campeonato.campeonato.edicao_atual.temporada}</Text>
                        <Text style={styles.titles}>{campeonato.campeonato.tipo}</Text>

                        {campeonato.campeonato.tipo === 'Pontos Corridos' && (
                            <TouchableOpacity
                                style={styles.btnTabela}
                                onPress={handleScreenTabela}
                            >
                                <FontAwesome5 name='list-ol' color='#fff' size={20} />
                                <Text style={styles.txtBtn}>Ver classificação</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                <Text style={[styles.titles,{color: 'green', marginTop: 10}]}>Partidas</Text>

                <View style={styles.viewBtnSelectRodada}>
                    <TouchableOpacity
                        style={[styles.btnTabela,{marginRight: 10, backgroundColor: rodadaSelect === 'anterior' ? 'green' : '#fff'}]}
                        onPress={() => setRodadaSelect('anterior')}
                    >
                        <Text style={[styles.txtBtn, {color: rodadaSelect === 'anterior' ? '#fff' : 'green', marginLeft: 0}]}>
                            Rodada anterior
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnTabela, {backgroundColor: rodadaSelect === 'atual' ? 'green' : '#fff'}]}
                        onPress={() => setRodadaSelect('atual')}
                    >
                        <Text style={[styles.txtBtn, {color: rodadaSelect === 'anterior' ? 'green' : '#fff', marginLeft: 0}]}>
                            Rodada atual
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.slugRodada}>{slugRodada}</Text>
                
            </View>
            
                <FlatList
                    data={dataRodada}
                    keyExtractor={item => item.partida_id}
                    renderItem={({item}) => <PartidaItem partida={item}/>}
                    contentContainerStyle={{marginTop: 10, backgroundColor: '#fff'}}
                    style={{marginBottom: 285}}
                    nestedScrollEnabled={true}
                />
            {loading && <Loading/>}
        </SafeAreaView>
    );
}