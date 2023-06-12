import React, { useState } from 'react'
import { styles } from '../../styles/listDetail/styles'
import { Text, TextInput, View } from 'react-native'
import IconButton from '../ui/IconButton'
import images from '../../constants/images'

const HearderList = ({handleChange,value,handleEdit,handleDelete}) => {

  const [isEditable, setEditable] = useState(false);

  const toggleEditable = () => {
    handleEdit();
    setEditable(!isEditable);
  }

  return (
    <>
      <View style={styles.titleContainer}>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={styles.title(isEditable)}
            defaultValue={value.title}
            editable={isEditable}
            onChangeText={(newValue) => handleChange(newValue)}
          />
          {isEditable ? (
            <IconButton
              iconUrl={images.save}
              dimension={30}
              handlePress={toggleEditable}
            ></IconButton>
          ) : null}
        </View>
        <View style={styles.iconContainer}>
          <IconButton
            iconUrl={images.deleteImg}
            dimension={30}
            handlePress={handleDelete}
          ></IconButton>
          <IconButton
            iconUrl={isEditable ? images.cancel : images.editImg}
            dimension={30}
            handlePress={() => setEditable(!isEditable)}
          ></IconButton>
        </View>
      </View>

      <View style={styles.mainTextContainer}>
        <Text style={styles.importantText}>
          Keep Track of what you need to do
        </Text>
      </View>
    </>
  )
}

export default HearderList