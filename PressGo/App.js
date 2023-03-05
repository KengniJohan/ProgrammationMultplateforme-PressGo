import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainPage from './Pages/MainPage';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainPage></MainPage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
