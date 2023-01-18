import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const ItemComponent = ({ id, name, onDelete, onChangeStatus }) => {

  return (
    <View style={styles.container}>
      <BouncyCheckbox style={styles.checkbox} fillColor='#4d6846' text={name} onPress={(isChecked) => onChangeStatus(id, isChecked)} />
      <TouchableOpacity onPress={() => onDelete(id)}>
        <View style={styles.delete}>
          <Text style={styles.deleteText}>X</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ItemComponent

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#aec39b',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    flex: 1,
    height: '100%'
  },
  delete: {
    backgroundColor: '#b43b3a',
    padding: 10,
    borderRadius: 10,
  },
  deleteText: {
    color: 'white'
  }
})