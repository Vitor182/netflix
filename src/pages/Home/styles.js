import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000'
    },

    menuHeader:{
        flexDirection:'row',
        width:'100%',
        height:40,
        marginTop:20,
        justifyContent:'space-evenly'
    },

    buttomHeader:{
        alignItems:'center',
        justifyContent:'center'
    },

    buttomHeaderPlay:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        paddingHorizontal:15,
        borderRadius:5
    },

    textHeader:{
        color:'#fff'
    },

    textHeaderPlay:{
        color:'#000'

    }
})