import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemComponent from '../Item/ItemComponent'

const ListComponent = ({ list, onChangeStatusItem, onDeleteItem }) => {
  return (
    <View style={styles.container}>
      <FlatList data={list} renderItem={({item}) => <ItemComponent name={item.name} id={item.id} onChangeStatus={onChangeStatusItem} onDelete={onDeleteItem} />} keyExtractor={item => item.id}/>
    </View>
  )
}

export default ListComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
})