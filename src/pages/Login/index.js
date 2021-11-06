import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {styles} from './styles';

import Img from '../../Assets/logo.png';

export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={Img} />

            <TextInput style={styles.input} 
                label='Email ou numero de telefone'
                theme={{
                    colors:{primary:'#e50942', placeholder:'#fff', text: '#fff'}
                }}
            />

            <TextInput style={styles.input} 
                label='Senha'
                theme={{
                    colors:{primary:'#e50941', placeholder:'#fff', text:'#fff'}
                }}
            />

            <Button style={styles.buttom} mode='contained' onPress={() => {
                navigation.navigate('Home')
            }}>
                Entrar
            </Button>

            <Button theme={{colors:{primary:'#fff'}}}>
                Recuperar senha
            </Button>

            <Text style={styles.title}>
                O acesso esta protegido pelo Google reCaptcha {'\n'}
                para garantir que voçe não é um robo. Saiba mais
            </Text>
        </View>
    )
}