import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../constants/styles";
import { FlatList } from "react-native"; // import from react-native instead of react-navigation
import Button from "../components/ui/Button";
import FlatButton from "../components/ui/FlatButton";
import { Pressable } from "react-native";
import Header from "../components/Details/header";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    price: "1000 fcfa en plus"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    price: "1000 fcfa en plus"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    price: "1000 fcfa en plus"
  }
];

const DestinationDetail = ({ navigation }) => {
  const navigationHook = useNavigation();

  const Item = ({ item }) => {
    return (
      <View style={styles.item}>
        <Feather name="plus" size={24} color={Colors.primary} />
        <Text style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.price}>
          {item.price}
        </Text>
      </View>
    );
  };

  return (
    <View style="container">
      <View style={styles.contain_img}>
        <Image
          source={require("../assets/images/services/pressing.png")}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%"
          }}
        />
        <Header navigation={navigation} />
      </View>
      <View style={styles.contain_text}>
        <Text style={styles.textTitle}>Lavage a sec</Text>

        <Text style={[styles.textBody, { textAlign: "left" }]}>
          Nous lavons vos vetement a sec , pour mieux evacuer la salete
        </Text>

        <Text style={styles.textSubtitle}>Plus de service sur votre linge</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => navigation.navigate({name : 'Bookmark'})}
      >
        <View>
          <Text style={styles.buttonText}>Ajouter au panier </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default DestinationDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },

  contain_img: {
    position: "relative",
    height: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  contain_text: {
    padding: 20,
    // flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20
  },
  textTitle: {
    fontSize: 30,
    color: Colors.black,
    fontWeight: "bold"
    // marginBottom: 10
  },
  textBody: {
    fontSize: 15,
    // marginTop: 15,

    color: Colors.gray,
    textAlign: "center",
    marginBottom: 15
  },
  textSubtitle: {
    fontSize: 18,
    color: Colors.black,
    textAlign: "center"
    // marginBottom: 10
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: Colors.secondary
  },
  flatList: {
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
    // backgroundColor: Colors.white,
    shadowColor: "#000",
    height: 90,
    width: "100%"
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary,
    marginHorizontal: 20,
    shadowRadius: 4,
    borderRadius: 6,
    marginTop: 15
  },
  pressed: {
    opacity: 0.7
  },
  buttonText: {
    textAlign: "center",
    color: Colors.white
  }
});
