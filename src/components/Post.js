import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Post = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:"https://shorttermrentalz.com/wp-content/uploads/2020/07/airbnb-staycation.jpg"}}/>
        <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
        <Text style={styles.description} numberOfLines={2}>lorem ipsum bla doing hsnd bfhgn snns d nfbs shfnsh c dnnsbns nsbdbfhr  sbdd
        lorem ipsum bla doing hsnd bfhgn snns d nfbs shfnsh c dnnsbns nsbdbfhr  sbdd
        lorem ipsum bla doing hsnd bfhgn snns d nfbs shfnsh c dnnsbns nsbdbfhr  sbdd
        </Text>
        <Text style={styles.priceContainer}>
        <Text  style={styles.oldPrice}> 33£</Text>
        <Text  style={styles.price}> 22£ </Text>
        <Text  style={styles.duration}>/ month</Text>
        </Text>
        <Text style={styles.totalPrice}> 37 £  total</Text>

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
      marginVertical:10

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