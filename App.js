import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Home from './src/pages/Home';

const THEME_COLOR = '#121015'

export default function App() {


  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        <StatusBar Style="light-content" backgroundColor={THEME_COLOR} />
        <Home />
      </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: THEME_COLOR
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: THEME_COLOR
  },

});