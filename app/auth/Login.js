import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import images from "../../constants/images";
import { commonStyles } from "../../styles/common/styles";
import { styles } from "../../styles/login/styles";
import { Controller,useForm } from "react-hook-form";
import { useState } from "react";
import useAuthStore from "../../hooks/useAuthStore";
import { appSignIn } from "../../actions/actionsAuth";




const Login = () => {
  const router = useRouter();
  const {setUser} = useAuthStore((state) => state);
  const [loginError, setErrors] = useState({
    status:false,
    message:""
  });
  

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async(data) => {
    
    const response = await appSignIn(data);
    setUser(response);
    if(response.status){
      setErrors({message:response.message,status:true});
    }

    setErrors({message:"",status:false});
    router.push("/home");
    
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerShown: false,
        }}
      />

      <View style={styles.imgContainer}>
        <Image source={images.logo} style={styles.logoImage}></Image>
      </View>

      <View style={styles.formContainer}>
     
        <View>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        { loginError.status && <Text style ={{color:"#FF0000",marginTop:20}}>Crendiatls Invalid.</Text>}
        <View style={{ marginTop: 30, gap: 25 }}>
          <View>
            <Text style={commonStyles.inputLabel}>Email</Text>

            <Controller
              control={control}
              name='email'
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={commonStyles.textInput}
                  placeholder='example@mail.com'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>

          {errors.email && <Text style={{color:"#FF0000"}}>This is required.</Text>}

          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Text style={commonStyles.inputLabel}>Password</Text>
            <Controller
              control={control}
              name='password'
              rules={{
                required: true,
                minLength: 1,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={commonStyles.textInput}
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </View>
          {errors.password && <Text style={{color:"#FF0000"}}>This is required.</Text>}

          <TouchableOpacity
            style={commonStyles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={commonStyles.textButton}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.registerText}>
            Don't have an account?{" "}
            <Link href='auth/Register' style={styles.signUpText}>
              Sign Up
            </Link>
          </Text>
        </View>

      </View>
      
    </SafeAreaView>
  );
};

export default Login;
