import React, { useState } from "react";
import { View, Text, Switch,TouchableOpacity } from "react-native";
import { styles } from "../../styles/listDetail/styles";
import IconButton from "../ui/IconButton";
import images from "../../constants/images";
import {  } from "react-native-web";

const Task = ({ listId,index, id, taskName, completed ,deleteTask,editTask,accessToken }) => {

  const [toggleCheckBox, setToggleCheckBox] = useState(completed);


  const editTaskHandler = () => {
    
    editTask(listId,id,{
      title: taskName,
      completed: !toggleCheckBox,
    })
    setToggleCheckBox(!toggleCheckBox);
    
  }

  const deleteTaskHandler = () => {
    deleteTask(listId,id);
  }

  return (
    <TouchableOpacity style={styles.taskContainer} onPress={editTaskHandler}>
      <View style={styles.taskTopContainer}>
        <Text style={styles.taskTitle}>{`Task #${index + 1}`}</Text>
        <IconButton iconUrl={images.cancel} dimension={30} handlePress={deleteTaskHandler}></IconButton>
      </View>
      <View style={styles.taskTextContainer}> 
        <Text style={styles.taskName(toggleCheckBox)}>{taskName}</Text>
        <View style={styles.iconContainer}>
        
          
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
