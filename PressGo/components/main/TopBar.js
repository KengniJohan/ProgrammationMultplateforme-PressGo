import React from 'react'
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native'
import { Feather } from '@expo/vector-icons';

export default function TopBar(){
    return(
        <View style={styles.header}>
            <View>
                <TouchableOpacity style={styles.logoPlace}>
                    <Image source={
                        require("../../assets/images/logo/pressGo.png")
                    }/>
                    <View style={styles.logoTitle}>
                        <Text style={styles.firstSyll}>Press</Text>
                        <Text style={styles.secondSyll}>Go</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.loginBtnPlace}>
                <TouchableOpacity style={styles.loginBtn}>
                <Feather name="user" size={16} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        paddingHorizontal : 24,
        marginTop : 48
    },
    logoPlace : {
        flexDirection: 'row',
        alignItems : 'center'
    },
    logoTitle : {
        flexDirection : 'row',
    },
    firstSyll : {
        fontSize : 16,
        fontWeight : 'bold',
        color : '#81B5E9'
    },
    secondSyll : {
        fontSize : 16,
        fontWeight : 'bold',
        color : 'blue'
    },
    loginBtnPlace : {
        justifyContent : 'flex-end',
    },
    loginBtn : {
        backgroundColor : '#D2D3D3',
        padding : 8,
        borderRadius : 16
    }
})