import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const name = "Raia"

const ExOneComponent = () => {
  return (
    <View>
      <Text style={styles.header}>Getting started with React native</Text>
      <Text style={styles.subHeader} > My name is {name}</Text>
    </View >
  )
}

const styles = {
  header: {
    fontSize: 45
  },
  subHeader: {
    fontSize: 20
  }
}

export default ExOneComponent