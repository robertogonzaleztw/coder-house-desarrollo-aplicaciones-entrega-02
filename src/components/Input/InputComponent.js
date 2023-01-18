import { Button, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const InputComponent = ({ buttonTitle = 'Add', onAdd }) => {
  const [value, setValue] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const Button = Platform.OS === 'android' ? Pressable : TouchableOpacity;

  useEffect(() => {
    const disabled = value.trim().length === 0
    setButtonDisabled(disabled);
  }, [value])

  const onPressHandler = () => {
    Keyboard.dismiss()
    setValue('')
    onAdd(value)
  }

  return (
    <View style={styles.container} >
      <TextInput style={styles.textInput} value={value} onChangeText={setValue} />
      <Button disabled={buttonDisabled} style={buttonDisabled ? ([styles.button, styles.buttonDisabled]) : (styles.button)} onPress={onPressHandler} >
        <Text>{buttonTitle}</Text>
      </Button>
    </View>
  )
}

export default InputComponent

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    borderColor: '#aec39b',
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#aec39b',
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: '#cfcaca'
  }
})