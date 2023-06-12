import { Text,TextInput, View } from "react-native"
import { commonStyles } from "../../styles/common/styles"
const InputText = ({label,placeholder, ...props}) => {
  return (
    <View>
      <Text style={commonStyles.inputLabel}>{label}</Text>
      <TextInput style={commonStyles.textInput} placeholder={placeholder} passwordRules={5}/>
    </View>
  )
}

export default InputText