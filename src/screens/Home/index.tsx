import {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import { styles } from './styles';
import { Header } from '../../components/Header';

import { CampeonatoProps } from '../../interfaces';
import { CampeonatoItem } from '../../components/CampeonatoItem';
import { Loading } from '../../components/Loading';


export function Home() {
    const navigation = useNavigation();
    const [campeonatos, setCampeonatos] = useState<CampeonatoProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://api.api-futebol.com.br/v1/campeonatos', {
            headers:{
                "Authorization": "TOKEN API"
            }
        })
        .then(response => {
            setCampeonatos(response.data);
            setLoading(false)
        });
    },[]);

    return (
        <SafeAreaView style={{backgroundColor: '#fff'}}>
            <StatusBar backgroundColor='green' style='light'/>
            <Header title='Scores Brasil' type='home'/>

            <FlatList
                data={campeonatos}
                keyExtractor={item => item.campeonato_id}
                renderItem={({item}) => <CampeonatoItem 
                    data={item} 
                />}
            />

            {loading && <Loading/>}
        </SafeAreaView>
    );
}