import React from "react";
import {StyleSheet, View, Pressable, Image, Text} from 'react-native'

const LaundryPreview = ({imageSource, navigation}) => {
    return (
        <View>
            <Pressable style={styles.disposition} onPress={
                () => navigation.navigate({name : 'Bookmark'})
            }>
                <Image
                    source={imageSource}
                    style={styles.myImages}
                />
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

export default LaundryPreview