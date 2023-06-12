import AsyncStorage from "@react-native-async-storage/async-storage";


export const appSignIn = async (data) => {

  
  try {
    const response = await fetch("https://api-todos-prueba.onrender.com/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json();
    if (!response.ok) {
      return {success:false}
    }
    await setUser(result);
    return result;
    
    
  } catch (error) {
    console.log(error);
    return null;
  }
}


export const getUserData = async () => {
  try {
    const payload = await AsyncStorage.getItem("payload");
    const jsonPayload = JSON.parse(payload) 
    return jsonPayload;

  } catch (error) {
    console.log(error);
  }
}


const setUser = async (data) => {
  try {
    await AsyncStorage.setItem("payload", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

export const appSignOut = async (key) => {
  try {
    const response = await fetch("https://api-todos-prueba.onrender.com/api/v1/auth/logout", {
      method: "PATCH",
      headers: {
        "authorization": key,
      }
    })
    await AsyncStorage.removeItem("payload");
    return response;
  } catch (error) {
    console.log(error);
  }
}


export const registerUser = async (data) => {
  try{
    const response = await fetch("https://api-todos-prueba.onrender.com/api/v1/users/register", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    const result = await response.json();
    if (!response.ok) {
      return (result)
    }
    return result;
  }catch(error){
    console.log(error);
  }
}