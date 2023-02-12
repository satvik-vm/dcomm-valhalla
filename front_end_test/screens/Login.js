import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import axios from "axios";

// import Inputs from "../components/Inputs";
import Submit from "../components/Submit";

const Login = (props) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [userCredentials, setUserCredentials] = useState({
    account_number: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:5000/api/auth/login_function",
      userCredentials,
      config
    );

    console.log(res);
  };

  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/icon.png")}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Hello, User!</Text>
        <Text style={styles.textBody}>Do you have your id number?</Text>
        <View style={{ marginTop: 20 }} />
        <TextInput
          style={styles.input}
          placeholder="Enter Account Number"
          defaultValue={userCredentials.account_number}
          onChangeText={(value) => handleChange("account_number", value)}
        />
        {/* To be deleted later */}
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          defaultValue={userCredentials.password}
          onChangeText={(value) => handleChange("password", value)}
        />
      </View>
      <Submit title="LOG IN" color="#3F3D56" onPress={loginHandler} />
      <View
        style={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginVertical: 5,
        }}
      >
        <Text style={[styles.textBody]}>Don't have an account?</Text>
        <Text
          style={[styles.textBody, { color: "#3F3D56" }]}
          onPress={() => props.navigation.navigate("SignUp")}
        >
          Register
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: "90%",
    height: 50,
    borderRadius: 100,
    marginVertical: 10,
    borderWidth: 3.5,
    borderColor: "#3F3D56",
    borderWidth: 3,
  },

  image: {
    width: 400,
    height: 250,
    marginVertical: 30,
  },

  textTitle: {
    // fontFamily: "Montserrat-Light",
    fontSize: 40,
    marginVertical: 10,
  },

  textBody: {
    // fontFamily: "Montserrat-Light",
    fontSize: 20,
  },
});

export default Login;