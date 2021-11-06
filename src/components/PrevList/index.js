import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {styles} from './styles';

import Img1 from '../../Assets/slide-img1.jpg';
import Img2 from '../../Assets/slide-img7.jpg';
import Img3 from '../../Assets/slide-img3.jpg';
import Img4 from '../../Assets/slide-img4.jpg';
import Img5 from '../../Assets/slide-img5.jpg';

const images = [
    {key: '1', img: Img1},
    {key: '2', img: Img2},
    {key: '3', img: Img3},
    {key: '4', img: Img4},
    {key: '5', img: Img5},
] 

export default function PrevList(){
    return(
        <View style={styles.container}>
            <Text style={styles.textPrev}>Prévias</Text>

            <FlatList style={styles.list} horizontal
                showsHorizontalScrollIndicator={false}
                data={images}
                renderItem={({item}) => 
                
                <TouchableOpacity>
                    <View style={styles.oval}>
                        <Image style={styles.capa} source={item.img} />
                    </View>
                </TouchableOpacity>}
            />
        </View>
    )
}