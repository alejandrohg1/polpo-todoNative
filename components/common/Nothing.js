import React from 'react'
import { Text,View } from 'react-native'
import { commonStyles } from '../../styles/common/styles'


const Nothing = () => {
  return (
    <View style={commonStyles.nothingContainer}>
     <Text style={commonStyles.nothingText}>
      {`Nothing to show here yet :(`}
     </Text>
    </View>
  )
}




export default Nothing