import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Post = ({post}) => {
  console.log("post =======>",post)
  const {bed,bedroom,coordinate,id,image, newPrice, oldPrice, title, totalPrice, type}=post;
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:image}}/>
        <Text style={styles.bedrooms}>{bed} bed {bedroom} bedroom</Text>
        <Text style={styles.description} numberOfLines={2}>{type}. {title}
        </Text>
        <Text style={styles.priceContainer}>
        <Text  style={styles.oldPrice}>{oldPrice}£</Text>
        <Text  style={styles.price}>  {newPrice}£ </Text>
        <Text  style={styles.duration}>/ month</Text>
        </Text>
        <Text style={styles.totalPrice}>{totalPrice} £  total</Text>

    </View>
  )
}

export default Post

const styles = StyleSheet.create({
    container:{
        margin:15,
    },

    image:{
        width:"100%",
        aspectRatio:3/2,
        resizeMode: "cover",
        borderRadius: 10
    },
    bedrooms:{
      marginVertical:10

    },
    description:{
      fontSize:20,
      color:"black"

    },
    priceContainer:{
      flexDirection:'row',
      fontSize:20,
      fontWeight:'bold',
      marginTop:10

    },
    oldPrice:{
      textDecorationLine:'line-through'
    },
    price:{
      color:"black"

    },
    totalPrice:{
      fontSize:18,
      textDecorationLine:'underline'

    }

})