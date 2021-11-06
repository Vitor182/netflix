import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    hero:{
        position:'absolute',
        zIndex:999,
        top:0
    },

    heroContainer:{
        flexDirection:'row',
        width:'100%',
        height:105,
        alignItems:'center',
        justifyContent:'space-around'
    },

    textWhite:{
        color:'#fff',
        marginRight:30
    }
})