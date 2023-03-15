import React from "react";
import {StyleSheet, View, Pressable, Image, Text} from 'react-native'

const LaundryPreview = ({imageSource, texte}) => {
    return (
        <View>
            <Pressable style={styles.disposition}>
                <Image
                    source={imageSource}
                    style={styles.myImages}
                />
                <Text>{texte}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    disposition : {
        flexDirection : 'column',
    },
    myImages: {
        marginRight: 12,
        width: 82,
        height: 116
    }
})