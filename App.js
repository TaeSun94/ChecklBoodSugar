import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable,Modal } from "react-native";
import { Button, Divider } from "react-native-elements";
import { Input } from "react-native-elements/dist/input/Input";
import { LineChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import insertComponent from "./components/insertComponent";

export default function App() {
  const [graph, setGraph] = React.useState(false);
  const [insert, setInsert] = React.useState(false);
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  const day = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const axesSvg = { fontSize: 10, fill: "grey" };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 30;
  return (
    <SafeAreaView
      style={insert ? { flex: 1, backgroundColor:'#0009',paddingHorizontal: 14}:{ flex: 1, paddingHorizontal: 14 }}
    >
      <View style={{ top: 40, height: 40, justifyContent: "center" }}>
        <Text
          style={{ fontSize: 28, fontWeight: "bold", textAlign: "justify" }}
        >
          Check Health
        </Text>
      </View>
      <View style={{ top: 40, height: 400, padding: 20, flexDirection: "row" }}>
        <YAxis
          data={graph ? data : day}
          style={{ marginBottom: xAxisHeight }}
          contentInset={verticalContentInset}
          svg={axesSvg}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={data}
            contentInset={verticalContentInset}
            svg={{ stroke: "rgb(134, 65, 244)" }}
          >
            <Grid />
          </LineChart>
          <XAxis
            style={{ marginHorizontal: -10, height: xAxisHeight }}
            data={data}
            formatLabel={(value, index) => day[index]}
            contentInset={{ left: 10, right: 10 }}
            svg={axesSvg}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Button
          title="혈당"
          containerStyle={{ width: 100, height: 40 }}
          buttonStyle={!insert?{ backgroundColor: "#fff" }:{backgroundColor: "#fff0" }}
          titleStyle={{ color: "#000", fontSize: 18 }}
          onPress={() => {
            setGraph(false);
          }}
          activeOpacity={0.8}
        />
        <Button
          title="혈압"
          containerStyle={{ width: 100, height: 40 }}
          buttonStyle={!insert?{ backgroundColor: "#fff" }:{backgroundColor: "#fff0" }}
          titleStyle={{ color: "#000", fontSize: 18 }}
          onPress={() => {
            setGraph(true);
          }}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={insert}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setInsert(!insert);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width: 300}}>
              <Input label={"혈당"} title={"혈당"} titleStyle={styles.modalText} keyboardType={'decimal-pad'}/>
              <Input label={"혈압"} title={"혈압"} titleStyle={styles.modalText} keyboardType={'decimal-pad'}/>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setInsert(!insert)}
            >
              <Text style={styles.textStyle}>등록 하기</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{ bottom: 24 }}>
        <Button
          title={"혈당 또는 혈압 입력"}
          containerStyle={{ borderRadius: 10, borderWidth: 3 }}
          buttonStyle={!insert?{ backgroundColor: "#fff" }:{backgroundColor: "#fff0" }}
          titleStyle={{ color: "#000", fontSize: 18 }}
          onPress={() => {
            setInsert(!insert);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
