import React, { useCallback, useEffect, useState } from 'react'
import { styles } from '../../styles/listDetail/styles'
import images from '../../constants/images'
import IconButton from '../ui/IconButton'
import { TextInput, View } from 'react-native'
import { FlatList } from 'react-native-web'
import Task from './Task'
import { addNewTaskByListId, deleteTaskById, editTaskById } from '../../actions/actionsTask'
import Nothing from '../common/Nothing'




const TaskSection = ({tasksValue,refresh,listId,accessToken}) => { 
  
  const [textValue, setTextValue] = useState("");
  
  const handleAddTask = async () => {
    if(textValue === "") return;
    await addNewTaskByListId(listId, { title: textValue, completed: false },accessToken);
    refresh();
    setTextValue("");
  };

  const handleDeteleTask = async (listId, taskId) => {
    await deleteTaskById(listId, taskId,accessToken);
    refresh();
  };

  const handleEditTask = async (listId, taskId, newValue) => {
    await editTaskById(listId, taskId, newValue,accessToken);
    refresh();
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Add a new task'
          onChangeText={(newValue) => setTextValue(newValue)}
        ></TextInput>
        <IconButton
          iconUrl={images.addImg}
          dimension={40}
          handlePress={handleAddTask}
        ></IconButton>
      </View>

      {
        tasksValue.length > 0 ? (
          <FlatList
          data={tasksValue}
          renderItem={({ item, index }) => (
            <Task
              listId={listId}
              index={index}
              id={item.id}
              taskName={item.title}
              completed={item.completed}
              deleteTask={handleDeteleTask}
              editTask={handleEditTask}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 10, padding: 10 }}
        />
        ):
        (
          <Nothing/>
        )
      }
      
    </>
  )
}

export default TaskSection