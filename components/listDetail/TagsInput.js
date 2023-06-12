import {View, Text} from 'react-native'
import { styles } from '../../styles/listDetail/styles'
import IconButton from '../ui/IconButton'
import images from '../../constants/images'
import { editListById } from '../../actions/actionsList'




const TagsInput = ({keyword,value,setValue,idList,accessToken}) => {

  
  const handleDelete = async () => {
    const newKeywords = value.keywords.filter(item => item !== keyword)
    await editListById(idList,{...value,keywords:newKeywords},accessToken)
    setValue({...value,keywords:newKeywords})
   
  }

  return (
    <View style={styles.tagInput}>
      <Text style={styles.tagText}>{keyword}</Text>
      <IconButton iconUrl={images.cancel} dimension={20} handlePress={handleDelete}/>
    </View>
  )
}

export default TagsInput