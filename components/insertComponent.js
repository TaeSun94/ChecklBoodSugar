import React, { useState } from "react";
import { SafeAreaView,Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {} from "react-native-elements";

const insertComponent = ({}) => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ backgroundColor: "#000" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default insertComponent;
