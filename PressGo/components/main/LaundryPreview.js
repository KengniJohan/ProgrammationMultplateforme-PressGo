import React from "react";
import {StyleSheet, View, Image} from 'react-native'

export default function LaundryPreview(){
    return (
        <View>
            <Image style={styles.myImages}
            />
        </View>
    )
}

const styles = StyleSheet.create({ 
    myImages : {
        marginRight : 12,
        width : 82,
        height : 116
    },
})
