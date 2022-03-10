import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import Fontisto from "react-native-vector-icons/Fontisto"
const Home = () => {
  return (
    <View>  
        <ImageBackground style={styles.image} source={ { uri: "https://c0.wallpaperflare.com/preview/695/560/917/airbnb-%E5%8F%B0%E7%81%A3-%E8%87%BA%E5%8C%97-%E8%87%BA%E7%81%A3.jpg" }}>
        <Pressable style={styles.searchButton}  
         onPress={()=>console.warn("search btn pressed")}
        >
            <Fontisto size={25} name={"search"} color={"orange"}  />
            <Text style={styles.searchButtonText}>
                 where are you going ? 
            </Text>
        </Pressable>  
        <Text style={styles.text}>Go Near</Text>
        <Pressable style={styles.button}  
         onPress={()=>console.warn("explore btn pressed")}
        >
            <Text style={styles.buttonText}>
                Explore nearby stays
            </Text>
        </Pressable>

            </ImageBackground>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    image:{
        height:"100%",
        width:"100%",
        resizeMode:'contain'

    },
    text:{
        fontSize:100,
        color: "white",
        
        width:"70%",
        fontWeight:'bold',
        margin:30

    },
    button:{
        width:"70%",
        height:50,
        backgroundColor:"white",
        marginLeft:30,
        borderRadius:15,
        justifyContent:'center',
        alignItems: 'center'

    
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:25
    },
    searchButton:{
        height:60,
        backgroundColor:"white",
        width:"100%",
        margin:20,
        width:"90%",
        borderRadius:30,
        justifyContent:'center',
        alignItems:"center",
        flexDirection:"row",
        
    },
    searchButtonText:{
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft:10
    }
})