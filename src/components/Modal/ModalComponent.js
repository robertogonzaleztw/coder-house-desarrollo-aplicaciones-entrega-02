import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalComponent = () => {
  return (
    <Modal
      animationType='fade'
      transparent
      visible={false}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modal}>

        </View>
      </View>

    </Modal>
  )
}

export default ModalComponent

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: '#eae9e3',
    // height: '50%',
    minHeight: 400,
    width: '80%',
    borderRadius: 10
  }
})