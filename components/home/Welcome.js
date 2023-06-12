import React from "react";
import { Text,TextInput, View } from "react-native";
import { styles } from "../../styles/home/styles";
import images from "../../constants/images";
import IconButton from "../ui/IconButton";


const Welcome = ({auth,setValue,handleClick,value}) => {
  return (
    <>
      <View style={styles.mainTextContainer}>
        <Text style={styles.subtitle}>
          Hello {auth.user ? auth.user.firstName : ""}
        </Text>
        <Text style={styles.title}>Get things done, one task at a time</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.regularText}>
          Create a new list to worry about later
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            id='value'
            value={value}
            onChangeText={(e) => setValue(e)}
          ></TextInput>
          <IconButton
            iconUrl={images.addImg}
            dimension={40}
            handlePress={handleClick}
          ></IconButton>
        </View>

        <Text style={styles.importantText}>YOUR LISTS</Text>
      </View>
    </>
  );
};

export default Welcome;
