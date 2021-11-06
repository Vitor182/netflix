import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {styles} from './styles';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import PrevList from '../../components/PrevList';
import Secao from '../../components/Secao';

export default function Home(){
    return(
        <ScrollView style={styles.container}>
            <Hero/>
            <Header/>

            <View style={styles.menuHeader}>

                <TouchableOpacity style={styles.buttomHeader}>
                    <MaterialCommunityIcons name='plus' size={20} color='#fff'/>
                    <Text style={styles.textHeader}>Minha lista</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttomHeaderPlay}>
                    <MaterialCommunityIcons name='play' size={25} color='#000'/>
                    <Text style={styles.textHeaderPlay}>Assistir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttomHeader}>
                    <MaterialCommunityIcons name='information-outline' size={20} color='#fff'/>
                    <Text style={styles.textHeader}>Saiba mais</Text>
                </TouchableOpacity>

            </View>

            <PrevList/>

            {[1,2,3,4].map((index) => (
                <Secao key={index}/>
            ))}
            
        </ScrollView>
    )
}