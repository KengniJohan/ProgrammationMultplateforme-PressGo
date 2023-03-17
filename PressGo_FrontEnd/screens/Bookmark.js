import React from "react";
import { StyleSheet, SectionList, View, Text, Pressable } from "react-native";
import { addedServices, deleveryInformation } from "../datas/datas";
import Header from "../components/Header";
import { AntDesign, MaterialIcons  } from '@expo/vector-icons';

const Bookmark = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title="Mon panier" navigation={navigation}/>
            <SectionList
                sections={[
                    {title :'Location informations', data : deleveryInformation},
                    {title : 'Service informations', data : addedServices}
                ]}
                renderItem={({item}) =>
                    <View style={styles.item}>

                        <View style={styles.itemContent}> 
                            <View style={{
                                backgroundColor : item.bgColor,
                                height : 32,
                                width : 32, 
                                justifyContent : 'center',
                                alignItems : 'center',
                                borderRadius : 32
                            }}>
                                <MaterialIcons 
                                    name={item.btnName}
                                    color={item.btnColor}
                                    size={24}
                                />
                            </View>
                            <View>
                                <Text style={{fontWeight : 'bold'}}>{item.title}</Text>
                                <Text style={{
                                    color : "#8E9090", 
                                    fontWeight : 'bold',
                                    width : 200
                                    }}
                                >{item.body}</Text>
                            </View>
                        </View>

                        <View>
                            <Pressable>
                                <AntDesign 
                                    name="delete" 
                                    size={24} 
                                    color="red"
                                />
                            </Pressable>
                        </View>
                    </View>
                }
                renderSectionHeader={({section}) =>
                    <Text
                        style={{
                            paddingTop : 24,
                            color : '#8E9090',
                            fontWeight : 'bold',
                            fontSize : 16
                        }}
                    >{section.title}</Text>
                }
                style={{
                    paddingHorizontal : 16
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container : {

    },
    item : {
        flexDirection : "row",
        paddingVertical : 16,
        paddingHorizontal : 16,
        borderBottomWidth : 1,
        borderBottomColor : '#D2D3D3',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    itemContent : {
        flexDirection : "row",
        gap : 8,
        alignItems : 'center'
    }
})

export default Bookmark