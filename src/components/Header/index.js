import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {styles} from './styles';

import Img from '../../Assets/fundo.jpg';

export default function Header(){
    return(
        <ImageBackground style={styles.header}
            source={Img}>

                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Top 1 de hoje no brasil</Text>
                </View>

                <LinearGradient style={styles.gradient}
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
                >
                </LinearGradient>
        </ImageBackground>
    )
}