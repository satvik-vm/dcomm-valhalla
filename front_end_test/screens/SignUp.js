import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
} from "react-native";

import axios from "axios";

// import Input from "../components/Inputs";
import Submit from "../components/Submit";

import { logger } from "react-native-logs";

var log = logger.createLogger();

const SignUp = (props) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [userCredentials, setUserCredentials] = useState({
    // account_number: "",
    _name: "",
    phone_number: "",
    password: "",
    pincode: "",
    dob: "",
  });

  const handleChange = (name, value) => {
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    // if (userCredentials.password !== userCredentials.confirmPassword) {
    //   setUserCredentials({
    //     ...userCredentials,
    //     password: "",
    //     confirmPassword: "",
    //   });
    //   setTimeout(() => {
    //     setError("");
    //   }, 5000);
    //   return setError("Passwords do not match");
    // }

    console.log(userCredentials);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup_function",
        userCredentials,
        config
      );
      console.log(res);
      setMessage(
        <Text style={styles.onButtonClick}>User Created Successfully!</Text>
      );
      setError("");
    } catch (error) {
      setMessage(
        <Text style={styles.onButtonClick2}>
          User Not Created Successfully.
        </Text>
      );
      console.log({ error });
      // setError(error.response.data.error.message);
    }
  };

  return (
    <ScrollView style={styles.outerContainer}>
      <View style={styles.container}>
        {error ? <Text className="error-message">{error}</Text> : null}
        {message ? <Text style={styles.textTitle}>{message}</Text> : null}
        <Image
          source={require("../assets/adaptive-icon.png")}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Ready to get started?</Text>
        <Text style={styles.textBody}>Setup your account.</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          defaultValue={userCredentials._name}
          onChangeText={(value) => handleChange("_name", value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          defaultValue={userCredentials.phone_number}
          onChangeText={(value) => handleChange("phone_number", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth (YYYY-MM-DD)"
          defaultValue={userCredentials.dob}
          onChangeText={(value) => handleChange("dob", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pincode"
          defaultValue={userCredentials.pincode}
          onChangeText={(value) => handleChange("pincode", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          defaultValue={userCredentials.password}
          onChangeText={(value) => handleChange("password", value)}
        />
        <Submit
          color="#3F3D56"
          title="ENTER"
          onPress={registerHandler}
        ></Submit>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text style={styles.textBody}>Already have an account?</Text>
          <Text
            style={[styles.textBody, { color: "#3F3D56" }]}
            onPress={() => props.navigation.navigate("Login")}
          >
            Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "white",
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

  container: {
    flex: 1,
    alignItems: "center",
  },

  image: {
    width: 400,
    height: 250,
    marginVertical: 10,
  },

  textTitle: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold",
    // fontFamily: "Montserrat-ExtraLight",
    marginVertical: 6,
  },

  textBody: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 20,
    // fontFamily: "Montserrat-ExtraLight",
    marginVertical: 6,
  },

  onButtonClick: {
    color: "green",
    fontSize: 15,
    position: "absolute",
    bottom: 4,
  },

  onButtonClick2: {
    color: "red",
    fontSize: 15,
    position: "absolute",
    bottom: 4,
  },
});

export default SignUp;