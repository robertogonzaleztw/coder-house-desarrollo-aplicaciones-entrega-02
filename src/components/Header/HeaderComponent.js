import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderComponent = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aec39b',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
  },
  title: {
    fontSize: 30,
    color: 'white'
  }
})