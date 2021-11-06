import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:400
    },
    
    headerContainer:{
        position:'absolute',
        bottom:5,
        zIndex:10,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        flexDirection:'row'
    },

    headerText:{
        color: '#fff',
        fontSize:16
    },

    gradient:{
        width:'100%',
        height:150,
        position:'absolute',
        zIndex:9,
        bottom:0
    }
})