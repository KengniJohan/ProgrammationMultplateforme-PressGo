import React from "react";
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import TopBar from "../components/main/TopBar";

export default function MainPage(){
    return (
        <View style={styles.mainPage}>
            <TopBar/>
            <View style={styles.previewAreaL}>
                <Text style={styles.title}>Catégorie de vêtement</Text>
                <ScrollView showsHorizontalScrollIndicator={false}
                horizontal={true} style={styles.preview}>
                    <Image source={
                        require('../assets/images/linges/linge1.png')
                    } style={styles.myImages}/>
                    <Image source={
                        require('../assets/images/linges/linge2.png')
                    } style={styles.myImages}/>
                    <Image source={
                        require('../assets/images/linges/linge3.png')
                    } style={styles.myImages}/>
                    <Image source={
                        require('../assets/images/linges/linge4.png')
                    } style={styles.myImages}/>
                    <Image source={
                        require('../assets/images/linges/linge1.png')
                    } style={styles.myImages}/>
                </ScrollView>
            </View>
            <View style={styles.previewAreaS}>
                <Text style={styles.title}>Nos services</Text>
                <ScrollView showsHorizontalScrollIndicator={false}
                horizontal={true} style={styles.preview}>
                    <View style={styles.serviceSpec}>
                        <Image source={
                            require('../assets/images/services/nettoyageSec.jpg')
                        } style={styles.myServices}/>
                        <Text style={styles.name}>Lavage à sec</Text>
                        <Text style={styles.nameSpec}>service de lavage à sec sans mousse</Text>
                    </View>
                    <View style={styles.serviceSpec}>
                        <Image source={
                            require('../assets/images/services/nettoyageSec.jpg')
                        } style={styles.myServices}/>
                        <Text style={styles.name}>Lavage à sec</Text>
                        <Text style={styles.nameSpec}>service de lavage à sec sans mousse</Text>
                    </View>
                    <View style={styles.serviceSpec}>
                        <Image source={
                            require('../assets/images/services/nettoyageSec.jpg')
                        } style={styles.myImages}/>
                        <Text style={styles.name}>Lavage à sec</Text>
                        <Text style={styles.nameSpec}>service de lavage à sec sans mousse</Text>
                    </View>
                    <View style={styles.serviceSpec}>
                        <Image source={
                            require('../assets/images/services/nettoyageSec.jpg')
                        } style={styles.myServices}/>
                        <Text style={styles.name}>Lavage à sec</Text>
                        <Text style={styles.nameSpec}>service de lavage à sec sans mousse</Text>
                    </View>
                    <View style={styles.serviceSpec}>
                        <Image source={
                            require('../assets/images/services/nettoyageSec.jpg')
                        } style={styles.myServices}/>
                        <Text style={styles.name}>Lavage à sec</Text>
                        <Text style={styles.nameSpec}>service de lavage à sec sans mousse</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainPage : {
    },
    previewAreaL : { 
        justifyContent : 'space-between',
        marginLeft : 16,
    },
    myImages : {
        marginRight : 12,
        width : 82,
        height : 116
    },
    title : {
        paddingVertical : 16,
        fontWeight : 'bold',
        fontSize :16
    },
    previewAreaS : {
        paddingVertical : 32,
        marginLeft : 16
    },
    serviceSpec : {
        height : 251
    },
    myServices : {
        height : 167,
        width : 207
    }
})