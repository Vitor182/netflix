import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {styles} from './styles';

import Img1 from '../../Assets/slide-img6.jpg';
import Img2 from '../../Assets/slide-img8.jpg';
import Img3 from '../../Assets/slide-img9.jpg';
import Img4 from '../../Assets/slide-img10.jpg';
import Img5 from '../../Assets/slide-img11.jpg';

const images = [
    {key: '1', img: Img1},
    {key: '2', img: Img2},
    {key: '3', img: Img3},
    {key: '4', img: Img4},
    {key: '5', img: Img5},
]

export default function Secao(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Nome da seção</Text>

            <FlatList style={styles.list} horizontal
                data={images}
                renderItem={({item}) => 
                
                <TouchableOpacity>
                    <Image style={styles.capa} source={item.img} />
                </TouchableOpacity>}
            />
        </View>
    )
}