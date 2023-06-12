import {TouchableOpacity,Image } from "react-native"
import { commonStyles } from "../../styles/common/styles"
const IconButton = ({iconUrl,dimension,handlePress,disabled}) => {
  return (
    <TouchableOpacity style={commonStyles.btnImgContainer} onPress={handlePress} disabled={disabled}>
      <Image source={iconUrl} resizeMode="cover" style={commonStyles.btnImg(dimension)}/>
    </TouchableOpacity>
  )
}

export default IconButton