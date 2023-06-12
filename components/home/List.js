import { View,Text, TouchableOpacity } from "react-native"
import { styles } from "../../styles/home/styles"
import { useState } from "react"
import { arrayFromKeywordString } from "../../utils/utils"

const List = ({id,keywords,name,handlePress}) => {

  const keywordsArray = arrayFromKeywordString(keywords);

  return (
    <TouchableOpacity style={styles.listItem} onPress={handlePress}>
      
      <Text style={styles.title}>{name}</Text>
      <View style={{flexDirection:"row" ,gap: 10}}>
      {
       keywordsArray.map((keyword,index) => (
          <Text style= {styles.keywordText} key={index} >{"#"+keyword}</Text>
        ))
      }
      </View>
     
    </TouchableOpacity>

  )
}

export default List