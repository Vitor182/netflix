import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {styles} from './styles';

import Img from '../../Assets/netflix_logo_icon_170919.png';

export default function Hero(){
    return(
        <LinearGradient style={styles.hero}
            colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
        >
            <View style={styles.heroContainer}>
                <Image source={Img} />

                <TouchableOpacity>
                    <Text style={styles.textWhite}>Series</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.textWhite}>Filmes</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.textWhite}>Minha lista</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}