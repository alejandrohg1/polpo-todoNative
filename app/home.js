import { SafeAreaView, FlatList } from "react-native";
import { Stack, useRootNavigationState, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import List from "../components/home/List";
import images from "../constants/images";
import { styles } from "../styles/home/styles";
import IconButton from "../components/ui/IconButton";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { addNewList, getListByUserId } from "../actions/actionsList";
import Welcome from "../components/home/Welcome";
import useAuthStore from "../hooks/useAuthStore";
import { appSignOut } from "../actions/actionsAuth";
import Nothing from "../components/common/Nothing";






export default function Home() {

  const router = useRouter();
  const [value, setValue] = useState("");
  const [listData, setListData] = useState([])
  const [auth, setAuth] = useState({});
  const navigator = useRootNavigationState();
  const {user,setUser} = useAuthStore(s => s);

  const getData = useCallback( async () => {
    
    if(!auth.user) return;
    const data = await getListByUserId(auth.user?.userId,auth.accessToken);
    setListData(data);
   
  },[auth])

  const checkUser = useCallback( async () => {
    const payload = await AsyncStorage.getItem("payload");
    const jsonPayload = JSON.parse(payload) 
    
    if(!jsonPayload){
      router.replace("/auth/Login");
    }else{
      setAuth(jsonPayload);

    }
  },[auth])



  useEffect(() => {
   if(!navigator?.key) {
      return;
   }else{
   
    Promise.all([checkUser(),getData()]);
    
   }
    
  },[navigator?.key]);

  useEffect(() => {
    getData();
    setUser({isLoggedIn:true,payload:auth})
  }
  ,[auth])


  //handlers


  const handleClick = async () => {
    if(value == "") return;
    await addNewList({ title: value, keywords: [] },auth.accessToken);
    await getData();
    setValue("");
  }

  const signOut = async () => {
   await appSignOut(auth.accessToken);
   router.replace("/auth/Login");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => <IconButton iconUrl={images.profilePicture} dimension={45} />,
          headerRight: () => <IconButton iconUrl={images.signOut} dimension={35} handlePress={signOut}/>,

        }}
      />

      <Welcome auth={auth} handleClick={handleClick} setValue={setValue} value={value}/>
      {
        listData.length > 0 ?
        (<FlatList style={styles.listContainer} data={listData}
          renderItem={({ item }) => (<List id={item.id} key={item.id} name={item.title} keywords={item.keywords} handlePress={() => router.replace(`/list/${item.id}`)} ></List>)}
  
        />):
        (<Nothing/>)
      }
      

    </SafeAreaView>
  );
}
