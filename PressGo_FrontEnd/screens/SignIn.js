import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import React from "react";
import { KeyboardAvoidingView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.topContainer}>
        <Image
          source={require("../assets/images/BgImg1.png")}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
      </View>
      <KeyboardAvoidingView styles={styles.contain_inputs}>
        <View style={styles.inputContainer}>
          <View style={styles.iconWrapper}>
            <MaterialIcons name="email" size={24} color="gray" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconWrapper}>
            <MaterialIcons name="email" size={24} color="gray" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.noAccount}>
          <Text style={styles.textOther}>Vous avez dejas un compte ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.Ins_text}>Se commecter</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <View style={styles.buttomContainer}>
        <TouchableOpacity style={[styles.button, styles.button_inscription]}>
          <Text style={[styles.buttonText]}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_login}>
          <Text style={[styles.buttonText, styles.text_login]}>
            Se connecter avec google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column"
  },
  topContainer: {
    width: "100%",
    height: "45%",
    backgroundColor: "#38B6FF",
    alignItems: "center",
    justifyContent: "center"
  },
  contain_inputs: {
    width: "80%",
    height: "40%",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    backgroundColor: "#3066BE"
  },
  buttomContainer: {
    width: "80%",
    height: "15%",
    // backgroundColor: "#cccc",
    justifyContent: "center",
    alignItems: "center"
  },
  button_inscription: {
    borderRadius: 10,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#3066BE",
    justifyContent: "center",
    alignItems: "center"
  },
  button_login: {
    marginTop: 10,
    borderRadius: 10,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#3066BE",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff"
  },
  text_login: {
    //    color: "#272727"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    width: "80%",
    backgroundColor: "#D9D9D9"
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "black"
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray"
  },
  textOther: {
    color: "#272727",
    fontSize: 13
  },
  noAccount: {
    flexDirection: "row",
    paddingLeft: 5
  },
  Ins_text: {
    marginLeft: 5,
    color: "#3066BE"
  }
});
