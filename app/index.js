import { useRootNavigationState, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {

  const router = useRouter();
  const navigationState = useRootNavigationState();


  const getData = async () => {
     
    const payload = await AsyncStorage.getItem("payload");
    const jsonPayload = JSON.parse(payload) 
  
    if (!jsonPayload ) {
      // Redirect to the login page.
      router.replace("/auth/Login");
    }else {
      router.replace("/home");
    }

  }

  useEffect(() => {
 
    if (!navigationState?.key) return;
   
    getData();

  },[navigationState?.key]);

  return <View>{!navigationState?.key ? <Text>LOADING...</Text> : <></>}</View>;
};
export default Index;