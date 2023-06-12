import { View, Text, SafeAreaView, TextInput } from "react-native";
import { Stack, useRouter } from "expo-router";
import { styles } from "../../styles/register/styles";
import { commonStyles } from "../../styles/common/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";

import { useState } from "react";
import { registerUser } from "../../actions/actionsAuth";

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = async(data) => {
   const response = await registerUser(data);
   if(response.status){
    setError({message:response.message,status:true});
  }
    setError({message:response.message,status:false});
    router.replace("/auth/Login")
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

      <View style={styles.mainTextContainer}>
        <Text style={styles.title}> Register</Text>
        <Text style={styles.subtitle}>Create your account</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={{ justifyContent: "space-around", flex: 0.9 }}>
          <View>
            <Text style={commonStyles.inputLabel}>FirstName</Text>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={commonStyles.textInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name='firstName'
            />
            {errors.firstName && (
              <Text style={{ color: "#FF0000" }}>This is required.</Text>
            )}
          </View>

          <View>
            <Text style={commonStyles.inputLabel}>LastName</Text>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={commonStyles.textInput}
                />
              )}
              name='lastName'
            />
            {errors.lastName && (
              <Text style={{ color: "#FF0000" }}>This is required.</Text>
            )}
          </View>

          <View>
            <Text style={commonStyles.inputLabel}>Email</Text>
            <Controller
              control={control}
              rules={{
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={commonStyles.textInput}
                />
              )}
              name='email'
            />
            {errors.email && (
              <Text style={{ color: "#FF0000" }}>This is required.</Text>
            )}
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={commonStyles.inputLabel}>Password</Text>
            <Controller
              control={control}
              rules={{ required: true ,minLength: 5}}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={commonStyles.textInput}
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name='password'
            />
            {errors.password && (
              <Text style={{ color: "#FF0000" }}>This is required.</Text>
            )}
          </View>

          <TouchableOpacity
            style={commonStyles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={commonStyles.textButton}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
            style={{textAlign:"center"}}
            onPress={()=>router.replace("/auth/Login")}
          >
            <Text style={commonStyles.inputLabel}>Go back</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
