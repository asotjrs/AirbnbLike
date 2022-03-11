import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"

const PlaceSuggestion = ({item}) => {
    const {description}=item;
  return (
    <View style={styles.container}>
    <Entypo name='location-pin' size={25} style={styles.icon} />
    <Text style={styles.description}> {description}</Text>
    </View>
  )
}

export default PlaceSuggestion

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems:'center',
        margin:10,
        borderBottomColor:"lightgrey",
        borderBottomWidth:1,
        paddingVertical: 10
       
    },
    icon:{
        backgroundColor:"lightgrey",
        padding:10,
        borderRadius:10,
        marginRight: 5
    },
    description:{
        
    }
})