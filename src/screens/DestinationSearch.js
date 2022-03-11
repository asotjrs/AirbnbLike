import { StyleSheet, FlatList, View ,TextInput,Text} from 'react-native'
import React from 'react'
import results from "../../assets/data/search"
import PlaceSuggestion from '../components/PlaceSuggestion'
const DestinationSearch = () => {
    const [inputText,setInputText]=React.useState("")

  return (
    <View style={styles.container}>
        <TextInput 
        style={styles.textInput}
        placeholder='Where are you going ?'
        value={inputText}
        onChangeText={setInputText}
        />
        <FlatList
        data={results}
        renderItem={({item})=><PlaceSuggestion item={item}/>
    }
        />
    </View>
  )
}

export default DestinationSearch

const styles = StyleSheet.create({
    container:{
    margin:10
    },
    textInput:{

    }

})