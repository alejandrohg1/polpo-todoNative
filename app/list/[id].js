import React, { useCallback, useEffect, useState } from "react";
import { View, } from "react-native";
import { Stack,  useRootNavigationState, useRouter, useSearchParams } from "expo-router";
import { styles } from "../../styles/listDetail/styles";
import IconButton from "../../components/ui/IconButton";
import images from "../../constants/images";
import TagsInput from "../../components/listDetail/TagsInput";
import ModalTags from "../../components/listDetail/ModalTags";
import {
  arrayFromKeywordString
} from "../../utils/utils";
import HearderList from "../../components/listDetail/HearderList";
import TaskSection from "../../components/listDetail/TaskSection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteListById, editListById, getListById } from "../../actions/actionsList";
import { getTaskByListId } from "../../actions/actionsTask";

const ListDetails = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [value, setValue] = useState({});
  const [tasksValue, setTasksValue] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [auth, setAuth] = useState({});
  const navigator = useRootNavigationState();

  const checkUser = useCallback(async () => {
    const payload = await AsyncStorage.getItem("payload");
    const jsonPayload = JSON.parse(payload);

    if (!jsonPayload) {
      router.replace("/auth/Login");
    } else {
      setAuth(jsonPayload);
    }
  }, [auth]);

  const fetchData = useCallback( async () => {
   
    if (!params.id && !auth.accessToken) {
      setValue({ title: "", keywords: [] });
    } else {
      const list = await getListById(params.id, auth?.accessToken);
      setValue({
        title: list.title,
        keywords: arrayFromKeywordString(list.keywords),
      });
    }
  });

  const fetchTaskData = useCallback( async () => {
    
    if (!params.id && !auth.accessToken) {
      setTasksValue([]);
    } else {
      const task = await getTaskByListId(params.id, auth?.accessToken);
      setTasksValue(task);
    }
  });

  useEffect(() => {
    if(!navigator?.key){
      return
    }else{
      Promise.allSettled([checkUser(), fetchTaskData(),fetchData()]);
    }
    
  }, [params.id,navigator?.key]);

  useEffect(() => {
    checkUser();
  },[navigator?.key])


 
  

  const handleEdit = async () => {
    await editListById(params.id, {
      title: value.title,
      keywords: value.keywords,
    },auth.accessToken);
  };

  const handleChange = (newValue) => {
    setValue({ ...value, title: newValue });
  };

  const handleDelete = async () => {
    await deleteListById(params.id,auth.accessToken);
    router.replace("/home");
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: value.title || "",
          headerLeft: () => (
            <IconButton
              iconUrl={images.home}
              dimension={30}
              handlePress={() => router.replace("/home")}
            />
          ),
        }}
      />

      <HearderList
        handleChange={handleChange}
        handleEdit={handleEdit}
        value={value}
        handleDelete={handleDelete}
      ></HearderList>

      {/*Tags Section*/}

      <View style={styles.tagsContainer}>
        {value.keywords
          ? value.keywords.map((item, index) => (
              <TagsInput
                key={index}
                keyword={item}
                value={value}
                setValue={setValue}
                idList={params.id}
                accessToken={auth.accessToken}
              />
            ))
          : []}

        <IconButton
          iconUrl={images.addImg}
          dimension={30}
          handlePress={() => setModalVisible(true)}
        ></IconButton>
      </View>



      {/*Task Section*/}
      <TaskSection
        refresh={fetchTaskData}
        tasksValue={tasksValue}
        listId={params.id}
        accessToken={auth.accessToken}
        
      />

      <ModalTags
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleEdit={handleEdit}
        value={value}
        setValue={setValue}
        id={params.id}
        accessToken={auth.accessToken}
      />


    </View>
  );
};

export default ListDetails;
