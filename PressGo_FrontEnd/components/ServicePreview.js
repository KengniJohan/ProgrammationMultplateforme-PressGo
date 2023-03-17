import React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";

const ServicePreview = ({imageSource, title, description, navigation}) => {
    return(
        <View style={styles.serviceSpec}>
            <Pressable 
                onPress={
                    () => navigation.navigate({name : 'DestinationDetail'})
                }
            >
                <Image
                    source={imageSource}
                    style={styles.myServices}
                />
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.nameSpec}>{description}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    
    serviceSpec: {
        height: 230,
        width: 225,
        marginRight: 16,
        justifyContent: "space-between"
    },
    name: {
      fontSize: 16,
      fontWeight: "bold"
    },
    nameSpec: {
      fontSize: 12,
      color: "#8E9090",
      width: 150
    },
    myServices: {
      height: 167,
      width: 207
    }
})

export default ServicePreview