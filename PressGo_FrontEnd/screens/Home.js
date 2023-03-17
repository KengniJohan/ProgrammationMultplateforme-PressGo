import React from "react";
import { StyleSheet, View, ScrollView, Text, Image, Pressable } from "react-native";
import TopBar from "../components/TopBar";
import images from "../constants/images";
import LaundryPreview from "../components/LaundryPreview";
import ServicePreview from "../components/ServicePreview";


export default function Home({navigation}) {
  return (
    <View style={styles.mainPage}>
      <TopBar />
      <View style={styles.previewAreaL}>
        <Text style={styles.title}>Catégorie de vêtement</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.preview}
        >
          <LaundryPreview imageSource={images.laundryType1} navigation={navigation}/>
          <LaundryPreview imageSource={images.laundryType2} navigation={navigation}/>
          <LaundryPreview imageSource={images.laundryType3} navigation={navigation}/>
          <LaundryPreview imageSource={images.laundryType4} navigation={navigation}/>
          <LaundryPreview imageSource={images.laundryType1} navigation={navigation}/>
          <LaundryPreview imageSource={images.laundryType2} navigation={navigation}/>
        </ScrollView>
      </View>
      <View style={styles.previewAreaS}>
        <Text style={styles.title}>Nos services</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.preview}
        >
          <ServicePreview 
              imageSource={images.service1} 
              title="Lavage à sec" 
              description="service de lavage à sec sans mousse"
              navigation={navigation}
              style={styles.serviceSpec}
          />
          <ServicePreview 
              imageSource={images.service2} 
              title="Lavage à sec" 
              description="service de lavage à sec sans mousse"
              navigation={navigation}
              style={styles.serviceSpec}
          />
          <ServicePreview 
              imageSource={images.service1} 
              title="Lavage à sec" 
              description="service de lavage à sec sans mousse"
              navigation={navigation}
              style={styles.serviceSpec}
          />
          <ServicePreview 
              imageSource={images.service2} 
              title="Lavage à sec" 
              description="service de lavage à sec sans mousse"
              navigation={navigation}
              style={styles.serviceSpec}
          />
          <ServicePreview 
              imageSource={images.service1} 
              title="Lavage à sec" 
              description="service de lavage à sec sans mousse"
              navigation={navigation}
              style={styles.serviceSpec}
          />
          <ServicePreview 
              imageSource={images.service2} 
              title="Lavage à sec" 
              description="service de lavage à sec sans mousse"
              navigation={navigation}
              style={styles.serviceSpec}
          />
          <ServicePreview 
              imageSource={images.service1} 
              title="Lavage à sec" 
              description="service de lavage à sec sans mousse"
              navigation={navigation}
              style={styles.serviceSpec}
          />
        </ScrollView>
      </View>
      <View style={styles.previewAreaP}>
        <Text style={styles.title}>Les pressing près de chez vous</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.preview}
        >
          <Image
            source={require("../assets/images/services/pressing.png")}
            style={styles.myPressing}
          />
          <Image
            source={require("../assets/images/services/pressing.png")}
            style={styles.myPressing}
          />
          <Image
            source={require("../assets/images/services/pressing.png")}
            style={styles.myPressing}
          />
          <Image
            source={require("../assets/images/services/pressing.png")}
            style={styles.myPressing}
          />
          <Image
            source={require("../assets/images/services/pressing.png")}
            style={styles.myPressing}
          />
          <Image
            source={require("../assets/images/services/pressing.png")}
            style={styles.myPressing}
          />
          <Image
            source={require("../assets/images/services/pressing.png")}
            style={styles.myPressing}
          />
          <Image
            source={require("../assets/images/services/pressing.png")}
            style={styles.myPressing}
          />
          <Image
            source={require("../assets/images/services/pressing.png")}
            style={styles.myPressing}
          />
          <Image
            source={require("../assets/images/services/pressing.png")}
            style={styles.myPressing}
          />
          <Image
            source={require("../assets/images/services/pressing.png")}
            style={styles.myPressing}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainPage: {},
  previewAreaL: {
    justifyContent: "space-between",
    marginLeft: 16
  },
  title: {
    paddingVertical: 16,
    fontWeight: "bold",
    fontSize: 16
  },
  previewAreaS: {
    paddingTop: 32,
    marginLeft: 16
  },
  previewAreaP: {
    marginLeft: 16,
    marginTop: 24
  },
  myPressing: {
    height: 50,
    width: 65,
    marginRight: 12,
    borderRadius: 30
  }
});
