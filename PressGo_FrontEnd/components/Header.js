import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Header = ({title, navigation}) => {
    return (
        <View style={styles.container}>
            <Pressable 
                onPress={() => navigation.navigate({name : 'Home'})}
            >

                <AntDesign name="arrowleft" 
                        size={24} 
                        color="black" 
                />

            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        paddingTop : 56,
        paddingBottom : 16,
        paddingHorizontal : 24,
        alignItems : 'flex-end',
        borderWidth : 0.5,
        borderColor : '#8E9090'
    },
    title : {
        fontSize : 16,
        fontWeight : 500,
        marginLeft : "30%"
    }
})

export default Header