import { SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import uuid from 'react-native-uuid';
import HeaderComponent from '../../components/Header/HeaderComponent'
import InputComponent from '../../components/Input/InputComponent'
import ListComponent from '../../components/List/ListComponent'
import ModalComponent from '../../components/Modal/ModalComponent'

const TodoScreen = () => {
  const [list, setList] = useState([]);

  const onAddHandler = (toDo) => {
    const newToDo = {
      id: uuid.v4(),
      name: toDo,
      completed: false
    }
    setList(prevList => [...prevList, newToDo])
  }

  const onChangeStatusItemHandler = (id, completed) => {
    const item = list.find(item => item.id === id)
    if (item?.completed !== completed) {
      const newList = list.map(item => {
        if (item.id === id) item.completed = completed

        return item
      })

      setList(newList);
    }
  }

  const onDeleteItemHandler = (id) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderComponent title='ToDo App' />
        <View style={styles.bodyContainer}>
          <View style={styles.inputContainer}>
            <InputComponent onAdd={onAddHandler}/>
          </View>
          <View style={styles.listContainer}>
            <ListComponent list={list} onChangeStatusItem={onChangeStatusItemHandler} onDeleteItem={onDeleteItemHandler} />
          </View>
          <ModalComponent/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TodoScreen

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#aec39b',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#eae9e3'
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 20,
    width: '100%',
  },
  listContainer: {
    flex: 2,
    width: '100%'
  },
  inputContainer: {
    marginVertical: 30
  }
})